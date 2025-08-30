import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';


export const routes: Routes = [
    {path: '' , component:Home},
    {path: 'search/:searchItem', component:Home},
    {path: 'tag/:tag' , component:Home}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}