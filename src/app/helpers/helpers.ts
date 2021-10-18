import { AbstractControl } from "@angular/forms";

export function checkControl(control: AbstractControl, data:any) {
    return control.setValue(data, { emitEvent: false });
  }