import { Component,OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    loading = false;
    users: User[];

    constructor(private authenticationService: AuthenticationService,private router: Router) { }

    ngOnInit() {
        this.loading = true;
    }

}


