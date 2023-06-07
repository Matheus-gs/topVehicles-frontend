import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Vehicle } from "src/app/models/vehicle.model";
import { VehicleService } from "src/app/services/vehicle.service";
import { VehicleCreateComponent } from "../vehicle-create/vehicle-create.component";
import { VehicleUpdateComponent } from "../vehicle-update/vehicle-update.component";

@Component({
  selector: "app-vehicle-read",
  templateUrl: "./vehicle-read.component.html",
  styleUrls: ["./vehicle-read.component.css"],
})
export class VehicleReadComponent implements OnInit {
  vehicles: Vehicle[];
  displayedColumns = ["placa", "chassi", "renavam", "modelo", "marca", "ano"];

  constructor(private vehicleService: VehicleService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.vehicleService.read().subscribe((vehicleData) => {
      const { data } = vehicleData;
      this.vehicles = data;
    });
  }

  updateTable(): void {
    this.vehicleService.read().subscribe((vehicleData) => {
      const { data } = vehicleData;
      this.vehicles = data;
    });
  }

  openCreateVehicleModal(): void {
    const dialogRef = this.dialog.open(VehicleCreateComponent, {
      width: "550px",
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }

  openUpdateVehicleModal(id: string): void {
    const dialogRef = this.dialog.open(VehicleUpdateComponent, {
      width: "550px",
      data: {
        id: id,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }
}
