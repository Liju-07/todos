import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  HttpClientModule }  from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';

const app:Routes=[
  {
    path:"",component:TodosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
