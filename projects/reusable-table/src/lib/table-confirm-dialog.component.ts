import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
/**
 * Dialog data interface
 */
export interface DialogData {
  title: string;
  message: string;
  okText?: string;
  cancelText?: string;
  isAlert?: boolean; // true for alert (single button), false for confirm (two buttons)
}

/**
 * TableConfirmDialogComponent
 * Reusable material dialog for alerts and confirmations
 * Fully styled and independent for npm distribution
 */
@Component({
  selector: 'app-table-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="dialog-container">
      <!-- Dialog Header -->
      <div class="dialog-header">
        <h2 class="dialog-title">{{ data.title }}</h2>
        <button 
          mat-icon-button 
          (click)="onCancel()"
          class="close-btn"
          aria-label="Close">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Dialog Body -->
      <div class="dialog-body">
        <p class="dialog-message">{{ data.message }}</p>
      </div>

      <!-- Dialog Footer -->
      <div class="dialog-footer">
        <!-- For confirm: show cancel button -->
        <button 
          *ngIf="!data.isAlert"
          mat-stroked-button 
          (click)="onCancel()"
          class="cancel-btn">
          {{ data.cancelText || 'Cancel' }}
        </button>
        
        <!-- OK / Confirm button -->
        <button 
          mat-raised-button 
          [class]="data.isAlert ? 'alert-btn' : 'confirm-btn'"
          (click)="onConfirm()">
          {{ data.okText || (data.isAlert ? 'OK' : 'Confirm') }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      display: flex;
      flex-direction: column;
      min-width: 320px;
      max-width: 500px;
      gap: 0;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
      gap: 12px;

      .dialog-title {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #111827;
        flex: 1;
      }

      .close-btn {
        color: #6b7280;
        height: 32px;
        width: 32px;
        min-width: 32px;

        &:hover {
          background: #e5e7eb;
        }
      }
    }

    .dialog-body {
      padding: 20px;
      flex: 1;

      .dialog-message {
        margin: 0;
        font-size: 14px;
        color: #374151;
        line-height: 1.5;
      }
    }

    .dialog-footer {
      display: flex;
      gap: 12px;
      padding: 16px 20px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
      justify-content: flex-end;

      button {
        min-width: 100px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .cancel-btn {
        color: #6b7280;
        border-color: #d1d5db;

        &:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }
      }

      .confirm-btn {
        background: #6b7280;
        color: #ffffff;

        &:hover {
          background: #4b5563;
        }
      }

      .alert-btn {
        background: #3b82f6;
        color: #ffffff;

        &:hover {
          background: #2563eb;
        }
      }
    }

    :host-context(.dark-theme) {
      .dialog-container {
        background: #1f2937;
      }

      .dialog-header {
        background: #111827;
        border-bottom-color: #374151;

        .dialog-title {
          color: #f3f4f6;
        }

        .close-btn {
          color: #9ca3af;

          &:hover {
            background: #374151;
          }
        }
      }

      .dialog-body {
        .dialog-message {
          color: #d1d5db;
        }
      }

      .dialog-footer {
        background: #111827;
        border-top-color: #374151;

        .cancel-btn {
          color: #9ca3af;
          border-color: #4b5563;

          &:hover {
            background: #374151;
            border-color: #6b7280;
          }
        }

        .confirm-btn {
          background: #6b7280;

          &:hover {
            background: #9ca3af;
          }
        }

        .alert-btn {
          background: #3b82f6;

          &:hover {
            background: #1d4ed8;
          }
        }
      }
    }
  `]
})
export class TableConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TableConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
