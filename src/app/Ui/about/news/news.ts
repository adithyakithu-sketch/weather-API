import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [Hero],
  templateUrl: './news.html',
  styleUrls: ['./news.css'],
})
export class News {}
