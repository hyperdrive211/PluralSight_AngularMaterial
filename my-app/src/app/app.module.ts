import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module/material-module';



const routes: Routes = [
  {
    path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  }, 
  {
    path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)
  },
  {
    path: '**', redirectTo: 'contactmanager'
  }
  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
