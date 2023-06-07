import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Views
import { VehiclesViewComponent } from "./views/vehicles-view/vehicles-view.component";

const routes: Routes = [
  {
    path: "",
    component: VehiclesViewComponent,
  },
  {
    path: "vehicles",
    component: VehiclesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
