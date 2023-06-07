import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Angular Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Material Modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";

// Http Client
import { HttpClientModule } from "@angular/common/http";

// Views
import { VehiclesViewComponent } from "./views/vehicles-view/vehicles-view.component";

// Components
import { DashboardComponent } from "./components/template/dashboard/dashboard.component";
import { VehicleCreateComponent } from "./components/vehicle-create/vehicle-create.component";
import { VehicleReadComponent } from "./components/vehicle-read/vehicle-read.component";
import { VehicleUpdateComponent } from "./components/vehicle-update/vehicle-update.component";
import { VehicleDeleteComponent } from "./components/vehicle-delete/vehicle-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    // Views
    VehiclesViewComponent,
    // Components
    DashboardComponent,
    VehicleCreateComponent,
    VehicleReadComponent,
    VehicleUpdateComponent,
    VehicleDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    // Http Client
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
