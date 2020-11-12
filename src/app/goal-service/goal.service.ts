import { Injectable } from '@angular/core';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  getGoals(): any {
    return goals;
  }
  getGoal(id) {
    for (const goal of goals) {
      if (goal.id.toString() === id) {
        return goal;
      }
    }
  }
  constructor() {}
}
