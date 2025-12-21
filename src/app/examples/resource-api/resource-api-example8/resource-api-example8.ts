import {ChangeDetectionStrategy, Component, DestroyRef, inject, resource, signal} from '@angular/core';
import {catchError, EMPTY, finalize, fromEvent, map, merge, Observable, of, startWith, takeUntil} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';


interface CryptoPrice {
  bitcoin?: string;
  ethereum?: string;
  timestamp: number;
}

@Component({
  selector: 'app-resource-api-example8',
  imports: [
    MatButton,
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    MatTab,
    MatTabGroup,
    RouterLink
  ],
  templateUrl: './resource-api-example8.html',
  styleUrl: './resource-api-example8.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceApiExample8 {
   private destroyRef = inject(DestroyRef);
  isActive = signal(false);

  // Create WebSocket observable using CoinCap API
  // CoinCap provides free real-time cryptocurrency prices via WebSocket
  private createWebSocketObservable(): Observable<CryptoPrice> {
    if (!this.isActive()) {
      return of({ timestamp: Date.now() });
    }

    // Connect to CoinCap WebSocket API
    // This provides real-time Bitcoin and Ethereum prices
    const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

    return merge(
      // Handle incoming messages
      fromEvent<MessageEvent>(ws, 'message').pipe(
        map(event => {
          try {
            const data = JSON.parse(event.data);
            return {
              bitcoin: data.bitcoin,
              ethereum: data.ethereum,
              timestamp: Date.now()
            } as CryptoPrice;
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
            return { timestamp: Date.now() };
          }
        })
      ),
      // Handle connection open
      fromEvent<Event>(ws, 'open').pipe(
        map(() => ({ timestamp: Date.now() }))
      )
    ).pipe(
      startWith({ timestamp: Date.now() }),
      takeUntilDestroyed(this.destroyRef),
      catchError(error => {
        console.error('WebSocket error:', error);
        ws.close();
        return EMPTY;
      }),
      finalize(() => {
        if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
          ws.close();
        }
      })
    );
  }

  // Using resource with stream option for WebSocket
  cryptoResource = resource<CryptoPrice, boolean>({
    params: () => this.isActive(),
    stream: async ({ params, abortSignal }) => {
      if (!params) {
        // Return a signal with initial value when not active
        const initialSignal = signal<{ value: CryptoPrice }>({
          value: { timestamp: Date.now() }
        });
        return initialSignal;
      }

      // Create signal that will be updated by WebSocket observable
      const dataSignal = signal<{ value: CryptoPrice }>({
        value: { timestamp: Date.now() }
      });

      // Subscribe to WebSocket and update signal
      const subscription = this.createWebSocketObservable().pipe(
        takeUntil(fromEvent(abortSignal, 'abort'))
      ).subscribe({
        next: value => {
          dataSignal.set({ value });
        },
        error: error => {
          console.error('WebSocket subscription error:', error);
        },
        complete: () => {
          console.log('WebSocket connection closed');
        }
      });

      // Cleanup on abort
      abortSignal.addEventListener('abort', () => {
        subscription.unsubscribe();
      });

      return dataSignal;
    }
  });

  formatPrice(price: string | undefined): string {
    if (!price) return 'N/A';
    const numPrice = parseFloat(price);
    return numPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  formatTimestamp(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString();
  }

  codeExample = `// Using resource() with WebSocket via stream option
// Real WebSocket API: CoinCap (wss://ws.coincap.io/prices)

isActive = signal(false);

// Create WebSocket observable using CoinCap API
private createWebSocketObservable(): Observable<CryptoPrice> {
  if (!this.isActive()) {
    return of({ timestamp: Date.now() });
  }

  // Connect to CoinCap WebSocket API
  const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

  return merge(
    // Handle incoming messages
    fromEvent<MessageEvent>(ws, 'message').pipe(
      map(event => {
        const data = JSON.parse(event.data);
        return {
          bitcoin: data.bitcoin,
          ethereum: data.ethereum,
          timestamp: Date.now()
        } as CryptoPrice;
      })
    ),
    // Handle connection open
    fromEvent<Event>(ws, 'open').pipe(
      map(() => ({ timestamp: Date.now() }))
    )
  ).pipe(
    startWith({ timestamp: Date.now() }),
    takeUntilDestroyed(this.destroyRef),
    catchError(error => {
      console.error('WebSocket error:', error);
      ws.close();
      return EMPTY;
    }),
    finalize(() => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    })
  );
}

// Resource with stream for WebSocket
cryptoResource = resource({
  params: () => this.isActive(),
  stream: async ({ params, abortSignal }) => {
    if (!params) {
      return signal({ value: { timestamp: Date.now() } });
    }

    const dataSignal = signal({
      value: { timestamp: Date.now() }
    });

    this.createWebSocketObservable().pipe(
      takeUntil(fromEvent(abortSignal, 'abort'))
    ).subscribe(value => {
      dataSignal.set({ value });
    });

    return dataSignal;
  }
});`;

}
