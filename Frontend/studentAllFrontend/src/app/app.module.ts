import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { StudiengangDetailsComponent } from './details/studiengang-details/studiengang-details.component';
import { KursDetailsComponent } from './details/kurs-details/kurs-details.component';
import { NoteDetailsComponent } from './details/note-details/note-details.component';
import { SpindDetailsComponent } from './details/spind-details/spind-details.component';
import { StudentItemComponent } from './items/student-item/student-item.component';
import { StudiengangItemComponent } from './items/studiengang-item/studiengang-item.component';
import { KursItemComponent } from './items/kurs-item/kurs-item.component';
import { NoteItemComponent } from './items/note-item/note-item.component';
import { SpindItemComponent } from './items/spind-item/spind-item.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { StudiengangFormComponent } from './forms/studiengang-form/studiengang-form.component';
import { KursFormComponent } from './forms/kurs-form/kurs-form.component';
import { SpindFormComponent } from './forms/spind-form/spind-form.component';
import { NoteFormComponent } from './forms/note-form/note-form.component';
import { StudentOverviewComponent } from './overviews/student-overview/student-overview.component';
import { StudiengangOverviewComponent } from './overviews/studiengang-overview/studiengang-overview.component';
import { KursOverviewComponent } from './overviews/kurs-overview/kurs-overview.component';
import { SpindOverviewComponent } from './overviews/spind-overview/spind-overview.component';
import { NoteOverviewComponent } from './overviews/note-overview/note-overview.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorpageComponent,
    StudentDetailsComponent,
    StudiengangDetailsComponent,
    KursDetailsComponent,
    NoteDetailsComponent,
    SpindDetailsComponent,
    StudentItemComponent,
    StudiengangItemComponent,
    KursItemComponent,
    NoteItemComponent,
    SpindItemComponent,
    StudentFormComponent,
    StudiengangFormComponent,
    KursFormComponent,
    SpindFormComponent,
    NoteFormComponent,
    StudentOverviewComponent,
    StudiengangOverviewComponent,
    KursOverviewComponent,
    SpindOverviewComponent,
    NoteOverviewComponent
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
