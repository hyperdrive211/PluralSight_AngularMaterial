import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'; 
import {MaterialModule} from '../shared/material-module/material-module'; 
import {FlexLayoutModule} from '@angular/flex-layout'; 

import { ContactmanagerAppComponent } from './contactmanager-app/contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {Routes, RouterModule} from '@angular/router'; 
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: ContactmanagerAppComponent, 
  children: [
    {path: '', component: MainContentComponent }, 
  ]
}, {
  path: '**', redirectTo:''}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    FormsModule, 
    FlexLayoutModule, 
    RouterModule.forChild(routes), 
    HttpClientModule
  ], providers: [UserService]
})
export class ContactmanagerModule { }
