import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {

  @Input() plan: Plan = {
    name: 'Free',
    price: 0,
    users: 10,
    storage: 1,
    email: 'Email support',
  };

  @Input() cardClass: {[k: string]: boolean} = {
    'text-black': true,
  };

  onChoosePlan(): void {
    //
  }

}
