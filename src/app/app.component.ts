import { Component } from '@angular/core';
import { Plan } from './model/plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-angular-app';

  headers: string[] = [
    'Pricing example',
    'Pricing',
    'Compare Plans',
  ];

  pricing: Plan[] = [
    {
      name: 'Free',
      price: 0,
      users: 10,
      storage: 1,
      email: 'Email support',
    },
    {
      name: 'Pro',
      price: 15,
      users: 20,
      storage: 10,
      email: 'Priority email support',
      btnText: 'Get started',
    },
    {
      name: 'Enterprise',
      price: 29,
      users: 30,
      storage: 15,
      email: 'Phone and email support',
      btnText: 'Contact us',
    },
  ];

  isQuestionShow: boolean = false;

  userQuestion: string = '';

  classes: {[k: string]: string} = {
    bg: 'bg-primary',
    txt: 'text-white',
  };

  primaryCardClass: {[k: string]: boolean} = {
    'bg-primary': true,
    'text-white': true,
  };

  onChoosePlan(plan: Plan): void {
    this.isQuestionShow = true;
  }

  onOrder(plan: Plan): void {
    alert(`Thank you for choosing the ${plan.name} plan!`);
  }

}
