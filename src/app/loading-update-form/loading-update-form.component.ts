import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading-update-form',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loading-update-form.component.html',
  styleUrls: ['./loading-update-form.component.css'],
})
export class LoadingUpdateFormComponent {
  progressValue = 0;

  onSubmitForm() {
    this.incrementProgress();
  }

  incrementProgress() {
    setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 20;
      }
    }, 300);
  }
}
