import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    MatButton,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  @ViewChild('performanceChart', {static: false}) performanceChart?: ElementRef;

  ngAfterViewInit() {
    // Trigger chart animations when component loads
    setTimeout(() => {
      this.animateChart();
    }, 500);
  }

  animateChart() {
    if (this.performanceChart) {
      const chartElement = this.performanceChart.nativeElement;
      const bars = chartElement.querySelectorAll('.bar');

      bars.forEach((bar: HTMLElement, index: number) => {
        setTimeout(() => {
          bar.classList.add('animate');
        }, index * 500);
      });
    }
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
