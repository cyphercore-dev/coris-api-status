import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { StatusComponent } from './status/status.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  // { path: 'status', component: StatusComponent },
  { path: '', component: StatusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
  // { path: 'train', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
