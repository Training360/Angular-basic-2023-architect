import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() btnClass: string[] = [
    'btn-outline-primary',
  ];

  @Output() onChoose: EventEmitter<Plan> = new EventEmitter();

  onChoosePlan(): void {
    this.onChoose.emit(this.plan);
  }

}
