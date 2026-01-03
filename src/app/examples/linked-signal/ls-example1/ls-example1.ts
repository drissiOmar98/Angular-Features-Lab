import {Component, linkedSignal, signal} from '@angular/core';
import {MatFormField, MatHint, MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardContent} from '@angular/material/card';
import {TitleCasePipe} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-ls-example1',
  imports: [
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatSelect,
    MatOption,
    MatCard,
    MatCardContent,
    TitleCasePipe,
    MatInput,
    MatLabel,
    MatHint
  ],
  templateUrl: './ls-example1.html',
  styleUrl: './ls-example1.scss',
})
export class LsExample1 {

  products = signal([
    {id: 'p001', name: 'Laptop'},
    {id: 'p002', name: 'Phone'},
    {id: 'p003', name: 'Tablet'}
  ]);

  productId = signal('p001');
  userType = signal<'regular' | 'premium'>('regular');

  price = linkedSignal<[string, 'regular' | 'premium'], number>({
    source: () => [this.productId(), this.userType()],
    computation: (source, prev) => {
      const [id, type] = source;
      return this.getPriceFromRules(id, type);
    }
  });

  private getPriceFromRules(productId: string, userType: string): number {
    // Simulate pricing logic
    const basePrice = productId === 'p001' ? 100 : 200;
    return userType === 'premium' ? basePrice * 0.9 : basePrice;
  }

  updateProduct(event: MatSelectChange<any>) {
    this.productId.set(event.value);
  }

  updateUserType(event: MatSelectChange<any>) {
    this.userType.set(event.value as 'regular' | 'premium');
  }

  updateCustomPrice(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.price.set(+input.value);
    }
  }

  getProductName() {
    return this.products().find(p => p.id === this.productId())?.name || 'Unknown';
  }

  getBasePrice() {
    const prices: Record<string, number> = {
      'p001': 1200, // Laptop
      'p002': 800,  // Phone
      'p003': 600   // Tablet
    };
    return prices[this.productId()] || 500;
  }

  getDiscountText() {
    return this.userType() === 'premium' ? '10% Premium Discount' : 'No Discount';
  }

}
