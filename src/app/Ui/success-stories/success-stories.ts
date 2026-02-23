import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [Hero],
  templateUrl: './success-stories.html',
  styleUrls: ['./success-stories.css'],
})
export class SuccessStories {}
