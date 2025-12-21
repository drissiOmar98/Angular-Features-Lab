import {ChangeDetectionStrategy, Component, DestroyRef, effect, inject, resource, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {interval, map, Subscription} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';

interface CounterData {
  count: number;
  timestamp: number;
}

@Component({
  selector: 'app-resource-api-example4',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatTab,
    MatTabGroup,
    RouterLink
  ],
  templateUrl: './resource-api-example4.html',
  styleUrl: './resource-api-example4.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceApiExample4 {
  private destroyRef = inject(DestroyRef);
  isActive = signal(false);
  startCount = signal(0);

  // Signal to hold current counter value
  counterValue = signal<CounterData>({count: 0, timestamp: Date.now()});

  // Ticker signal to trigger resource reloads
  private ticker = signal(0);

  // Store subscription for cleanup
  private subscription: Subscription | null = null;

  // Effect to subscribe to interval and update counter
  // Note: Effects run automatically when created - no need to call them explicitly
  private readonly counterEffect = effect(() => {
    const active = this.isActive();
    const start = this.startCount();

    // Clean up previous subscription if it exists
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }

    if (active) {
      // Subscribe to interval and update both counter and ticker
      this.subscription = interval(1000).pipe(
        map(count => ({
          count: start + count + 1,
          timestamp: Date.now()
        })),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(value => {
        this.counterValue.set(value);
        this.ticker.update(t => t + 1); // Trigger resource reload
      });
    } else {
      this.counterValue.set({count: 0, timestamp: Date.now()});
      this.ticker.set(0);
    }
  });

  // Resource that reads from the counter signal
  // Params depend on ticker to trigger reloads when counter updates
  counterResource = resource<CounterData, number>({
    params: () => this.ticker(),
    loader: async () => {
      return this.counterValue();
    }
  });

  resetCounter(): void {
    this.isActive.set(false);
    this.startCount.set(0);
    setTimeout(() => {
      this.isActive.set(true);
    }, 100);
  }

  formatTimestamp(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString();
  }

  codeExample = `// Using resource() with RxJS observables
// Observable updates a signal, resource reads from it

isActive = signal(false);
startCount = signal(0);
counterValue = signal({ count: 0, timestamp: Date.now() });
private ticker = signal(0);
private subscription: Subscription | null = null;

// Effect subscribes to interval with proper cleanup
private counterEffect = effect(() => {
  const active = this.isActive();
  const start = this.startCount();

  // Clean up previous subscription
  if (this.subscription) {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  if (active) {
    this.subscription = interval(1000).pipe(
      map(count => ({
        count: start + count + 1,
        timestamp: Date.now()
      })),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(value => {
      this.counterValue.set(value);
      this.ticker.update(t => t + 1); // Trigger reload
    });
  } else {
    this.counterValue.set({ count: 0, timestamp: Date.now() });
    this.ticker.set(0);
  }
});

// Resource reloads when ticker changes
counterResource = resource({
  params: () => this.ticker(),
  loader: async () => this.counterValue()
});`;

}
