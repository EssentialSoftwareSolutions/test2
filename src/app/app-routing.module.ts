import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home';
import { PremiumPaymentComponent } from './premium-payment/premium-payment.component';
import { ApprovemoderatorComponent } from './approvemoderator/approvemoderator.component';
import { ApprovecustomerComponent } from './approvecustomer/approvecustomer.component';
import {AuthGuard} from './_helpers';

const routes: Routes = [
{path: '', component: HomeComponent,
    children: [
     {path: 'premiumpayment', component: PremiumPaymentComponent, canActivate: [AuthGuard]},
     {path: 'approvemoderator', component: ApprovemoderatorComponent, canActivate: [AuthGuard]},           
     {path: 'approvecustomer', component: ApprovecustomerComponent, canActivate: [AuthGuard]},           
      ]},      
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
