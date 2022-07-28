import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {StudentOverviewComponent} from "./overviews/student-overview/student-overview.component";
import {StudentDetailsComponent} from "./details/student-details/student-details.component";
import {KursDetailsComponent} from "./details/kurs-details/kurs-details.component";
import {KursOverviewComponent} from "./overviews/kurs-overview/kurs-overview.component";
import {NoteOverviewComponent} from "./overviews/note-overview/note-overview.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {NoteDetailsComponent} from "./details/note-details/note-details.component";
import {StudiengangOverviewComponent} from "./overviews/studiengang-overview/studiengang-overview.component";
import {StudiengangDetailsComponent} from "./details/studiengang-details/studiengang-details.component";
import {SpindOverviewComponent} from "./overviews/spind-overview/spind-overview.component";
import {SpindDetailsComponent} from "./details/spind-details/spind-details.component";

const routes: Routes = [
  {path: "", redirectTo: "homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "Students", component: StudentOverviewComponent},
  {path: "studentDetails/:id", component: StudentDetailsComponent},
  {path: "kursDetails/:id", component: KursDetailsComponent},
  {path: "Kurse", component: KursOverviewComponent},
  {path: "noteDetails/:id", component: NoteDetailsComponent},
  {path: "Noten", component: NoteOverviewComponent},
  {path: "Studiengaenge", component: StudiengangOverviewComponent},
  {path: "studiengangDetails/:id", component: StudiengangDetailsComponent},
  {path: "Spinde", component: SpindOverviewComponent},
  {path: "spindDetails/:id", component: SpindDetailsComponent},
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
