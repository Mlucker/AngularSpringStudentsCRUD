import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentOverviewComponent } from './overviews/student-overview/student-overview.component';
import { SpindOverviewComponent } from './overviews/spind-overview/spind-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { SpindFormComponent } from './forms/spind-form/spind-form.component';
import { StudentItemComponent } from './items/student-item/student-item.component';
import { SpindItemComponent } from './items/spind-item/spind-item.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { SpindDetailsComponent } from './details/spind-details/spind-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentOverviewComponent,
    SpindOverviewComponent,
    StudentFormComponent,
    SpindFormComponent,
    StudentItemComponent,
    SpindItemComponent,
    StudentDetailsComponent,
    SpindDetailsComponent,
    HomepageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
