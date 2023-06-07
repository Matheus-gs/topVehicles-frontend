import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { DialogData, Vehicle } from "src/app/models/vehicle.model";
import { VehicleService } from "src/app/services/vehicle.service";
import { VehicleDeleteComponent } from "../vehicle-delete/vehicle-delete.component";

@Component({
  selector: "app-vehicle-update",
  templateUrl: "./vehicle-update.component.html",
  styleUrls: ["./vehicle-update.component.css"],
})
export class VehicleUpdateComponent implements OnInit {
  vehicle: any = FormGroup;
  vehicleCurrentName: string;
  vehicleData: Vehicle = {
    placa: null,
    chassi: null,
    renavam: null,
    modelo: null,
    marca: null,
    ano: null,
  };

  constructor(
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.vehicleData.id = this.data.id;

    this.vehicle = this.formBuilder.group({
      placa: [""],
      chassi: [""],
      renavam: [""],
      modelo: [""],
      marca: [""],
      ano: [""],
    });
  }

  ngOnInit(): void {
    this.vehicleService.readById(this.vehicleData.id).subscribe((vehicle) => {
      const [vehicleData] = vehicle.data;
      this.vehicleData = vehicleData;

      const { id, placa, chassi, renavam, modelo, marca, ano } = this.vehicleData;

      const [currentName] = modelo.split(" ");
      this.vehicleCurrentName = currentName;

      this.vehicle = this.formBuilder.group({
        id: [id],
        placa: [
          placa,
          [Validators.required, Validators.minLength(7), Validators.maxLength(8)],
        ],
        chassi: [
          chassi,
          [Validators.required, Validators.minLength(17), Validators.maxLength(17)],
        ],
        renavam: [
          renavam,
          [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
        ],
        modelo: [modelo, [Validators.required, Validators.maxLength(20)]],
        marca: [marca, [Validators.required, Validators.maxLength(20)]],
        ano: [
          ano,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern("^[0-9]*$"),
          ],
        ],
      });
    });
  }

  handleUpdateVehicle(): void {
    const data: Vehicle = this.vehicle.value;

    if (!this.vehicle.valid) {
      this.vehicleService.showMessage("Verifique os dados e tente novamente!", true);
      return;
    }

    this.vehicleService.update(data).subscribe(() => {
      this.vehicleService.showMessage("Informações alteradas com sucesso!");
      this.closeUpdateVehicleModal();
    });
  }

  closeUpdateVehicleModal(): void {
    this.dialog.openDialogs.forEach((dialog) => dialog.close());
  }

  openDeleteVehicleModal(): void {
    const dialogRef = this.dialog.open(VehicleDeleteComponent, {
      width: "550px",
      data: {
        id: this.vehicleData.id,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.closeUpdateVehicleModal();
    });
  }
}
