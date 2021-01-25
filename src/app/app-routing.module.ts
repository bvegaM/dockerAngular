import { Component, NgModule } from '@angular/core';



import { MainComponent } from './main/main.component';

import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      children: [
          {
              path: 'personas',
              component: PersonasComponent
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents: any[]=[
  MainComponent,
];
 
