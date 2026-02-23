import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {}
