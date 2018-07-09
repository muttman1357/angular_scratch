import {FormControl} from '@angular/forms';

export function validateDuration(ctrl: FormControl) {
  const numValue = parseInt(ctrl.value, 10);

  const valid = numValue && numValue < 10;
  return valid ? null : {
    validateDuration: {
      valid: false
    }
  };
}
