import { Component, Input, Output, EventEmitter, ViewChild, DestroyRef, inject, ViewEncapsulation, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableConfirmDialogComponent } from './table-confirm-dialog.component';
import { DEFAULT_TABLE_CONFIG, mergeTableConfig } from './reusable-table.config';
import { DEFAULT_FEATURE_CONFIG, DEFAULT_DISPLAY_CONFIG } from './table-event.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/sort";
import * as i6 from "@angular/material/paginator";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/menu";
import * as i9 from "@angular/material/tooltip";
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
export class ReusableTableComponent {
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
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, MatTableModule, i3.MatTable, i3.MatHeaderCellDef, i3.MatHeaderRowDef, i3.MatColumnDef, i3.MatCellDef, i3.MatRowDef, i3.MatHeaderCell, i3.MatCell, i3.MatHeaderRow, i3.MatRow, MatIconModule, i4.MatIcon, MatSortModule, i5.MatSort, i5.MatSortHeader, MatPaginatorModule, i6.MatPaginator, MatCheckboxModule, i7.MatCheckbox, MatMenuModule, i8.MatMenu, i8.MatMenuItem, i8.MatMenuTrigger, MatTooltipModule, i9.MatTooltip, MatDialogModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2FibGUtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcmV1c2FibGUtdGFibGUvc3JjL2xpYi9yZXVzYWJsZS10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXVzYWJsZS10YWJsZS9zcmMvbGliL3JldXNhYmxlLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzUCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBYSxNQUFNLDZCQUE2QixDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8s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QkFBNUIsS0FBSztZQUdHLG9CQUFvQjtrQkFBNUIsS0FBSztZQU1HLElBQUk7a0JBQVosS0FBSztZQUdHLGFBQWE7a0JBQXJCLEtBQUs7WUFHRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBR0csY0FBYztrQkFBdEIsS0FBSztZQUdHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRyxZQUFZO2tCQUFwQixLQUFLO1lBR0csVUFBVTtrQkFBbEIsS0FBSztZQUdHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRyxRQUFRO2tCQUFoQixLQUFLO1lBR0csZUFBZTtrQkFBdkIsS0FBSztZQUdHLGFBQWE7a0JBQXJCLEtBQUs7WUFLSSxNQUFNO2tCQUFmLE1BQU07WUFHRyxvQkFBb0I7a0JBQTdCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csZ0JBQWdCO2tCQUF6QixNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNO1lBc0RhLElBQUk7a0JBQXZCLFNBQVM7bUJBQUMsT0FBTztZQUNPLFNBQVM7a0JBQWpDLFNBQVM7bUJBQUMsWUFBWTtZQXN5Q3ZCLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQWdCOUMsU0FBUztrQkFEUixZQUFZO21CQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOztrRkFsK0NqQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIERlc3Ryb3lSZWYsIGluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0UGFnaW5hdG9yTW9kdWxlLCBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcclxuaW1wb3J0IHsgVGFibGVDb2x1bW4sIFRhYmxlQWN0aW9uIH0gZnJvbSAnLi9yZXVzYWJsZS10YWJsZS5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgVGFibGVDb25maXJtRGlhbG9nQ29tcG9uZW50LCB0eXBlIERpYWxvZ0RhdGEgfSBmcm9tICcuL3RhYmxlLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlQ29uZmlnLCBERUZBVUxUX1RBQkxFX0NPTkZJRywgbWVyZ2VUYWJsZUNvbmZpZyB9IGZyb20gJy4vcmV1c2FibGUtdGFibGUuY29uZmlnJztcclxuaW1wb3J0IHsgVGFibGVFdmVudCwgVGFibGVGZWF0dXJlQ29uZmlnLCBUYWJsZURpc3BsYXlDb25maWcsIERFRkFVTFRfRkVBVFVSRV9DT05GSUcsIERFRkFVTFRfRElTUExBWV9DT05GSUcgfSBmcm9tICcuL3RhYmxlLWV2ZW50Lm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBSZXVzYWJsZVRhYmxlQ29tcG9uZW50XHJcbiAqIEVudGVycHJpc2UtZ3JhZGUgY29uZmlndXJhYmxlIHRhYmxlIGNvbXBvbmVudCB3aXRoIGR5bmFtaWMgY29sdW1ucywgYWN0aW9ucyxcclxuICogZXhwb3J0IChFeGNlbC9QREYvQ1NWKSwgcHJpbnRpbmcsIGNvbHVtbiB0b2dnbGUsIGlubGluZSBmaWx0ZXJpbmcsIGFuZCBtb3JlLlxyXG4gKiBGdWxseSBnZW5lcmljIGFuZCBwcm9kdWN0aW9uLXJlYWR5LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmV1c2FibGUtdGFibGUnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxyXG4gIE1hdFRhYmxlTW9kdWxlLFxyXG4gIE1hdFNvcnRNb2R1bGUsXHJcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gIE1hdE1lbnVNb2R1bGUsXHJcbiAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgTWF0U25hY2tCYXJNb2R1bGVcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzYWJsZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmV1c2FibGUtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2FibGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGRlc3Ryb3lSZWYgPSBpbmplY3QoRGVzdHJveVJlZik7XHJcbiAgcHJpdmF0ZSBkaWFsb2cgPSBpbmplY3QoTWF0RGlhbG9nKTtcclxuICBwcml2YXRlIHNuYWNrQmFyID0gaW5qZWN0KE1hdFNuYWNrQmFyKTtcclxuICBwcml2YXRlIGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgcHJpdmF0ZSBlbGVtZW50UmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xyXG4gIHByaXZhdGUgcmVuZGVyZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIENPTkZJR1VSQVRJT04g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgXHJcbiAgLyoqIEZ1bGx5IGN1c3RvbWl6YWJsZSB0YWJsZSBjb25maWd1cmF0aW9uICovXHJcbiAgQElucHV0KCkgY29uZmlnPzogVGFibGVDb25maWc7XHJcbiAgXHJcbiAgLyoqIFJlc29sdmVkIGNvbmZpZyAoZGVmYXVsdHMgKyBjdXN0b20pICovXHJcbiAgdGFibGVDb25maWc6IFRhYmxlQ29uZmlnID0gREVGQVVMVF9UQUJMRV9DT05GSUc7XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBJTlBVVFM6IE5FVyBDT05GSUdVUkFCTEUgQ09MVU1OUyAmIEFDVElPTlMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgXHJcbiAgLyoqIER5bmFtaWMgY29sdW1uIGNvbmZpZ3VyYXRpb24gKHJlcGxhY2VzIGhhcmRjb2RlZCBkaXNwbGF5ZWRDb2x1bW5zKSAqL1xyXG4gIEBJbnB1dCgpIGNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXTtcclxuICBcclxuICAvKiogRHluYW1pYyBhY3Rpb24gYnV0dG9ucyBjb25maWd1cmF0aW9uICovXHJcbiAgQElucHV0KCkgYWN0aW9uczogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBleHBvcnQgdG8gRXhjZWwgKi9cclxuICBASW5wdXQoKSBlbmFibGVFeHBvcnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBwcmludCBmdW5jdGlvbmFsaXR5ICovXHJcbiAgQElucHV0KCkgZW5hYmxlUHJpbnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBjb2x1bW4gdG9nZ2xlIGZlYXR1cmUgKi9cclxuICBASW5wdXQoKSBlbmFibGVDb2x1bW5Ub2dnbGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBhZGQgcm93IGJ1dHRvbiAqL1xyXG4gIEBJbnB1dCgpIGVuYWJsZUFkZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBkZWxldGUgcm93IGJ1dHRvbiAqL1xyXG4gIEBJbnB1dCgpIGVuYWJsZURlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSByb3cgc2VsZWN0aW9uIGNoZWNrYm94ZXMgKi9cclxuICBASW5wdXQoKSBlbmFibGVSb3dTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICAvKiogU2hvdy9oaWRlIHRoZSBhY3Rpb24gY29sdW1uICovXHJcbiAgQElucHV0KCkgc2hvd0FjdGlvbkNvbHVtbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgXHJcbiAgLyoqIEVuYWJsZS9kaXNhYmxlIGlubGluZSBlZGl0aW5nICovXHJcbiAgQElucHV0KCkgZW5hYmxlSW5saW5lRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBjb2x1bW4gZHJhZ2dpbmcgZm9yIHJlb3JkZXIgKi9cclxuICBASW5wdXQoKSBlbmFibGVDb2x1bW5EcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgLyoqIEVuYWJsZS9kaXNhYmxlIGNvbHVtbiByZXNpemUgKi9cclxuICBASW5wdXQoKSBlbmFibGVDb2x1bW5SZXNpemU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBzdGlja3kgYWN0aW9uIGNvbHVtbiAoc3RheXMgdmlzaWJsZSB3aGVuIHNjcm9sbGluZykgKi9cclxuICBASW5wdXQoKSBlbmFibGVTdGlja3lBY3Rpb25zOiBib29sZWFuID0gdHJ1ZTtcclxuICBcclxuICAvKiogRW5hYmxlL2Rpc2FibGUgdmlydHVhbCBzY3JvbGxpbmcgZm9yIGxhcmdlIGRhdGFzZXRzICovXHJcbiAgQElucHV0KCkgZW5hYmxlVmlydHVhbFNjcm9sbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBTZXJ2ZXItc2lkZSBwYWdpbmF0aW9uIGVuYWJsZWQgKi9cclxuICBASW5wdXQoKSBzZXJ2ZXJTaWRlUGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBCYWNrZW5kIHBhZ2luYXRpb24gY29uZmlnICovXHJcbiAgQElucHV0KCkgYmFja2VuZFBhZ2luYXRpb25Vcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgSU5QVVRTOiBMRUdBQ1kgKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgSU5QVVRTOiBORVcgQ09OVFJPTExFRCBBUkNISVRFQ1RVUkUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgXHJcbiAgLyoqIENvbnRyb2xsZWQgZGF0YSBpbnB1dCAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XHJcbiAgXHJcbiAgLyoqIEZlYXR1cmUgY29uZmlndXJhdGlvbiAqL1xyXG4gIEBJbnB1dCgpIGZlYXR1cmVDb25maWc6IFRhYmxlRmVhdHVyZUNvbmZpZyA9IERFRkFVTFRfRkVBVFVSRV9DT05GSUc7XHJcbiAgXHJcbiAgLyoqIERpc3BsYXkgY29uZmlndXJhdGlvbiAqL1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlDb25maWc6IFRhYmxlRGlzcGxheUNvbmZpZyA9IERFRkFVTFRfRElTUExBWV9DT05GSUc7XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBJTlBVVFM6IExFR0FDWSAoQkFDS1dBUkQgQ09NUEFUSUJJTElUWSkg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgXHJcbiAgLyoqIEFycmF5IG9mIGNvbHVtbiBuYW1lcyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZSAoTEVHQUNZKSAqL1xyXG4gIEBJbnB1dCgpIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XHJcbiAgXHJcbiAgLyoqIE1heGltdW0gaGVpZ2h0IG9mIHRoZSB0YWJsZSBjb250YWluZXIgaW4gcGl4ZWxzICovXHJcbiAgQElucHV0KCkgdGFibGVNYXhIZWlnaHQ6IG51bWJlciA9IDQwMDtcclxuICBcclxuICAvKiogSGVpZ2h0IG9mIGVhY2ggcm93IGluIHBpeGVscyAqL1xyXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyID0gNDQ7XHJcbiAgXHJcbiAgLyoqIEhlaWdodCBvZiB0aGUgdGFibGUgaGVhZGVyIGluIHBpeGVscyAqL1xyXG4gIEBJbnB1dCgpIGhlYWRlckhlaWdodDogbnVtYmVyID0gNTY7XHJcbiAgXHJcbiAgLyoqIFNlYXJjaCB0ZXJtIHRvIGZpbHRlciB0YWJsZSBkYXRhICovXHJcbiAgQElucHV0KCkgc2VhcmNoVGVybTogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgLyoqIEN1c3RvbSBmaWx0ZXIgcHJlZGljYXRlIGZ1bmN0aW9uICovXHJcbiAgQElucHV0KCkgZmlsdGVyUHJlZGljYXRlOiAoKGRhdGE6IGFueSwgZmlsdGVyOiBzdHJpbmcpID0+IGJvb2xlYW4pIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBQYWdlIHNpemUgZm9yIHBhZ2luYXRpb24gKi9cclxuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcblxyXG4gIC8qKiBQYWdlIHNpemUgb3B0aW9ucyBmb3IgcGFnaW5hdG9yICovXHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSA9IFs1LCAxMCwgMjUsIDUwXTtcclxuXHJcbiAgLyoqIEVuYWJsZS9kaXNhYmxlIHBhZ2luYXRpb24gKi9cclxuICBASW5wdXQoKSBzaG93UGFnaW5hdG9yOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIE9VVFBVVFMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgXHJcbiAgLyoqIFNpbmdsZSB1bmlmaWVkIGV2ZW50IGVtaXR0ZXIgKi9cclxuICBAT3V0cHV0KCkgZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJsZUV2ZW50PigpO1xyXG4gIFxyXG4gIC8qKiBMZWdhY3kgb3V0cHV0cyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSAqL1xyXG4gIEBPdXRwdXQoKSB0YWJsZUFjdGlvblRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBhY3Rpb246IHN0cmluZzsgcm93PzogYW55OyByb3dzPzogYW55W10gfT4oKTtcclxuICBAT3V0cHV0KCkgcm93RWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGFjdGlvbjogc3RyaW5nOyByb3c6IGFueSB9PigpO1xyXG4gIEBPdXRwdXQoKSBpbmxpbmVFZGl0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHJvdzogYW55OyBjb2x1bW46IHN0cmluZzsgdmFsdWU6IGFueSB9PigpO1xyXG4gIEBPdXRwdXQoKSBzZXJ2ZXJEYXRhUmVxdWVzdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBTVEFURSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcclxuICBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgc2VhcmNoSW5wdXRWYWx1ZSA9ICcnO1xyXG4gIHNlbGVjdGVkUm93cyA9IG5ldyBTZXQ8YW55PigpO1xyXG4gIHNob3dDb2x1bW5QYW5lbCA9IGZhbHNlO1xyXG4gIGNvbHVtbkZpbHRlcnM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XHJcbiAgZWRpdGluZ0hvdmVyZWRSb3c6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIFxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBDT0xVTU4gSU5TRVJUSU9OIERJQUxPRyBTVEFURSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICBzaG93SW5zZXJ0Q29sdW1uRGlhbG9nID0gZmFsc2U7XHJcbiAgbmV3Q29sdW1uTmFtZSA9ICcnO1xyXG4gIG5ld0NvbHVtbkxhYmVsID0gJyc7XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBBRFZBTkNFRCBGRUFUVVJFUyBTVEFURSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICAvKiogVHJhY2sgaW5saW5lIGVkaXQgbW9kZSAqL1xyXG4gIGVkaXRpbmdDZWxsOiB7IHJvd0luZGV4OiBudW1iZXI7IGNvbHVtbjogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcclxuICBlZGl0aW5nVmFsdWU6IGFueSA9IG51bGw7XHJcbiAgXHJcbiAgLyoqIFRyYWNrIGNvbHVtbiBvcmRlciBmb3IgZHJhZy10by1yZW9yZGVyICovXHJcbiAgY29sdW1uT3JkZXI6IFRhYmxlQ29sdW1uW10gPSBbXTtcclxuICBkcmFnZ2VkQ29sdW1uOiBUYWJsZUNvbHVtbiB8IG51bGwgPSBudWxsO1xyXG4gIFxyXG4gIC8qKiBBZHZhbmNlZCBmaWx0ZXJzICovXHJcbiAgYWR2YW5jZWRGaWx0ZXJzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ09MVU1OIFJFU0laRSBTVEFURSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICAvKiogVHJhY2sgY29sdW1uIGJlaW5nIHJlc2l6ZWQgKi9cclxuICByZXNpemluZ0NvbHVtbjogVGFibGVDb2x1bW4gfCBudWxsID0gbnVsbDtcclxuICByZXNpemVTdGFydFg6IG51bWJlciA9IDA7XHJcbiAgcmVzaXplU3RhcnRXaWR0aDogbnVtYmVyID0gMDtcclxuICBcclxuICAvKiogU3RvcmUgY29sdW1uIHdpZHRocyAqL1xyXG4gIGNvbHVtbldpZHRoczogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIFZJUlRVQUwgU0NST0xMICYgUEFHSU5BVElPTiBTVEFURSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICAvKiogQ3VycmVudCBzZXJ2ZXItc2lkZSBwYWdpbmF0aW9uIHN0YXRlICovXHJcbiAgY3VycmVudFBhZ2VJbmRleDogbnVtYmVyID0gMDtcclxuICBjdXJyZW50UGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gIHRvdGFsUmVjb3JkQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgaXNMb2FkaW5nU2VydmVyRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKiBWaXJ0dWFsIHNjcm9sbCBidWZmZXIgKi9cclxuICB2aXJ0dWFsU2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1O1xyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgVEFCTEUgU09SVCAmIFBBR0lOQVRPUiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQhOiBNYXRTb3J0O1xyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3IhOiBNYXRQYWdpbmF0b3I7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gTWVyZ2UgY3VzdG9tIGNvbmZpZyB3aXRoIGRlZmF1bHRzIChsZWdhY3kpXHJcbiAgICB0aGlzLnRhYmxlQ29uZmlnID0gbWVyZ2VUYWJsZUNvbmZpZyh0aGlzLmNvbmZpZyk7XHJcbiAgICBcclxuICAgIC8vIEFwcGx5IENTUyB2YXJpYWJsZXMgZm9yIGR5bmFtaWMgdGhlbWluZ1xyXG4gICAgdGhpcy5hcHBseUNTU1ZhcmlhYmxlcygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmluaXRpYWxpemVGaWx0ZXJQcmVkaWNhdGUoKTtcclxuICAgIFxyXG4gICAgLy8gU3luYyBjb250cm9sbGVkIGRhdGEgaW5wdXRcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhO1xyXG4gIH1cclxuICBcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGUgZGF0YVNvdXJjZSB3aGVuIGNvbnRyb2xsZWQgZGF0YSBpbnB1dCBjaGFuZ2VzXHJcbiAgICBpZiAoY2hhbmdlc1snZGF0YSddKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgQ1NTIHZhcmlhYmxlcyBmb3IgY29tcGxldGUgdGhlbWUgY3VzdG9taXphdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXBwbHlDU1NWYXJpYWJsZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YXJzID0gdGhpcy50YWJsZUNvbmZpZy5jb2xvcnMgfHwge307XHJcbiAgICBjb25zdCBzaXppbmcgPSB0aGlzLnRhYmxlQ29uZmlnLnNpemluZyB8fCB7fTtcclxuICAgIGNvbnN0IHR5cG9ncmFwaHkgPSB0aGlzLnRhYmxlQ29uZmlnLnR5cG9ncmFwaHkgfHwge307XHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoaXMudGFibGVDb25maWcuZGFya01vZGUgfHwge307XHJcblxyXG4gICAgLy8gQ29sb3JzXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLXByaW1hcnknLCB2YXJzLnByaW1hcnkpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1uZXV0cmFsJywgdmFycy5uZXV0cmFsKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tY29sb3ItYm9yZGVyJywgdmFycy5ib3JkZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci10b29sYmFyLWJnJywgdmFycy50b29sYmFyQmcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci10b29sYmFyLXRleHQnLCB2YXJzLnRvb2xiYXJUZXh0KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tY29sb3ItaGVhZGVyLWJnJywgdmFycy5oZWFkZXJCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWhlYWRlci10ZXh0JywgdmFycy5oZWFkZXJUZXh0KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tY29sb3ItaGVhZGVyLWJvcmRlcicsIHZhcnMuaGVhZGVyQm9yZGVyKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tY29sb3Itcm93LWJnJywgdmFycy5yb3dCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLXJvdy1ob3Zlci1iZycsIHZhcnMucm93SG92ZXJCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLXJvdy1ib3JkZXInLCB2YXJzLnJvd0JvcmRlcik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWNlbGwtdGV4dCcsIHZhcnMuY2VsbFRleHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1zZWxlY3RlZC1yb3ctYmcnLCB2YXJzLnNlbGVjdGVkUm93QmcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1pbnB1dC1iZycsIHZhcnMuaW5wdXRCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWlucHV0LWJvcmRlcicsIHZhcnMuaW5wdXRCb3JkZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1pbnB1dC10ZXh0JywgdmFycy5pbnB1dFRleHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1pbnB1dC1wbGFjZWhvbGRlcicsIHZhcnMuaW5wdXRQbGFjZWhvbGRlcik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWJ1dHRvbi1ob3Zlci1iZycsIHZhcnMuYnV0dG9uSG92ZXJCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWRhbmdlcicsIHZhcnMuZGFuZ2VyQ29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1zdWNjZXNzJywgdmFycy5zdWNjZXNzQ29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci13YXJuaW5nJywgdmFycy53YXJuaW5nQ29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1maWx0ZXItaW5wdXQtYmcnLCB2YXJzLmZpbHRlcklucHV0QmcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1jb2xvci1maWx0ZXItaW5wdXQtYm9yZGVyJywgdmFycy5maWx0ZXJJbnB1dEJvcmRlcik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWNvbG9yLWZpbHRlci1pbnB1dC10ZXh0JywgdmFycy5maWx0ZXJJbnB1dFRleHQpO1xyXG5cclxuICAgIC8vIFNpemluZ1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1zaXplLXJvdy1oZWlnaHQnLCBgJHtzaXppbmcucm93SGVpZ2h0fXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLXNpemUtaGVhZGVyLWhlaWdodCcsIGAke3NpemluZy5oZWFkZXJIZWlnaHR9cHhgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tc2l6ZS10b29sYmFyLWhlaWdodCcsIGAke3NpemluZy50b29sYmFySGVpZ2h0fXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLXNpemUtY2VsbC1wYWRkaW5nJywgc2l6aW5nLmNlbGxQYWRkaW5nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tc2l6ZS1oZWFkZXItcGFkZGluZycsIHNpemluZy5oZWFkZXJDZWxsUGFkZGluZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLXNpemUtYm9yZGVyLXJhZGl1cycsIHNpemluZy5ib3JkZXJSYWRpdXMpO1xyXG5cclxuICAgIC8vIFR5cG9ncmFwaHlcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tZm9udC1oZWFkZXItc2l6ZScsIHR5cG9ncmFwaHkuaGVhZGVyRm9udFNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1mb250LWhlYWRlci13ZWlnaHQnLCB0eXBvZ3JhcGh5LmhlYWRlckZvbnRXZWlnaHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1mb250LWNlbGwtc2l6ZScsIHR5cG9ncmFwaHkuY2VsbEZvbnRTaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tZm9udC1mYW1pbHknLCB0eXBvZ3JhcGh5LmZvbnRGYW1pbHkpO1xyXG5cclxuICAgIC8vIERhcmsgTW9kZVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1kYXJrLW1vZGUtZW5hYmxlZCcsIGRhcmtNb2RlLmVuYWJsZWQgPyAnMScgOiAnMCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1kYXJrLWhlYWRlci1iZycsIGRhcmtNb2RlLmhlYWRlckJnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocm9vdCwgJy0tZGFyay1yb3ctYmcnLCBkYXJrTW9kZS5yb3dCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWRhcmstcm93LWhvdmVyLWJnJywgZGFya01vZGUucm93SG92ZXJCZyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJvb3QsICctLWRhcmstdGV4dCcsIGRhcmtNb2RlLnRleHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyb290LCAnLS1kYXJrLWJvcmRlcicsIGRhcmtNb2RlLmJvcmRlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaFNvcnQoKTtcclxuICAgIHRoaXMuYXR0YWNoUGFnaW5hdG9yKCk7XHJcbiAgICB0aGlzLmF0dGFjaFNlcnZlclBhZ2luYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBmaWx0ZXIgcHJlZGljYXRlIGZvciBzZWFyY2hpbmcgYWNyb3NzIGFsbCBjb2x1bW5zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplRmlsdGVyUHJlZGljYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyUHJlZGljYXRlKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSB0aGlzLmZpbHRlclByZWRpY2F0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIERlZmF1bHQgZmlsdGVyIHByZWRpY2F0ZTogc2VhcmNoIGFjcm9zcyBhbGwgZGlzcGxheWVkIGNvbHVtbnNcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IChkYXRhLCBmaWx0ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnNUb1NlYXJjaCA9IHRoaXMuY29sdW1ucy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyB0aGlzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuICYmIGMua2V5ICE9PSAnQWN0aW9ucycpLm1hcChjID0+IGMua2V5KVxyXG4gICAgICAgICAgOiB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wgIT09ICdBY3Rpb25zJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1hdGNoRm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGNvbHVtbnNUb1NlYXJjaCkge1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtlbGVtZW50XSkge1xyXG4gICAgICAgICAgICAgIG1hdGNoRm91bmQgPSAobWF0Y2hGb3VuZCB8fCBcclxuICAgICAgICAgICAgICAgIGRhdGFbZWxlbWVudF0udG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlci50cmltKCkudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2hGb3VuZDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBNYXRTb3J0IHRvIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNoU29ydCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNvcnQpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggTWF0UGFnaW5hdG9yIHRvIHRoZSB0YWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNoUGFnaW5hdG9yKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFnaW5hdG9yICYmIHRoaXMuc2hvd1BhZ2luYXRvciAmJiAhdGhpcy5zZXJ2ZXJTaWRlUGFnaW5hdGlvbikge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggc2VydmVyLXNpZGUgcGFnaW5hdGlvbiBoYW5kbGVyIHRvIHBhZ2luYXRvclxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNoU2VydmVyUGFnaW5hdG9yKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFnaW5hdG9yICYmIHRoaXMuc2VydmVyU2lkZVBhZ2luYXRpb24pIHtcclxuICAgICAgLy8gU2V0IGluaXRpYWwgcGFnaW5hdG9yIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLnBhZ2VTaXplICYmIHRoaXMucGFnZVNpemUgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTGlzdGVuIHRvIHBhZ2UgZXZlbnRzIGFuZCByZXF1ZXN0IHNlcnZlciBkYXRhXHJcbiAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95UmVmKSkuc3Vic2NyaWJlKChldmVudDogUGFnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZUluZGV4ID0gZXZlbnQucGFnZUluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VTaXplID0gZXZlbnQucGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmdTZXJ2ZXJEYXRhID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RTZXJ2ZXJEYXRhKHRoaXMuY3VycmVudFBhZ2VJbmRleCwgdGhpcy5jdXJyZW50UGFnZVNpemUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEluaXRpYWwgcmVxdWVzdCBpZiBzZXJ2ZXItc2lkZSBwYWdpbmF0aW9uIGlzIGVuYWJsZWRcclxuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nU2VydmVyRGF0YSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0U2VydmVyRGF0YSh0aGlzLmN1cnJlbnRQYWdlSW5kZXgsIHRoaXMuY3VycmVudFBhZ2VTaXplKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGNvbHVtbnMgdG8gZGlzcGxheSAtIHVzZXMgbmV3IENvbHVtbiBjb25maWcgb3IgZmFsbHMgYmFjayB0byBsZWdhY3kgZGlzcGxheWVkQ29sdW1uc1xyXG4gICAqL1xyXG4gZ2V0IGNvbHVtbnNUb0Rpc3BsYXkoKTogc3RyaW5nW10ge1xyXG4gIGxldCBjb2xzID0gdGhpcy5jb2x1bW5zXHJcbiAgICAuZmlsdGVyKGMgPT4gIWMuaGlkZGVuICYmIChjLnR5cGUgIT09ICdhY3Rpb24nIHx8IHRoaXMuc2hvd0FjdGlvbkNvbHVtbikpXHJcbiAgICAubWFwKGMgPT4gYy5rZXkpO1xyXG5cclxuICBpZiAodGhpcy5lbmFibGVSb3dTZWxlY3Rpb24gJiYgIWNvbHMuaW5jbHVkZXMoJ3NlbGVjdGlvbicpKSB7XHJcbiAgICBjb2xzID0gWydzZWxlY3Rpb24nLCAuLi5jb2xzXTtcclxuICB9XHJcbiAgIFxyXG5cclxuICByZXR1cm4gY29scztcclxufVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIGRpc3BsYXllZCBjb2x1bW5zIGFycmF5IChmb3IgaW50ZXJuYWwgdXBkYXRlcylcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZURpc3BsYXllZENvbHVtbnMoKTogdm9pZCB7XHJcbiAgICAvLyBGb3JjZSBjaGFuZ2UgZGV0ZWN0aW9uIGJ5IHJlY3JlYXRpbmcgdGhlIGFycmF5XHJcbiAgICBjb25zdCBuZXdDb2xzID0gWy4uLnRoaXMuY29sdW1uc1RvRGlzcGxheV07XHJcbiAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciB0aGUgZ2V0dGVyIGFuZCB1cGRhdGUgdGhlIHRhYmxlXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFsuLi50aGlzLmRhdGFTb3VyY2UuZGF0YV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdmlzaWJsZSBjb2x1bW5zIGZvciB0aGUgdGVtcGxhdGVcclxuICAgKi9cclxuICBnZXQgdmlzaWJsZUNvbHVtbnMoKTogVGFibGVDb2x1bW5bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcihjID0+ICFjLmhpZGRlbik7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ09ORklHIEdFVFRFUlMgRk9SIFRFTVBMQVRFIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIFxyXG4gIC8qKiBHZXQgY29uZmlndXJlZCBpY29ucyAqL1xyXG4gIGdldCBpY29ucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlQ29uZmlnLmljb25zIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBjb25maWd1cmVkIHRvb2x0aXBzICovXHJcbiAgZ2V0IHRvb2x0aXBzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVDb25maWcudG9vbHRpcHMgfHwge307XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGNvbmZpZ3VyZWQgY29sb3JzICovXHJcbiAgZ2V0IGNvbG9ycygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlQ29uZmlnLmNvbG9ycyB8fCB7fTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgY29uZmlndXJlZCByb3cgYWN0aW9ucyAqL1xyXG4gIGdldCByb3dBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVDb25maWcucm93QWN0aW9ucyB8fCB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBzZWFyY2ggaW5wdXQgdmlzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHRvZ2dsZVNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlYXJjaCkge1xyXG4gICAgICB0aGlzLmNsZWFyU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBzZWFyY2ggYW5kIHJlc2V0IGZpbHRlclxyXG4gICAqL1xyXG4gIGNsZWFyU2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hJbnB1dFZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gJyc7XHJcbiAgICB0aGlzLnNob3dTZWFyY2ggPSBmYWxzZTtcclxuICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KCcnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSBzZWFyY2ggaW5wdXQgYW5kIGFwcGx5IGZpbHRlclxyXG4gICAqL1xyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoSW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZWFyY2hDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHJvdyBjbGlja1xyXG4gICAqL1xyXG4gIG9uUm93Q2xpY2socm93OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAncm93Q2xpY2tlZCcsIHJvdyB9KTtcclxuICAgIHRoaXMucm93RWRpdENsaWNrZWQuZW1pdChyb3cpOyAvLyBMZWdhY3lcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSBhY3Rpb24gYnV0dG9uIGNsaWNrcyAoYm90aCBidWlsdC1pbiByb3cgYWN0aW9ucyBhbmQgY3VzdG9tIGFjdGlvbnMpXHJcbiAgICovXHJcbiAgb25BY3Rpb25DbGlja2VkKGFjdGlvbjogc3RyaW5nLCByb3c6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gSGFuZGxlIGJ1aWx0LWluIHJvdyBhY3Rpb25zXHJcbiAgICBzd2l0Y2goYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgIC8vIEVtaXQgZWRpdCBldmVudCAtIHBhcmVudCBjb21wb25lbnQgY2FuIGhhbmRsZSBmdWxsIHJvdyBlZGl0XHJcbiAgICAgICAgdGhpcy5yb3dFZGl0Q2xpY2tlZC5lbWl0KHJvdyk7XHJcbiAgICAgICAgdGhpcy50YWJsZUFjdGlvblRyaWdnZXJlZC5lbWl0KHsgYWN0aW9uOiAnZWRpdCcsIHJvdyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgLy8gRGVsZXRlIHNpbmdsZSByb3cgd2l0aCBjb25maXJtYXRpb25cclxuICAgICAgICB0aGlzLmRlbGV0ZVJvdyhyb3cpO1xyXG4gICAgICAgIHJldHVybjsgLy8gZGVsZXRlUm93IGhhbmRsZXMgaXRzIG93biBtYXJrRm9yQ2hlY2tcclxuICAgICAgXHJcbiAgICAgIGNhc2UgJ2luc2VydEFib3ZlJzpcclxuICAgICAgICAvLyBJbnNlcnQgcm93IGFib3ZlIHRoZSBjdXJyZW50IHJvd1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnaW5zZXJ0QWJvdmUnLCByb3cgfSk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgY2FzZSAnaW5zZXJ0QmVsb3cnOlxyXG4gICAgICAgIC8vIEluc2VydCByb3cgYmVsb3cgdGhlIGN1cnJlbnQgcm93XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGU6ICdpbnNlcnRCZWxvdycsIHJvdyB9KTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIEVtaXQgY3VzdG9tIGFjdGlvblxyXG4gICAgICAgIHRoaXMuYWN0aW9uQ2xpY2tlZC5lbWl0KHsgYWN0aW9uLCByb3cgfSk7XHJcbiAgICAgICAgdGhpcy50YWJsZUFjdGlvblRyaWdnZXJlZC5lbWl0KHsgYWN0aW9uLCByb3cgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhIHVzZXIgcm93IGFuZCBlbWl0IGV2ZW50XHJcbiAgICovXHJcbiAgc2VsZWN0Um93KHJvdzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGVkLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCByb3cgSUQgZnJvbSB2YXJpb3VzIHBvc3NpYmxlIGZpZWxkIG5hbWVzXHJcbiAgICovXHJcbiAgZ2V0Um93SWQocm93OiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHJvdy5Vc2Vyc19JZCA/PyByb3cuVXNlcnNJZCA/PyByb3cuSWQgPz8gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCByb3cgbmFtZSBmcm9tIHZhcmlvdXMgcG9zc2libGUgZmllbGQgbmFtZXNcclxuICAgKi9cclxuICBnZXRSb3dOYW1lKHJvdzogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiByb3cuVXNlck5hbWUgPz8gcm93WydVc2VyIE5hbWUnXSA/PyByb3cuTG9naW5OYW1lID8/ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRhYmxlIGRhdGEgc291cmNlXHJcbiAgICovXHJcbiAgdXBkYXRlRGF0YVNvdXJjZShkYXRhOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXR0YWNoU29ydCgpO1xyXG4gICAgICB0aGlzLmF0dGFjaFBhZ2luYXRvcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ09MVU1OIFRPR0dMRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIGNvbHVtbiB2aXNpYmlsaXR5XHJcbiAgICovXHJcbiAgdG9nZ2xlQ29sdW1uKGNvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcclxuICAgIGNvbHVtbi5oaWRkZW4gPSAhY29sdW1uLmhpZGRlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0aGUgY29sdW1uIHBhbmVsXHJcbiAgICovXHJcbiAgdG9nZ2xlQ29sdW1uUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dDb2x1bW5QYW5lbCA9ICF0aGlzLnNob3dDb2x1bW5QYW5lbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYWxsIGNvbHVtbnNcclxuICAgKi9cclxuICBzaG93QWxsQ29sdW1ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbCA9PiBjb2wuaGlkZGVuID0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSBhbGwgY29sdW1uc1xyXG4gICAqL1xyXG4gIGhpZGVBbGxDb2x1bW5zKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sID0+IGNvbC5oaWRkZW4gPSB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBST1cgU0VMRUNUSU9OIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgcm93IHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHRvZ2dsZVJvd1NlbGVjdGlvbihyb3c6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhyb3cpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShyb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuYWRkKHJvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ3NlbGVjdGlvbkNoYW5nZWQnLCByb3dzOiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzKSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBzZWxlY3QgYWxsIHJvd3NcclxuICAgKi9cclxuICB0b2dnbGVTZWxlY3RBbGwoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3RlZFJvd3MuYWRkKHJvdykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnc2VsZWN0aW9uQ2hhbmdlZCcsIHJvd3M6IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgcm93IGlzIHNlbGVjdGVkXHJcbiAgICovXHJcbiAgaXNSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYWxsIHJvd3MgYXJlIHNlbGVjdGVkXHJcbiAgICovXHJcbiAgZ2V0IGFsbFJvd3NTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRSb3dzLnNpemUgPT09IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBBREQgLyBERUxFVEUgUk9XUyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhZGQgcm93IGV2ZW50XHJcbiAgICovXHJcbiAgb25BZGQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ2FkZCcgfSk7XHJcbiAgICAvLyBMZWdhY3kgc3VwcG9ydFxyXG4gICAgdGhpcy50YWJsZUFjdGlvblRyaWdnZXJlZC5lbWl0KHsgYWN0aW9uOiAnYWRkJywgcm93OiBudWxsIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IHJvdyBhYm92ZSBzZWxlY3RlZCByb3cgKGlmIHNpbmdsZSByb3cgc2VsZWN0ZWQpXHJcbiAgICovXHJcbiAgaW5zZXJ0Um93QWJvdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpWzBdO1xyXG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ2luc2VydEFib3ZlJywgcm93OiBzZWxlY3RlZFJvdyB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IHJvdyBiZWxvdyBzZWxlY3RlZCByb3cgKGlmIHNpbmdsZSByb3cgc2VsZWN0ZWQpXHJcbiAgICovXHJcbiAgaW5zZXJ0Um93QmVsb3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpWzBdO1xyXG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ2luc2VydEJlbG93Jywgcm93OiBzZWxlY3RlZFJvdyB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IHJvdyBhdCBzcGVjaWZpYyBpbmRleFxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBldmVudHMgZW1pdHRlciBpbnN0ZWFkIC0gcGFyZW50IGNvbnRyb2xzIGRhdGFcclxuICAgKi9cclxuICBpbnNlcnRSb3dBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyBFbWl0IGV2ZW50IC0gcGFyZW50IGhhbmRsZXMgbXV0YXRpb25zXHJcbiAgICBjb25zdCBuZXdSb3cgPSB0aGlzLmNyZWF0ZUVtcHR5Um93KCk7XHJcbiAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ2FkZCcsIHJvdzogbmV3Um93IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVtcHR5IHJvdyBvYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlcyBvciBlbXB0eSBzdHJpbmdzIGZvciBlZGl0aW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbXB0eVJvdygpOiBhbnkge1xyXG4gICAgY29uc3Qgcm93OiBhbnkgPSB7fTtcclxuICAgIGxldCBpdGVtQ291bnQgPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbHVtbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjb2wudHlwZSAhPT0gJ2FjdGlvbicpIHtcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbC5kZWZhdWx0VmFsdWUgPz8gdGhpcy5nZXREZWZhdWx0VmFsdWUoY29sKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRm9yIHRleHQgY29sdW1ucywgYWRkIHBsYWNlaG9sZGVyIGlmIGVtcHR5XHJcbiAgICAgICAgICBpZiAoY29sLnR5cGUgPT09ICd0ZXh0JyAmJiAhdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sS2V5TG93ZXIgPSBjb2wua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIC8vIFNtYXJ0IGRlZmF1bHRzIGJhc2VkIG9uIGNvbHVtbiBuYW1lXHJcbiAgICAgICAgICAgIGlmIChjb2xLZXlMb3dlci5pbmNsdWRlcygnbmFtZScpIHx8IGNvbEtleUxvd2VyLmluY2x1ZGVzKCd0aXRsZScpKSB7XHJcbiAgICAgICAgICAgICAgdmFsdWUgPSAnTmV3IEl0ZW0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbEtleUxvd2VyLmluY2x1ZGVzKCdlbWFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xLZXlMb3dlci5pbmNsdWRlcygnc3RhdHVzJykpIHtcclxuICAgICAgICAgICAgICB2YWx1ZSA9ICdQZW5kaW5nJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2wuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICB2YWx1ZSA9ICctJzsgLy8gSW5kaWNhdGVzIGVtcHR5L2VkaXRhYmxlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByb3dbY29sLmtleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRmFsbGJhY2sgZm9yIGxlZ2FjeSBkaXNwbGF5ZWRDb2x1bW5zXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgICAgaWYgKGNvbCAhPT0gJ0FjdGlvbnMnKSB7XHJcbiAgICAgICAgICByb3dbY29sXSA9ICctJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZGVmYXVsdCB2YWx1ZSBiYXNlZCBvbiBjb2x1bW4gdHlwZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFZhbHVlKGNvbDogVGFibGVDb2x1bW4pOiBhbnkge1xyXG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xyXG4gICAgICBjYXNlICdkYXRlJzogcmV0dXJuIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgIGNhc2UgJ251bWJlcic6IHJldHVybiAwO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgc2VsZWN0ZWQgcm93c1xyXG4gICAqL1xyXG4gb25EZWxldGVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICBjb25zb2xlLmxvZyhcImRsZVwiKVxyXG4gIGlmICh0aGlzLnNlbGVjdGVkUm93cy5zaXplID09PSAwKSB7XHJcbiAgICB0aGlzLnNob3dUb2FzdCgnU2VsZWN0IHJvd3MgdG8gZGVsZXRlJywgJ2luZm8nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRoaXMuZXZlbnRzLmVtaXQoe1xyXG4gICAgdHlwZTogJ2RlbGV0ZVNlbGVjdGVkJyxcclxuICAgIHJvd3M6IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpXHJcbiAgfSk7XHJcbn1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIHNpbmdsZSByb3cgd2l0aCBjb25maXJtYXRpb24gZGlhbG9nXHJcbiAgICovXHJcbiAgZGVsZXRlUm93KHJvdzogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dEYXRhOiBEaWFsb2dEYXRhID0ge1xyXG4gICAgICB0aXRsZTogJ0RlbGV0ZSBSb3cnLFxyXG4gICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJvdz8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nLFxyXG4gICAgICBva1RleHQ6ICdEZWxldGUnLFxyXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgaXNBbGVydDogZmFsc2VcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVGFibGVDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IGRpYWxvZ0RhdGEsXHJcbiAgICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGNvbmZpcm1lZCA9PiB7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAvLyBFbWl0IGV2ZW50IC0gcGFyZW50IGhhbmRsZXMgZGF0YSBtdXRhdGlvblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnZGVsZXRlJywgcm93IH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShyb3cpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IGNvbHVtbiAtIERJU0FCTEVEIGZvciBjb250cm9sbGVkIGNvbXBvbmVudCBwYXR0ZXJuXHJcbiAgICogQ29sdW1uIG1hbmlwdWxhdGlvbiBtdXN0IGJlIGhhbmRsZWQgYnkgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGluc2VydENvbHVtbigpOiB2b2lkIHtcclxuICAgIC8vIEZlYXR1cmUgZGlzYWJsZWQgLSB0YWJsZSBtdXN0IHJlbWFpbiBjb250cm9sbGVkIGJ5IHBhcmVudFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlybSBjb2x1bW4gaW5zZXJ0aW9uIC0gRElTQUJMRUQgZm9yIGNvbnRyb2xsZWQgY29tcG9uZW50IHBhdHRlcm5cclxuICAgKi9cclxuICBjb25maXJtSW5zZXJ0Q29sdW1uKCk6IHZvaWQge1xyXG4gICAgLy8gRmVhdHVyZSBkaXNhYmxlZCAtIHRhYmxlIG11c3QgcmVtYWluIGNvbnRyb2xsZWQgYnkgcGFyZW50XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYW5jZWwgY29sdW1uIGluc2VydGlvblxyXG4gICAqL1xyXG4gIGNhbmNlbEluc2VydENvbHVtbigpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0luc2VydENvbHVtbkRpYWxvZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXdDb2x1bW5OYW1lID0gJyc7XHJcbiAgICB0aGlzLm5ld0NvbHVtbkxhYmVsID0gJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgY29sdW1uIC0gRElTQUJMRUQgZm9yIGNvbnRyb2xsZWQgY29tcG9uZW50IHBhdHRlcm5cclxuICAgKiBDb2x1bW4gbWFuaXB1bGF0aW9uIG11c3QgYmUgaGFuZGxlZCBieSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZGVsZXRlQ29sdW1uKGNvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcclxuICAgIC8vIEZlYXR1cmUgZGlzYWJsZWQgLSB0YWJsZSBtdXN0IHJlbWFpbiBjb250cm9sbGVkIGJ5IHBhcmVudFxyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIEZJTFRFUklORyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgY29sdW1uLWxldmVsIGZpbHRlclxyXG4gICAqL1xyXG4gIGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbktleTogc3RyaW5nLCBldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGV2ZW50LnRhcmdldD8udmFsdWUgfHwgZXZlbnQgfHwgJyc7XHJcbiAgICBpZiAoZmlsdGVyVmFsdWUpIHtcclxuICAgICAgdGhpcy5jb2x1bW5GaWx0ZXJzLnNldChjb2x1bW5LZXksIGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb2x1bW5GaWx0ZXJzLmRlbGV0ZShjb2x1bW5LZXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IGFsbCBhY3RpdmUgZmlsdGVyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgYXBwbHlGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgIC8vIEdsb2JhbCBzZWFyY2ggZmlsdGVyXHJcbiAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hMb3dlciA9IHRoaXMuc2VhcmNoSW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnNUb1NlYXJjaCA9IHRoaXMuY29sdW1ucy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyB0aGlzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuICYmIGMua2V5ICE9PSAnQWN0aW9ucycpLm1hcChjID0+IGMua2V5KVxyXG4gICAgICAgICAgOiB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wgIT09ICdBY3Rpb25zJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdsb2JhbE1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgY29sIG9mIGNvbHVtbnNUb1NlYXJjaCkge1xyXG4gICAgICAgICAgaWYgKGRhdGFbY29sXT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaExvd2VyKSkge1xyXG4gICAgICAgICAgICBnbG9iYWxNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWdsb2JhbE1hdGNoKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENvbHVtbi1sZXZlbCBmaWx0ZXJzXHJcbiAgICAgIGZvciAobGV0IFtjb2x1bW5LZXksIGZpbHRlclZhbHVlXSBvZiB0aGlzLmNvbHVtbkZpbHRlcnMpIHtcclxuICAgICAgICBpZiAoIWRhdGFbY29sdW1uS2V5XT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IHRoaXMuc2VhcmNoSW5wdXRWYWx1ZSArIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odGhpcy5jb2x1bW5GaWx0ZXJzLmVudHJpZXMoKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIEVYUE9SVCBGVU5DVElPTlMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cG9ydCB0YWJsZSBkYXRhIHRvIEV4Y2VsIChleGNsdWRlcyBhY3Rpb24gY29sdW1ucylcclxuICAgKi9cclxuICBhc3luYyBleHBvcnRFeGNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHhsc3ggPSBhd2FpdCBpbXBvcnQoJ3hsc3gnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJlZERhdGE7XHJcbiAgICAgIFxyXG4gICAgICAvLyBFeGNsdWRlIGFjdGlvbiBjb2x1bW5zXHJcbiAgICAgIGNvbnN0IGV4cG9ydENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gdGhpcy5jb2x1bW5zLmZpbHRlcihjID0+IGMudHlwZSAhPT0gJ2FjdGlvbicpXHJcbiAgICAgICAgOiB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wgIT09ICdBY3Rpb25zJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBGb3JtYXQgZGF0YSB0byBtYXRjaCBVSSBkaXNwbGF5IC0gdXNlIGNvbnNpc3RlbnQga2V5L2xhYmVsXHJcbiAgICAgIGNvbnN0IGV4cG9ydERhdGEgPSBkYXRhLm1hcChyb3cgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1JvdzogYW55ID0ge307XHJcbiAgICAgICAgZXhwb3J0Q29sdW1ucy5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgY29sID09PSAnc3RyaW5nJyA/IGNvbCA6IGNvbC5rZXk7XHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IHR5cGVvZiBjb2wgPT09ICdzdHJpbmcnID8gY29sIDogKGNvbC5sYWJlbCB8fCBjb2wua2V5KTtcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IHJvd1trZXldO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBGb3JtYXQgZGF0ZXMgYW5kIG51bWJlcnMgdG8gbWF0Y2ggVUlcclxuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFVzZSBrZXkgY29uc2lzdGVudGx5IGZvciBjbGVhbmVyIGRhdGFcclxuICAgICAgICAgIG5ld1Jvd1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdztcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHN4LnV0aWxzLmpzb25fdG9fc2hlZXQoZXhwb3J0RGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBBdXRvLWZpdCBjb2x1bW4gd2lkdGhzXHJcbiAgICAgIGNvbnN0IGNvbHVtbldpZHRocyA9IE9iamVjdC5rZXlzKGV4cG9ydERhdGFbMF0gfHwge30pLm1hcChrZXkgPT4gKHtcclxuICAgICAgICB3Y2g6IE1hdGgubWF4KDE1LCBrZXkubGVuZ3RoICsgMilcclxuICAgICAgfSkpO1xyXG4gICAgICB3b3Jrc2hlZXRbJyFjb2xzJ10gPSBjb2x1bW5XaWR0aHM7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB3b3JrYm9vayA9IHsgU2hlZXRzOiB7IGRhdGE6IHdvcmtzaGVldCB9LCBTaGVldE5hbWVzOiBbJ2RhdGEnXSB9O1xyXG4gICAgICB4bHN4LndyaXRlRmlsZSh3b3JrYm9vaywgYHRhYmxlLWV4cG9ydC0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS54bHN4YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleHBvcnRpbmcgdG8gRXhjZWw6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhwb3J0IHRhYmxlIGRhdGEgdG8gQ1NWIChleGNsdWRlcyBhY3Rpb24gY29sdW1ucylcclxuICAgKi9cclxuICBleHBvcnRDU1YoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YTtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBkYXRhIHRvIGV4cG9ydCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhjbHVkZSBhY3Rpb24gY29sdW1uc1xyXG4gICAgICBjb25zdCBleHBvcnRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHRoaXMuY29sdW1ucy5maWx0ZXIoYyA9PiBjLnR5cGUgIT09ICdhY3Rpb24nKVxyXG4gICAgICAgIDogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sICE9PSAnQWN0aW9ucycpO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qga2V5cyA9IGV4cG9ydENvbHVtbnMubWFwKGNvbCA9PiB0eXBlb2YgY29sID09PSAnc3RyaW5nJyA/IGNvbCA6IGNvbC5rZXkpO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gZXhwb3J0Q29sdW1ucy5tYXAoY29sID0+IHR5cGVvZiBjb2wgPT09ICdzdHJpbmcnID8gY29sIDogY29sLmxhYmVsKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZvcm1hdCBkYXRhIHRvIG1hdGNoIFVJIGRpc3BsYXlcclxuICAgICAgY29uc3Qgcm93cyA9IGRhdGEubWFwKHJvdyA9PiBrZXlzLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJvd1trZXldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvcm1hdCBkYXRlcyBhbmQgbnVtYmVycyB0byBtYXRjaCBVSVxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIGBcIiR7c3RyaW5nVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImA7XHJcbiAgICAgIH0pLmpvaW4oJywnKSk7XHJcblxyXG4gICAgICBjb25zdCBjc3ZDb250ZW50ID0gW1xyXG4gICAgICAgIGhlYWRlcnMubWFwKGggPT4gYFwiJHtofVwiYCkuam9pbignLCcpLFxyXG4gICAgICAgIC4uLnJvd3NcclxuICAgICAgXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2Q29udGVudF0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgYS5kb3dubG9hZCA9IGB0YWJsZS1leHBvcnQtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0uY3N2YDtcclxuICAgICAgYS5jbGljaygpO1xyXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhwb3J0aW5nIHRvIENTVjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeHBvcnQgdGFibGUgZGF0YSB0byBQREYgKGV4Y2x1ZGVzIGFjdGlvbiBjb2x1bW5zKVxyXG4gICAqL1xyXG4gIGFzeW5jIGV4cG9ydFBERigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEltcG9ydCBqc1BERlxyXG4gICAgICBjb25zdCB7IGpzUERGOiBqc1BERkNvbnN0cnVjdG9yIH0gPSBhd2FpdCBpbXBvcnQoJ2pzcGRmJyk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YTtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBkYXRhIHRvIGV4cG9ydCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhjbHVkZSBhY3Rpb24gY29sdW1uc1xyXG4gICAgICBjb25zdCBleHBvcnRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHRoaXMuY29sdW1ucy5maWx0ZXIoYyA9PiBjLnR5cGUgIT09ICdhY3Rpb24nKVxyXG4gICAgICAgIDogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sICE9PSAnQWN0aW9ucycpLm1hcChrID0+ICh7IGtleTogaywgbGFiZWw6IGsgfSkpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY29sdW1uSGVhZGVycyA9IGV4cG9ydENvbHVtbnMubWFwKGNvbCA9PiB0eXBlb2YgY29sID09PSAnc3RyaW5nJyA/IGNvbCA6IGNvbC5sYWJlbCk7XHJcbiAgICAgIGNvbnN0IGNvbHVtbktleXMgPSBleHBvcnRDb2x1bW5zLm1hcChjb2wgPT4gdHlwZW9mIGNvbCA9PT0gJ3N0cmluZycgPyBjb2wgOiBjb2wua2V5KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZvcm1hdCByb3dzIHRvIG1hdGNoIFVJIGRpc3BsYXlcclxuICAgICAgY29uc3Qgcm93cyA9IGRhdGEubWFwKHJvdyA9PiBjb2x1bW5LZXlzLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJvd1trZXldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvcm1hdCBkYXRlc1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgNTApOyAvLyBMaW1pdCB0byA1MCBjaGFycyBwZXIgY2VsbFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgUERGIHdpdGggbGFuZHNjYXBlIG9yaWVudGF0aW9uIGZvciBiZXR0ZXIgY29sdW1uIGZpdFxyXG4gICAgICBjb25zdCBkb2MgPSBuZXcganNQREZDb25zdHJ1Y3RvcignbCcsICdtbScsICdhNCcpO1xyXG4gICAgICBjb25zdCBwYWdlV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKTtcclxuICAgICAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRIZWlnaHQoKTtcclxuICAgICAgY29uc3QgbWFyZ2luID0gMTA7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHBhZ2VXaWR0aCAtIDIgKiBtYXJnaW47XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgdGl0bGVcclxuICAgICAgZG9jLnNldEZvbnRTaXplKDE2KTtcclxuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xyXG4gICAgICBkb2MudGV4dCgnVGFibGUgUmVwb3J0JywgbWFyZ2luLCBtYXJnaW4gKyA1KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBkYXRlXHJcbiAgICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XHJcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xyXG4gICAgICBkb2Muc2V0VGV4dENvbG9yKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgICBkb2MudGV4dChgR2VuZXJhdGVkIG9uICR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfWAsIG1hcmdpbiwgbWFyZ2luICsgMTIpO1xyXG4gICAgICBcclxuICAgICAgLy8gUmVzZXQgdGV4dCBjb2xvclxyXG4gICAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2FsY3VsYXRlIGNvbHVtbiB3aWR0aHNcclxuICAgICAgY29uc3QgY29sV2lkdGggPSAoY29udGVudFdpZHRoIC0gNCkgLyBjb2x1bW5IZWFkZXJzLmxlbmd0aDtcclxuICAgICAgbGV0IHlQb3NpdGlvbiA9IG1hcmdpbiArIDIwO1xyXG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gNjtcclxuICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gODtcclxuICAgICAgXHJcbiAgICAgIC8vIERyYXcgaGVhZGVyIHJvd1xyXG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XHJcbiAgICAgIGRvYy5zZXRGaWxsQ29sb3IoODAsIDgwLCA4MCk7XHJcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGRvYy5zZXRGb250U2l6ZSg5KTtcclxuICAgICAgXHJcbiAgICAgIGxldCB4UG9zaXRpb24gPSBtYXJnaW4gKyAyO1xyXG4gICAgICBjb2x1bW5IZWFkZXJzLmZvckVhY2goKGhlYWRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjZWxsVGV4dCA9IGhlYWRlci5zdWJzdHJpbmcoMCwgMjApO1xyXG4gICAgICAgIGRvYy5yZWN0KHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBjb2xXaWR0aCwgaGVhZGVySGVpZ2h0LCAnRicpO1xyXG4gICAgICAgIGRvYy50ZXh0KGNlbGxUZXh0LCB4UG9zaXRpb24gKyAyLCB5UG9zaXRpb24gKyA1KTtcclxuICAgICAgICB4UG9zaXRpb24gKz0gY29sV2lkdGg7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgeVBvc2l0aW9uICs9IGhlYWRlckhlaWdodDtcclxuICAgICAgXHJcbiAgICAgIC8vIERyYXcgZGF0YSByb3dzXHJcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xyXG4gICAgICBkb2Muc2V0Rm9udFNpemUoOCk7XHJcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgcm93Q291bnQgPSAwO1xyXG4gICAgICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIGEgbmV3IHBhZ2VcclxuICAgICAgICBpZiAoeVBvc2l0aW9uID4gcGFnZUhlaWdodCAtIG1hcmdpbiAtIDEwKSB7XHJcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xyXG4gICAgICAgICAgeVBvc2l0aW9uID0gbWFyZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBbHRlcm5hdGUgcm93IGNvbG9yc1xyXG4gICAgICAgIGlmIChyb3dJbmRleCAlIDIgPT09IDApIHtcclxuICAgICAgICAgIGRvYy5zZXRGaWxsQ29sb3IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICAgICAgICB4UG9zaXRpb24gPSBtYXJnaW4gKyAyO1xyXG4gICAgICAgICAgcm93LmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2MucmVjdCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgY29sV2lkdGgsIGxpbmVIZWlnaHQsICdGJyk7XHJcbiAgICAgICAgICAgIHhQb3NpdGlvbiArPSBjb2xXaWR0aDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBEcmF3IHJvdyBkYXRhXHJcbiAgICAgICAgeFBvc2l0aW9uID0gbWFyZ2luICsgMjtcclxuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsVGV4dCA9IGNlbGxWYWx1ZS5zdWJzdHJpbmcoMCwgMjApO1xyXG4gICAgICAgICAgZG9jLnRleHQoY2VsbFRleHQsIHhQb3NpdGlvbiArIDIsIHlQb3NpdGlvbiArIDQpO1xyXG4gICAgICAgICAgeFBvc2l0aW9uICs9IGNvbFdpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHlQb3NpdGlvbiArPSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgIHJvd0NvdW50Kys7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZG9jLnNhdmUoYHRhYmxlLWV4cG9ydC0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS5wZGZgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4cG9ydGluZyB0byBQREY6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgdGhlIHRhYmxlIHdpdGggY2xlYW4gSFRNTCBvdXRwdXQgKG5vIGNsb25pbmcgVUkgaXNzdWVzKVxyXG4gICAqL1xyXG4gIHByaW50VGFibGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YTtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBkYXRhIHRvIHByaW50Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXQgY29sdW1ucyAoZXhjbHVkZSBhY3Rpb25zKVxyXG4gICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHRoaXMuY29sdW1ucy5maWx0ZXIoYyA9PiBjLnR5cGUgIT09ICdhY3Rpb24nKVxyXG4gICAgICAgIDogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmZpbHRlcihjID0+IGMgIT09ICdBY3Rpb25zJyk7XHJcblxyXG4gICAgICBjb25zdCBoZWFkZXJzID0gY29sdW1ucy5tYXAoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBjIDogYy5sYWJlbCk7XHJcbiAgICAgIGNvbnN0IGtleXMgPSBjb2x1bW5zLm1hcChjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGMgOiBjLmtleSk7XHJcblxyXG4gICAgICAvLyBCdWlsZCB0YWJsZSByb3dzIC0gY2xlYW4gSFRNTFxyXG4gICAgICBjb25zdCByb3dzID0gZGF0YS5tYXAocm93ID0+IGBcclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAke2tleXMubWFwKGsgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByb3dba10gPz8gJyc7XHJcbiAgICAgICAgICAgIC8vIEZvcm1hdCBkYXRlc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYDx0ZD4ke3RoaXMuZXNjYXBlSHRtbCh2YWx1ZS50b1N0cmluZygpKX08L3RkPmA7XHJcbiAgICAgICAgICB9KS5qb2luKCcnKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICBgKS5qb2luKCcnKTtcclxuXHJcbiAgICAgIC8vIFByb2Zlc3Npb25hbCBwcmludCBIVE1MXHJcbiAgICAgIGNvbnN0IGh0bWwgPSBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgICA8dGl0bGU+VGFibGUgUmVwb3J0IC0gJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGl0bGU+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMWYyOTM3O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5oZWFkZXIgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmhlYWRlciBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2YjcyODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVlN2ViO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMTExODI3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlN2ViO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM3NDE1MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgICAgICAgICAgYm9keSB7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFibGUgeyBcclxuICAgICAgICAgICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0Ym9keSB0ciB7IFxyXG4gICAgICAgICAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5UYWJsZSBSZXBvcnQ8L2gxPlxyXG4gICAgICAgICAgICA8cD5HZW5lcmF0ZWQgb24gJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAke2hlYWRlcnMubWFwKGggPT4gYDx0aD4ke3RoaXMuZXNjYXBlSHRtbChoKX08L3RoPmApLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAke3Jvd3N9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8L2h0bWw+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbignJywgJycsICd3aWR0aD0xMjAwLGhlaWdodD04MDAnKTtcclxuICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgIHdpbi5kb2N1bWVudC53cml0ZShodG1sKTtcclxuICAgICAgICB3aW4uZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHdpbi5mb2N1cygpO1xyXG4gICAgICAgICAgd2luLnByaW50KCk7XHJcbiAgICAgICAgfSwgMjUwKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJpbnRpbmcgdGFibGU6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gZGl2LmlubmVySFRNTDtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBJTkxJTkUgRURJVElORyAoR29vZ2xlIFNoZWV0cy1saWtlKSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogRG91YmxlLWNsaWNrIHRvIGVkaXQgKG5vdCBzaW5nbGUgY2xpY2spXHJcbiAgICogVGhpcyBtYXRjaGVzIEdvb2dsZSBTaGVldHMsIEV4Y2VsLCBhbmQgQUcgR3JpZCBiZWhhdmlvclxyXG4gICAqL1xyXG4gIG9uQ2VsbERvdWJsZUNsaWNrKHJvdzogYW55LCBjb2x1bW46IFRhYmxlQ29sdW1uLCByb3dJbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCFjb2x1bW4uZWRpdGFibGUgfHwgY29sdW1uLnR5cGUgPT09ICdhY3Rpb24nKSByZXR1cm47XHJcbiAgICBcclxuICAgIHRoaXMuZWRpdGluZ0NlbGwgPSB7IHJvd0luZGV4LCBjb2x1bW46IGNvbHVtbi5rZXkgfTtcclxuICAgIHRoaXMuZWRpdGluZ1ZhbHVlID0gcm93W2NvbHVtbi5rZXldO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlIGlubGluZSBlZGl0XHJcbiAgICogVHJpZ2dlcmVkIGJ5IEVudGVyIGtleSBvciBibHVyIGV2ZW50XHJcbiAgICovXHJcbiAgc2F2ZUlubGluZUVkaXQocm93OiBhbnksIGNvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5lZGl0aW5nQ2VsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAvLyBFbWl0IGV2ZW50IC0gcGFyZW50IGhhbmRsZXMgZGF0YSBtdXRhdGlvblxyXG4gICAgdGhpcy5ldmVudHMuZW1pdCh7XHJcbiAgICAgIHR5cGU6ICdjZWxsRWRpdCcsXHJcbiAgICAgIHJvdyxcclxuICAgICAgY29sdW1uOiBjb2x1bW4ua2V5LFxyXG4gICAgICB2YWx1ZTogdGhpcy5lZGl0aW5nVmFsdWVcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnNob3dUb2FzdCgnQ2VsbCB1cGRhdGVkJywgJ3N1Y2Nlc3MnKTtcclxuICAgIFxyXG4gICAgdGhpcy5lZGl0aW5nQ2VsbCA9IG51bGw7XHJcbiAgICB0aGlzLmVkaXRpbmdWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbmNlbCBpbmxpbmUgZWRpdFxyXG4gICAqIFRyaWdnZXJlZCBieSBFc2NhcGUga2V5XHJcbiAgICovXHJcbiAgY2FuY2VsSW5saW5lRWRpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGluZ0NlbGwgPSBudWxsO1xyXG4gICAgdGhpcy5lZGl0aW5nVmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBjZWxsIGlzIGluIGVkaXQgbW9kZVxyXG4gICAqL1xyXG4gIGlzRWRpdGluZ0NlbGwocm93SW5kZXg6IG51bWJlciwgY29sdW1uS2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRpbmdDZWxsPy5yb3dJbmRleCA9PT0gcm93SW5kZXggJiYgdGhpcy5lZGl0aW5nQ2VsbD8uY29sdW1uID09PSBjb2x1bW5LZXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMZWdhY3kgbWV0aG9kIC0ga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAqIE5vdyBjYWxscyBvbkNlbGxEb3VibGVDbGlja1xyXG4gICAqL1xyXG4gIHN0YXJ0SW5saW5lRWRpdChyb3c6IGFueSwgY29sdW1uOiBUYWJsZUNvbHVtbiwgcm93SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gVGhpcyBpcyBub3cgZG91YmxlLWNsaWNrIG9ubHksIGNhbGxlZCBmcm9tIHRlbXBsYXRlXHJcbiAgICAvLyBTaW5nbGUgY2xpY2sgd2lsbCBqdXN0IHNlbGVjdCB0aGUgcm93XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ09MVU1OIERSQUcgJiBSRU9SREVSIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgY29sdW1uIGRyYWcgc3RhcnRcclxuICAgKi9cclxuICBvbkNvbHVtbkRyYWdTdGFydChjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZW5hYmxlQ29sdW1uRHJhZykgcmV0dXJuO1xyXG4gICAgdGhpcy5kcmFnZ2VkQ29sdW1uID0gY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGNvbHVtbiBkcm9wIGZvciByZW9yZGVyaW5nXHJcbiAgICovXHJcbiAgb25Db2x1bW5Ecm9wKHRhcmdldENvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2VkQ29sdW1uIHx8ICF0aGlzLmVuYWJsZUNvbHVtbkRyYWcpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gdGhpcy5jb2x1bW5zLmluZGV4T2YodGhpcy5kcmFnZ2VkQ29sdW1uKTtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5jb2x1bW5zLmluZGV4T2YodGFyZ2V0Q29sdW1uKTtcclxuICAgIFxyXG4gICAgaWYgKGRyYWdnZWRJbmRleCAhPT0gLTEgJiYgdGFyZ2V0SW5kZXggIT09IC0xICYmIGRyYWdnZWRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcclxuICAgICAgLy8gU3dhcCBjb2x1bW5zXHJcbiAgICAgIFt0aGlzLmNvbHVtbnNbZHJhZ2dlZEluZGV4XSwgdGhpcy5jb2x1bW5zW3RhcmdldEluZGV4XV0gPSBcclxuICAgICAgW3RoaXMuY29sdW1uc1t0YXJnZXRJbmRleF0sIHRoaXMuY29sdW1uc1tkcmFnZ2VkSW5kZXhdXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5kcmFnZ2VkQ29sdW1uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBBRFZBTkNFRCBGSUxURVJJTkcg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IGFkdmFuY2VkIGZpbHRlclxyXG4gICAqL1xyXG4gIGFwcGx5QWR2YW5jZWRGaWx0ZXIoY29sdW1uS2V5OiBzdHJpbmcsIG9wZXJhdG9yOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuYWR2YW5jZWRGaWx0ZXJzLnNldChjb2x1bW5LZXksIHsgb3BlcmF0b3IsIHZhbHVlIH0pO1xyXG4gICAgdGhpcy5hcHBseUFkdmFuY2VkRmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFkdmFuY2VkIGZpbHRlclxyXG4gICAqL1xyXG4gIHJlbW92ZUFkdmFuY2VkRmlsdGVyKGNvbHVtbktleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkdmFuY2VkRmlsdGVycy5kZWxldGUoY29sdW1uS2V5KTtcclxuICAgIHRoaXMuYXBwbHlBZHZhbmNlZEZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IGFsbCBhZHZhbmNlZCBmaWx0ZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcHBseUFkdmFuY2VkRmlsdGVycygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFkdmFuY2VkIGZpbHRlcnNcclxuICAgICAgZm9yIChsZXQgW2NvbHVtbktleSwgZmlsdGVyXSBvZiB0aGlzLmFkdmFuY2VkRmlsdGVycykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb2x1bW5LZXldO1xyXG4gICAgICAgIGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlOiBmaWx0ZXJWYWx1ZSB9ID0gZmlsdGVyO1xyXG5cclxuICAgICAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcclxuICAgICAgICAgIGNhc2UgJ2VxdWFscyc6IG1hdGNoZXMgPSB2YWx1ZSA9PT0gZmlsdGVyVmFsdWU7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY29udGFpbnMnOiBtYXRjaGVzID0gdmFsdWU/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKTsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzdGFydHNXaXRoJzogbWF0Y2hlcyA9IHZhbHVlPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKTsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdlbmRzV2l0aCc6IG1hdGNoZXMgPSB2YWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2dyZWF0ZXJUaGFuJzogbWF0Y2hlcyA9IE51bWJlcih2YWx1ZSkgPiBOdW1iZXIoZmlsdGVyVmFsdWUpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2xlc3NUaGFuJzogbWF0Y2hlcyA9IE51bWJlcih2YWx1ZSkgPCBOdW1iZXIoZmlsdGVyVmFsdWUpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2JldHdlZW4nOiBtYXRjaGVzID0gTnVtYmVyKHZhbHVlKSA+PSBmaWx0ZXJWYWx1ZS5taW4gJiYgTnVtYmVyKHZhbHVlKSA8PSBmaWx0ZXJWYWx1ZS5tYXg7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRoaXMuYWR2YW5jZWRGaWx0ZXJzLmVudHJpZXMoKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIGFkdmFuY2VkIGZpbHRlcnNcclxuICAgKi9cclxuICBjbGVhckFkdmFuY2VkRmlsdGVycygpOiB2b2lkIHtcclxuICAgIHRoaXMuYWR2YW5jZWRGaWx0ZXJzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gJyc7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgUEVSRk9STUFOQ0UgJiBIRUxQRVJTIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICAvKipcclxuICAgKiBTaG93IHRvYXN0IG5vdGlmaWNhdGlvbiAocmVwbGFjZXMgbmF0aXZlIGFsZXJ0cylcclxuICAgKi9cclxuICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgPSAnaW5mbycpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhbmVsQ2xhc3MgPSB0eXBlID09PSAnc3VjY2VzcycgPyAndG9hc3Qtc3VjY2VzcycgOiB0eXBlID09PSAnZXJyb3InID8gJ3RvYXN0LWVycm9yJyA6ICd0b2FzdC1pbmZvJztcclxuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnQ2xvc2UnLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246ICdlbmQnLFxyXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgcGFuZWxDbGFzczogW3BhbmVsQ2xhc3NdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrQnkgZnVuY3Rpb24gZm9yIG5nRm9yKCpuZ0Zvcj1cImxldCByb3cgb2YgZGF0YTsgdHJhY2tCeTogdHJhY2tCeVJvd0luZGV4XCIpXHJcbiAgICogSW1wcm92ZXMgcGVyZm9ybWFuY2UgYnkgdGVsbGluZyBBbmd1bGFyIGhvdyB0byB0cmFjayBpdGVtc1xyXG4gICAqL1xyXG4gIHRyYWNrQnlSb3dJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrQnkgZnVuY3Rpb24gZm9yIGNvbHVtbnNcclxuICAgKi9cclxuICB0cmFja0J5Q29sdW1uS2V5KGluZGV4OiBudW1iZXIsIGNvbDogVGFibGVDb2x1bW4pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbC5rZXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja0J5IGZ1bmN0aW9uIGZvciBzdHJpbmcgYXJyYXlzIChsaWtlIGRpc3BsYXllZENvbHVtbnMpXHJcbiAgICovXHJcbiAgdHJhY2tCeVN0cmluZyhpbmRleDogbnVtYmVyLCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja0J5IGZ1bmN0aW9uIGZvciBjdXN0b20gYWN0aW9uc1xyXG4gICAqL1xyXG4gIHRyYWNrQnlBY3Rpb25JZChpbmRleDogbnVtYmVyLCBhY3Rpb246IFRhYmxlQWN0aW9uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBhY3Rpb24uYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIEVYUE9SVCBNRVRIT0RTIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICAvKipcclxuICAgKiBFeHBvcnQgd2l0aCBjdXN0b20gdGVtcGxhdGVcclxuICAgKi9cclxuICBleHBvcnRXaXRoVGVtcGxhdGUodGVtcGxhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIFRoaXMgd291bGQgaW50ZWdyYXRlIHdpdGggY3VzdG9tIGV4cG9ydCB0ZW1wbGF0ZXNcclxuICAgIHN3aXRjaCh0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICAgY2FzZSAnZGV0YWlsZWQnOlxyXG4gICAgICAgIHRoaXMuZXhwb3J0RXhjZWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3VtbWFyeSc6XHJcbiAgICAgICAgdGhpcy5leHBvcnRTdW1tYXJ5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgIHRoaXMuZXhwb3J0SlNPTigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuZXhwb3J0RXhjZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cG9ydCBhcyBKU09OXHJcbiAgICovXHJcbiAgZXhwb3J0SlNPTigpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyZWREYXRhO1xyXG4gICAgICBjb25zdCBleHBvcnRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihjID0+IGMudHlwZSAhPT0gJ2FjdGlvbicpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgZXhwb3J0RGF0YSA9IGRhdGEubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Um93OiBhbnkgPSB7fTtcclxuICAgICAgICBleHBvcnRDb2x1bW5zLmZvckVhY2goY29sID0+IHtcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IHJvd1tjb2wua2V5XTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRm9ybWF0IGRhdGVzIHRvIElTTyBzdHJpbmdcclxuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBuZXdSb3dbY29sLmxhYmVsIHx8IGNvbC5rZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0RGF0YSwgbnVsbCwgMik7XHJcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvblN0cmluZ10sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICBhLmRvd25sb2FkID0gYHRhYmxlLWV4cG9ydC0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS5qc29uYDtcclxuICAgICAgYS5jbGljaygpO1xyXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhwb3J0aW5nIHRvIEpTT046JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhwb3J0IHN1bW1hcnkgKGFnZ3JlZ2F0ZWQgZGF0YSlcclxuICAgKi9cclxuICBwcml2YXRlIGV4cG9ydFN1bW1hcnkoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YTtcclxuICAgICAgY29uc3Qgc3VtbWFyeSA9IHtcclxuICAgICAgICBleHBvcnRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdG90YWxSZWNvcmRzOiBkYXRhLmxlbmd0aCxcclxuICAgICAgICBzYW1wbGVkUmVjb3JkczogZGF0YS5zbGljZSgwLCA1KVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHN1bW1hcnksIG51bGwsIDIpO1xyXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25TdHJpbmddLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgYS5kb3dubG9hZCA9IGB0YWJsZS1zdW1tYXJ5LSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9Lmpzb25gO1xyXG4gICAgICBhLmNsaWNrKCk7XHJcbiAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleHBvcnRpbmcgc3VtbWFyeTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgU0VSVkVSLVNJREUgUEFHSU5BVElPTiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBzZXJ2ZXItc2lkZSBkYXRhIHJlcXVlc3RcclxuICAgKi9cclxuICByZXF1ZXN0U2VydmVyRGF0YShwYWdlSW5kZXg6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgc29ydD86IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXJ2ZXJEYXRhUmVxdWVzdGVkLmVtaXQoe1xyXG4gICAgICBwYWdlSW5kZXgsXHJcbiAgICAgIHBhZ2VTaXplLFxyXG4gICAgICBzb3J0LFxyXG4gICAgICBmaWx0ZXJzOiBBcnJheS5mcm9tKHRoaXMuYWR2YW5jZWRGaWx0ZXJzLmVudHJpZXMoKSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGRhdGEgZnJvbSBzZXJ2ZXIgKGZvciBzZXJ2ZXItc2lkZSBwYWdpbmF0aW9uKVxyXG4gICAqL1xyXG4gIHNldFNlcnZlckRhdGEoZGF0YTogYW55W10sIHRvdGFsQ291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy50b3RhbFJlY29yZENvdW50ID0gdG90YWxDb3VudDtcclxuICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xyXG4gICAgICB0aGlzLnBhZ2luYXRvci5sZW5ndGggPSB0b3RhbENvdW50O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRpbmdTZXJ2ZXJEYXRhID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ09MVU1OIFJFU0laRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgY29sdW1uIHJlc2l6ZVxyXG4gICAqL1xyXG4gIHN0YXJ0Q29sdW1uUmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZW5hYmxlQ29sdW1uUmVzaXplKSByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIHRoaXMucmVzaXppbmdDb2x1bW4gPSBjb2x1bW47XHJcbiAgICB0aGlzLnJlc2l6ZVN0YXJ0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICB0aGlzLnJlc2l6ZVN0YXJ0V2lkdGggPSBjb2x1bW4ud2lkdGggPyBwYXJzZUludChjb2x1bW4ud2lkdGgpIDogMTUwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGNvbHVtbiByZXNpemUgb24gbW91c2UgbW92ZSAoZ2xvYmFsIGxpc3RlbmVyKVxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZXNpemluZ0NvbHVtbiB8fCAhdGhpcy5lbmFibGVDb2x1bW5SZXNpemUpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMucmVzaXplU3RhcnRYO1xyXG4gICAgbGV0IG5ld1dpZHRoID0gTWF0aC5tYXgoNTAsIHRoaXMucmVzaXplU3RhcnRXaWR0aCArIGRlbHRhWCk7IC8vIE1pbiA1MHB4XHJcbiAgICBcclxuICAgIHRoaXMucmVzaXppbmdDb2x1bW4ud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XHJcbiAgICB0aGlzLmNvbHVtbldpZHRocy5zZXQodGhpcy5yZXNpemluZ0NvbHVtbi5rZXksIGAke25ld1dpZHRofXB4YCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuZCBjb2x1bW4gcmVzaXplIChnbG9iYWwgbGlzdGVuZXIpXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2l6aW5nQ29sdW1uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBjb2x1bW4gd2lkdGggZm9yIHRlbXBsYXRlIGJpbmRpbmdcclxuICAgKi9cclxuICBnZXRDb2x1bW5XaWR0aChjb2x1bW46IFRhYmxlQ29sdW1uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbldpZHRocy5nZXQoY29sdW1uLmtleSkgfHwgY29sdW1uLndpZHRoIHx8ICdhdXRvJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdHRhYmxlLWNvbnRhaW5lciBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICA8IS0tIEVuaGFuY2VkIFRvb2xiYXIgLS0+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdHRhYmxlLXRvb2xiYXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC0yIGdhcC0yXCI+XHJcbiAgICA8IS0tIExFRlQ6IFNlYXJjaCBPbmx5IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPCEtLSBTZWFyY2ggSWNvbiAvIElucHV0IC0tPlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIXNob3dTZWFyY2hcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInRvZ2dsZVNlYXJjaCgpXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwidG9vbHRpcHMuc2VhcmNoIHx8ICdTZWFyY2gnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLnNlYXJjaEljb24gfHwgJ3NlYXJjaCcgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93U2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtd3JhcHBlclwiPlxyXG4gICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGUtNSBwLTBcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwic2VhcmNoSW5wdXRWYWx1ZVwiIChpbnB1dCk9XCJvblNlYXJjaChzZWFyY2hJbnB1dC52YWx1ZSlcIiBhdXRvZm9jdXMgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4tc20gcG9zaXRpb24tYWJzb2x1dGUgdG9wLTUwIGVuZC0wIHRyYW5zbGF0ZS1taWRkbGUteSBtZS0xIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4XCJcclxuICAgICAgICAgIChjbGljayk9XCJjbGVhclNlYXJjaCgpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+e3sgaWNvbnMuY2xvc2VJY29uIHx8ICdjbG9zZScgfX08L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQ0VOVEVSOiBTZWxlY3RlZCBDb3VudCAoaWYgcm93IHNlbGVjdGlvbiBlbmFibGVkKSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Rpb24taW5mb1wiIFtjbGFzcy52aXNpYmxlXT1cInNlbGVjdGVkUm93cy5zaXplID4gMFwiPlxyXG4gICAgICB7eyBzZWxlY3RlZFJvd3Muc2l6ZSB9fSByb3cocykgc2VsZWN0ZWRcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBSSUdIVDogQWxsIEFjdGlvbnMgKEFkZCwgSW5zZXJ0LCBEZWxldGUsIENvbHVtbiBUb2dnbGUsIEV4cG9ydCwgUHJpbnQpIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPCEtLSBBZGQgUm93IEJ1dHRvbiAtLT5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImVuYWJsZUFkZFwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwib25BZGQoKVwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBzLmFkZFJvdyB8fCAnQWRkIE5ldyBSb3cnXCJcclxuICAgICAgICBjbGFzcz1cIm5ldXRyYWwtYnRuXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLmFkZEljb24gfHwgJ2FkZCcgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwhLS0gSW5zZXJ0IFJvdyBBYm92ZSBCdXR0b24gLS0+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJlbmFibGVBZGQgJiYgZW5hYmxlUm93U2VsZWN0aW9uXCIgbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJpbnNlcnRSb3dBYm92ZSgpXCJcclxuICAgICAgICBbbWF0VG9vbHRpcF09XCJ0b29sdGlwcy5pbnNlcnRSb3dBYm92ZSB8fCAnSW5zZXJ0IFJvdyBBYm92ZSdcIlxyXG4gICAgICAgIGNsYXNzPVwibmV1dHJhbC1idG5cIj5cclxuICAgICAgICA8bWF0LWljb24+e3sgaWNvbnMuaW5zZXJ0QWJvdmVJY29uIHx8ICdhcnJvd191cHdhcmQnIH19PC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8IS0tIEluc2VydCBSb3cgQmVsb3cgQnV0dG9uIC0tPlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiZW5hYmxlQWRkICYmIGVuYWJsZVJvd1NlbGVjdGlvblwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaW5zZXJ0Um93QmVsb3coKVwiXHJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwidG9vbHRpcHMuaW5zZXJ0Um93QmVsb3cgfHwgJ0luc2VydCBSb3cgQmVsb3cnXCJcclxuICAgICAgICBjbGFzcz1cIm5ldXRyYWwtYnRuXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLmluc2VydEJlbG93SWNvbiB8fCAnYXJyb3dfZG93bndhcmQnIH19PC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8IS0tIERlbGV0ZSBTZWxlY3RlZCBSb3dzIEJ1dHRvbiAtLT5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImVuYWJsZURlbGV0ZVwiIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwic2VsZWN0ZWRSb3dzLnNpemUgPT09IDBcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkRlbGV0ZVNlbGVjdGVkKClcIiBcclxuICAgICAgICBbbWF0VG9vbHRpcF09XCJ0b29sdGlwcy5kZWxldGVSb3dzIHx8ICdEZWxldGUgU2VsZWN0ZWQnXCIgY2xhc3M9XCJkYW5nZXItYnRuXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLmRlbGV0ZUljb24gfHwgJ2RlbGV0ZScgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwhLS0gQ29sdW1uIFRvZ2dsZSAtLT5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImVuYWJsZUNvbHVtblRvZ2dsZSAmJiBjb2x1bW5zLmxlbmd0aCA+IDBcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInRvZ2dsZUNvbHVtblBhbmVsKClcIlxyXG4gICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJjb2x1bW5NZW51XCIgW21hdFRvb2x0aXBdPVwidG9vbHRpcHMudG9nZ2xlQ29sdW1ucyB8fCAnVG9nZ2xlIENvbHVtbnMnXCIgY2xhc3M9XCJuZXV0cmFsLWJ0blwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj57eyBpY29ucy5jb2x1bW5Ub2dnbGVJY29uIHx8ICd2aWV3X2NvbHVtbicgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwhLS0gRXhwb3J0IE1lbnUgLS0+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJlbmFibGVFeHBvcnRcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImV4cG9ydE1lbnVcIlxyXG4gICAgICAgIFttYXRUb29sdGlwXT1cInRvb2x0aXBzLmV4cG9ydCB8fCAnRXhwb3J0J1wiIGNsYXNzPVwibmV1dHJhbC1idG5cIj5cclxuICAgICAgICA8bWF0LWljb24+e3sgaWNvbnMuZXhwb3J0SWNvbiB8fCAnZmlsZV9kb3dubG9hZCcgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwhLS0gUHJpbnQgQnV0dG9uIC0tPlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiZW5hYmxlUHJpbnRcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByaW50VGFibGUoKVwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBzLnByaW50IHx8ICdQcmludCdcIlxyXG4gICAgICAgIGNsYXNzPVwibmV1dHJhbC1idG5cIj5cclxuICAgICAgICA8bWF0LWljb24+e3sgaWNvbnMucHJpbnRJY29uIHx8ICdwcmludCcgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIFNjcm9sbGFibGUgVGFibGUgV3JhcHBlciB3aXRoIG9wdGlvbmFsIFZpcnR1YWwgU2Nyb2xsIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJ0YWJsZS1zY3JvbGwtd3JhcHBlciBmbGV4LWdyb3ctMVwiIFtzdHlsZS5oZWlnaHQucHhdPVwidGFibGVNYXhIZWlnaHRcIlxyXG4gICAgKm5nSWY9XCIoY29sdW1ucy5sZW5ndGggPiAwID8gY29sdW1uc1RvRGlzcGxheS5sZW5ndGggOiBkaXNwbGF5ZWRDb2x1bW5zPy5sZW5ndGgpICYmIGRhdGFTb3VyY2UuZGF0YS5sZW5ndGggPiAwXCI+XHJcblxyXG4gICAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCBjbGFzcz1cInctMTAwXCI+XHJcblxyXG4gICAgICA8IS0tIFNFTEVDVElPTiBDT0xVTU4gKGZvciByb3cgY2hlY2tib3hlcykgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbmFibGVSb3dTZWxlY3Rpb25cIiBtYXRDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJhbGxSb3dzU2VsZWN0ZWRcIiAoY2hhbmdlKT1cInRvZ2dsZVNlbGVjdEFsbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggW2NoZWNrZWRdPVwiaXNSb3dTZWxlY3RlZChyb3cpXCIgKGNoYW5nZSk9XCJ0b2dnbGVSb3dTZWxlY3Rpb24ocm93KVwiPlxyXG4gICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8IS0tIERZTkFNSUMgQ09MVU1OUyAoTkVXIENPTkZJRy1CQVNFRCkgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zOyB0cmFja0J5OiB0cmFja0J5Q29sdW1uS2V5XCIgW21hdENvbHVtbkRlZl09XCJjb2wua2V5XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC50eXBlICE9PSAnYWN0aW9uJyB8fCBzaG93QWN0aW9uQ29sdW1uXCI+XHJcbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBbY2xhc3Muc29ydGFibGVdPVwiY29sLnNvcnRhYmxlXCJcclxuICAgICAgICAgIFttYXQtc29ydC1oZWFkZXJdPVwiY29sLnNvcnRhYmxlID8gY29sLmtleSA6IG51bGxcIiBbc3R5bGUud2lkdGhdPVwiZ2V0Q29sdW1uV2lkdGgoY29sKVwiXHJcbiAgICAgICAgICBbY2xhc3Muc3RpY2t5LWFjdGlvbi1jb2x1bW5dPVwiZW5hYmxlU3RpY2t5QWN0aW9ucyAmJiBjb2wudHlwZSA9PT0gJ2FjdGlvbidcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57eyBjb2wubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBDb2x1bW4gRmlsdGVyIElucHV0IChpZiBmaWx0ZXJhYmxlKSAtLT5cclxuICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiY29sLmZpbHRlcmFibGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiY29sdW1uLWZpbHRlci1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyLi4uXCJcclxuICAgICAgICAgICAgICAoaW5wdXQpPVwiYXBwbHlDb2x1bW5GaWx0ZXIoY29sLmtleSwgJGV2ZW50KVwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPCEtLSBDb2x1bW4gUmVzaXplIEhhbmRsZSAoaWYgZW5hYmxlZCkgLS0+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW5hYmxlQ29sdW1uUmVzaXplICYmIGNvbC5rZXkgIT09ICdzZWxlY3Rpb24nICYmIGNvbC50eXBlICE9PSAnYWN0aW9uJ1wiIGNsYXNzPVwicmVzaXplLWhhbmRsZVwiXHJcbiAgICAgICAgICAgIChtb3VzZWRvd24pPVwic3RhcnRDb2x1bW5SZXNpemUoJGV2ZW50LCBjb2wpXCIgbWF0VG9vbHRpcD1cIkRyYWcgdG8gcmVzaXplIGNvbHVtblwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPCEtLSBDZWxsIC0tPlxyXG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3c7IGxldCByb3dJbmRleCA9IGluZGV4XCIgW2NsYXNzLmNlbGwtdmFsdWVdPVwiY29sLmtleSAhPT0gJ0FjdGlvbnMnXCJcclxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJnZXRDb2x1bW5XaWR0aChjb2wpXCJcclxuICAgICAgICAgIFtjbGFzcy5zdGlja3ktYWN0aW9uLWNvbHVtbl09XCJlbmFibGVTdGlja3lBY3Rpb25zICYmIGNvbC50eXBlID09PSAnYWN0aW9uJyAmJiBzaG93QWN0aW9uQ29sdW1uXCI+XHJcbiAgICAgICAgICA8IS0tIFRFWFQgVFlQRSB3aXRoIElOTElORSBFRElUSU5HIHN1cHBvcnQgLS0+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLnR5cGUgIT09ICdhY3Rpb24nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsLWxhYmVsXCI+e3sgY29sLmxhYmVsIH19PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIElubGluZSBFZGl0IE1vZGUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbmFibGVJbmxpbmVFZGl0ICYmIGlzRWRpdGluZ0NlbGwocm93SW5kZXgsIGNvbC5rZXkpXCIgY2xhc3M9XCJpbmxpbmUtZWRpdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8IS0tIFRleHQgSW5wdXQgLS0+XHJcbiAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiY29sLmlucHV0VHlwZSAhPT0gJ3NlbGVjdCcgJiYgY29sLmlucHV0VHlwZSAhPT0gJ3RleHRhcmVhJ1wiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWVkaXQtaW5wdXRcIiBbKG5nTW9kZWwpXT1cImVkaXRpbmdWYWx1ZVwiIFt0eXBlXT1cImNvbC5pbnB1dFR5cGUgfHwgJ3RleHQnXCJcclxuICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJzYXZlSW5saW5lRWRpdChyb3csIGNvbClcIiAoa2V5dXAuZXNjYXBlKT1cImNhbmNlbElubGluZUVkaXQoKVwiIGF1dG9mb2N1cyAvPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIFRleHRhcmVhIC0tPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cImNvbC5pbnB1dFR5cGUgPT09ICd0ZXh0YXJlYSdcIiBjbGFzcz1cImlubGluZS1lZGl0LWlucHV0XCIgWyhuZ01vZGVsKV09XCJlZGl0aW5nVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInNhdmVJbmxpbmVFZGl0KHJvdywgY29sKVwiIChrZXl1cC5lc2NhcGUpPVwiY2FuY2VsSW5saW5lRWRpdCgpXCIgYXV0b2ZvY3VzPlxyXG4gICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICAgIDwhLS0gU2VsZWN0IGRyb3Bkb3duIC0tPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgKm5nSWY9XCJjb2wuaW5wdXRUeXBlID09PSAnc2VsZWN0J1wiIGNsYXNzPVwiaW5saW5lLWVkaXQtaW5wdXRcIiBbKG5nTW9kZWwpXT1cImVkaXRpbmdWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNhdmVJbmxpbmVFZGl0KHJvdywgY29sKVwiIChibHVyKT1cImNhbmNlbElubGluZUVkaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwibnVsbFwiPi0tIFNlbGVjdCAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGNvbC5vcHRpb25zOyB0cmFja0J5OiB0cmFja0J5Um93SW5kZXhcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IG9wdC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgIDwhLS0gQnV0dG9uczogU2F2ZSAmIENhbmNlbCAtLT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWVkaXQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNhdmVJbmxpbmVFZGl0KHJvdywgY29sKVwiIG1hdFRvb2x0aXA9XCJTYXZlXCIgY2xhc3M9XCJzYXZlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsSW5saW5lRWRpdCgpXCIgbWF0VG9vbHRpcD1cIkNhbmNlbFwiIGNsYXNzPVwiY2FuY2VsLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBWaWV3IE1vZGUgKGRvdWJsZS1jbGljayB0byBlZGl0KSAtLT5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFlbmFibGVJbmxpbmVFZGl0IHx8ICFpc0VkaXRpbmdDZWxsKHJvd0luZGV4LCBjb2wua2V5KVwiIGNsYXNzPVwiY2VsbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuZWRpdGFibGUtY2VsbF09XCJjb2wuZWRpdGFibGUgJiYgZW5hYmxlSW5saW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgKGRibGNsaWNrKT1cIm9uQ2VsbERvdWJsZUNsaWNrKHJvdywgY29sLCByb3dJbmRleCwgJGV2ZW50KVwiIChtb3VzZWVudGVyKT1cImVkaXRpbmdIb3ZlcmVkUm93ID0gcm93SW5kZXhcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImVkaXRpbmdIb3ZlcmVkUm93ID0gbnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2VsbC12YWx1ZVwiPnt7IHJvd1tjb2wua2V5XSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8IS0tIEVkaXQgaWNvbiBvbmx5IHZpc2libGUgb24gaG92ZXIgZm9yIGVkaXRhYmxlIGNlbGxzIC0tPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImNvbC5lZGl0YWJsZSAmJiBlbmFibGVJbmxpbmVFZGl0ICYmIGVkaXRpbmdIb3ZlcmVkUm93ID09PSByb3dJbmRleFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtaWNvbi1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgZWRpdFxyXG4gICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPCEtLSBBQ1RJT04gVFlQRSAoRHluYW1pYyBBY3Rpb25zICsgQnVpbHQtaW4gUm93IEFjdGlvbnMpIC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC50eXBlID09PSAnYWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbC1sYWJlbFwiPnt7IGNvbC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbC12YWx1ZSBhY3Rpb25zLWNlbGxcIj5cclxuICAgICAgICAgICAgICA8IS0tIEJ1aWx0LWluIFJvdyBBY3Rpb25zIChjb25maWd1cmFibGUpIC0tPlxyXG4gICAgICAgICAgICAgIDwhLS0gRWRpdCBSb3cgLS0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInJvd0FjdGlvbnMuZW5hYmxlRWRpdFwiIG1hdC1pY29uLWJ1dHRvbiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwcy5lZGl0Um93IHx8ICdFZGl0J1wiXHJcbiAgICAgICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQWN0aW9uQ2xpY2tlZCgnZWRpdCcsIHJvdylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj57eyBpY29ucy5lZGl0SWNvbiB8fCAnZWRpdCcgfX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBSb3cgLS0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInJvd0FjdGlvbnMuZW5hYmxlRGVsZXRlXCIgbWF0LWljb24tYnV0dG9uIFttYXRUb29sdGlwXT1cInRvb2x0aXBzLmRlbGV0ZVJvdyB8fCAnRGVsZXRlJ1wiXHJcbiAgICAgICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAoY2xpY2spPVwib25BY3Rpb25DbGlja2VkKCdkZWxldGUnLCByb3cpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+e3sgaWNvbnMuZGVsZXRlSWNvbiB8fCAnZGVsZXRlJyB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwhLS0gSW5zZXJ0IFJvdyBBYm92ZSAtLT5cclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwicm93QWN0aW9ucy5lbmFibGVJbnNlcnRBYm92ZVwiIG1hdC1pY29uLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwidG9vbHRpcHMuaW5zZXJ0QWJvdmVSb3cgfHwgJ0luc2VydCBBYm92ZSdcIiBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGlvbkNsaWNrZWQoJ2luc2VydEFib3ZlJywgcm93KVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLmluc2VydEFib3ZlSWNvbiB8fCAnYXJyb3dfdXB3YXJkJyB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwhLS0gSW5zZXJ0IFJvdyBCZWxvdyAtLT5cclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwicm93QWN0aW9ucy5lbmFibGVJbnNlcnRCZWxvd1wiIG1hdC1pY29uLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwidG9vbHRpcHMuaW5zZXJ0QmVsb3dSb3cgfHwgJ0luc2VydCBCZWxvdydcIiBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGlvbkNsaWNrZWQoJ2luc2VydEJlbG93Jywgcm93KVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPnt7IGljb25zLmluc2VydEJlbG93SWNvbiB8fCAnYXJyb3dfZG93bndhcmQnIH19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBDdXN0b20gQWN0aW9ucyAtLT5cclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uczsgdHJhY2tCeTogdHJhY2tCeUFjdGlvbklkXCIgbWF0LWljb24tYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJhY3Rpb24ubGFiZWxcIiBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiIFtuZ0NsYXNzXT1cImFjdGlvbi5jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BY3Rpb25DbGlja2VkKGFjdGlvbi5hY3Rpb24sIHJvdylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj57eyBhY3Rpb24uaWNvbiB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8IS0tIExFR0FDWSBEWU5BTUlDIENPTFVNTlMgKGZhbGxiYWNrIGZvciBvbGQgZGlzcGxheWVkQ29sdW1ucyBpbnB1dCkgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBkaXNwbGF5ZWRDb2x1bW5zOyB0cmFja0J5OiB0cmFja0J5U3RyaW5nXCIgW21hdENvbHVtbkRlZl09XCJjb2xcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uIHx8IGNvbCAhPT0gJ0FjdGlvbnMnXCI+XHJcbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgIHt7IGNvbCAhPT0gJ0FjdGlvbnMnID8gY29sIDogJ0FjdGlvbnMnIH19XHJcbiAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbCAhPT0gJ0FjdGlvbnMnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbC1sYWJlbFwiPnt7IGNvbCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwtdmFsdWVcIj57eyByb3dbY29sXSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sID09PSAnQWN0aW9ucycgJiYgYWN0aW9ucy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbC1sYWJlbFwiPnt7IGNvbCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwtdmFsdWUgYWN0aW9ucy1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCIgIG1hdC1pY29uLWJ1dHRvbiBbbWF0VG9vbHRpcF09XCJhY3Rpb24ubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCIgW25nQ2xhc3NdPVwiYWN0aW9uLmNvbG9yXCIgKGNsaWNrKT1cIm9uQWN0aW9uQ2xpY2tlZChhY3Rpb24uYWN0aW9uLCByb3cpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnt7IGFjdGlvbi5pY29uIH19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBMZWdhY3kgaGFyZGNvZGVkIGFjdGlvbnMgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpIC0tPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wgPT09ICdBY3Rpb25zJyAmJiBhY3Rpb25zLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwtbGFiZWxcIj57eyBjb2wgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsLXZhbHVlIGFjdGlvbnMtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUb29sdGlwPVwiRWRpdFwiIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BY3Rpb25DbGlja2VkKCdFZGl0Jywgcm93KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIlJvbGUgUmlnaHRzXCIgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGlvbkNsaWNrZWQoJ1JvbGVSaWdodHMnLCByb3cpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIlJlc2V0IFBhc3N3b3JkXCIgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGlvbkNsaWNrZWQoJ1Jlc2V0UGFzc3dvcmQnLCByb3cpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5sb2NrX3Jlc2V0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwhLS0gSGVhZGVyIFJvdyAtLT5cclxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zLmxlbmd0aCA+IDAgPyBjb2x1bW5zVG9EaXNwbGF5IDogZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiB0cnVlXCI+PC90cj5cclxuXHJcbiAgICAgIDwhLS0gRGF0YSBSb3cgLS0+XHJcbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBjb2x1bW5zLmxlbmd0aCA+IDAgPyBjb2x1bW5zVG9EaXNwbGF5IDogZGlzcGxheWVkQ29sdW1uc1wiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uUm93Q2xpY2socm93KVwiIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIiBbY2xhc3Muc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQocm93KVwiPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBFbXB0eSBTdGF0ZSBNZXNzYWdlIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJkYXRhU291cmNlLmRhdGEubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgaC0xMDAgdGV4dC1tdXRlZFwiXHJcbiAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInRhYmxlTWF4SGVpZ2h0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcC00XCI+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1iLTIgZW1wdHktc3RhdGVfX2ljb25cIj5wZXJzb25fb2ZmPC9tYXQtaWNvbj5cclxuICAgICAgPHAgY2xhc3M9XCJtYi0wXCI+Tm8gZGF0YSBhdmFpbGFibGU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBQYWdpbmF0b3IgLS0+XHJcbiAgPG1hdC1wYWdpbmF0b3IgKm5nSWY9XCJzaG93UGFnaW5hdG9yXCIgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIiBbcGFnZVNpemVdPVwicGFnZVNpemVcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz5cclxuICA8L21hdC1wYWdpbmF0b3I+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBDb2x1bW4gVG9nZ2xlIE1lbnUgLS0+XHJcbjxtYXQtbWVudSAjY29sdW1uTWVudT1cIm1hdE1lbnVcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sdW1uLW1lbnUtaGVhZGVyIHAtMiBib3JkZXItYm90dG9tXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNob3dBbGxDb2x1bW5zKClcIiBjbGFzcz1cInctMTAwIHRleHQtc3RhcnRcIj5cclxuICAgICAgPG1hdC1pY29uPmNoZWNrX2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuPlNob3cgQWxsPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImhpZGVBbGxDb2x1bW5zKClcIiBjbGFzcz1cInctMTAwIHRleHQtc3RhcnRcIj5cclxuICAgICAgPG1hdC1pY29uPnJhZGlvX2J1dHRvbl91bmNoZWNrZWQ8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj5IaWRlIEFsbDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQnlDb2x1bW5LZXlcIiAoY2xpY2spPVwidG9nZ2xlQ29sdW1uKGNvbClcIj5cclxuICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFjb2wuaGlkZGVuXCI+Y2hlY2tfYm94PC9tYXQtaWNvbj5cclxuICAgIDxtYXQtaWNvbiAqbmdJZj1cImNvbC5oaWRkZW5cIj5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvbWF0LWljb24+XHJcbiAgICA8c3Bhbj57eyBjb2wubGFiZWwgfX08L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbjwvbWF0LW1lbnU+XHJcblxyXG48IS0tIEV4cG9ydCBNZW51IC0tPlxyXG48bWF0LW1lbnUgI2V4cG9ydE1lbnU9XCJtYXRNZW51XCI+XHJcbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJleHBvcnRFeGNlbCgpXCI+XHJcbiAgICA8bWF0LWljb24+dGFibGVfY2hhcnQ8L21hdC1pY29uPlxyXG4gICAgPHNwYW4+RXhwb3J0IHRvIEV4Y2VsPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZXhwb3J0Q1NWKClcIj5cclxuICAgIDxtYXQtaWNvbj5kZXNjcmlwdGlvbjwvbWF0LWljb24+XHJcbiAgICA8c3Bhbj5FeHBvcnQgdG8gQ1NWPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZXhwb3J0UERGKClcIj5cclxuICAgIDxtYXQtaWNvbj5waWN0dXJlX2FzX3BkZjwvbWF0LWljb24+XHJcbiAgICA8c3Bhbj5FeHBvcnQgdG8gUERGPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L21hdC1tZW51PiJdfQ==