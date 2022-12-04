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

  static isEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const _regex = /^[_a-z0-9-]{1,64}(\.[_a-z0-9-]+)*@[a-z0-9-]{1,256}(\.[a-z0-9-]+)(.\.[a-z]{2,3})?$/;
    if (!_regex.test(control.value) && (control.dirty)) {
      return { invalidEmail: true };
    }
    return null;
  }

  static isFullName(control: AbstractControl): { [key: string]: boolean } | null {
    const _regex = /^(?=.*[a-zA-Zà-úÀ-Ú ])([a-zA-Zà-úÀ-Ú ]+)$/;
    const _name = control.value.replace(/\s{2,}/g, ' ').trim().split(' ');
    if ((_name.length < 2 || !_regex.test(control.value)) && (control.dirty)) {
      return { invalidName: true };
    }
    return null;
  }

  static isCellPhone(control: AbstractControl): { [key: string]: boolean } | null {
    const _cellPhone = control.value;
    const _regex = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    if ((!_regex.test(_cellPhone) || _cellPhone.length !== 11) && (control.dirty)) {
      return { invalidCellPhone: true };
    }
    return null;
  }

  static isValidDate(control: AbstractControl): { [key: string]: boolean } | null {
    const _date = new Date(control.value.toString());
    const today = new Date();
    const yearLegal = today.getFullYear() - 18;
    const legalAge = new Date(yearLegal, today.getMonth(), today.getDate());
    // data valida acima de 18 anos
    if (_date > legalAge && (control.dirty)) {
      return { invalidAge: true };
    }
    // verificar se data acima de 1900
    if (_date.getFullYear() < 1900 && (control.dirty)) {
      return { invalidDate: true };
    }

    return null;
  }
}
