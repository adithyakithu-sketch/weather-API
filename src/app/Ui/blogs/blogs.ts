import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [Hero, RouterLinkWithHref],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css'],
})
export class Blogs {}
