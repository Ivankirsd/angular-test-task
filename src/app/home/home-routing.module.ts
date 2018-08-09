import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { OtherComponent } from './other/other.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'companies', component: CompaniesComponent},
      {path: 'peoples', component: PeoplesComponent},
      {path: 'other', component: OtherComponent},
      {path: 'about', component: AboutComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
