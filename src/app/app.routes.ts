import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Foodpage } from './foodpage/foodpage';


export const routes: Routes = [
    {path: '' , component:Home},
    {path: 'search/:searchItem', component:Home},
    {path: 'tag/:tag' , component:Home} ,
    {path: 'food/:id', component:Foodpage}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}