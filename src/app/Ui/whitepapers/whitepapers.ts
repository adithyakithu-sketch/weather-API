import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-whitepapers',
  standalone: true,
  imports: [Hero],
  templateUrl: './whitepapers.html',
  styleUrls: ['./whitepapers.css'],
})
export class Whitepapers {}
