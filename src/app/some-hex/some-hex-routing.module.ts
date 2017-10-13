import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeHexComponent} from "./some-hex.component";

const routes: Routes = [
  {
    path: 'some-hex',
    component: SomeHexComponent,
    resolve: {
    }
  }
];

@NgModule({
  imports: [/*RouterModule.forChild(routes)*/],
  exports: [RouterModule]
})
export class SomeHexRoutingModule{
  public static getRoutes(){
    return routes;
  }
}
