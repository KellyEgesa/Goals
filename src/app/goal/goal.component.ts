import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { ServiceService } from '../alert-service/service.service';
import { Quote } from '../quote-class/quote';
import { Router } from '@angular/router';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService;
  quote: Quote;

  toggleDetails(index): void {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  goToUrl(id) {
    this.router.navigate(['/goals', id]);
  }

  completeGoal(isComplete, index): void {
    if (isComplete) {
      const toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe('the goal has been deleted');
      }
    }
  }
  constructor(
    goalService: GoalService,
    alertService: ServiceService,
    private quoteService: QuoteRequestService,
    private router: Router
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
  }
}
