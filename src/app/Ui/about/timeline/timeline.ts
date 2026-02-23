import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [Hero],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css'],
})
export class Timeline {}
