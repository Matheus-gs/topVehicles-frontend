import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Vehicle } from "src/app/models/vehicle.model";
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-create",
  templateUrl: "./vehicle-create.component.html",
  styleUrls: ["./vehicle-create.component.css"],
})
export class VehicleCreateComponent implements OnInit {
  vehicle: any = FormGroup;

  constructor(
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder,
    public dialog: MatDialogRef<VehicleCreateComponent>
  ) {
    this.vehicle = this.formBuilder.group({
      placa: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      chassi: ["", [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      renavam: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      modelo: ["", [Validators.required, Validators.maxLength(20)]],
      marca: ["", [Validators.required, Validators.maxLength(20)]],
      ano: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  handleCreateVehicle(): void {
    const data: Vehicle = this.vehicle.value;

    if (!this.vehicle.valid) {
      this.vehicleService.showMessage("Verifique os dados e tente novamente!", true);
      return;
    }

    this.vehicleService.create(data).subscribe(() => {
      this.vehicleService.showMessage("Veículo cadastrado com sucesso!");
      this.dialog.close();
    });
  }

  closeCreateVehicleModal(): void {
    this.dialog.close();
  }
}
