import { Component } from '@angular/core';
import { Hero } from '../../../shared/hero/hero';

@Component({
  selector: 'app-giving-back',
  standalone: true,
  imports: [Hero],
  templateUrl: './giving-back.html',
  styleUrls: ['./giving-back.css'],
})
export class GivingBack {

}
