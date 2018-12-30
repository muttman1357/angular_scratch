import { Component, OnInit } from '@angular/core';
import {Lesson, StudentLevel} from './lesson';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {validateDuration} from './validators/validateDuration';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  lesson = new Lesson();
  myForm: FormGroup;
  duration = new FormControl(10, [validateDuration]);
  // duration = new FormControl(10, [
  //   Validators.required,
  //   Validators.pattern('[0-9]+')
  // ]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['This is the title', [
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      duration: this.duration,
      description: ['Description goes here', [
        Validators.required
      ]
      ],
      rating: ['', [
        Validators.required
      ]
      ],
    });
    console.log(this.myForm);
    this.myForm.valueChanges
      // .filter(() => this.myForm.valid)
      .map(value => new Lesson(value.title, value.duration, value.description, StudentLevel.BEGINNER, value.rating))
      .do(formValue => console.log("Form Value:", formValue))
      .subscribe(
        lesson => {
          this.lesson = lesson;
          console.log(this.myForm);
        }

      );

  }

   notifyMe() {
    // const not = new Notification("Hi There!!");
    //  console.log(not);
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if ((Notification as any).permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if ((Notification as any).permission !== "denied") {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }



















  // stringifyItem(o) {
  //   console.log(o);
  // }
  //
  // summaryStatus(summary) {
  //   return {color: !summary.valid && !summary.pristine ? 'red' : 'black'};
  // }
  //
  // createLesson() {
  //   console.log("Lesson Value:", this.lesson);
  // }
}
