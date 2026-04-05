import * as i0 from '@angular/core';
import { Component, Inject, inject, DestroyRef, ChangeDetectorRef, ElementRef, Renderer2, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, HostListener } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3$1 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i5 from '@angular/material/sort';
import { MatSort, MatSortModule } from '@angular/material/sort';
import * as i6 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i7 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i8 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i9 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

function TableConfirmDialogComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function TableConfirmDialogComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.cancelText || "Cancel", " ");
} }
/**
 * TableConfirmDialogComponent
 * Reusable material dialog for alerts and confirmations
 * Fully styled and independent for npm distribution
 */
class TableConfirmDialogComponent {
    dialogRef;
    data;
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    static ɵfac = function TableConfirmDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableConfirmDialogComponent, selectors: [["app-table-confirm-dialog"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 6, consts: [[1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], ["mat-icon-button", "", "aria-label", "Close", 1, "close-btn", 3, "click"], [1, "dialog-body"], [1, "dialog-message"], [1, "dialog-footer"], ["mat-stroked-button", "", "class", "cancel-btn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "click"]], template: function TableConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function TableConfirmDialogComponent_Template_button_click_4_listener() { return ctx.onCancel(); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 4)(8, "p", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵtemplate(11, TableConfirmDialogComponent_button_11_Template, 2, 1, "button", 7);
            i0.ɵɵelementStart(12, "button", 8);
            i0.ɵɵlistener("click", function TableConfirmDialogComponent_Template_button_click_12_listener() { return ctx.onConfirm(); });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.data.title);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.data.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.data.isAlert);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.data.isAlert ? "alert-btn" : "confirm-btn");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.data.okText || (ctx.data.isAlert ? "OK" : "Confirm"), " ");
        } }, dependencies: [CommonModule, i1$1.NgIf, MatDialogModule, MatIconModule, i3.MatIcon], styles: [".dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:320px;max-width:500px;gap:0;background:#fff;border-radius:8px;overflow:hidden}.dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#f9fafb;gap:12px;.dialog-title{margin:0;font-size:16px;font-weight:600;color:#111827;flex:1}.close-btn{color:#6b7280;height:32px;width:32px;min-width:32px;&:hover{background:#e5e7eb}}}.dialog-body[_ngcontent-%COMP%]{padding:20px;flex:1;.dialog-message{margin:0;font-size:14px;color:#374151;line-height:1.5}}.dialog-footer[_ngcontent-%COMP%]{display:flex;gap:12px;padding:16px 20px;border-top:1px solid #e5e7eb;background:#f9fafb;justify-content:flex-end;button{min-width:100px;font-size:14px;font-weight:500;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}.cancel-btn{color:#6b7280;border-color:#d1d5db;&:hover{background:#f3f4f6;border-color:#9ca3af}}.confirm-btn{background:#6b7280;color:#fff;&:hover{background:#4b5563}}.alert-btn{background:#3b82f6;color:#fff;&:hover{background:#2563eb}}}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{.dialog-container{background:#1f2937}.dialog-header{background:#111827;border-bottom-color:#374151;.dialog-title{color:#f3f4f6}.close-btn{color:#9ca3af;&:hover{background:#374151}}}.dialog-body{.dialog-message{color:#d1d5db}}.dialog-footer{background:#111827;border-top-color:#374151;.cancel-btn{color:#9ca3af;border-color:#4b5563;&:hover{background:#374151;border-color:#6b7280}}.confirm-btn{background:#6b7280;&:hover{background:#9ca3af}}.alert-btn{background:#3b82f6;&:hover{background:#1d4ed8}}}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableConfirmDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-table-confirm-dialog', standalone: true, imports: [CommonModule, MatDialogModule, MatIconModule], template: `
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
  `, styles: [".dialog-container{display:flex;flex-direction:column;min-width:320px;max-width:500px;gap:0;background:#fff;border-radius:8px;overflow:hidden}.dialog-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#f9fafb;gap:12px;.dialog-title{margin:0;font-size:16px;font-weight:600;color:#111827;flex:1}.close-btn{color:#6b7280;height:32px;width:32px;min-width:32px;&:hover{background:#e5e7eb}}}.dialog-body{padding:20px;flex:1;.dialog-message{margin:0;font-size:14px;color:#374151;line-height:1.5}}.dialog-footer{display:flex;gap:12px;padding:16px 20px;border-top:1px solid #e5e7eb;background:#f9fafb;justify-content:flex-end;button{min-width:100px;font-size:14px;font-weight:500;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}.cancel-btn{color:#6b7280;border-color:#d1d5db;&:hover{background:#f3f4f6;border-color:#9ca3af}}.confirm-btn{background:#6b7280;color:#fff;&:hover{background:#4b5563}}.alert-btn{background:#3b82f6;color:#fff;&:hover{background:#2563eb}}}:host-context(.dark-theme){.dialog-container{background:#1f2937}.dialog-header{background:#111827;border-bottom-color:#374151;.dialog-title{color:#f3f4f6}.close-btn{color:#9ca3af;&:hover{background:#374151}}}.dialog-body{.dialog-message{color:#d1d5db}}.dialog-footer{background:#111827;border-top-color:#374151;.cancel-btn{color:#9ca3af;border-color:#4b5563;&:hover{background:#374151;border-color:#6b7280}}.confirm-btn{background:#6b7280;&:hover{background:#9ca3af}}.alert-btn{background:#3b82f6;&:hover{background:#1d4ed8}}}}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableConfirmDialogComponent, { className: "TableConfirmDialogComponent", filePath: "lib\\table-confirm-dialog.component.ts", lineNumber: 225 }); })();

/**
 * Reusable Table Configuration
 * Fully customizable theme, colors, icons, and behavior
 * Plug-and-play configuration object
 */
/**
 * Default Table Configuration
 * All values are production-ready and modern
 */
const DEFAULT_TABLE_CONFIG = {
    colors: {
        primary: '#6b7280',
        neutral: '#ffffff',
        border: '#e5e7eb',
        toolbarBg: '#ffffff',
        toolbarText: '#6b7280',
        headerBg: '#f9fafb',
        headerText: '#374151',
        headerBorder: '#e5e7eb',
        rowBg: '#ffffff',
        rowHoverBg: '#f9fafb',
        rowBorder: '#e5e7eb',
        cellText: '#374151',
        selectedRowBg: 'rgba(33, 150, 243, 0.1)',
        inputBg: '#ffffff',
        inputBorder: '#e5e7eb',
        inputText: '#6b7280',
        inputPlaceholder: '#9ca3af',
        buttonHoverBg: '#f3f4f6',
        dangerColor: '#ef4444',
        successColor: '#10b981',
        warningColor: '#f59e0b',
        filterInputBg: '#ffffff',
        filterInputBorder: '#e5e7eb',
        filterInputText: '#6b7280'
    },
    icons: {
        editIcon: 'edit',
        deleteIcon: 'delete',
        insertAboveIcon: 'arrow_upward',
        insertBelowIcon: 'arrow_downward',
        searchIcon: 'search',
        addIcon: 'add',
        addColumnIcon: 'add_column',
        columnToggleIcon: 'view_column',
        exportIcon: 'file_download',
        printIcon: 'print',
        closeIcon: 'close',
        showAllIcon: 'check_circle',
        hideAllIcon: 'radio_button_unchecked',
        showIcon: 'check_box',
        hideIcon: 'check_box_outline_blank',
        columnDeleteIcon: 'delete',
        emptyStateIcon: 'person_off'
    },
    tooltips: {
        search: 'Search',
        addRow: 'Add New Row',
        insertRowAbove: 'Insert Row Above',
        insertRowBelow: 'Insert Row Below',
        deleteRows: 'Delete Selected',
        insertColumn: 'Insert Column',
        toggleColumns: 'Toggle Columns',
        export: 'Export',
        print: 'Print',
        editRow: 'Edit',
        deleteRow: 'Delete',
        insertAboveRow: 'Insert Above',
        insertBelowRow: 'Insert Below',
        showAll: 'Show All',
        hideAll: 'Hide All',
        deleteColumn: 'Delete Column',
        resizeColumn: 'Drag to resize'
    },
    rowActions: {
        enableEdit: true,
        enableDelete: true,
        enableInsertAbove: true,
        enableInsertBelow: true
    },
    sizing: {
        rowHeight: 44,
        headerHeight: 56,
        toolbarHeight: 56,
        cellPadding: '10px 12px',
        headerCellPadding: '10px 12px',
        borderRadius: '10px'
    },
    typography: {
        headerFontSize: '13px',
        headerFontWeight: 600,
        cellFontSize: '0.875rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif'
    },
    darkMode: {
        enabled: false,
        headerBg: '#1f2937',
        rowBg: '#111827',
        rowHoverBg: '#1f2937',
        text: '#e5e7eb',
        border: '#374151'
    }
};
/**
 * Merge config with defaults
 */
function mergeTableConfig(customConfig) {
    return {
        colors: { ...DEFAULT_TABLE_CONFIG.colors, ...customConfig?.colors },
        icons: { ...DEFAULT_TABLE_CONFIG.icons, ...customConfig?.icons },
        tooltips: { ...DEFAULT_TABLE_CONFIG.tooltips, ...customConfig?.tooltips },
        rowActions: { ...DEFAULT_TABLE_CONFIG.rowActions, ...customConfig?.rowActions },
        sizing: { ...DEFAULT_TABLE_CONFIG.sizing, ...customConfig?.sizing },
        typography: { ...DEFAULT_TABLE_CONFIG.typography, ...customConfig?.typography },
        darkMode: { ...DEFAULT_TABLE_CONFIG.darkMode, ...customConfig?.darkMode }
    };
}

const DEFAULT_FEATURE_CONFIG = {
    add: false,
    delete: false,
    selection: false,
    inlineEdit: false,
    print: false,
    search: true,
    columnToggle: true
};
const DEFAULT_DISPLAY_CONFIG = {
    maxHeight: 400,
    rowHeight: 44,
    headerHeight: 56,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
    paginated: true
};

function ReusableTableComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleSearch()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.search || "Search");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.searchIcon || "search");
} }
function ReusableTableComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "input", 22, 2);
    i0.ɵɵlistener("input", function ReusableTableComponent_div_4_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r4); const searchInput_r5 = i0.ɵɵreference(2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSearch(searchInput_r5.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clearSearch()); });
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r2.searchInputValue);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.icons.closeIcon || "close");
} }
function ReusableTableComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onAdd()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.addRow || "Add New Row");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.addIcon || "add");
} }
function ReusableTableComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.insertRowAbove()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.insertRowAbove || "Insert Row Above");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.insertAboveIcon || "arrow_upward");
} }
function ReusableTableComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.insertRowBelow()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.insertRowBelow || "Insert Row Below");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.insertBelowIcon || "arrow_downward");
} }
function ReusableTableComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDeleteSelected()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.selectedRows.size === 0)("matTooltip", ctx_r2.tooltips.deleteRows || "Delete Selected");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.deleteIcon || "delete");
} }
function ReusableTableComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleColumnPanel()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const columnMenu_r11 = i0.ɵɵreference(19);
    i0.ɵɵproperty("matMenuTriggerFor", columnMenu_r11)("matTooltip", ctx_r2.tooltips.toggleColumns || "Toggle Columns");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.columnToggleIcon || "view_column");
} }
function ReusableTableComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 27)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const exportMenu_r12 = i0.ɵɵreference(33);
    i0.ɵɵproperty("matMenuTriggerFor", exportMenu_r12)("matTooltip", ctx_r2.tooltips.export || "Export");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.exportIcon || "file_download");
} }
function ReusableTableComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.printTable()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.print || "Print");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.printIcon || "print");
} }
function ReusableTableComponent_div_15_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 38)(1, "mat-checkbox", 39);
    i0.ɵɵlistener("change", function ReusableTableComponent_div_15_ng_container_2_th_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.toggleSelectAll($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r2.allRowsSelected);
} }
function ReusableTableComponent_div_15_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 40)(1, "mat-checkbox", 39);
    i0.ɵɵlistener("change", function ReusableTableComponent_div_15_ng_container_2_td_2_Template_mat_checkbox_change_1_listener() { const row_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.toggleRowSelection(row_r16)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r2.isRowSelected(row_r16));
} }
function ReusableTableComponent_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 35);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_2_th_1_Template, 2, 1, "th", 36)(2, ReusableTableComponent_div_15_ng_container_2_td_2_Template, 2, 1, "td", 37);
    i0.ɵɵelementContainerEnd();
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 49);
    i0.ɵɵlistener("input", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_input_5_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r17); const col_r18 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.applyColumnFilter(col_r18.key, $event)); })("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_input_5_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r17); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵlistener("mousedown", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_div_6_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r19); const col_r18 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.startColumnResize($event, col_r18)); });
    i0.ɵɵelementEnd();
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 44)(1, "div", 45)(2, "div", 46)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_input_5_Template, 1, 0, "input", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_div_6_Template, 1, 0, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r2.getColumnWidth(col_r18));
    i0.ɵɵclassProp("sortable", col_r18.sortable)("sticky-action-column", ctx_r2.enableStickyActions && col_r18.type === "action");
    i0.ɵɵproperty("mat-sort-header", col_r18.sortable ? col_r18.key : null);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(col_r18.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.filterable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.enableColumnResize && col_r18.key !== "selection" && col_r18.type !== "action");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(7); i0.ɵɵtwoWayBindingSet(ctx_r2.editingValue, $event) || (ctx_r2.editingValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_input_1_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r21); const row_r22 = i0.ɵɵnextContext(3).$implicit; const col_r18 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.saveInlineEdit(row_r22, col_r18)); })("keyup.escape", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_input_1_Template_input_keyup_escape_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r2.cancelInlineEdit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editingValue);
    i0.ɵɵproperty("type", col_r18.inputType || "text");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_textarea_2_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r2 = i0.ɵɵnextContext(7); i0.ɵɵtwoWayBindingSet(ctx_r2.editingValue, $event) || (ctx_r2.editingValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_textarea_2_Template_textarea_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r23); const row_r22 = i0.ɵɵnextContext(3).$implicit; const col_r18 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.saveInlineEdit(row_r22, col_r18)); })("keyup.escape", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_textarea_2_Template_textarea_keyup_escape_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r2 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r2.cancelInlineEdit()); });
    i0.ɵɵtext(1, "              ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editingValue);
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r25 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r25.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r25.label, " ");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(7); i0.ɵɵtwoWayBindingSet(ctx_r2.editingValue, $event) || (ctx_r2.editingValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r24); const row_r22 = i0.ɵɵnextContext(3).$implicit; const col_r18 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.saveInlineEdit(row_r22, col_r18)); })("blur", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_Template_select_blur_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r2.cancelInlineEdit()); });
    i0.ɵɵelementStart(1, "option", 64);
    i0.ɵɵtext(2, "-- Select --");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_option_3_Template, 2, 2, "option", 65);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editingValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", col_r18.options)("ngForTrackBy", ctx_r2.trackByRowIndex);
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_input_1_Template, 1, 2, "input", 55)(2, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_textarea_2_Template, 2, 1, "textarea", 56)(3, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_select_3_Template, 4, 4, "select", 57);
    i0.ɵɵelementStart(4, "div", 58)(5, "button", 59);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r20); const row_r22 = i0.ɵɵnextContext(2).$implicit; const col_r18 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.saveInlineEdit(row_r22, col_r18)); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "check");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 60);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r20); const ctx_r2 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r2.cancelInlineEdit()); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.inputType !== "select" && col_r18.inputType !== "textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.inputType === "textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.inputType === "select");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 69);
    i0.ɵɵtext(1, " edit ");
    i0.ɵɵelementEnd();
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("dblclick", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r26 = i0.ɵɵnextContext(2); const row_r22 = ctx_r26.$implicit; const rowIndex_r28 = ctx_r26.index; const col_r18 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onCellDoubleClick(row_r22, col_r18, rowIndex_r28, $event)); })("mouseenter", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r26); const rowIndex_r28 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.editingHoveredRow = rowIndex_r28); })("mouseleave", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r2.editingHoveredRow = null); });
    i0.ɵɵelementStart(1, "span", 67);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_mat_icon_3_Template, 2, 0, "mat-icon", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    const row_r22 = ctx_r26.$implicit;
    const rowIndex_r28 = ctx_r26.index;
    const col_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("editable-cell", col_r18.editable && ctx_r2.enableInlineEdit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r22[col_r18.key]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.editable && ctx_r2.enableInlineEdit && ctx_r2.editingHoveredRow === rowIndex_r28);
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_3_Template, 11, 3, "div", 52)(4, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_div_4_Template, 4, 4, "div", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const rowIndex_r28 = i0.ɵɵnextContext().index;
    const col_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r18.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.enableInlineEdit && ctx_r2.isEditingCell(rowIndex_r28, col_r18.key));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.enableInlineEdit || !ctx_r2.isEditingCell(rowIndex_r28, col_r18.key));
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const row_r22 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.onActionClicked("edit", row_r22)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.editRow || "Edit");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.editIcon || "edit");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const row_r22 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.onActionClicked("delete", row_r22)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.deleteRow || "Delete");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.deleteIcon || "delete");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const row_r22 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.onActionClicked("insertAbove", row_r22)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.insertAboveRow || "Insert Above");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.insertAboveIcon || "arrow_upward");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); const row_r22 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.onActionClicked("insertBelow", row_r22)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("matTooltip", ctx_r2.tooltips.insertBelowRow || "Insert Below");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.icons.insertBelowIcon || "arrow_downward");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_8_Template_button_click_0_listener() { const action_r34 = i0.ɵɵrestoreView(_r33).$implicit; const row_r22 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.onActionClicked(action_r34.action, row_r22)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r34 = ctx.$implicit;
    i0.ɵɵproperty("matTooltip", action_r34.label)("ngClass", action_r34.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r34.icon);
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 70);
    i0.ɵɵtemplate(4, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_4_Template, 3, 2, "button", 71)(5, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_5_Template, 3, 2, "button", 72)(6, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_6_Template, 3, 2, "button", 71)(7, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_7_Template, 3, 2, "button", 71)(8, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_button_8_Template, 3, 3, "button", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r18.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.rowActions.enableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.rowActions.enableDelete);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.rowActions.enableInsertAbove);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.rowActions.enableInsertBelow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.actions)("ngForTrackBy", ctx_r2.trackByActionId);
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 40);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_1_Template, 5, 3, "ng-container", 32)(2, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_ng_container_2_Template, 9, 7, "ng-container", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r2.getColumnWidth(col_r18));
    i0.ɵɵclassProp("cell-value", col_r18.key !== "Actions")("sticky-action-column", ctx_r2.enableStickyActions && col_r18.type === "action" && ctx_r2.showActionColumn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.type !== "action");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.type === "action");
} }
function ReusableTableComponent_div_15_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_3_ng_container_1_th_1_Template, 7, 10, "th", 42)(2, ReusableTableComponent_div_15_ng_container_3_ng_container_1_td_2_Template, 3, 8, "td", 43);
    i0.ɵɵelementContainerEnd();
} }
function ReusableTableComponent_div_15_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 41);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r18 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matColumnDef", col_r18.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r18.type !== "action" || ctx_r2.showActionColumn);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 78);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", col_r35 !== "Actions" ? col_r35 : "Actions", " ");
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r36 = i0.ɵɵnextContext().$implicit;
    const col_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r35);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r36[col_r35]);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_2_button_4_Template_button_click_0_listener() { const action_r38 = i0.ɵɵrestoreView(_r37).$implicit; const row_r36 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.onActionClicked(action_r38.action, row_r36)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r38 = ctx.$implicit;
    i0.ɵɵproperty("matTooltip", action_r38.label)("ngClass", action_r38.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r38.icon);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 70);
    i0.ɵɵtemplate(4, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_2_button_4_Template, 3, 3, "button", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r35 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r35);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.actions);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 70)(4, "button", 80);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r39); const row_r36 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.onActionClicked("Edit", row_r36)); });
    i0.ɵɵelementStart(5, "mat-icon", 81);
    i0.ɵɵtext(6, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 82);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r39); const row_r36 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.onActionClicked("RoleRights", row_r36)); });
    i0.ɵɵelementStart(8, "mat-icon", 83);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 84);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_3_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r39); const row_r36 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.onActionClicked("ResetPassword", row_r36)); });
    i0.ɵɵelementStart(11, "mat-icon", 85);
    i0.ɵɵtext(12, "lock_reset");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r35 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r35);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 40);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_1_Template, 5, 2, "ng-container", 32)(2, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_2_Template, 5, 2, "ng-container", 32)(3, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_ng_container_3_Template, 13, 1, "ng-container", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r35 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r35 !== "Actions");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r35 === "Actions" && ctx_r2.actions.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r35 === "Actions" && ctx_r2.actions.length === 0);
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_th_1_Template, 2, 1, "th", 77)(2, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_td_2_Template, 4, 3, "td", 37);
    i0.ɵɵelementContainerEnd();
} }
function ReusableTableComponent_div_15_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 41);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_4_ng_container_1_ng_container_1_Template, 3, 0, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r35 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", col_r35);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showActionColumn || col_r35 !== "Actions");
} }
function ReusableTableComponent_div_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ReusableTableComponent_div_15_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.displayedColumns)("ngForTrackBy", ctx_r2.trackByString);
} }
function ReusableTableComponent_div_15_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 86);
} }
function ReusableTableComponent_div_15_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 87);
    i0.ɵɵlistener("click", function ReusableTableComponent_div_15_tr_6_Template_tr_click_0_listener() { const row_r41 = i0.ɵɵrestoreView(_r40).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onRowClick(row_r41)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected-row", ctx_r2.isRowSelected(row_r41));
} }
function ReusableTableComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "table", 29);
    i0.ɵɵtemplate(2, ReusableTableComponent_div_15_ng_container_2_Template, 3, 0, "ng-container", 30)(3, ReusableTableComponent_div_15_ng_container_3_Template, 2, 2, "ng-container", 31)(4, ReusableTableComponent_div_15_ng_container_4_Template, 2, 2, "ng-container", 32)(5, ReusableTableComponent_div_15_tr_5_Template, 1, 0, "tr", 33)(6, ReusableTableComponent_div_15_tr_6_Template, 1, 2, "tr", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r2.tableMaxHeight, "px");
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r2.dataSource);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.enableRowSelection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.columns)("ngForTrackBy", ctx_r2.trackByColumnKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.columns.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matHeaderRowDef", ctx_r2.columns.length > 0 ? ctx_r2.columnsToDisplay : ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r2.columns.length > 0 ? ctx_r2.columnsToDisplay : ctx_r2.displayedColumns);
} }
function ReusableTableComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88)(1, "div", 89)(2, "mat-icon", 90);
    i0.ɵɵtext(3, "person_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 91);
    i0.ɵɵtext(5, "No data available");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r2.tableMaxHeight, "px");
} }
function ReusableTableComponent_mat_paginator_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-paginator", 92);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pageSizeOptions", ctx_r2.pageSizeOptions)("pageSize", ctx_r2.pageSize);
} }
function ReusableTableComponent_button_31_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "check_box");
    i0.ɵɵelementEnd();
} }
function ReusableTableComponent_button_31_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "check_box_outline_blank");
    i0.ɵɵelementEnd();
} }
function ReusableTableComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function ReusableTableComponent_button_31_Template_button_click_0_listener() { const col_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleColumn(col_r43)); });
    i0.ɵɵtemplate(1, ReusableTableComponent_button_31_mat_icon_1_Template, 2, 0, "mat-icon", 32)(2, ReusableTableComponent_button_31_mat_icon_2_Template, 2, 0, "mat-icon", 32);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const col_r43 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !col_r43.hidden);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r43.hidden);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r43.label);
} }
/**
 * ReusableTableComponent
 * Enterprise-grade configurable table component with dynamic columns, actions,
 * export (Excel/PDF/CSV), printing, column toggle, inline filtering, and more.
 * Fully generic and production-ready.
 */
class ReusableTableComponent {
    destroyRef = inject(DestroyRef);
    dialog = inject(MatDialog);
    snackBar = inject(MatSnackBar);
    cdr = inject(ChangeDetectorRef);
    elementRef = inject(ElementRef);
    renderer = inject(Renderer2);
    // ───────────────────────── CONFIGURATION ─────────────────────────
    /** Fully customizable table configuration */
    config;
    /** Resolved config (defaults + custom) */
    tableConfig = DEFAULT_TABLE_CONFIG;
    // ───────────────────────── INPUTS: NEW CONFIGURABLE COLUMNS & ACTIONS ─────────────────────────
    /** Dynamic column configuration (replaces hardcoded displayedColumns) */
    columns = [];
    /** Dynamic action buttons configuration */
    actions = [];
    /** Enable/disable export to Excel */
    enableExport = true;
    /** Enable/disable print functionality */
    enablePrint = true;
    /** Enable/disable column toggle feature */
    enableColumnToggle = true;
    /** Enable/disable add row button */
    enableAdd = false;
    /** Enable/disable delete row button */
    enableDelete = false;
    /** Enable/disable row selection checkboxes */
    enableRowSelection = false;
    /** Show/hide the action column */
    showActionColumn = true;
    /** Enable/disable inline editing */
    enableInlineEdit = false;
    /** Enable/disable column dragging for reorder */
    enableColumnDrag = false;
    /** Enable/disable column resize */
    enableColumnResize = true;
    /** Enable/disable sticky action column (stays visible when scrolling) */
    enableStickyActions = true;
    /** Enable/disable virtual scrolling for large datasets */
    enableVirtualScroll = false;
    /** Server-side pagination enabled */
    serverSidePagination = false;
    /** Backend pagination config */
    backendPaginationUrl = '';
    // ───────────────────────── INPUTS: LEGACY (for backward compatibility) ─────────────────────────
    // ───────────────────────── INPUTS: NEW CONTROLLED ARCHITECTURE ─────────────────────────
    /** Controlled data input */
    data = [];
    /** Feature configuration */
    featureConfig = DEFAULT_FEATURE_CONFIG;
    /** Display configuration */
    displayConfig = DEFAULT_DISPLAY_CONFIG;
    // ───────────────────────── INPUTS: LEGACY (BACKWARD COMPATIBILITY) ─────────────────────────
    /** Array of column names to display in the table (LEGACY) */
    displayedColumns = [];
    /** Maximum height of the table container in pixels */
    tableMaxHeight = 400;
    /** Height of each row in pixels */
    rowHeight = 44;
    /** Height of the table header in pixels */
    headerHeight = 56;
    /** Search term to filter table data */
    searchTerm = '';
    /** Custom filter predicate function */
    filterPredicate = null;
    /** Page size for pagination */
    pageSize = 10;
    /** Page size options for paginator */
    pageSizeOptions = [5, 10, 25, 50];
    /** Enable/disable pagination */
    showPaginator = true;
    // ───────────────────────── OUTPUTS ─────────────────────────
    /** Single unified event emitter */
    events = new EventEmitter();
    /** Legacy outputs for backward compatibility */
    tableActionTriggered = new EventEmitter();
    rowEditClicked = new EventEmitter();
    rowSelected = new EventEmitter();
    searchChanged = new EventEmitter();
    actionClicked = new EventEmitter();
    inlineEditChange = new EventEmitter();
    serverDataRequested = new EventEmitter();
    // ───────────────────────── STATE ─────────────────────────
    dataSource = new MatTableDataSource([]);
    showSearch = false;
    searchInputValue = '';
    selectedRows = new Set();
    showColumnPanel = false;
    columnFilters = new Map();
    editingHoveredRow = null;
    // ───────────────────────── COLUMN INSERTION DIALOG STATE ─────────────────────────
    showInsertColumnDialog = false;
    newColumnName = '';
    newColumnLabel = '';
    // ───────────────────────── ADVANCED FEATURES STATE ─────────────────────────
    /** Track inline edit mode */
    editingCell = null;
    editingValue = null;
    /** Track column order for drag-to-reorder */
    columnOrder = [];
    draggedColumn = null;
    /** Advanced filters */
    advancedFilters = new Map();
    // ───────────────────────── COLUMN RESIZE STATE ─────────────────────────
    /** Track column being resized */
    resizingColumn = null;
    resizeStartX = 0;
    resizeStartWidth = 0;
    /** Store column widths */
    columnWidths = new Map();
    // ───────────────────────── VIRTUAL SCROLL & PAGINATION STATE ─────────────────────────
    /** Current server-side pagination state */
    currentPageIndex = 0;
    currentPageSize = 10;
    totalRecordCount = 0;
    isLoadingServerData = false;
    /** Virtual scroll buffer */
    virtualScrollBuffer = 5;
    // ───────────────────────── TABLE SORT & PAGINATOR ─────────────────────────
    sort;
    paginator;
    ngOnInit() {
        // Merge custom config with defaults (legacy)
        this.tableConfig = mergeTableConfig(this.config);
        // Apply CSS variables for dynamic theming
        this.applyCSSVariables();
        this.initializeFilterPredicate();
        // Sync controlled data input
        this.dataSource.data = this.data;
    }
    ngOnChanges(changes) {
        // Update dataSource when controlled data input changes
        if (changes['data']) {
            this.dataSource.data = this.data;
        }
    }
    /**
     * Apply CSS variables for complete theme customization
     */
    applyCSSVariables() {
        const root = this.elementRef.nativeElement;
        const vars = this.tableConfig.colors || {};
        const sizing = this.tableConfig.sizing || {};
        const typography = this.tableConfig.typography || {};
        const darkMode = this.tableConfig.darkMode || {};
        // Colors
        this.renderer.setStyle(root, '--color-primary', vars.primary);
        this.renderer.setStyle(root, '--color-neutral', vars.neutral);
        this.renderer.setStyle(root, '--color-border', vars.border);
        this.renderer.setStyle(root, '--color-toolbar-bg', vars.toolbarBg);
        this.renderer.setStyle(root, '--color-toolbar-text', vars.toolbarText);
        this.renderer.setStyle(root, '--color-header-bg', vars.headerBg);
        this.renderer.setStyle(root, '--color-header-text', vars.headerText);
        this.renderer.setStyle(root, '--color-header-border', vars.headerBorder);
        this.renderer.setStyle(root, '--color-row-bg', vars.rowBg);
        this.renderer.setStyle(root, '--color-row-hover-bg', vars.rowHoverBg);
        this.renderer.setStyle(root, '--color-row-border', vars.rowBorder);
        this.renderer.setStyle(root, '--color-cell-text', vars.cellText);
        this.renderer.setStyle(root, '--color-selected-row-bg', vars.selectedRowBg);
        this.renderer.setStyle(root, '--color-input-bg', vars.inputBg);
        this.renderer.setStyle(root, '--color-input-border', vars.inputBorder);
        this.renderer.setStyle(root, '--color-input-text', vars.inputText);
        this.renderer.setStyle(root, '--color-input-placeholder', vars.inputPlaceholder);
        this.renderer.setStyle(root, '--color-button-hover-bg', vars.buttonHoverBg);
        this.renderer.setStyle(root, '--color-danger', vars.dangerColor);
        this.renderer.setStyle(root, '--color-success', vars.successColor);
        this.renderer.setStyle(root, '--color-warning', vars.warningColor);
        this.renderer.setStyle(root, '--color-filter-input-bg', vars.filterInputBg);
        this.renderer.setStyle(root, '--color-filter-input-border', vars.filterInputBorder);
        this.renderer.setStyle(root, '--color-filter-input-text', vars.filterInputText);
        // Sizing
        this.renderer.setStyle(root, '--size-row-height', `${sizing.rowHeight}px`);
        this.renderer.setStyle(root, '--size-header-height', `${sizing.headerHeight}px`);
        this.renderer.setStyle(root, '--size-toolbar-height', `${sizing.toolbarHeight}px`);
        this.renderer.setStyle(root, '--size-cell-padding', sizing.cellPadding);
        this.renderer.setStyle(root, '--size-header-padding', sizing.headerCellPadding);
        this.renderer.setStyle(root, '--size-border-radius', sizing.borderRadius);
        // Typography
        this.renderer.setStyle(root, '--font-header-size', typography.headerFontSize);
        this.renderer.setStyle(root, '--font-header-weight', typography.headerFontWeight);
        this.renderer.setStyle(root, '--font-cell-size', typography.cellFontSize);
        this.renderer.setStyle(root, '--font-family', typography.fontFamily);
        // Dark Mode
        this.renderer.setStyle(root, '--dark-mode-enabled', darkMode.enabled ? '1' : '0');
        this.renderer.setStyle(root, '--dark-header-bg', darkMode.headerBg);
        this.renderer.setStyle(root, '--dark-row-bg', darkMode.rowBg);
        this.renderer.setStyle(root, '--dark-row-hover-bg', darkMode.rowHoverBg);
        this.renderer.setStyle(root, '--dark-text', darkMode.text);
        this.renderer.setStyle(root, '--dark-border', darkMode.border);
    }
    ngAfterViewInit() {
        this.attachSort();
        this.attachPaginator();
        this.attachServerPaginator();
    }
    /**
     * Initialize the default filter predicate for searching across all columns
     */
    initializeFilterPredicate() {
        if (this.filterPredicate) {
            this.dataSource.filterPredicate = this.filterPredicate;
        }
        else {
            // Default filter predicate: search across all displayed columns
            this.dataSource.filterPredicate = (data, filter) => {
                const columnsToSearch = this.columns.length > 0
                    ? this.columns.filter(c => !c.hidden && c.key !== 'Actions').map(c => c.key)
                    : this.displayedColumns.filter(col => col !== 'Actions');
                let matchFound = false;
                for (let element of columnsToSearch) {
                    if (element in data) {
                        if (data[element]) {
                            matchFound = (matchFound ||
                                data[element].toString().trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);
                        }
                    }
                }
                return matchFound;
            };
        }
    }
    /**
     * Attach MatSort to the table
     */
    attachSort() {
        if (this.sort) {
            this.dataSource.sort = this.sort;
        }
    }
    /**
     * Attach MatPaginator to the table
     */
    attachPaginator() {
        if (this.paginator && this.showPaginator && !this.serverSidePagination) {
            this.dataSource.paginator = this.paginator;
        }
    }
    /**
     * Attach server-side pagination handler to paginator
     */
    attachServerPaginator() {
        if (this.paginator && this.serverSidePagination) {
            // Set initial paginator state
            if (this.pageSize && this.pageSize > 0) {
                this.paginator.pageSize = this.pageSize;
                this.currentPageSize = this.pageSize;
            }
            // Listen to page events and request server data
            this.paginator.page.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
                this.currentPageIndex = event.pageIndex;
                this.currentPageSize = event.pageSize;
                this.isLoadingServerData = true;
                this.requestServerData(this.currentPageIndex, this.currentPageSize);
            });
            // Initial request if server-side pagination is enabled
            if (this.dataSource.data.length === 0) {
                this.isLoadingServerData = true;
                this.requestServerData(this.currentPageIndex, this.currentPageSize);
            }
        }
    }
    /**
     * Get columns to display - uses new Column config or falls back to legacy displayedColumns
     */
    get columnsToDisplay() {
        let cols = this.columns
            .filter(c => !c.hidden && (c.type !== 'action' || this.showActionColumn))
            .map(c => c.key);
        if (this.enableRowSelection && !cols.includes('selection')) {
            cols = ['selection', ...cols];
        }
        return cols;
    }
    /**
     * Update the displayed columns array (for internal updates)
     */
    updateDisplayedColumns() {
        // Force change detection by recreating the array
        const newCols = [...this.columnsToDisplay];
        // This will trigger the getter and update the table
        this.dataSource.data = [...this.dataSource.data];
    }
    /**
     * Get visible columns for the template
     */
    get visibleColumns() {
        return this.columns.filter(c => !c.hidden);
    }
    // ───────────────────────── CONFIG GETTERS FOR TEMPLATE ─────────────────────────
    /** Get configured icons */
    get icons() {
        return this.tableConfig.icons || {};
    }
    /** Get configured tooltips */
    get tooltips() {
        return this.tableConfig.tooltips || {};
    }
    /** Get configured colors */
    get colors() {
        return this.tableConfig.colors || {};
    }
    /** Get configured row actions */
    get rowActions() {
        return this.tableConfig.rowActions || {};
    }
    /**
     * Toggle search input visibility
     */
    toggleSearch() {
        this.showSearch = !this.showSearch;
        if (!this.showSearch) {
            this.clearSearch();
        }
    }
    /**
     * Clear search and reset filter
     */
    clearSearch() {
        this.searchInputValue = '';
        this.dataSource.filter = '';
        this.showSearch = false;
        this.searchChanged.emit('');
    }
    /**
     * Handle search input and apply filter
     */
    onSearch(value) {
        this.searchInputValue = value;
        this.dataSource.filter = value.trim().toLowerCase();
        this.searchChanged.emit(value);
    }
    /**
     * Handle row click
     */
    onRowClick(row) {
        this.events.emit({ type: 'rowClicked', row });
        this.rowEditClicked.emit(row); // Legacy
    }
    /**
     * Handle action button clicks (both built-in row actions and custom actions)
     */
    onActionClicked(action, row) {
        // Handle built-in row actions
        switch (action) {
            case 'edit':
                // Emit edit event - parent component can handle full row edit
                this.rowEditClicked.emit(row);
                this.tableActionTriggered.emit({ action: 'edit', row });
                break;
            case 'delete':
                // Delete single row with confirmation
                this.deleteRow(row);
                return; // deleteRow handles its own markForCheck
            case 'insertAbove':
                // Insert row above the current row
                this.events.emit({ type: 'insertAbove', row });
                this.cdr.markForCheck();
                return;
            case 'insertBelow':
                // Insert row below the current row
                this.events.emit({ type: 'insertBelow', row });
                this.cdr.markForCheck();
                return;
            default:
                // Emit custom action
                this.actionClicked.emit({ action, row });
                this.tableActionTriggered.emit({ action, row });
        }
        this.cdr.markForCheck();
    }
    /**
     * Select a user row and emit event
     */
    selectRow(row) {
        this.rowSelected.emit(row);
    }
    /**
     * Get row ID from various possible field names
     */
    getRowId(row) {
        return row.Users_Id ?? row.UsersId ?? row.Id ?? 0;
    }
    /**
     * Get row name from various possible field names
     */
    getRowName(row) {
        return row.UserName ?? row['User Name'] ?? row.LoginName ?? '';
    }
    /**
     * Update table data source
     */
    updateDataSource(data) {
        this.dataSource.data = data;
        setTimeout(() => {
            this.attachSort();
            this.attachPaginator();
        });
    }
    // ───────────────────────── COLUMN TOGGLE ─────────────────────────
    /**
     * Toggle column visibility
     */
    toggleColumn(column) {
        column.hidden = !column.hidden;
    }
    /**
     * Toggle the column panel
     */
    toggleColumnPanel() {
        this.showColumnPanel = !this.showColumnPanel;
    }
    /**
     * Show all columns
     */
    showAllColumns() {
        this.columns.forEach(col => col.hidden = false);
    }
    /**
     * Hide all columns
     */
    hideAllColumns() {
        this.columns.forEach(col => col.hidden = true);
    }
    // ───────────────────────── ROW SELECTION ─────────────────────────
    /**
     * Toggle row selection
     */
    toggleRowSelection(row) {
        if (this.selectedRows.has(row)) {
            this.selectedRows.delete(row);
        }
        else {
            this.selectedRows.add(row);
        }
        this.events.emit({ type: 'selectionChanged', rows: Array.from(this.selectedRows) });
    }
    /**
     * Toggle select all rows
     */
    toggleSelectAll(event) {
        if (event.checked) {
            this.dataSource.data.forEach(row => this.selectedRows.add(row));
        }
        else {
            this.selectedRows.clear();
        }
        this.events.emit({ type: 'selectionChanged', rows: Array.from(this.selectedRows) });
    }
    /**
     * Check if row is selected
     */
    isRowSelected(row) {
        return this.selectedRows.has(row);
    }
    /**
     * Check if all rows are selected
     */
    get allRowsSelected() {
        return this.dataSource.data.length > 0 && this.selectedRows.size === this.dataSource.data.length;
    }
    // ───────────────────────── ADD / DELETE ROWS ─────────────────────────
    /**
     * Emit add row event
     */
    onAdd() {
        this.events.emit({ type: 'add' });
        // Legacy support
        this.tableActionTriggered.emit({ action: 'add', row: null });
    }
    /**
     * Insert row above selected row (if single row selected)
     */
    insertRowAbove() {
        if (this.selectedRows.size === 1) {
            const selectedRow = Array.from(this.selectedRows)[0];
            this.events.emit({ type: 'insertAbove', row: selectedRow });
        }
    }
    /**
     * Insert row below selected row (if single row selected)
     */
    insertRowBelow() {
        if (this.selectedRows.size === 1) {
            const selectedRow = Array.from(this.selectedRows)[0];
            this.events.emit({ type: 'insertBelow', row: selectedRow });
        }
    }
    /**
     * Insert row at specific index
     * @deprecated Use events emitter instead - parent controls data
     */
    insertRowAt(index) {
        // Emit event - parent handles mutations
        const newRow = this.createEmptyRow();
        this.events.emit({ type: 'add', row: newRow });
    }
    /**
     * Create an empty row object with default values or empty strings for editing
     */
    createEmptyRow() {
        const row = {};
        let itemCount = 1;
        if (this.columns.length > 0) {
            this.columns.forEach((col, index) => {
                if (col.type !== 'action') {
                    let value = col.defaultValue ?? this.getDefaultValue(col);
                    // For text columns, add placeholder if empty
                    if (col.type === 'text' && !value) {
                        const colKeyLower = col.key.toLowerCase();
                        // Smart defaults based on column name
                        if (colKeyLower.includes('name') || colKeyLower.includes('title')) {
                            value = 'New Item';
                        }
                        else if (colKeyLower.includes('email')) {
                            value = '';
                        }
                        else if (colKeyLower.includes('status')) {
                            value = 'Pending';
                        }
                        else if (col.editable) {
                            value = '-'; // Indicates empty/editable
                        }
                        else {
                            value = '';
                        }
                    }
                    row[col.key] = value;
                }
            });
        }
        else {
            // Fallback for legacy displayedColumns
            this.displayedColumns.forEach(col => {
                if (col !== 'Actions') {
                    row[col] = '-';
                }
            });
        }
        return row;
    }
    /**
     * Get default value based on column type
     */
    getDefaultValue(col) {
        switch (col.type) {
            case 'date': return new Date().toLocaleDateString();
            case 'number': return 0;
            default: return '';
        }
    }
    /**
     * Delete selected rows
     */
    onDeleteSelected() {
        console.log("dle");
        if (this.selectedRows.size === 0) {
            this.showToast('Select rows to delete', 'info');
            return;
        }
        this.events.emit({
            type: 'deleteSelected',
            rows: Array.from(this.selectedRows)
        });
    }
    /**
     * Delete single row with confirmation dialog
     */
    deleteRow(row) {
        const dialogData = {
            title: 'Delete Row',
            message: 'Are you sure you want to delete this row? This action cannot be undone.',
            okText: 'Delete',
            cancelText: 'Cancel',
            isAlert: false
        };
        const dialogRef = this.dialog.open(TableConfirmDialogComponent, {
            data: dialogData,
            width: '400px',
            disableClose: false
        });
        dialogRef.afterClosed().subscribe(confirmed => {
            if (confirmed) {
                // Emit event - parent handles data mutation
                this.events.emit({ type: 'delete', row });
                this.selectedRows.delete(row);
                this.selectedRows.clear();
                this.cdr.markForCheck();
            }
        });
    }
    /**
     * Insert column - DISABLED for controlled component pattern
     * Column manipulation must be handled by parent component
     */
    insertColumn() {
        // Feature disabled - table must remain controlled by parent
    }
    /**
     * Confirm column insertion - DISABLED for controlled component pattern
     */
    confirmInsertColumn() {
        // Feature disabled - table must remain controlled by parent
    }
    /**
     * Cancel column insertion
     */
    cancelInsertColumn() {
        this.showInsertColumnDialog = false;
        this.newColumnName = '';
        this.newColumnLabel = '';
    }
    /**
     * Delete column - DISABLED for controlled component pattern
     * Column manipulation must be handled by parent component
     */
    deleteColumn(column) {
        // Feature disabled - table must remain controlled by parent
    }
    // ───────────────────────── FILTERING ─────────────────────────
    /**
     * Apply column-level filter
     */
    applyColumnFilter(columnKey, event) {
        const filterValue = event.target?.value || event || '';
        if (filterValue) {
            this.columnFilters.set(columnKey, filterValue.toLowerCase());
        }
        else {
            this.columnFilters.delete(columnKey);
        }
        this.applyFilters();
    }
    /**
     * Apply all active filters
     */
    applyFilters() {
        this.dataSource.filterPredicate = (data) => {
            // Global search filter
            if (this.searchInputValue) {
                const searchLower = this.searchInputValue.toLowerCase();
                const columnsToSearch = this.columns.length > 0
                    ? this.columns.filter(c => !c.hidden && c.key !== 'Actions').map(c => c.key)
                    : this.displayedColumns.filter(col => col !== 'Actions');
                let globalMatch = false;
                for (let col of columnsToSearch) {
                    if (data[col]?.toString().toLowerCase().includes(searchLower)) {
                        globalMatch = true;
                        break;
                    }
                }
                if (!globalMatch)
                    return false;
            }
            // Column-level filters
            for (let [columnKey, filterValue] of this.columnFilters) {
                if (!data[columnKey]?.toString().toLowerCase().includes(filterValue)) {
                    return false;
                }
            }
            return true;
        };
        this.dataSource.filter = this.searchInputValue + JSON.stringify(Array.from(this.columnFilters.entries()));
    }
    // ───────────────────────── EXPORT FUNCTIONS ─────────────────────────
    /**
     * Export table data to Excel (excludes action columns)
     */
    async exportExcel() {
        try {
            const xlsx = await import('xlsx');
            const data = this.dataSource.filteredData;
            // Exclude action columns
            const exportColumns = this.columns.length > 0
                ? this.columns.filter(c => c.type !== 'action')
                : this.displayedColumns.filter(col => col !== 'Actions');
            // Format data to match UI display - use consistent key/label
            const exportData = data.map(row => {
                const newRow = {};
                exportColumns.forEach(col => {
                    const key = typeof col === 'string' ? col : col.key;
                    const label = typeof col === 'string' ? col : (col.label || col.key);
                    let value = row[key];
                    // Format dates and numbers to match UI
                    if (value instanceof Date) {
                        value = value.toLocaleDateString();
                    }
                    else if (typeof value === 'number') {
                        value = value.toString();
                    }
                    // Use key consistently for cleaner data
                    newRow[key] = value;
                });
                return newRow;
            });
            const worksheet = xlsx.utils.json_to_sheet(exportData);
            // Auto-fit column widths
            const columnWidths = Object.keys(exportData[0] || {}).map(key => ({
                wch: Math.max(15, key.length + 2)
            }));
            worksheet['!cols'] = columnWidths;
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            xlsx.writeFile(workbook, `table-export-${new Date().getTime()}.xlsx`);
        }
        catch (error) {
            console.error('Error exporting to Excel:', error);
        }
    }
    /**
     * Export table data to CSV (excludes action columns)
     */
    exportCSV() {
        try {
            const data = this.dataSource.filteredData;
            if (data.length === 0) {
                console.warn('No data to export');
                return;
            }
            // Exclude action columns
            const exportColumns = this.columns.length > 0
                ? this.columns.filter(c => c.type !== 'action')
                : this.displayedColumns.filter(col => col !== 'Actions');
            const keys = exportColumns.map(col => typeof col === 'string' ? col : col.key);
            const headers = exportColumns.map(col => typeof col === 'string' ? col : col.label);
            // Format data to match UI display
            const rows = data.map(row => keys.map(key => {
                let value = row[key];
                // Format dates and numbers to match UI
                if (value instanceof Date) {
                    value = value.toLocaleDateString();
                }
                else if (typeof value === 'number') {
                    value = value.toString();
                }
                else if (value === null || value === undefined) {
                    value = '';
                }
                const stringValue = value.toString();
                return `"${stringValue.replace(/"/g, '""')}"`;
            }).join(','));
            const csvContent = [
                headers.map(h => `"${h}"`).join(','),
                ...rows
            ].join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `table-export-${new Date().getTime()}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
        }
        catch (error) {
            console.error('Error exporting to CSV:', error);
        }
    }
    /**
     * Export table data to PDF (excludes action columns)
     */
    async exportPDF() {
        try {
            // Import jsPDF
            const { jsPDF: jsPDFConstructor } = await import('jspdf');
            const data = this.dataSource.filteredData;
            if (data.length === 0) {
                console.warn('No data to export');
                return;
            }
            // Exclude action columns
            const exportColumns = this.columns.length > 0
                ? this.columns.filter(c => c.type !== 'action')
                : this.displayedColumns.filter(col => col !== 'Actions').map(k => ({ key: k, label: k }));
            const columnHeaders = exportColumns.map(col => typeof col === 'string' ? col : col.label);
            const columnKeys = exportColumns.map(col => typeof col === 'string' ? col : col.key);
            // Format rows to match UI display
            const rows = data.map(row => columnKeys.map(key => {
                let value = row[key];
                // Format dates
                if (value instanceof Date) {
                    value = value.toLocaleDateString();
                }
                else if (value === null || value === undefined) {
                    value = '';
                }
                return value.toString().substring(0, 50); // Limit to 50 chars per cell
            }));
            // Create PDF with landscape orientation for better column fit
            const doc = new jsPDFConstructor('l', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 10;
            const contentWidth = pageWidth - 2 * margin;
            // Add title
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text('Table Report', margin, margin + 5);
            // Add date
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(100, 100, 100);
            doc.text(`Generated on ${new Date().toLocaleString()}`, margin, margin + 12);
            // Reset text color
            doc.setTextColor(0, 0, 0);
            // Calculate column widths
            const colWidth = (contentWidth - 4) / columnHeaders.length;
            let yPosition = margin + 20;
            const lineHeight = 6;
            const headerHeight = 8;
            // Draw header row
            doc.setFont(undefined, 'bold');
            doc.setFillColor(80, 80, 80);
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(9);
            let xPosition = margin + 2;
            columnHeaders.forEach((header, index) => {
                const cellText = header.substring(0, 20);
                doc.rect(xPosition, yPosition, colWidth, headerHeight, 'F');
                doc.text(cellText, xPosition + 2, yPosition + 5);
                xPosition += colWidth;
            });
            yPosition += headerHeight;
            // Draw data rows
            doc.setFont(undefined, 'normal');
            doc.setFontSize(8);
            doc.setTextColor(0, 0, 0);
            let rowCount = 0;
            rows.forEach((row, rowIndex) => {
                // Check if we need a new page
                if (yPosition > pageHeight - margin - 10) {
                    doc.addPage();
                    yPosition = margin;
                }
                // Alternate row colors
                if (rowIndex % 2 === 0) {
                    doc.setFillColor(245, 245, 245);
                    xPosition = margin + 2;
                    row.forEach(() => {
                        doc.rect(xPosition, yPosition, colWidth, lineHeight, 'F');
                        xPosition += colWidth;
                    });
                }
                // Draw row data
                xPosition = margin + 2;
                row.forEach((cellValue) => {
                    const cellText = cellValue.substring(0, 20);
                    doc.text(cellText, xPosition + 2, yPosition + 4);
                    xPosition += colWidth;
                });
                yPosition += lineHeight;
                rowCount++;
            });
            doc.save(`table-export-${new Date().getTime()}.pdf`);
        }
        catch (error) {
            console.error('Error exporting to PDF:', error);
        }
    }
    /**
     * Print the table with clean HTML output (no cloning UI issues)
     */
    printTable() {
        try {
            const data = this.dataSource.filteredData;
            if (data.length === 0) {
                console.warn('No data to print');
                return;
            }
            // Get columns (exclude actions)
            const columns = this.columns.length > 0
                ? this.columns.filter(c => c.type !== 'action')
                : this.displayedColumns.filter(c => c !== 'Actions');
            const headers = columns.map(c => typeof c === 'string' ? c : c.label);
            const keys = columns.map(c => typeof c === 'string' ? c : c.key);
            // Build table rows - clean HTML
            const rows = data.map(row => `
        <tr>
          ${keys.map(k => {
                let value = row[k] ?? '';
                // Format dates
                if (value instanceof Date) {
                    value = value.toLocaleDateString();
                }
                return `<td>${this.escapeHtml(value.toString())}</td>`;
            }).join('')}
        </tr>
      `).join('');
            // Professional print HTML
            const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Table Report - ${new Date().toLocaleDateString()}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              padding: 20px;
              line-height: 1.5;
              color: #1f2937;
              background: #fff;
            }
            
            .header {
              margin-bottom: 24px;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 12px;
            }
            
            .header h1 {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 4px;
            }
            
            .header p {
              font-size: 13px;
              color: #6b7280;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
              background: #fff;
            }
            
            thead {
              background: #f9fafb;
            }
            
            th {
              padding: 12px;
              text-align: left;
              font-weight: 600;
              font-size: 13px;
              border-bottom: 2px solid #e5e7eb;
              color: #111827;
            }
            
            td {
              padding: 10px 12px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 13px;
              color: #374151;
            }
            
            tbody tr:hover {
              background: #f9fafb;
            }
            
            @media print {
              body { 
                padding: 0;
                margin: 0;
              }
              table { 
                page-break-inside: avoid;
              }
              thead {
                display: table-header-group;
              }
              tbody tr { 
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Table Report</h1>
            <p>Generated on ${new Date().toLocaleString()}</p>
          </div>
          <table>
            <thead>
              <tr>
                ${headers.map(h => `<th>${this.escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </body>
        </html>
      `;
            const win = window.open('', '', 'width=1200,height=800');
            if (win) {
                win.document.write(html);
                win.document.close();
                setTimeout(() => {
                    win.focus();
                    win.print();
                }, 250);
            }
        }
        catch (error) {
            console.error('Error printing table:', error);
        }
    }
    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    // ───────────────────────── INLINE EDITING (Google Sheets-like) ─────────────────────────
    /**
     * Double-click to edit (not single click)
     * This matches Google Sheets, Excel, and AG Grid behavior
     */
    onCellDoubleClick(row, column, rowIndex, event) {
        event.stopPropagation();
        if (!column.editable || column.type === 'action')
            return;
        this.editingCell = { rowIndex, column: column.key };
        this.editingValue = row[column.key];
        this.cdr.markForCheck();
    }
    /**
     * Save inline edit
     * Triggered by Enter key or blur event
     */
    saveInlineEdit(row, column) {
        if (!this.editingCell)
            return;
        // Emit event - parent handles data mutation
        this.events.emit({
            type: 'cellEdit',
            row,
            column: column.key,
            value: this.editingValue
        });
        this.showToast('Cell updated', 'success');
        this.editingCell = null;
        this.editingValue = null;
        this.cdr.markForCheck();
    }
    /**
     * Cancel inline edit
     * Triggered by Escape key
     */
    cancelInlineEdit() {
        this.editingCell = null;
        this.editingValue = null;
        this.cdr.markForCheck();
    }
    /**
     * Check if cell is in edit mode
     */
    isEditingCell(rowIndex, columnKey) {
        return this.editingCell?.rowIndex === rowIndex && this.editingCell?.column === columnKey;
    }
    /**
     * Legacy method - kept for backward compatibility
     * Now calls onCellDoubleClick
     */
    startInlineEdit(row, column, rowIndex) {
        // This is now double-click only, called from template
        // Single click will just select the row
    }
    // ───────────────────────── COLUMN DRAG & REORDER ─────────────────────────
    /**
     * Handle column drag start
     */
    onColumnDragStart(column) {
        if (!this.enableColumnDrag)
            return;
        this.draggedColumn = column;
    }
    /**
     * Handle column drop for reordering
     */
    onColumnDrop(targetColumn) {
        if (!this.draggedColumn || !this.enableColumnDrag)
            return;
        const draggedIndex = this.columns.indexOf(this.draggedColumn);
        const targetIndex = this.columns.indexOf(targetColumn);
        if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
            // Swap columns
            [this.columns[draggedIndex], this.columns[targetIndex]] =
                [this.columns[targetIndex], this.columns[draggedIndex]];
        }
        this.draggedColumn = null;
    }
    // ───────────────────────── ADVANCED FILTERING ─────────────────────────
    /**
     * Apply advanced filter
     */
    applyAdvancedFilter(columnKey, operator, value) {
        this.advancedFilters.set(columnKey, { operator, value });
        this.applyAdvancedFilters();
    }
    /**
     * Remove advanced filter
     */
    removeAdvancedFilter(columnKey) {
        this.advancedFilters.delete(columnKey);
        this.applyAdvancedFilters();
    }
    /**
     * Apply all advanced filters
     */
    applyAdvancedFilters() {
        this.dataSource.filterPredicate = (data) => {
            // Check all active advanced filters
            for (let [columnKey, filter] of this.advancedFilters) {
                const value = data[columnKey];
                const { operator, value: filterValue } = filter;
                let matches = false;
                switch (operator) {
                    case 'equals':
                        matches = value === filterValue;
                        break;
                    case 'contains':
                        matches = value?.toString().toLowerCase().includes(filterValue.toLowerCase());
                        break;
                    case 'startsWith':
                        matches = value?.toString().toLowerCase().startsWith(filterValue.toLowerCase());
                        break;
                    case 'endsWith':
                        matches = value?.toString().toLowerCase().endsWith(filterValue.toLowerCase());
                        break;
                    case 'greaterThan':
                        matches = Number(value) > Number(filterValue);
                        break;
                    case 'lessThan':
                        matches = Number(value) < Number(filterValue);
                        break;
                    case 'between':
                        matches = Number(value) >= filterValue.min && Number(value) <= filterValue.max;
                        break;
                    default: matches = true;
                }
                if (!matches)
                    return false;
            }
            return true;
        };
        this.dataSource.filter = JSON.stringify(Array.from(this.advancedFilters.entries()));
    }
    /**
     * Clear all advanced filters
     */
    clearAdvancedFilters() {
        this.advancedFilters.clear();
        this.dataSource.filter = '';
    }
    // ───────────────────────── PERFORMANCE & HELPERS ─────────────────────────
    /**
     * Show toast notification (replaces native alerts)
     */
    showToast(message, type = 'info') {
        const panelClass = type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'toast-info';
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: [panelClass]
        });
    }
    /**
     * TrackBy function for ngFor(*ngFor="let row of data; trackBy: trackByRowIndex")
     * Improves performance by telling Angular how to track items
     */
    trackByRowIndex(index) {
        return index;
    }
    /**
     * TrackBy function for columns
     */
    trackByColumnKey(index, col) {
        return col.key;
    }
    /**
     * TrackBy function for string arrays (like displayedColumns)
     */
    trackByString(index, item) {
        return item;
    }
    /**
     * TrackBy function for custom actions
     */
    trackByActionId(index, action) {
        return action.action;
    }
    // ───────────────────────── EXPORT METHODS ─────────────────────────
    /**
     * Export with custom template
     */
    exportWithTemplate(templateName) {
        // This would integrate with custom export templates
        switch (templateName) {
            case 'detailed':
                this.exportExcel();
                break;
            case 'summary':
                this.exportSummary();
                break;
            case 'json':
                this.exportJSON();
                break;
            default:
                this.exportExcel();
        }
    }
    /**
     * Export as JSON
     */
    exportJSON() {
        try {
            const data = this.dataSource.filteredData;
            const exportColumns = this.columns.filter(c => c.type !== 'action');
            const exportData = data.map(row => {
                const newRow = {};
                exportColumns.forEach(col => {
                    let value = row[col.key];
                    // Format dates to ISO string
                    if (value instanceof Date) {
                        value = value.toISOString();
                    }
                    newRow[col.label || col.key] = value;
                });
                return newRow;
            });
            const jsonString = JSON.stringify(exportData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `table-export-${new Date().getTime()}.json`;
            a.click();
            window.URL.revokeObjectURL(url);
        }
        catch (error) {
            console.error('Error exporting to JSON:', error);
        }
    }
    /**
     * Export summary (aggregated data)
     */
    exportSummary() {
        try {
            const data = this.dataSource.filteredData;
            const summary = {
                exportedAt: new Date().toISOString(),
                totalRecords: data.length,
                sampledRecords: data.slice(0, 5)
            };
            const jsonString = JSON.stringify(summary, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `table-summary-${new Date().getTime()}.json`;
            a.click();
            window.URL.revokeObjectURL(url);
        }
        catch (error) {
            console.error('Error exporting summary:', error);
        }
    }
    // ───────────────────────── SERVER-SIDE PAGINATION ─────────────────────────
    /**
     * Trigger server-side data request
     */
    requestServerData(pageIndex, pageSize, sort) {
        this.serverDataRequested.emit({
            pageIndex,
            pageSize,
            sort,
            filters: Array.from(this.advancedFilters.entries())
        });
    }
    /**
     * Update data from server (for server-side pagination)
     */
    setServerData(data, totalCount) {
        this.dataSource.data = data;
        this.totalRecordCount = totalCount;
        if (this.paginator) {
            this.paginator.length = totalCount;
        }
        this.isLoadingServerData = false;
        this.cdr.detectChanges();
    }
    // ───────────────────────── COLUMN RESIZE ─────────────────────────
    /**
     * Start column resize
     */
    startColumnResize(event, column) {
        if (!this.enableColumnResize)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.resizingColumn = column;
        this.resizeStartX = event.clientX;
        this.resizeStartWidth = column.width ? parseInt(column.width) : 150;
    }
    /**
     * Handle column resize on mouse move (global listener)
     */
    onMouseMove(event) {
        if (!this.resizingColumn || !this.enableColumnResize)
            return;
        const deltaX = event.clientX - this.resizeStartX;
        let newWidth = Math.max(50, this.resizeStartWidth + deltaX); // Min 50px
        this.resizingColumn.width = `${newWidth}px`;
        this.columnWidths.set(this.resizingColumn.key, `${newWidth}px`);
        this.cdr.markForCheck();
    }
    /**
     * End column resize (global listener)
     */
    onMouseUp(event) {
        this.resizingColumn = null;
    }
    /**
     * Get column width for template binding
     */
    getColumnWidth(column) {
        return this.columnWidths.get(column.key) || column.width || 'auto';
    }
    static ɵfac = function ReusableTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReusableTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReusableTableComponent, selectors: [["app-reusable-table"]], viewQuery: function ReusableTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatSort, 5);
            i0.ɵɵviewQuery(MatPaginator, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        } }, hostBindings: function ReusableTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousemove", function ReusableTableComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseup", function ReusableTableComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { config: "config", columns: "columns", actions: "actions", enableExport: "enableExport", enablePrint: "enablePrint", enableColumnToggle: "enableColumnToggle", enableAdd: "enableAdd", enableDelete: "enableDelete", enableRowSelection: "enableRowSelection", showActionColumn: "showActionColumn", enableInlineEdit: "enableInlineEdit", enableColumnDrag: "enableColumnDrag", enableColumnResize: "enableColumnResize", enableStickyActions: "enableStickyActions", enableVirtualScroll: "enableVirtualScroll", serverSidePagination: "serverSidePagination", backendPaginationUrl: "backendPaginationUrl", data: "data", featureConfig: "featureConfig", displayConfig: "displayConfig", displayedColumns: "displayedColumns", tableMaxHeight: "tableMaxHeight", rowHeight: "rowHeight", headerHeight: "headerHeight", searchTerm: "searchTerm", filterPredicate: "filterPredicate", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", showPaginator: "showPaginator" }, outputs: { events: "events", tableActionTriggered: "tableActionTriggered", rowEditClicked: "rowEditClicked", rowSelected: "rowSelected", searchChanged: "searchChanged", actionClicked: "actionClicked", inlineEditChange: "inlineEditChange", serverDataRequested: "serverDataRequested" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 49, vars: 17, consts: [["columnMenu", "matMenu"], ["exportMenu", "matMenu"], ["searchInput", ""], [1, "mattable-container", "h-100", "d-flex", "flex-column"], [1, "mattable-toolbar", "d-flex", "align-items-center", "justify-content-between", "px-2", "gap-2"], [1, "d-flex", "gap-2", "align-items-center"], ["mat-icon-button", "", "aria-label", "Search", 3, "matTooltip", "click", 4, "ngIf"], ["class", "search-wrapper", 4, "ngIf"], [1, "selection-info"], ["mat-icon-button", "", "class", "neutral-btn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "class", "danger-btn", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "class", "neutral-btn", 3, "matMenuTriggerFor", "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "class", "neutral-btn", 3, "matMenuTriggerFor", "matTooltip", 4, "ngIf"], ["class", "table-scroll-wrapper flex-grow-1", 3, "height", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center h-100 text-muted", 3, "height", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize", 4, "ngIf"], [1, "column-menu-header", "p-2", "border-bottom"], ["mat-button", "", 1, "w-100", "text-start", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "aria-label", "Search", 3, "click", "matTooltip"], [1, "search-wrapper"], ["type", "text", "placeholder", "Search...", "autofocus", "", 1, "form-control", "form-control-sm", "pe-5", "p-0", 3, "input", "value"], ["type", "button", 1, "btn-sm", "position-absolute", "top-50", "end-0", "translate-middle-y", "me-1", "p-0", "border-0", "bg-transparent", "align-items-center", "d-flex", 3, "click"], ["mat-icon-button", "", 1, "neutral-btn", 3, "click", "matTooltip"], ["mat-icon-button", "", 1, "danger-btn", 3, "click", "disabled", "matTooltip"], ["mat-icon-button", "", 1, "neutral-btn", 3, "click", "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", 1, "neutral-btn", 3, "matMenuTriggerFor", "matTooltip"], [1, "table-scroll-wrapper", "flex-grow-1"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "selection", 4, "ngIf"], [3, "matColumnDef", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "cursor-pointer", 3, "selected-row", "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "selection"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], [3, "change", "checked"], ["mat-cell", ""], [3, "matColumnDef"], ["mat-header-cell", "", 3, "sortable", "mat-sort-header", "width", "sticky-action-column", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "cell-value", "width", "sticky-action-column", 4, "matCellDef"], ["mat-header-cell", "", 3, "mat-sort-header"], [1, "column-header"], [1, "column-header-content"], ["type", "text", "class", "column-filter-input", "placeholder", "Filter...", 3, "input", "click", 4, "ngIf"], ["class", "resize-handle", "matTooltip", "Drag to resize column", 3, "mousedown", 4, "ngIf"], ["type", "text", "placeholder", "Filter...", 1, "column-filter-input", 3, "input", "click"], ["matTooltip", "Drag to resize column", 1, "resize-handle", 3, "mousedown"], [1, "cell-label"], ["class", "inline-edit-container", 4, "ngIf"], ["class", "cell-content", 3, "editable-cell", "dblclick", "mouseenter", "mouseleave", 4, "ngIf"], [1, "inline-edit-container"], ["type", "text", "class", "inline-edit-input", "autofocus", "", 3, "ngModel", "type", "ngModelChange", "keyup.enter", "keyup.escape", 4, "ngIf"], ["class", "inline-edit-input", "autofocus", "", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup.escape", 4, "ngIf"], ["class", "inline-edit-input", 3, "ngModel", "ngModelChange", "change", "blur", 4, "ngIf"], [1, "inline-edit-actions"], ["mat-icon-button", "", "matTooltip", "Save", 1, "save-btn", 3, "click"], ["mat-icon-button", "", "matTooltip", "Cancel", 1, "cancel-btn", 3, "click"], ["type", "text", "autofocus", "", 1, "inline-edit-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel", "type"], ["autofocus", "", 1, "inline-edit-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "inline-edit-input", 3, "ngModelChange", "change", "blur", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cell-content", 3, "dblclick", "mouseenter", "mouseleave"], [1, "cell-value"], ["class", "edit-icon-hover", 4, "ngIf"], [1, "edit-icon-hover"], [1, "cell-value", "actions-cell"], ["mat-icon-button", "", "matTooltipPosition", "right", "class", "text-primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "right", "class", "text-danger", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "right", 3, "matTooltip", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-icon-button", "", "matTooltipPosition", "right", 1, "text-primary", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltipPosition", "right", 1, "text-danger", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltipPosition", "right", 3, "click", "matTooltip", "ngClass"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", "matTooltipPosition", "right", 3, "matTooltip", "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "Edit", "matTooltipPosition", "right", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Role Rights", "matTooltipPosition", "right", 3, "click"], [1, "text-primary"], ["mat-icon-button", "", "matTooltip", "Reset Password", "matTooltipPosition", "right", 3, "click"], [1, "text-danger"], ["mat-header-row", ""], ["mat-row", "", 1, "cursor-pointer", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "text-center", "p-4"], [1, "mb-2", "empty-state__icon"], [1, "mb-0"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"]], template: function ReusableTableComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
            i0.ɵɵtemplate(3, ReusableTableComponent_button_3_Template, 3, 2, "button", 6)(4, ReusableTableComponent_div_4_Template, 6, 2, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 8);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, ReusableTableComponent_button_8_Template, 3, 2, "button", 9)(9, ReusableTableComponent_button_9_Template, 3, 2, "button", 9)(10, ReusableTableComponent_button_10_Template, 3, 2, "button", 9)(11, ReusableTableComponent_button_11_Template, 3, 3, "button", 10)(12, ReusableTableComponent_button_12_Template, 3, 3, "button", 11)(13, ReusableTableComponent_button_13_Template, 3, 3, "button", 12)(14, ReusableTableComponent_button_14_Template, 3, 2, "button", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(15, ReusableTableComponent_div_15_Template, 7, 10, "div", 13)(16, ReusableTableComponent_div_16_Template, 6, 2, "div", 14)(17, ReusableTableComponent_mat_paginator_17_Template, 1, 2, "mat-paginator", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-menu", null, 0)(20, "div", 16)(21, "button", 17);
            i0.ɵɵlistener("click", function ReusableTableComponent_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.showAllColumns()); });
            i0.ɵɵelementStart(22, "mat-icon");
            i0.ɵɵtext(23, "check_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span");
            i0.ɵɵtext(25, "Show All");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "button", 17);
            i0.ɵɵlistener("click", function ReusableTableComponent_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.hideAllColumns()); });
            i0.ɵɵelementStart(27, "mat-icon");
            i0.ɵɵtext(28, "radio_button_unchecked");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30, "Hide All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(31, ReusableTableComponent_button_31_Template, 5, 3, "button", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-menu", null, 1)(34, "button", 19);
            i0.ɵɵlistener("click", function ReusableTableComponent_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.exportExcel()); });
            i0.ɵɵelementStart(35, "mat-icon");
            i0.ɵɵtext(36, "table_chart");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "Export to Excel");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "button", 19);
            i0.ɵɵlistener("click", function ReusableTableComponent_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.exportCSV()); });
            i0.ɵɵelementStart(40, "mat-icon");
            i0.ɵɵtext(41, "description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "span");
            i0.ɵɵtext(43, "Export to CSV");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "button", 19);
            i0.ɵɵlistener("click", function ReusableTableComponent_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.exportPDF()); });
            i0.ɵɵelementStart(45, "mat-icon");
            i0.ɵɵtext(46, "picture_as_pdf");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "span");
            i0.ɵɵtext(48, "Export to PDF");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.showSearch);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showSearch);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("visible", ctx.selectedRows.size > 0);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.selectedRows.size, " row(s) selected ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.enableAdd);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableAdd && ctx.enableRowSelection);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableAdd && ctx.enableRowSelection);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableDelete);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableColumnToggle && ctx.columns.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableExport);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enablePrint);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.columns.length > 0 ? ctx.columnsToDisplay.length : ctx.displayedColumns == null ? null : ctx.displayedColumns.length) && ctx.dataSource.data.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataSource.data.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPaginator);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByColumnKey);
        } }, dependencies: [CommonModule, i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, MatTableModule, i3$1.MatTable, i3$1.MatHeaderCellDef, i3$1.MatHeaderRowDef, i3$1.MatColumnDef, i3$1.MatCellDef, i3$1.MatRowDef, i3$1.MatHeaderCell, i3$1.MatCell, i3$1.MatHeaderRow, i3$1.MatRow, MatIconModule, i3.MatIcon, MatSortModule, i5.MatSort, i5.MatSortHeader, MatPaginatorModule, i6.MatPaginator, MatCheckboxModule, i7.MatCheckbox, MatMenuModule, i8.MatMenu, i8.MatMenuItem, i8.MatMenuTrigger, MatTooltipModule, i9.MatTooltip, MatDialogModule,
            MatSnackBarModule,
            ScrollingModule], styles: ["[_nghost-%COMP%]{--color-primary: #6b7280;--color-neutral: #ffffff;--color-border: #e5e7eb;--color-toolbar-bg: #ffffff;--color-toolbar-text: #6b7280;--color-header-bg: #f9fafb;--color-header-text: #374151;--color-header-border: #e5e7eb;--color-row-bg: #ffffff;--color-row-hover-bg: #f9fafb;--color-row-border: #e5e7eb;--color-cell-text: #374151;--color-selected-row-bg: rgba(33, 150, 243, .1);--color-input-bg: #ffffff;--color-input-border: #e5e7eb;--color-input-text: #6b7280;--color-input-placeholder: #9ca3af;--color-button-hover-bg: #f3f4f6;--color-danger: #ef4444;--color-success: #10b981;--color-warning: #f59e0b;--color-filter-input-bg: #ffffff;--color-filter-input-border: #e5e7eb;--color-filter-input-text: #6b7280;--size-row-height: 44px;--size-header-height: 56px;--size-toolbar-height: 56px;--size-cell-padding: 10px 12px;--size-header-padding: 10px 12px;--size-border-radius: 10px;--font-header-size: 13px;--font-header-weight: 600;--font-cell-size: .875rem;--font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;--dark-mode-enabled: 0;--dark-header-bg: #1f2937;--dark-row-bg: #111827;--dark-row-hover-bg: #1f2937;--dark-text: #e5e7eb;--dark-border: #374151;--scrollbar-track-bg: #f3f4f6;--scrollbar-thumb-bg: #d1d5db;--scrollbar-thumb-hover-bg: #9ca3af;display:block}.mattable-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--color-row-bg, #ffffff);border-radius:var(--size-border-radius, 10px);border:1px solid var(--color-border, #e5e7eb);overflow:hidden;box-shadow:0 1px 2px #0000000d}.mattable-toolbar[_ngcontent-%COMP%]{height:var(--size-toolbar-height, 56px);border-bottom:1px solid var(--color-border, #e5e7eb);background:var(--color-toolbar-bg, #ffffff);padding:0 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-shrink:0}.mattable-toolbar[_ngcontent-%COMP%]   .toolbar-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:4px;border-radius:8px;transition:all .2s ease}.mattable-toolbar[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border:1px solid var(--color-input-border, #e5e7eb);border-radius:6px;padding:6px 12px!important;font-size:.875rem;height:34px;min-width:200px;background:var(--color-input-bg, #ffffff);color:var(--color-input-text, #6b7280);transition:all .2s ease}.mattable-toolbar[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::placeholder{color:var(--color-input-placeholder, #9ca3af)}.mattable-toolbar[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 0 3px #6b72801a}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{color:var(--color-toolbar-text, #6b7280);border-radius:6px;transition:all .2s ease;height:36px;width:36px;min-width:36px}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-cell-text, #374151)}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].neutral-btn[_ngcontent-%COMP%]{color:var(--color-toolbar-text, #6b7280)}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].neutral-btn[_ngcontent-%COMP%]:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-toolbar-text, #6b7280)}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].neutral-btn[_ngcontent-%COMP%]:disabled{color:#d1d5db;background:transparent;cursor:not-allowed}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].danger-btn[_ngcontent-%COMP%]{color:var(--color-danger, #ef4444)}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].danger-btn[_ngcontent-%COMP%]:hover{background:#ef44441a;color:#dc2626}.mattable-toolbar[_ngcontent-%COMP%]   button[mat-icon-button].danger-btn[_ngcontent-%COMP%]:disabled{color:#fca5a5;background:transparent;cursor:not-allowed}.table-scroll-wrapper[_ngcontent-%COMP%]{overflow:auto;flex:1}.table-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.table-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track-bg, #f1f1f1)}.table-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-bg, #888);border-radius:4px}.table-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-bg, #555)}table[_ngcontent-%COMP%]{border-collapse:collapse}table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{word-break:break-word;white-space:pre-wrap}table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{background:var(--color-header-bg, #f9fafb)!important;border-bottom:1px solid var(--color-header-border, #e5e7eb);height:var(--size-row-height, 44px)}table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:var(--font-header-weight, 600);color:var(--color-header-text, #374151);font-size:var(--font-header-size, 13px);padding:var(--size-header-padding, 10px 12px)!important}table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]{background:var(--color-row-bg, #ffffff);border-bottom:1px solid var(--color-row-border, #e5e7eb);height:var(--size-row-height, 44px);transition:background-color .15s ease;cursor:pointer}table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background:var(--color-row-hover-bg, #f9fafb)}table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:var(--color-row-bg, #ffffff)}table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n):hover{background:var(--color-row-hover-bg, #f9fafb)}table[_ngcontent-%COMP%]   .mat-mdc-row.selected-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{background-color:var(--color-selected-row-bg, rgba(33, 150, 243, .1))!important}table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:var(--size-cell-padding, 10px 12px);font-size:var(--font-cell-size, .875rem);color:var(--color-cell-text, #374151);vertical-align:middle}table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]:first-child{width:40px;padding:10px 6px!important;text-align:center}table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:.75rem;font-size:.875rem;color:var(--color-header-text, #374151)}table[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%]{display:none;font-weight:600;font-size:.75rem;color:var(--color-cell-text, #374151);margin-bottom:.25rem;text-transform:uppercase}@media (max-width: 768px){table[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%]{display:block}}table[_ngcontent-%COMP%]   .cell-value[_ngcontent-%COMP%]{font-size:var(--font-cell-size, .875rem);color:var(--color-cell-text, #374151)}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]{display:flex;gap:6px;justify-content:flex-start;align-items:center}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{padding:4px!important;min-width:28px!important;height:28px!important;border-radius:4px;transition:all .15s ease;color:var(--color-toolbar-text, #6b7280)}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-cell-text, #374151)}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon.text-success[_ngcontent-%COMP%]{color:var(--color-success, #10b981)}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon.text-primary[_ngcontent-%COMP%]{color:var(--color-primary, #6b7280)}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon.text-danger[_ngcontent-%COMP%]{color:var(--color-danger, #ef4444)}table[_ngcontent-%COMP%]   .mat-mdc-sort-header-container[_ngcontent-%COMP%]{padding:0}.empty-state__icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--empty-state-color, #999)}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{--dark-placeholder: \"\"}@media (max-width: 992px){table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:.5rem;font-size:.8125rem}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{padding:0 .25rem!important}}@media (max-width: 768px){table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:.375rem;font-size:.75rem}table[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%]{display:block!important}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.25rem}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{padding:0 .125rem!important}table[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.mattable-toolbar[_ngcontent-%COMP%]{height:48px;padding:.5rem!important}.mat-mdc-paginator[_ngcontent-%COMP%]{padding:.5rem!important}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.5rem}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size[_ngcontent-%COMP%]{width:100%;flex-wrap:wrap}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-range-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-range-label[_ngcontent-%COMP%]{margin:0;font-size:.75rem}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{padding:0 .25rem!important}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important}}.mat-mdc-paginator[_ngcontent-%COMP%]{background:var(--paginator-bg, #f5f5f5)!important;border-top:1px solid var(--border-color, #e0e0e0);display:flex;justify-content:flex-end;padding:.5rem 1rem!important;flex-shrink:0}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;min-height:40px;padding:0!important}.mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-select__anchor[_ngcontent-%COMP%]{height:36px}.mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%]{border-color:var(--input-border-color, #ccc)}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size[_ngcontent-%COMP%]{align-items:center;display:flex;gap:.5rem}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size-label[_ngcontent-%COMP%]{margin:0;font-size:.875rem;color:var(--table-cell-color, #333)}.mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-range-label[_ngcontent-%COMP%]{font-size:.875rem;margin:0 1rem;color:var(--table-cell-color, #333)}.mat-mdc-paginator[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:disabled{opacity:.5}.dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]{background:var(--paginator-bg, #252525)!important;border-top-color:var(--border-color, #333)}.dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%]{border-color:var(--input-border-color, #444)!important}.dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size-label[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-page-size-label[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-range-label[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]   .mat-mdc-paginator-range-label[_ngcontent-%COMP%]{color:var(--table-cell-color, #e0e0e0)}.search-wrapper[_ngcontent-%COMP%]{position:relative;flex:1;max-width:300px}.search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border:1px solid var(--color-input-border, #e5e7eb);border-radius:4px;padding:.4rem 2rem .4rem .5rem!important;height:36px;font-size:.875rem;background:var(--color-input-bg, #ffffff);color:var(--color-input-text, #6b7280)}.search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::placeholder{color:var(--color-input-placeholder, #9ca3af)}.search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 4px #64646433}.search-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{right:4px!important;width:28px!important;height:28px!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important}.column-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%}.column-header[_ngcontent-%COMP%]   .column-header-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%}.column-header[_ngcontent-%COMP%]   .column-header-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;font-weight:var(--font-header-weight, 600);font-size:var(--font-header-size, 13px);color:var(--color-header-text, #374151)}.column-header[_ngcontent-%COMP%]   .column-header-content[_ngcontent-%COMP%]   .column-delete-btn[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s ease,color .2s ease;color:var(--color-danger, #ef4444);padding:2px!important;height:24px!important;width:24px!important;min-width:24px!important;flex-shrink:0}.column-header[_ngcontent-%COMP%]   .column-header-content[_ngcontent-%COMP%]   .column-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px}.column-header[_ngcontent-%COMP%]   .column-header-content[_ngcontent-%COMP%]   .column-delete-btn[_ngcontent-%COMP%]:hover{background:#ef44441a}.column-header[_ngcontent-%COMP%]:hover   .column-delete-btn[_ngcontent-%COMP%]{opacity:1}.column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]{width:100%;height:26px;font-size:11px;border-radius:4px;border:1px solid var(--color-filter-input-border, #e5e7eb);padding:2px 6px!important;background:var(--color-filter-input-bg, #ffffff);color:var(--color-filter-input-text, #6b7280);transition:all .15s ease}.column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]::placeholder{color:var(--color-input-placeholder, #9ca3af)}.column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 0 2px #6b72801a;background:var(--color-filter-input-bg, #ffffff)}.column-menu-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.column-menu-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-content:flex-start;text-align:left;padding:.5rem 1rem!important;font-size:.875rem;border-radius:0}.column-menu-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem;font-size:18px;width:18px;height:18px}.column-menu-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0000000a}.mat-mdc-menu-panel[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem 1rem!important;font-size:.875rem}.mat-mdc-menu-panel[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.75rem;font-size:18px;width:18px;height:18px}.mat-mdc-menu-panel[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]:hover{background:#0000000a}.selected-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{background-color:var(--color-selected-row-bg, rgba(33, 150, 243, .1))!important}.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-checkbox[_ngcontent-%COMP%]{margin:0}.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-checkbox[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:not(:checked):not([data-indeterminate]) ~ .mdc-checkbox__background[_ngcontent-%COMP%]:after{border-color:var(--checkbox-border-color, #999)}.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-checkbox[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:checked ~ .mdc-checkbox__background[_ngcontent-%COMP%]{background-color:var(--checkbox-checked-bg, #2196f3);border-color:var(--checkbox-checked-bg, #2196f3)}.sortable[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.sortable[_ngcontent-%COMP%]:hover{background:#00000005}.mat-mdc-sort-header[_ngcontent-%COMP%]   .mat-mdc-sort-header-container[_ngcontent-%COMP%]{justify-content:flex-start;align-items:center;gap:.5rem}.mat-mdc-sort-header.mat-sort-header-disabled[_ngcontent-%COMP%]{cursor:default}.mat-mdc-sort-header[_ngcontent-%COMP%]   .mat-mdc-sort-header-arrow[_ngcontent-%COMP%]{margin-left:.25rem;color:var(--sort-arrow-color, #999)}.mat-mdc-sort-header[_ngcontent-%COMP%]   .mat-mdc-sort-header-arrow.mat-sort-header-sorted[_ngcontent-%COMP%]{color:var(--primary-color, #2196f3)}.dark-theme[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{background:var(--input-bg, #2d2d2d);color:var(--input-color, #e0e0e0);border-color:var(--input-border-color, #444)}.dark-theme[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{border-color:#888;box-shadow:0 0 4px #8888884d}.dark-theme[_nghost-%COMP%]   .column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]{background:var(--input-bg, #2d2d2d);color:var(--input-color, #e0e0e0);border-color:var(--input-border-color, #444)}.dark-theme[_nghost-%COMP%]   .column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .column-header[_ngcontent-%COMP%]   .column-filter-input[_ngcontent-%COMP%]:focus{border-color:#888;box-shadow:0 0 2px #8888884d}.dark-theme[_nghost-%COMP%]   .selected-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .selected-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{background-color:#64b5f626!important}.dark-theme[_nghost-%COMP%]   .mat-mdc-menu-panel[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .mat-mdc-menu-panel[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]:hover{background:#ffffff14}.dark-theme[_nghost-%COMP%]   .mat-mdc-sort-header[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:not(:checked):not([data-indeterminate]) ~ .mdc-checkbox__background[_ngcontent-%COMP%]:after, .dark-theme   [_nghost-%COMP%]   .mat-mdc-sort-header[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:not(:checked):not([data-indeterminate]) ~ .mdc-checkbox__background[_ngcontent-%COMP%]:after{border-color:var(--checkbox-border-color, #666)}.dark-theme[_nghost-%COMP%]   .mat-mdc-sort-header[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:checked ~ .mdc-checkbox__background[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-mdc-sort-header[_ngcontent-%COMP%]   .mdc-checkbox__native-control[_ngcontent-%COMP%]:enabled:checked ~ .mdc-checkbox__background[_ngcontent-%COMP%]{background-color:var(--checkbox-checked-bg, #64b5f6);border-color:var(--checkbox-checked-bg, #64b5f6)}.dark-theme[_nghost-%COMP%]   .sortable[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .sortable[_ngcontent-%COMP%]:hover{background:#ffffff0d}.editable-cell[_ngcontent-%COMP%]{cursor:text;position:relative;padding-right:28px!important;transition:background-color .2s ease}.editable-cell[_ngcontent-%COMP%]:hover{background-color:#6b72800a}.editable-cell[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%]{opacity:1}.cell-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.edit-icon-hover[_ngcontent-%COMP%]{font-size:14px;opacity:0}.cell-content[_ngcontent-%COMP%]:hover   .edit-icon-hover[_ngcontent-%COMP%]{opacity:1}.inline-edit-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px;background:var(--input-bg, #f9fafb);border:2px solid var(--primary-color, #6b7280);border-radius:6px}.inline-edit-input[_ngcontent-%COMP%]{flex:1;padding:6px 8px;border:1px solid var(--input-border-color, #d1d5db);border-radius:4px;font-size:.875rem;font-family:inherit;min-width:100px;max-width:200px;background:var(--input-bg, #f9fafb);color:var(--input-color, #111827)}.inline-edit-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-color, #6b7280);box-shadow:0 0 0 3px #6b72801a}.inline-edit-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.inline-edit-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2px!important;min-width:24px!important;height:24px!important;border-radius:4px;transition:all .2s ease}.inline-edit-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.inline-edit-actions[_ngcontent-%COMP%]   button.save-btn[_ngcontent-%COMP%]{color:var(--success-color, #10b981)}.inline-edit-actions[_ngcontent-%COMP%]   button.save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--success-color, #10b981)}.inline-edit-actions[_ngcontent-%COMP%]   button.save-btn[_ngcontent-%COMP%]:hover{background:#10b9811a}.inline-edit-actions[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%]{color:var(--danger-color, #ef4444)}.inline-edit-actions[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--danger-color, #ef4444)}.inline-edit-actions[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%]:hover{background:#ef44441a}.dark-theme[_nghost-%COMP%]   .editable-cell[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .editable-cell[_ngcontent-%COMP%]:hover{background-color:#ffffff0a}.dark-theme[_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%]{color:var(--icon-color, #9ca3af)}.dark-theme[_nghost-%COMP%]   .inline-edit-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .inline-edit-container[_ngcontent-%COMP%]{background:var(--input-bg, #111827);border-color:var(--primary-color, #60a5fa)}.dark-theme[_nghost-%COMP%]   .inline-edit-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .inline-edit-input[_ngcontent-%COMP%]{background:var(--input-bg, #111827);color:var(--input-color, #f3f4f6);border-color:var(--input-border-color, #4b5563)}.dark-theme[_nghost-%COMP%]   .inline-edit-input[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .inline-edit-input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color, #60a5fa);box-shadow:0 0 0 3px #60a5fa1a}.sticky-action-column[_ngcontent-%COMP%]{position:sticky;right:0;background:var(--table-row-bg, #ffffff);z-index:10;border-left:1px solid var(--table-row-border, #e5e7eb)}.sticky-action-column.mat-mdc-header-cell[_ngcontent-%COMP%]{background:var(--table-header-bg, #f9fafb)}.resize-handle[_ngcontent-%COMP%]{position:absolute;right:-3px;top:0;height:100%;width:6px;cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none}.resize-handle[_ngcontent-%COMP%]:hover{background:#6b72804d}.resize-handle[_ngcontent-%COMP%]:active{background:#6b728080}.mat-mdc-header-cell[_ngcontent-%COMP%]{position:relative;-webkit-user-select:none;user-select:none}.virtual-scroll-wrapper[_ngcontent-%COMP%]{overflow-y:auto;height:100%;flex:1}.virtual-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.virtual-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track-bg, #f3f4f6)}.virtual-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-bg, #d1d5db);border-radius:4px}.virtual-scroll-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-bg, #9ca3af)}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.text-muted[_ngcontent-%COMP%]{color:var(--text-muted, #999)}.text-success[_ngcontent-%COMP%]{color:var(--success-color, #4caf50)}.text-primary[_ngcontent-%COMP%]{color:var(--primary-color, #6b7280)}.text-danger[_ngcontent-%COMP%]{color:var(--danger-color, #f44336)}.insert-column-dialog-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;animation:_ngcontent-%COMP%_fadeIn .2s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.insert-column-dialog[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 10px 40px #00000029;width:90%;max-width:400px;overflow:hidden;animation:_ngcontent-%COMP%_slideUp .3s ease}@media (max-width: 768px){.insert-column-dialog[_ngcontent-%COMP%]{width:95%;max-width:100%}}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}.dialog-header[_ngcontent-%COMP%]{padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}.dialog-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#111827}.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease}.dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover{background:#f3f4f6;color:#111827}.dialog-body[_ngcontent-%COMP%]{padding:20px}.dialog-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#111827;margin-bottom:6px;display:block}.dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:1px solid #d1d5db;border-radius:6px;padding:8px 12px;font-size:14px;color:#111827;background:#fff;transition:all .2s ease}.dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:#6b7280;box-shadow:0 0 0 3px #6b72801a;background:#fff;color:#111827}.dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#9ca3af}.dialog-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:12px;color:#6b7280}.dialog-footer[_ngcontent-%COMP%]{padding:16px 20px;border-top:1px solid #e5e7eb;display:flex;gap:8px;justify-content:flex-end}.dialog-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 16px;border-radius:6px;font-weight:500;font-size:14px;cursor:pointer;transition:all .2s ease;border:none}.dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{background:#e5e7eb;color:#111827}.dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover{background:#d1d5db}.dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:#6b7280;color:#fff}.dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background:#4b5563}.dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active{transform:scale(.98)}.dark-theme[_nghost-%COMP%]   .insert-column-dialog[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .insert-column-dialog[_ngcontent-%COMP%]{background:#1f2937;box-shadow:0 10px 40px #00000080}.dark-theme[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]{border-bottom-color:#374151}.dark-theme[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{color:#9ca3af}.dark-theme[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover{background:#374151;color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:#4b5563;background:#111827;color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:#60a5fa;box-shadow:0 0 0 3px #60a5fa1a;background:#111827;color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder, .dark-theme   [_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#6b7280}.dark-theme[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#9ca3af}.dark-theme[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{border-top-color:#374151}.dark-theme[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{background:#374151;color:#f3f4f6}.dark-theme[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover{background:#4b5563}.dark-theme[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:#60a5fa;color:#fff}.dark-theme[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background:#3b82f6}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReusableTableComponent, [{
        type: Component,
        args: [{ selector: 'app-reusable-table', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    MatTableModule,
                    MatIconModule,
                    MatSortModule,
                    MatPaginatorModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatSnackBarModule,
                    ScrollingModule,
                    MatTableModule,
                    MatSortModule,
                    MatPaginatorModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatSnackBarModule
                ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.Emulated, template: "<div class=\"mattable-container h-100 d-flex flex-column\">\r\n  <!-- Enhanced Toolbar -->\r\n  <div class=\"mattable-toolbar d-flex align-items-center justify-content-between px-2 gap-2\">\r\n    <!-- LEFT: Search Only -->\r\n    <div class=\"d-flex gap-2 align-items-center\">\r\n      <!-- Search Icon / Input -->\r\n      <button *ngIf=\"!showSearch\" mat-icon-button (click)=\"toggleSearch()\" aria-label=\"Search\"\r\n        [matTooltip]=\"tooltips.search || 'Search'\">\r\n        <mat-icon>{{ icons.searchIcon || 'search' }}</mat-icon>\r\n      </button>\r\n\r\n      <div *ngIf=\"showSearch\" class=\"search-wrapper\">\r\n        <input #searchInput type=\"text\" class=\"form-control form-control-sm pe-5 p-0\" placeholder=\"Search...\"\r\n          [value]=\"searchInputValue\" (input)=\"onSearch(searchInput.value)\" autofocus />\r\n        <button type=\"button\"\r\n          class=\"btn-sm position-absolute top-50 end-0 translate-middle-y me-1 p-0 border-0 bg-transparent align-items-center d-flex\"\r\n          (click)=\"clearSearch()\">\r\n          <mat-icon>{{ icons.closeIcon || 'close' }}</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- CENTER: Selected Count (if row selection enabled) -->\r\n    <div class=\"selection-info\" [class.visible]=\"selectedRows.size > 0\">\r\n      {{ selectedRows.size }} row(s) selected\r\n    </div>\r\n    <!-- RIGHT: All Actions (Add, Insert, Delete, Column Toggle, Export, Print) -->\r\n    <div class=\"d-flex gap-2 align-items-center\">\r\n      <!-- Add Row Button -->\r\n      <button *ngIf=\"enableAdd\" mat-icon-button (click)=\"onAdd()\" [matTooltip]=\"tooltips.addRow || 'Add New Row'\"\r\n        class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.addIcon || 'add' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Insert Row Above Button -->\r\n      <button *ngIf=\"enableAdd && enableRowSelection\" mat-icon-button (click)=\"insertRowAbove()\"\r\n        [matTooltip]=\"tooltips.insertRowAbove || 'Insert Row Above'\"\r\n        class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.insertAboveIcon || 'arrow_upward' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Insert Row Below Button -->\r\n      <button *ngIf=\"enableAdd && enableRowSelection\" mat-icon-button (click)=\"insertRowBelow()\"\r\n        [matTooltip]=\"tooltips.insertRowBelow || 'Insert Row Below'\"\r\n        class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.insertBelowIcon || 'arrow_downward' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Delete Selected Rows Button -->\r\n      <button *ngIf=\"enableDelete\" mat-icon-button [disabled]=\"selectedRows.size === 0\"\r\n        (click)=\"onDeleteSelected()\" \r\n        [matTooltip]=\"tooltips.deleteRows || 'Delete Selected'\" class=\"danger-btn\">\r\n        <mat-icon>{{ icons.deleteIcon || 'delete' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Column Toggle -->\r\n      <button *ngIf=\"enableColumnToggle && columns.length > 0\" mat-icon-button (click)=\"toggleColumnPanel()\"\r\n        [matMenuTriggerFor]=\"columnMenu\" [matTooltip]=\"tooltips.toggleColumns || 'Toggle Columns'\" class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.columnToggleIcon || 'view_column' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Export Menu -->\r\n      <button *ngIf=\"enableExport\" mat-icon-button [matMenuTriggerFor]=\"exportMenu\"\r\n        [matTooltip]=\"tooltips.export || 'Export'\" class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.exportIcon || 'file_download' }}</mat-icon>\r\n      </button>\r\n\r\n      <!-- Print Button -->\r\n      <button *ngIf=\"enablePrint\" mat-icon-button (click)=\"printTable()\" [matTooltip]=\"tooltips.print || 'Print'\"\r\n        class=\"neutral-btn\">\r\n        <mat-icon>{{ icons.printIcon || 'print' }}</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Scrollable Table Wrapper with optional Virtual Scroll -->\r\n  <div class=\"table-scroll-wrapper flex-grow-1\" [style.height.px]=\"tableMaxHeight\"\r\n    *ngIf=\"(columns.length > 0 ? columnsToDisplay.length : displayedColumns?.length) && dataSource.data.length > 0\">\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n\r\n      <!-- SELECTION COLUMN (for row checkboxes) -->\r\n      <ng-container *ngIf=\"enableRowSelection\" matColumnDef=\"selection\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox [checked]=\"allRowsSelected\" (change)=\"toggleSelectAll($event)\">\r\n          </mat-checkbox>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox [checked]=\"isRowSelected(row)\" (change)=\"toggleRowSelection(row)\">\r\n          </mat-checkbox>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- DYNAMIC COLUMNS (NEW CONFIG-BASED) -->\r\n      <ng-container *ngFor=\"let col of columns; trackBy: trackByColumnKey\" [matColumnDef]=\"col.key\">\r\n        <ng-container *ngIf=\"col.type !== 'action' || showActionColumn\">\r\n        <th mat-header-cell *matHeaderCellDef [class.sortable]=\"col.sortable\"\r\n          [mat-sort-header]=\"col.sortable ? col.key : null\" [style.width]=\"getColumnWidth(col)\"\r\n          [class.sticky-action-column]=\"enableStickyActions && col.type === 'action'\">\r\n          <div class=\"column-header\">\r\n            <div class=\"column-header-content\">\r\n              <span>{{ col.label }}</span>\r\n            </div>\r\n\r\n            <!-- Column Filter Input (if filterable) -->\r\n            <input *ngIf=\"col.filterable\" type=\"text\" class=\"column-filter-input\" placeholder=\"Filter...\"\r\n              (input)=\"applyColumnFilter(col.key, $event)\" (click)=\"$event.stopPropagation()\" />\r\n          </div>\r\n\r\n          <!-- Column Resize Handle (if enabled) -->\r\n          <div *ngIf=\"enableColumnResize && col.key !== 'selection' && col.type !== 'action'\" class=\"resize-handle\"\r\n            (mousedown)=\"startColumnResize($event, col)\" matTooltip=\"Drag to resize column\">\r\n          </div>\r\n        </th>\r\n\r\n        <!-- Cell -->\r\n        <td mat-cell *matCellDef=\"let row; let rowIndex = index\" [class.cell-value]=\"col.key !== 'Actions'\"\r\n          [style.width]=\"getColumnWidth(col)\"\r\n          [class.sticky-action-column]=\"enableStickyActions && col.type === 'action' && showActionColumn\">\r\n          <!-- TEXT TYPE with INLINE EDITING support -->\r\n          <ng-container *ngIf=\"col.type !== 'action'\">\r\n            <div class=\"cell-label\">{{ col.label }}</div>\r\n\r\n            <!-- Inline Edit Mode -->\r\n            <div *ngIf=\"enableInlineEdit && isEditingCell(rowIndex, col.key)\" class=\"inline-edit-container\">\r\n              <!-- Text Input -->\r\n              <input *ngIf=\"col.inputType !== 'select' && col.inputType !== 'textarea'\" type=\"text\"\r\n                class=\"inline-edit-input\" [(ngModel)]=\"editingValue\" [type]=\"col.inputType || 'text'\"\r\n                (keyup.enter)=\"saveInlineEdit(row, col)\" (keyup.escape)=\"cancelInlineEdit()\" autofocus />\r\n\r\n              <!-- Textarea -->\r\n              <textarea *ngIf=\"col.inputType === 'textarea'\" class=\"inline-edit-input\" [(ngModel)]=\"editingValue\"\r\n                (keyup.enter)=\"saveInlineEdit(row, col)\" (keyup.escape)=\"cancelInlineEdit()\" autofocus>\r\n              </textarea>\r\n\r\n              <!-- Select dropdown -->\r\n              <select *ngIf=\"col.inputType === 'select'\" class=\"inline-edit-input\" [(ngModel)]=\"editingValue\"\r\n                (change)=\"saveInlineEdit(row, col)\" (blur)=\"cancelInlineEdit()\">\r\n                <option [value]=\"null\">-- Select --</option>\r\n                <option *ngFor=\"let opt of col.options; trackBy: trackByRowIndex\" [value]=\"opt.value\">\r\n                  {{ opt.label }}\r\n                </option>\r\n              </select>\r\n\r\n              <!-- Buttons: Save & Cancel -->\r\n              <div class=\"inline-edit-actions\">\r\n                <button mat-icon-button (click)=\"saveInlineEdit(row, col)\" matTooltip=\"Save\" class=\"save-btn\">\r\n                  <mat-icon>check</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"cancelInlineEdit()\" matTooltip=\"Cancel\" class=\"cancel-btn\">\r\n                  <mat-icon>close</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- View Mode (double-click to edit) -->\r\n            <div *ngIf=\"!enableInlineEdit || !isEditingCell(rowIndex, col.key)\" class=\"cell-content\"\r\n              [class.editable-cell]=\"col.editable && enableInlineEdit\"\r\n              (dblclick)=\"onCellDoubleClick(row, col, rowIndex, $event)\" (mouseenter)=\"editingHoveredRow = rowIndex\"\r\n              (mouseleave)=\"editingHoveredRow = null\">\r\n              <span class=\"cell-value\">{{ row[col.key] }}</span>\r\n              <!-- Edit icon only visible on hover for editable cells -->\r\n              <mat-icon *ngIf=\"col.editable && enableInlineEdit && editingHoveredRow === rowIndex\"\r\n                class=\"edit-icon-hover\">\r\n                edit\r\n              </mat-icon>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <!-- ACTION TYPE (Dynamic Actions + Built-in Row Actions) -->\r\n          <ng-container *ngIf=\"col.type === 'action'\">\r\n            <div class=\"cell-label\">{{ col.label }}</div>\r\n            <div class=\"cell-value actions-cell\">\r\n              <!-- Built-in Row Actions (configurable) -->\r\n              <!-- Edit Row -->\r\n              <button *ngIf=\"rowActions.enableEdit\" mat-icon-button [matTooltip]=\"tooltips.editRow || 'Edit'\"\r\n                matTooltipPosition=\"right\" class=\"text-primary\" (click)=\"onActionClicked('edit', row)\">\r\n                <mat-icon>{{ icons.editIcon || 'edit' }}</mat-icon>\r\n              </button>\r\n\r\n              <!-- Delete Row -->\r\n              <button *ngIf=\"rowActions.enableDelete\" mat-icon-button [matTooltip]=\"tooltips.deleteRow || 'Delete'\"\r\n                matTooltipPosition=\"right\" class=\"text-danger\" (click)=\"onActionClicked('delete', row)\">\r\n                <mat-icon>{{ icons.deleteIcon || 'delete' }}</mat-icon>\r\n              </button>\r\n\r\n              <!-- Insert Row Above -->\r\n              <button *ngIf=\"rowActions.enableInsertAbove\" mat-icon-button\r\n                [matTooltip]=\"tooltips.insertAboveRow || 'Insert Above'\" matTooltipPosition=\"right\" class=\"text-primary\"\r\n                (click)=\"onActionClicked('insertAbove', row)\">\r\n                <mat-icon>{{ icons.insertAboveIcon || 'arrow_upward' }}</mat-icon>\r\n              </button>\r\n\r\n              <!-- Insert Row Below -->\r\n              <button *ngIf=\"rowActions.enableInsertBelow\" mat-icon-button\r\n                [matTooltip]=\"tooltips.insertBelowRow || 'Insert Below'\" matTooltipPosition=\"right\" class=\"text-primary\"\r\n                (click)=\"onActionClicked('insertBelow', row)\">\r\n                <mat-icon>{{ icons.insertBelowIcon || 'arrow_downward' }}</mat-icon>\r\n              </button>\r\n\r\n              <!-- Custom Actions -->\r\n              <button *ngFor=\"let action of actions; trackBy: trackByActionId\" mat-icon-button\r\n                [matTooltip]=\"action.label\" matTooltipPosition=\"right\" [ngClass]=\"action.color\"\r\n                (click)=\"onActionClicked(action.action, row)\">\r\n                <mat-icon>{{ action.icon }}</mat-icon>\r\n              </button>\r\n            </div>\r\n          </ng-container>\r\n        </td>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <!-- LEGACY DYNAMIC COLUMNS (fallback for old displayedColumns input) -->\r\n      <ng-container *ngIf=\"columns.length === 0\">\r\n        <ng-container *ngFor=\"let col of displayedColumns; trackBy: trackByString\" [matColumnDef]=\"col\">\r\n          <ng-container *ngIf=\"showActionColumn || col !== 'Actions'\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n              {{ col !== 'Actions' ? col : 'Actions' }}\r\n            </th>\r\n\r\n            <td mat-cell *matCellDef=\"let row\">\r\n              <ng-container *ngIf=\"col !== 'Actions'\">\r\n                <div class=\"cell-label\">{{ col }}</div>\r\n                <div class=\"cell-value\">{{ row[col] }}</div>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"col === 'Actions' && actions.length > 0\">\r\n                <div class=\"cell-label\">{{ col }}</div>\r\n                <div class=\"cell-value actions-cell\">\r\n                  <button *ngFor=\"let action of actions\"  mat-icon-button [matTooltip]=\"action.label\"\r\n                    matTooltipPosition=\"right\" [ngClass]=\"action.color\" (click)=\"onActionClicked(action.action, row)\">\r\n                    <mat-icon>{{ action.icon }}</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </ng-container>\r\n\r\n              <!-- Legacy hardcoded actions (backward compatibility) -->\r\n              <ng-container *ngIf=\"col === 'Actions' && actions.length === 0\">\r\n                <div class=\"cell-label\">{{ col }}</div>\r\n                <div class=\"cell-value actions-cell\">\r\n                  <button mat-icon-button matTooltip=\"Edit\" matTooltipPosition=\"right\"\r\n                    (click)=\"onActionClicked('Edit', row)\">\r\n                    <mat-icon class=\"text-success\">edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"Role Rights\" matTooltipPosition=\"right\"\r\n                    (click)=\"onActionClicked('RoleRights', row)\">\r\n                    <mat-icon class=\"text-primary\">settings</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"Reset Password\" matTooltipPosition=\"right\"\r\n                    (click)=\"onActionClicked('ResetPassword', row)\">\r\n                    <mat-icon class=\"text-danger\">lock_reset</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </ng-container>\r\n            </td>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <!-- Header Row -->\r\n      <tr mat-header-row *matHeaderRowDef=\"columns.length > 0 ? columnsToDisplay : displayedColumns; sticky: true\"></tr>\r\n\r\n      <!-- Data Row -->\r\n      <tr mat-row *matRowDef=\"let row; columns: columns.length > 0 ? columnsToDisplay : displayedColumns\"\r\n        (click)=\"onRowClick(row)\" class=\"cursor-pointer\" [class.selected-row]=\"isRowSelected(row)\">\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <!-- Empty State Message -->\r\n  <div *ngIf=\"dataSource.data.length === 0\" class=\"d-flex align-items-center justify-content-center h-100 text-muted\"\r\n    [style.height.px]=\"tableMaxHeight\">\r\n    <div class=\"text-center p-4\">\r\n      <mat-icon class=\"mb-2 empty-state__icon\">person_off</mat-icon>\r\n      <p class=\"mb-0\">No data available</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Paginator -->\r\n  <mat-paginator *ngIf=\"showPaginator\" [pageSizeOptions]=\"pageSizeOptions\" [pageSize]=\"pageSize\" showFirstLastButtons>\r\n  </mat-paginator>\r\n</div>\r\n\r\n<!-- Column Toggle Menu -->\r\n<mat-menu #columnMenu=\"matMenu\">\r\n  <div class=\"column-menu-header p-2 border-bottom\">\r\n    <button mat-button (click)=\"showAllColumns()\" class=\"w-100 text-start\">\r\n      <mat-icon>check_circle</mat-icon>\r\n      <span>Show All</span>\r\n    </button>\r\n    <button mat-button (click)=\"hideAllColumns()\" class=\"w-100 text-start\">\r\n      <mat-icon>radio_button_unchecked</mat-icon>\r\n      <span>Hide All</span>\r\n    </button>\r\n  </div>\r\n  <button mat-menu-item *ngFor=\"let col of columns; trackBy: trackByColumnKey\" (click)=\"toggleColumn(col)\">\r\n    <mat-icon *ngIf=\"!col.hidden\">check_box</mat-icon>\r\n    <mat-icon *ngIf=\"col.hidden\">check_box_outline_blank</mat-icon>\r\n    <span>{{ col.label }}</span>\r\n  </button>\r\n</mat-menu>\r\n\r\n<!-- Export Menu -->\r\n<mat-menu #exportMenu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"exportExcel()\">\r\n    <mat-icon>table_chart</mat-icon>\r\n    <span>Export to Excel</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"exportCSV()\">\r\n    <mat-icon>description</mat-icon>\r\n    <span>Export to CSV</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"exportPDF()\">\r\n    <mat-icon>picture_as_pdf</mat-icon>\r\n    <span>Export to PDF</span>\r\n  </button>\r\n</mat-menu>", styles: [":host{--color-primary: #6b7280;--color-neutral: #ffffff;--color-border: #e5e7eb;--color-toolbar-bg: #ffffff;--color-toolbar-text: #6b7280;--color-header-bg: #f9fafb;--color-header-text: #374151;--color-header-border: #e5e7eb;--color-row-bg: #ffffff;--color-row-hover-bg: #f9fafb;--color-row-border: #e5e7eb;--color-cell-text: #374151;--color-selected-row-bg: rgba(33, 150, 243, .1);--color-input-bg: #ffffff;--color-input-border: #e5e7eb;--color-input-text: #6b7280;--color-input-placeholder: #9ca3af;--color-button-hover-bg: #f3f4f6;--color-danger: #ef4444;--color-success: #10b981;--color-warning: #f59e0b;--color-filter-input-bg: #ffffff;--color-filter-input-border: #e5e7eb;--color-filter-input-text: #6b7280;--size-row-height: 44px;--size-header-height: 56px;--size-toolbar-height: 56px;--size-cell-padding: 10px 12px;--size-header-padding: 10px 12px;--size-border-radius: 10px;--font-header-size: 13px;--font-header-weight: 600;--font-cell-size: .875rem;--font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;--dark-mode-enabled: 0;--dark-header-bg: #1f2937;--dark-row-bg: #111827;--dark-row-hover-bg: #1f2937;--dark-text: #e5e7eb;--dark-border: #374151;--scrollbar-track-bg: #f3f4f6;--scrollbar-thumb-bg: #d1d5db;--scrollbar-thumb-hover-bg: #9ca3af;display:block}.mattable-container{display:flex;flex-direction:column;background:var(--color-row-bg, #ffffff);border-radius:var(--size-border-radius, 10px);border:1px solid var(--color-border, #e5e7eb);overflow:hidden;box-shadow:0 1px 2px #0000000d}.mattable-toolbar{height:var(--size-toolbar-height, 56px);border-bottom:1px solid var(--color-border, #e5e7eb);background:var(--color-toolbar-bg, #ffffff);padding:0 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-shrink:0}.mattable-toolbar .toolbar-group{display:flex;align-items:center;gap:8px;padding:4px;border-radius:8px;transition:all .2s ease}.mattable-toolbar input.form-control{border:1px solid var(--color-input-border, #e5e7eb);border-radius:6px;padding:6px 12px!important;font-size:.875rem;height:34px;min-width:200px;background:var(--color-input-bg, #ffffff);color:var(--color-input-text, #6b7280);transition:all .2s ease}.mattable-toolbar input.form-control::placeholder{color:var(--color-input-placeholder, #9ca3af)}.mattable-toolbar input.form-control:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 0 3px #6b72801a}.mattable-toolbar button[mat-icon-button]{color:var(--color-toolbar-text, #6b7280);border-radius:6px;transition:all .2s ease;height:36px;width:36px;min-width:36px}.mattable-toolbar button[mat-icon-button]:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-cell-text, #374151)}.mattable-toolbar button[mat-icon-button].neutral-btn{color:var(--color-toolbar-text, #6b7280)}.mattable-toolbar button[mat-icon-button].neutral-btn:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-toolbar-text, #6b7280)}.mattable-toolbar button[mat-icon-button].neutral-btn:disabled{color:#d1d5db;background:transparent;cursor:not-allowed}.mattable-toolbar button[mat-icon-button].danger-btn{color:var(--color-danger, #ef4444)}.mattable-toolbar button[mat-icon-button].danger-btn:hover{background:#ef44441a;color:#dc2626}.mattable-toolbar button[mat-icon-button].danger-btn:disabled{color:#fca5a5;background:transparent;cursor:not-allowed}.table-scroll-wrapper{overflow:auto;flex:1}.table-scroll-wrapper::-webkit-scrollbar{width:8px;height:8px}.table-scroll-wrapper::-webkit-scrollbar-track{background:var(--scrollbar-track-bg, #f1f1f1)}.table-scroll-wrapper::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-bg, #888);border-radius:4px}.table-scroll-wrapper::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-bg, #555)}table{border-collapse:collapse}table .mat-mdc-cell,table .mat-mdc-header-cell{word-break:break-word;white-space:pre-wrap}table .mat-mdc-header-row{background:var(--color-header-bg, #f9fafb)!important;border-bottom:1px solid var(--color-header-border, #e5e7eb);height:var(--size-row-height, 44px)}table .mat-mdc-header-cell{font-weight:var(--font-header-weight, 600);color:var(--color-header-text, #374151);font-size:var(--font-header-size, 13px);padding:var(--size-header-padding, 10px 12px)!important}table .mat-mdc-row{background:var(--color-row-bg, #ffffff);border-bottom:1px solid var(--color-row-border, #e5e7eb);height:var(--size-row-height, 44px);transition:background-color .15s ease;cursor:pointer}table .mat-mdc-row:hover{background:var(--color-row-hover-bg, #f9fafb)}table .mat-mdc-row:nth-child(2n){background-color:var(--color-row-bg, #ffffff)}table .mat-mdc-row:nth-child(2n):hover{background:var(--color-row-hover-bg, #f9fafb)}table .mat-mdc-row.selected-row .mat-mdc-cell{background-color:var(--color-selected-row-bg, rgba(33, 150, 243, .1))!important}table .mat-mdc-cell{padding:var(--size-cell-padding, 10px 12px);font-size:var(--font-cell-size, .875rem);color:var(--color-cell-text, #374151);vertical-align:middle}table .mat-mdc-cell:first-child{width:40px;padding:10px 6px!important;text-align:center}table .mat-mdc-header-cell{padding:.75rem;font-size:.875rem;color:var(--color-header-text, #374151)}table .cell-label{display:none;font-weight:600;font-size:.75rem;color:var(--color-cell-text, #374151);margin-bottom:.25rem;text-transform:uppercase}@media (max-width: 768px){table .cell-label{display:block}}table .cell-value{font-size:var(--font-cell-size, .875rem);color:var(--color-cell-text, #374151)}table .actions-cell{display:flex;gap:6px;justify-content:flex-start;align-items:center}table .actions-cell button[mat-icon-button]{padding:4px!important;min-width:28px!important;height:28px!important;border-radius:4px;transition:all .15s ease;color:var(--color-toolbar-text, #6b7280)}table .actions-cell button[mat-icon-button]:hover{background:var(--color-button-hover-bg, #f3f4f6);color:var(--color-cell-text, #374151)}table .actions-cell button[mat-icon-button] mat-icon{font-size:18px;width:18px;height:18px}table .actions-cell button[mat-icon-button] mat-icon.text-success{color:var(--color-success, #10b981)}table .actions-cell button[mat-icon-button] mat-icon.text-primary{color:var(--color-primary, #6b7280)}table .actions-cell button[mat-icon-button] mat-icon.text-danger{color:var(--color-danger, #ef4444)}table .mat-mdc-sort-header-container{padding:0}.empty-state__icon{font-size:48px;width:48px;height:48px;color:var(--empty-state-color, #999)}:host-context(.dark-theme){--dark-placeholder: \"\"}@media (max-width: 992px){table .mat-mdc-cell,table .mat-mdc-header-cell{padding:.5rem;font-size:.8125rem}table .actions-cell button[mat-icon-button]{padding:0 .25rem!important}}@media (max-width: 768px){table .mat-mdc-cell,table .mat-mdc-header-cell{padding:.375rem;font-size:.75rem}table .cell-label{display:block!important}table .actions-cell{flex-wrap:wrap;gap:.25rem}table .actions-cell button[mat-icon-button]{padding:0 .125rem!important}table .actions-cell button[mat-icon-button] mat-icon{font-size:16px;width:16px;height:16px}.mattable-toolbar{height:48px;padding:.5rem!important}.mat-mdc-paginator{padding:.5rem!important}.mat-mdc-paginator .mat-mdc-paginator-container{flex-direction:column;align-items:flex-start;gap:.5rem}.mat-mdc-paginator .mat-mdc-paginator-page-size{width:100%;flex-wrap:wrap}.mat-mdc-paginator .mat-mdc-paginator-range-actions{width:100%;display:flex;justify-content:space-between;align-items:center}.mat-mdc-paginator .mat-mdc-paginator-range-label{margin:0;font-size:.75rem}.mat-mdc-paginator .mat-mdc-icon-button{padding:0 .25rem!important}.mat-mdc-paginator .mat-mdc-icon-button mat-icon{font-size:18px!important;width:18px!important;height:18px!important}}.mat-mdc-paginator{background:var(--paginator-bg, #f5f5f5)!important;border-top:1px solid var(--border-color, #e0e0e0);display:flex;justify-content:flex-end;padding:.5rem 1rem!important;flex-shrink:0}.mat-mdc-paginator .mat-mdc-paginator-container{display:flex;align-items:center;justify-content:space-between;min-height:40px;padding:0!important}.mat-mdc-paginator .mdc-select__anchor{height:36px}.mat-mdc-paginator .mdc-notched-outline__leading,.mat-mdc-paginator .mdc-notched-outline__notch,.mat-mdc-paginator .mdc-notched-outline__trailing{border-color:var(--input-border-color, #ccc)}.mat-mdc-paginator .mat-mdc-paginator-page-size{align-items:center;display:flex;gap:.5rem}.mat-mdc-paginator .mat-mdc-paginator-page-size .mat-mdc-paginator-page-size-label{margin:0;font-size:.875rem;color:var(--table-cell-color, #333)}.mat-mdc-paginator .mat-mdc-paginator-range-label{font-size:.875rem;margin:0 1rem;color:var(--table-cell-color, #333)}.mat-mdc-paginator button[mat-icon-button]:disabled{opacity:.5}:host-context(.dark-theme) .mat-mdc-paginator{background:var(--paginator-bg, #252525)!important;border-top-color:var(--border-color, #333)}:host-context(.dark-theme) .mat-mdc-paginator .mdc-notched-outline__leading,:host-context(.dark-theme) .mat-mdc-paginator .mdc-notched-outline__notch,:host-context(.dark-theme) .mat-mdc-paginator .mdc-notched-outline__trailing{border-color:var(--input-border-color, #444)!important}:host-context(.dark-theme) .mat-mdc-paginator .mat-mdc-paginator-page-size-label,:host-context(.dark-theme) .mat-mdc-paginator .mat-mdc-paginator-range-label{color:var(--table-cell-color, #e0e0e0)}.search-wrapper{position:relative;flex:1;max-width:300px}.search-wrapper input.form-control{border:1px solid var(--color-input-border, #e5e7eb);border-radius:4px;padding:.4rem 2rem .4rem .5rem!important;height:36px;font-size:.875rem;background:var(--color-input-bg, #ffffff);color:var(--color-input-text, #6b7280)}.search-wrapper input.form-control::placeholder{color:var(--color-input-placeholder, #9ca3af)}.search-wrapper input.form-control:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 4px #64646433}.search-wrapper button{right:4px!important;width:28px!important;height:28px!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important}.column-header{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%}.column-header .column-header-content{display:flex;align-items:center;gap:8px;width:100%}.column-header .column-header-content span{flex:1;font-weight:var(--font-header-weight, 600);font-size:var(--font-header-size, 13px);color:var(--color-header-text, #374151)}.column-header .column-header-content .column-delete-btn{opacity:0;transition:opacity .2s ease,color .2s ease;color:var(--color-danger, #ef4444);padding:2px!important;height:24px!important;width:24px!important;min-width:24px!important;flex-shrink:0}.column-header .column-header-content .column-delete-btn mat-icon{font-size:16px;width:16px;height:16px;line-height:16px}.column-header .column-header-content .column-delete-btn:hover{background:#ef44441a}.column-header:hover .column-delete-btn{opacity:1}.column-header .column-filter-input{width:100%;height:26px;font-size:11px;border-radius:4px;border:1px solid var(--color-filter-input-border, #e5e7eb);padding:2px 6px!important;background:var(--color-filter-input-bg, #ffffff);color:var(--color-filter-input-text, #6b7280);transition:all .15s ease}.column-header .column-filter-input::placeholder{color:var(--color-input-placeholder, #9ca3af)}.column-header .column-filter-input:focus{outline:none;border-color:var(--color-primary, #6b7280);box-shadow:0 0 0 2px #6b72801a;background:var(--color-filter-input-bg, #ffffff)}.column-menu-header{display:flex;flex-direction:column;gap:0}.column-menu-header button{justify-content:flex-start;text-align:left;padding:.5rem 1rem!important;font-size:.875rem;border-radius:0}.column-menu-header button mat-icon{margin-right:.5rem;font-size:18px;width:18px;height:18px}.column-menu-header button:hover{background:#0000000a}.mat-mdc-menu-panel .mat-mdc-menu-item{display:flex;align-items:center;padding:.5rem 1rem!important;font-size:.875rem}.mat-mdc-menu-panel .mat-mdc-menu-item mat-icon{margin-right:.75rem;font-size:18px;width:18px;height:18px}.mat-mdc-menu-panel .mat-mdc-menu-item:hover{background:#0000000a}.selected-row .mat-mdc-cell{background-color:var(--color-selected-row-bg, rgba(33, 150, 243, .1))!important}.mat-mdc-table .mat-mdc-checkbox{margin:0}.mat-mdc-table .mat-mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not([data-indeterminate])~.mdc-checkbox__background:after{border-color:var(--checkbox-border-color, #999)}.mat-mdc-table .mat-mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background{background-color:var(--checkbox-checked-bg, #2196f3);border-color:var(--checkbox-checked-bg, #2196f3)}.sortable{cursor:pointer;-webkit-user-select:none;user-select:none}.sortable:hover{background:#00000005}.mat-mdc-sort-header .mat-mdc-sort-header-container{justify-content:flex-start;align-items:center;gap:.5rem}.mat-mdc-sort-header.mat-sort-header-disabled{cursor:default}.mat-mdc-sort-header .mat-mdc-sort-header-arrow{margin-left:.25rem;color:var(--sort-arrow-color, #999)}.mat-mdc-sort-header .mat-mdc-sort-header-arrow.mat-sort-header-sorted{color:var(--primary-color, #2196f3)}:host-context(.dark-theme) .search-wrapper input.form-control{background:var(--input-bg, #2d2d2d);color:var(--input-color, #e0e0e0);border-color:var(--input-border-color, #444)}:host-context(.dark-theme) .search-wrapper input.form-control:focus{border-color:#888;box-shadow:0 0 4px #8888884d}:host-context(.dark-theme) .column-header .column-filter-input{background:var(--input-bg, #2d2d2d);color:var(--input-color, #e0e0e0);border-color:var(--input-border-color, #444)}:host-context(.dark-theme) .column-header .column-filter-input:focus{border-color:#888;box-shadow:0 0 2px #8888884d}:host-context(.dark-theme) .selected-row .mat-mdc-cell{background-color:#64b5f626!important}:host-context(.dark-theme) .mat-mdc-menu-panel .mat-mdc-menu-item:hover{background:#ffffff14}:host-context(.dark-theme) .mat-mdc-sort-header .mdc-checkbox__native-control:enabled:not(:checked):not([data-indeterminate])~.mdc-checkbox__background:after{border-color:var(--checkbox-border-color, #666)}:host-context(.dark-theme) .mat-mdc-sort-header .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background{background-color:var(--checkbox-checked-bg, #64b5f6);border-color:var(--checkbox-checked-bg, #64b5f6)}:host-context(.dark-theme) .sortable:hover{background:#ffffff0d}.editable-cell{cursor:text;position:relative;padding-right:28px!important;transition:background-color .2s ease}.editable-cell:hover{background-color:#6b72800a}.editable-cell:hover .edit-icon{opacity:1}.cell-content{display:flex;align-items:center;justify-content:space-between}.edit-icon-hover{font-size:14px;opacity:0}.cell-content:hover .edit-icon-hover{opacity:1}.inline-edit-container{display:flex;align-items:center;gap:6px;padding:4px;background:var(--input-bg, #f9fafb);border:2px solid var(--primary-color, #6b7280);border-radius:6px}.inline-edit-input{flex:1;padding:6px 8px;border:1px solid var(--input-border-color, #d1d5db);border-radius:4px;font-size:.875rem;font-family:inherit;min-width:100px;max-width:200px;background:var(--input-bg, #f9fafb);color:var(--input-color, #111827)}.inline-edit-input:focus{outline:none;border-color:var(--primary-color, #6b7280);box-shadow:0 0 0 3px #6b72801a}.inline-edit-actions{display:flex;gap:4px}.inline-edit-actions button{padding:2px!important;min-width:24px!important;height:24px!important;border-radius:4px;transition:all .2s ease}.inline-edit-actions button mat-icon{font-size:14px;width:14px;height:14px}.inline-edit-actions button.save-btn{color:var(--success-color, #10b981)}.inline-edit-actions button.save-btn mat-icon{color:var(--success-color, #10b981)}.inline-edit-actions button.save-btn:hover{background:#10b9811a}.inline-edit-actions button.cancel-btn{color:var(--danger-color, #ef4444)}.inline-edit-actions button.cancel-btn mat-icon{color:var(--danger-color, #ef4444)}.inline-edit-actions button.cancel-btn:hover{background:#ef44441a}:host-context(.dark-theme) .editable-cell:hover{background-color:#ffffff0a}:host-context(.dark-theme) .edit-icon{color:var(--icon-color, #9ca3af)}:host-context(.dark-theme) .inline-edit-container{background:var(--input-bg, #111827);border-color:var(--primary-color, #60a5fa)}:host-context(.dark-theme) .inline-edit-input{background:var(--input-bg, #111827);color:var(--input-color, #f3f4f6);border-color:var(--input-border-color, #4b5563)}:host-context(.dark-theme) .inline-edit-input:focus{border-color:var(--primary-color, #60a5fa);box-shadow:0 0 0 3px #60a5fa1a}.sticky-action-column{position:sticky;right:0;background:var(--table-row-bg, #ffffff);z-index:10;border-left:1px solid var(--table-row-border, #e5e7eb)}.sticky-action-column.mat-mdc-header-cell{background:var(--table-header-bg, #f9fafb)}.resize-handle{position:absolute;right:-3px;top:0;height:100%;width:6px;cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none}.resize-handle:hover{background:#6b72804d}.resize-handle:active{background:#6b728080}.mat-mdc-header-cell{position:relative;-webkit-user-select:none;user-select:none}.virtual-scroll-wrapper{overflow-y:auto;height:100%;flex:1}.virtual-scroll-wrapper::-webkit-scrollbar{width:8px}.virtual-scroll-wrapper::-webkit-scrollbar-track{background:var(--scrollbar-track-bg, #f3f4f6)}.virtual-scroll-wrapper::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-bg, #d1d5db);border-radius:4px}.virtual-scroll-wrapper::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-bg, #9ca3af)}.cursor-pointer{cursor:pointer}.text-muted{color:var(--text-muted, #999)}.text-success{color:var(--success-color, #4caf50)}.text-primary{color:var(--primary-color, #6b7280)}.text-danger{color:var(--danger-color, #f44336)}.insert-column-dialog-overlay{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;animation:fadeIn .2s ease}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.insert-column-dialog{background:#fff;border-radius:8px;box-shadow:0 10px 40px #00000029;width:90%;max-width:400px;overflow:hidden;animation:slideUp .3s ease}@media (max-width: 768px){.insert-column-dialog{width:95%;max-width:100%}}@keyframes slideUp{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}.dialog-header{padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}.dialog-header h4{font-size:16px;font-weight:600;color:#111827}.dialog-header .btn-close{background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease}.dialog-header .btn-close:hover{background:#f3f4f6;color:#111827}.dialog-body{padding:20px}.dialog-body .form-label{font-weight:500;font-size:14px;color:#111827;margin-bottom:6px;display:block}.dialog-body .form-control{border:1px solid #d1d5db;border-radius:6px;padding:8px 12px;font-size:14px;color:#111827;background:#fff;transition:all .2s ease}.dialog-body .form-control:focus{outline:none;border-color:#6b7280;box-shadow:0 0 0 3px #6b72801a;background:#fff;color:#111827}.dialog-body .form-control::placeholder{color:#9ca3af}.dialog-body small{display:block;margin-top:4px;font-size:12px;color:#6b7280}.dialog-footer{padding:16px 20px;border-top:1px solid #e5e7eb;display:flex;gap:8px;justify-content:flex-end}.dialog-footer .btn{padding:8px 16px;border-radius:6px;font-weight:500;font-size:14px;cursor:pointer;transition:all .2s ease;border:none}.dialog-footer .btn-secondary{background:#e5e7eb;color:#111827}.dialog-footer .btn-secondary:hover{background:#d1d5db}.dialog-footer .btn-primary{background:#6b7280;color:#fff}.dialog-footer .btn-primary:hover{background:#4b5563}.dialog-footer .btn-primary:active{transform:scale(.98)}:host-context(.dark-theme) .insert-column-dialog{background:#1f2937;box-shadow:0 10px 40px #00000080}:host-context(.dark-theme) .dialog-header{border-bottom-color:#374151}:host-context(.dark-theme) .dialog-header h4{color:#f3f4f6}:host-context(.dark-theme) .dialog-header .btn-close{color:#9ca3af}:host-context(.dark-theme) .dialog-header .btn-close:hover{background:#374151;color:#f3f4f6}:host-context(.dark-theme) .dialog-body .form-label{color:#f3f4f6}:host-context(.dark-theme) .dialog-body .form-control{border-color:#4b5563;background:#111827;color:#f3f4f6}:host-context(.dark-theme) .dialog-body .form-control:focus{border-color:#60a5fa;box-shadow:0 0 0 3px #60a5fa1a;background:#111827;color:#f3f4f6}:host-context(.dark-theme) .dialog-body .form-control::placeholder{color:#6b7280}:host-context(.dark-theme) .dialog-body small{color:#9ca3af}:host-context(.dark-theme) .dialog-footer{border-top-color:#374151}:host-context(.dark-theme) .dialog-footer .btn-secondary{background:#374151;color:#f3f4f6}:host-context(.dark-theme) .dialog-footer .btn-secondary:hover{background:#4b5563}:host-context(.dark-theme) .dialog-footer .btn-primary{background:#60a5fa;color:#fff}:host-context(.dark-theme) .dialog-footer .btn-primary:hover{background:#3b82f6}\n"] }]
    }], null, { config: [{
            type: Input
        }], columns: [{
            type: Input
        }], actions: [{
            type: Input
        }], enableExport: [{
            type: Input
        }], enablePrint: [{
            type: Input
        }], enableColumnToggle: [{
            type: Input
        }], enableAdd: [{
            type: Input
        }], enableDelete: [{
            type: Input
        }], enableRowSelection: [{
            type: Input
        }], showActionColumn: [{
            type: Input
        }], enableInlineEdit: [{
            type: Input
        }], enableColumnDrag: [{
            type: Input
        }], enableColumnResize: [{
            type: Input
        }], enableStickyActions: [{
            type: Input
        }], enableVirtualScroll: [{
            type: Input
        }], serverSidePagination: [{
            type: Input
        }], backendPaginationUrl: [{
            type: Input
        }], data: [{
            type: Input
        }], featureConfig: [{
            type: Input
        }], displayConfig: [{
            type: Input
        }], displayedColumns: [{
            type: Input
        }], tableMaxHeight: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], searchTerm: [{
            type: Input
        }], filterPredicate: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], showPaginator: [{
            type: Input
        }], events: [{
            type: Output
        }], tableActionTriggered: [{
            type: Output
        }], rowEditClicked: [{
            type: Output
        }], rowSelected: [{
            type: Output
        }], searchChanged: [{
            type: Output
        }], actionClicked: [{
            type: Output
        }], inlineEditChange: [{
            type: Output
        }], serverDataRequested: [{
            type: Output
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], onMouseMove: [{
            type: HostListener,
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: HostListener,
            args: ['document:mouseup', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReusableTableComponent, { className: "ReusableTableComponent", filePath: "lib\\reusable-table.component.ts", lineNumber: 57 }); })();

/*
 * Public API Surface of @tasktrack/reusable-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_DISPLAY_CONFIG, DEFAULT_FEATURE_CONFIG, DEFAULT_TABLE_CONFIG, ReusableTableComponent, TableConfirmDialogComponent, mergeTableConfig };
//# sourceMappingURL=tasktrack-reusable-table.mjs.map
