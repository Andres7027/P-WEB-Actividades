import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"",component:HomeComponent} 
  //{path:"header",component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
