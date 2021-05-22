import { Router } from '@angular/router';
import {Component} from '@angular/core';
import {AuthenticationService} from './_services/authentication.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valuenableProject';

    currentUser: User;
        
    constructor(private router: Router,
        private authenticationService: AuthenticationService
    ) {
    //   alert("app comp");
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    }


}
