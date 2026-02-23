import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-locomotive',
  standalone: true,
  imports: [Hero],
  templateUrl: './locomotive.html',
  styleUrls: ['./locomotive.css'],
})
export class Locomotive {}
