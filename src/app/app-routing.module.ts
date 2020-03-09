import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpNameComponent } from './inp-name/inp-name.component';
import { OptionComponent } from './option/option.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path: '', component: InpNameComponent},
  {path: 'option', component: OptionComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
