import { Component, inject } from '@angular/core';
import { Plan } from './model/plan';
import { PlanService } from './service/plan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private planService: PlanService = inject(PlanService);

  title = 'my-first-angular-app';

  headers: string[] = [
    'Pricing example',
    'Pricing',
    'Compare Plans',
  ];

  pricing = this.planService.pricing;

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
