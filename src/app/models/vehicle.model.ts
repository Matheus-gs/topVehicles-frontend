export interface Vehicle {
  id?: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: string;
}
export interface DialogData {
  id: string;
}
export interface ResponseVehicles {
  data: Vehicle[];
  status: boolean;
}
