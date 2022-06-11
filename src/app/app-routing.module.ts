import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'home',component:HomeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
