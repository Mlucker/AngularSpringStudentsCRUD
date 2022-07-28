import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentOverviewComponent } from './overviews/student-overview/student-overview.component';
import { KursOverviewComponent } from './overviews/kurs-overview/kurs-overview.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { KursFormComponent } from './forms/kurs-form/kurs-form.component';
import { StudentItemComponent } from './items/student-item/student-item.component';
import { KursItemComponent } from './items/kurs-item/kurs-item.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { KursDetailsComponent } from './details/kurs-details/kurs-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StudentOverviewComponent,
    KursOverviewComponent,
    StudentFormComponent,
    KursFormComponent,
    StudentItemComponent,
    KursItemComponent,
    StudentDetailsComponent,
    KursDetailsComponent,
    HomepageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
