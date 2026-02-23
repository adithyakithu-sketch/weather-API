import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-webinars',
  standalone: true,
  imports: [Hero],
  templateUrl: './webinars.html',
  styleUrls: ['./webinars.css'],
})
export class Webinars {}
