import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageComponent } from './work-page.component';
import { WorkPageRoutingModule } from './work-routing.module';
import { FormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AboutItComponent } from './about-it/about-it.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { TableComponent } from '../shared/table/table.component';
import { PaginatorComponent } from '../shared/table/paginator/paginator.component';


@NgModule({
  declarations: [
    WorkPageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    AboutItComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    PaginatorComponent

  ],
  imports: [
    CommonModule,
    WorkPageRoutingModule,
    FormsModule,
    NgPipesModule
  ]
})

export class WorkPageModule {

}
