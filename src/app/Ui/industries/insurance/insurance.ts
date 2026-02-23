import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [Hero],
  templateUrl: './insurance.html',
  styleUrls: ['./insurance.css'],
})
export class Insurance {

}
