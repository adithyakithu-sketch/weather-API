import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Hero],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {}
