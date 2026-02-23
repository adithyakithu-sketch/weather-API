import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [Hero],
  templateUrl: './mobility.html',
  styleUrls: ['./mobility.css'],
})
export class Mobility {}
