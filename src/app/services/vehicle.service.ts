import { Injectable } from "@angular/core";

// Material
import { MatSnackBar } from "@angular/material/snack-bar";

// Http Client
import { HttpClient } from "@angular/common/http";

// Models
import { ResponseVehicles, Vehicle } from "../models/vehicle.model";

// Rxjs
import { catchError, EMPTY, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  baseUrl = "http://localhost:8000/vehicles";

  vehicles: Vehicle[];

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro, tente novamente mais tarde", true);
    return EMPTY;
  }

  create(data: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, data).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ResponseVehicles> {
    return this.http.get<ResponseVehicles>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getVehicles(): Array<Vehicle> {
    this.read().subscribe((vehicleData) => {
      const { data } = vehicleData;
      this.vehicles = data;
    });
    return this.vehicles;
  }

  readById(id: string): Observable<ResponseVehicles> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ResponseVehicles>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(data: Vehicle): Observable<Vehicle> {
    const url = `${this.baseUrl}`;
    return this.http.put<Vehicle>(url, data).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Vehicle> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Vehicle>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
