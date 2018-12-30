import {Component, forwardRef, HostBinding, Input,} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  template: `
    <span
      *ngFor="let starred of stars; let i = index"
      (click)=" onTouched(); rate(i + (starred ? (value > i + 1 ? 1 : 0) : 1))">
      <ng-container *ngIf="starred; else noStar">⭐</ng-container>
      <ng-template #noStar>·</ng-template>
    </span>
  `,
  styles: [`
    span {
      display: inline-block;
      width: 25px;
      line-height: 25px;
      text-align: center;
      cursor: pointer;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor{

  stars: boolean[] = Array(5).fill(false);

  // Allow the input to be disabled, and when is is make is somewhat transparent
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  // function to call when the rating changes
  onChange = (rating: number) => {};

  // called when the input is touched, when a star is clicked
  onTouched = () => {};

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  // Allows angular to update the model (rating)
  // update the mmodel and chhanges needed for the view here.
  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => {
      return rating > i;
    });
    this.onChange(this.value);
  }

  // register a function to call when model (rating) changes.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // register a fn when input has been touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // allows angular to disable the input
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
