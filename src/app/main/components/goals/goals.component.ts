import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  progress = 0;
  ngOnInit(): void {
    setTimeout(() => {
      this.progress = 71;
    }, 100);
  }
}
