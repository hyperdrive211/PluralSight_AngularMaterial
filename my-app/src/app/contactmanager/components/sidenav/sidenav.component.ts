import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import{Router} from '@angular/router'; 
import { MatSidenav } from '@angular/material/sidenav';


const SMALL_WIDTH_BREAKPOINT = 720; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean; 
  users: Observable<User[]>; 

  constructor(private breakPointObserver: BreakpointObserver, private userService:UserService, private router: Router) {  
   }

   
   @ViewChild(MatSidenav, null) sidenav: MatSidenav; 
  ngOnInit() {
    this.breakPointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches; 
    })

    this.users = this.userService.users; 
    this.userService.loadAll(); 


    this.users.subscribe(data => {
      if(data.length > 0) this.router.navigate(['/contactmanager', data[0].id]); 
    })

    this.users.subscribe(data => {
      console.log(data); 
    }); 

    this.router.events.subscribe(() => {
      if(this.isScreenSmall){
        this.sidenav.close(); 
      }
    })
  }

}
