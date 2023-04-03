import { localDateTimeToUTC } from "@/utils";

export interface Guest {
  id?: string;
  nombre: string;
  identificacion: string;
  habitacionId: string;
  ingreso: string;
  salida?: string;
}

export const INITIAL_GUEST: Guest = {
  id: "",
  nombre: "",
  identificacion: "",
  habitacionId: "",
  ingreso: localDateTimeToUTC(new Date().toString()),
  salida: "",
};
