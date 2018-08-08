import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkPageComponent } from './work-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AboutItComponent } from './about-it/about-it.component';

const routes: Routes = [
  {path: '', component: WorkPageComponent,
    children: [
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      {path: 'page3', component: Page3Component},
      {path: 'about', component: AboutItComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorkPageRoutingModule {

}
