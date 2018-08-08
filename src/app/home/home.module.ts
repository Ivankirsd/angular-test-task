import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';
import { HomePageOneComponent } from './homePageOne/home-page-one.component';
import { HomePageTwoComponent } from './homePageTwo/home-page-two.component';
import { HomePageThreeComponent } from './homePageThree/home-page-three.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { TableComponent } from '../shared/table/table.component';
import { PaginatorComponent } from '../shared/table/paginator/paginator.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageOneComponent,
    HomePageTwoComponent,
    HomePageThreeComponent,
    AboutComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    PaginatorComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgPipesModule
  ]
})

export class HomeModule {

}
