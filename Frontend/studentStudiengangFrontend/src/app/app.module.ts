import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudiengangFormComponent } from './forms/studiengang-form/studiengang-form.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { StudentOverviewComponent } from './overviews/student-overview/student-overview.component';
import { StudiengangOverviewComponent } from './overviews/studiengang-overview/studiengang-overview.component';
import { StudentItemComponent } from './items/student-item/student-item.component';
import { StudiengangItemComponent } from './items/studiengang-item/studiengang-item.component';
import { StudiengangDetailsComponent } from './details/studiengang-details/studiengang-details.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudiengangFormComponent,
    StudentFormComponent,
    StudentOverviewComponent,
    StudiengangOverviewComponent,
    StudentItemComponent,
    StudiengangItemComponent,
    StudiengangDetailsComponent,
    StudentDetailsComponent,
    ErrorpageComponent,
    HomepageComponent
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
