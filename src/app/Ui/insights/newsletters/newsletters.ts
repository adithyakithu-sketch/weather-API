import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-newsletters',
  standalone: true,
  imports: [Hero],
  templateUrl: './newsletters.html',
  styleUrls: ['./newsletters.css'],
})
export class Newsletters {
  onSubscribe(event: Event) {
    event.preventDefault();
    // demo behaviour — replace with API integration as needed
    window.alert('Subscribed (demo)');
  }
} 
