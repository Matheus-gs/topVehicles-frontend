import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/models/vehicle.model";
import { VehicleService } from "src/app/services/vehicle.service";
@Component({
  selector: "app-vehicle-delete",
  templateUrl: "./vehicle-delete.component.html",
  styleUrls: ["./vehicle-delete.component.css"],
})
export class VehicleDeleteComponent implements OnInit {
  constructor(
    private vehicleService: VehicleService,
    public dialogRef: MatDialogRef<VehicleDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  handleDeleteVehicle(): void {
    const id = this.data.id;
    this.vehicleService.delete(id).subscribe(() => {
      this.vehicleService.showMessage("Veículo removido com sucesso!");
      this.closeDeleteVehicleModal();
    });
  }

  closeDeleteVehicleModal(): void {
    this.dialogRef.close();
  }
}
