import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkPageModule } from './work-page/work-page.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    WorkPageModule,
    AppRoutingModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
