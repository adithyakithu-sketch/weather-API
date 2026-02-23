import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-podcasts',
  standalone: true,
  imports: [Hero],
  templateUrl: './podcasts.html',
  styleUrls: ['./podcasts.css'],
})
export class Podcasts {}
