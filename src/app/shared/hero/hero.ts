import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero {
  @Input() img = 'https://nestdigital.com/wp-content/uploads/2023/04/Group-82.png';
  @Input() imgSmall = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() alt = '';
  @Input() maxWidth = 920;

  get srcset() {
    const small = this.imgSmall || this.img;
    return `${small} 600w, ${this.img} 1200w`;
  }
}
