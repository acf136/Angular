import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A email's value should match the given regular expression */
export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): null | ValidationErrors  => {
    const forbidden = nameRe.test(control.value);
    // console.log('ValidatorFn - control.value =:',  control.value ) // TODO  remove console.log
    return forbidden ? null:  {forbiddenEmail: {value: control.value}} ;
  };
}

@Directive({
  selector: '[selectorPatternEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('selectorPatternEmail') forbiddenEmail = '';

  validate(control: AbstractControl): ValidationErrors | null {
    // console.log('validate- this.forbiddenEmail =:',  this.forbiddenEmail ) // TODO  remove console.log
    return this.forbiddenEmail ? forbiddenEmailValidator(new RegExp(this.forbiddenEmail, 'i'))(control)
                              : null;
  }
}


