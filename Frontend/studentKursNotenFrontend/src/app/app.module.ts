import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { KursDetailsComponent } from './details/kurs-details/kurs-details.component';
import { NoteDetailsComponent } from './details/note-details/note-details.component';
import { StudentItemComponent } from './items/student-item/student-item.component';
import { KursItemComponent } from './items/kurs-item/kurs-item.component';
import { NoteItemComponent } from './items/note-item/note-item.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { KursFormComponent } from './forms/kurs-form/kurs-form.component';
import { NoteFormComponent } from './forms/note-form/note-form.component';
import { StudentOverviewComponent } from './overviews/student-overview/student-overview.component';
import { KursOverviewComponent } from './overviews/kurs-overview/kurs-overview.component';
import { NoteOverviewComponent } from './overviews/note-overview/note-overview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    KursDetailsComponent,
    NoteDetailsComponent,
    StudentItemComponent,
    KursItemComponent,
    NoteItemComponent,
    StudentFormComponent,
    KursFormComponent,
    NoteFormComponent,
    StudentOverviewComponent,
    KursOverviewComponent,
    NoteOverviewComponent,
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
