import { PeronsService } from './../services/perons.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../shared/model/person';
import { Router } from '@angular/router';
import { PhoneNumber } from '../shared/model/phone-number';
import { PhoneType } from '../shared/model/phone-type';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingUpdateFormComponent } from '../loading-update-form/loading-update-form.component';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    LoadingUpdateFormComponent
  ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  currentPerson: Person = new Person(0, '', '', '');
  @ViewChild('phoneGroup') phoneGroup?: NgModelGroup;

  @Input() id?: string;

  progressValue = 0;
  isSubmitting = false;

  constructor(private personService: PeronsService, private router: Router) {}

  ngOnInit(): void {
    if (this.id) {
      const personFromService = this.personService.get(parseInt(this.id, 10));
      if (personFromService) {
        this.currentPerson = personFromService;
      }
    }
  }
//update function for progress-bar
  onSubmitRegistration() {
    this.isSubmitting = true;
    console.log('Form submitted!');
    if (this.id) {
      this.personService.update(this.currentPerson);
    } else {
      this.personService.add(this.currentPerson);
    }
    this.incrementProgress();
  }
//new function for mat-progress-bar
  incrementProgress() {
    const interval = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 25;
      } else {
        clearInterval(interval);
        this.isSubmitting = false;
      }
    }, 200);
  }

  addPhoneNumber() {
    this.currentPerson.phones.push(new PhoneNumber('', PhoneType.Mobile));
  }

  removePhoneNumber(index: number) {
    this.currentPerson.phones.splice(index, 1);
    this.phoneGroup?.control.markAsDirty();
  }
}
