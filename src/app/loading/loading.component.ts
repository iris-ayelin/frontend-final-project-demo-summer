import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class AppLoadingComponent {

}
