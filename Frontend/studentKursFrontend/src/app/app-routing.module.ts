import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentOverviewComponent} from "./overviews/student-overview/student-overview.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {RouterModule, Routes} from "@angular/router";
import {KursOverviewComponent} from "./overviews/kurs-overview/kurs-overview.component";
import {StudentDetailsComponent} from "./details/student-details/student-details.component";
import {KursDetailsComponent} from "./details/kurs-details/kurs-details.component";

const routes: Routes = [
  {path: "", redirectTo: "homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "Students", component: StudentOverviewComponent},
  {path: "Kurse", component: KursOverviewComponent},
  {path: "studentDetails/:id", component: StudentDetailsComponent},
  {path: "kursDetails/:id", component: KursDetailsComponent},
  {path: "**", component: ErrorpageComponent},
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
export class AppRoutingModule {
}
