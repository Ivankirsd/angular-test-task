import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomePageOneComponent } from './homePageOne/home-page-one.component';
import { HomePageTwoComponent } from './homePageTwo/home-page-two.component';
import { HomePageThreeComponent } from './homePageThree/home-page-three.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'homePageOne', component: HomePageOneComponent},
      {path: 'homePageTwo', component: HomePageTwoComponent},
      {path: 'homePageThree', component: HomePageThreeComponent},
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
