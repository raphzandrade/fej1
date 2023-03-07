import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateAge(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value
        console.log('controlValue', controlValue)
        const isNumberOnly: boolean = /^[0-9]\d*$/.test(controlValue)

        return isNumberOnly ? null : { "isNotNumber": true };
    }
}