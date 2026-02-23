import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [RouterLinkWithHref, Hero],
  templateUrl: './insights.html',
  styleUrls: ['./insights.css'],
})
export class Insights {}
