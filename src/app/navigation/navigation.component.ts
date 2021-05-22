import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { MatSidenav } from '@angular/material/Sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isExpanded: boolean =true;
currentuser: any;
currentusername: string;
currentusergroup: string;
  constructor(private router: Router,private authenticationService: AuthenticationService) { }


  ngOnInit(): void {
   if (this.authenticationService.currentUserValue) { 
      
  }


 if (localStorage.getItem("currentUser") !== null) {
   this.currentuser=JSON.parse(localStorage.getItem('currentUser'));
   
//alert(JSON.stringify(this.currentuser));
   this.currentusername=this.currentuser["data"].FirstName + " "+this.currentuser["data"].LastName;
   this.currentusergroup=this.currentuser["data"].UserGroup;
//alert(this.currentusername);
}
else {
  this.router.navigate(['/login']);
}
  }


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}

