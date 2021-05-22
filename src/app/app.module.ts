import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PremiumPaymentComponent } from './premium-payment/premium-payment.component';
import { ApprovemoderatorComponent } from './approvemoderator/approvemoderator.component';
import { ApprovecustomerComponent } from './approvecustomer/approvecustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@environments/environment';
import {AuthGuard} from './_helpers/auth.guard';
import {AuthenticationService} from './_services/authentication.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    PremiumPaymentComponent,
    ApprovemoderatorComponent,
    ApprovecustomerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,       
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
