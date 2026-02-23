import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [Hero],
  templateUrl: './healthcare.html',
  styleUrls: ['./healthcare.css'],
})
export class Healthcare {

}
