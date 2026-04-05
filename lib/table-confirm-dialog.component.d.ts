import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
/**
 * Dialog data interface
 */
export interface DialogData {
    title: string;
    message: string;
    okText?: string;
    cancelText?: string;
    isAlert?: boolean;
}
/**
 * TableConfirmDialogComponent
 * Reusable material dialog for alerts and confirmations
 * Fully styled and independent for npm distribution
 */
export declare class TableConfirmDialogComponent {
    dialogRef: MatDialogRef<TableConfirmDialogComponent>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<TableConfirmDialogComponent>, data: DialogData);
    onConfirm(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableConfirmDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableConfirmDialogComponent, "app-table-confirm-dialog", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=table-confirm-dialog.component.d.ts.map