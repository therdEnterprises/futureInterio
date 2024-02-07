import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() message!: string;
  @Input() type!: 'success' | 'error';

  private destroy$ = new Subject<void>();
  showAlert: boolean = true;

  ngOnInit(): void {
    // Auto-hide after 10 seconds
    interval(3000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.closeAlert();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getIcon(): string {
    return this.type === 'success' ? 'check_circle' : 'error';
  }

  closeAlert() {
    this.showAlert = false;
  }
}
