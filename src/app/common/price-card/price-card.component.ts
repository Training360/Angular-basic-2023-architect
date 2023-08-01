import { Component } from '@angular/core';
import { Plan } from 'src/app/model/plan';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {

  plan: Plan = {
    name: 'Free',
    price: 0,
    users: 10,
    storage: 1,
    email: 'Email support',
  };

  onChoosePlan(): void {
    //
  }

}
