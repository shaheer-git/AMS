import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'log-in-out', component: LogInOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
