import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {StudentOverviewComponent} from "./overviews/student-overview/student-overview.component";
import {SpindOverviewComponent} from "./overviews/spind-overview/spind-overview.component";
import {StudentDetailsComponent} from "./details/student-details/student-details.component";
import {SpindDetailsComponent} from "./details/spind-details/spind-details.component";

const routes: Routes = [
  {path: "", redirectTo: "homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "Students", component: StudentOverviewComponent},
  {path: "Spinde", component: SpindOverviewComponent},
  {path: "studentDetails/:id", component: StudentDetailsComponent},
  {path: "spindDetails/:id", component: SpindDetailsComponent},
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
