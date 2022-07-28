import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentOverviewComponent} from "./overviews/student-overview/student-overview.component";
import {StudiengangOverviewComponent} from "./overviews/studiengang-overview/studiengang-overview.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { StudiengangDetailsComponent } from './details/studiengang-details/studiengang-details.component';

const routes: Routes = [
  {path: "", redirectTo: "homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "Students", component: StudentOverviewComponent},
  {path: "studentDetails/:id", component: StudentDetailsComponent},
  {path: "studiengangDetails/:id", component: StudiengangDetailsComponent},
  {path: "Studiengaenge", component: StudiengangOverviewComponent},
  {path: "**", component: ErrorpageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
