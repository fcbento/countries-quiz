import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpNameComponent } from './inp-name/inp-name.component';
import { OptionComponent } from './option/option.component';


const routes: Routes = [
  {path: '', component: InpNameComponent},
  {path: 'option', component: OptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
