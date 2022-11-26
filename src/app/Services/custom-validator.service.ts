import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { cpf, cnpj } from "cpf-cnpj-validator";

@Injectable({
  providedIn: "root",
})

export class CustomValidatorService {
  static isCpf(control: AbstractControl): { [key: string]: boolean } | null {
    const _cpf = control.value.replace(/\D/g, '');
    if (_cpf.length !== 11 && (control.dirty)) {
      return { invalidCpf: true };
    }
    if (!cpf.isValid(_cpf) && (control.dirty)) {
      return { invalidCpf: true };
    }
    return null;
  }

  static isCnpj(control: AbstractControl): { [key: string]: boolean } | null {
    const _cnpj = control.value.replace(/\D/g, '');
    if (_cnpj.length !== 14 && (control.dirty)) {
      return { invalidCnpj: true };
    }
    if (!cnpj.isValid(_cnpj) && (control.dirty)) {
      return { invalidCnpj: true };
    }
    return null;
  }
}
