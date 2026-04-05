import { OnInit, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TableColumn, TableAction } from './reusable-table.interfaces';
import { TableConfig } from './reusable-table.config';
import { TableEvent, TableFeatureConfig, TableDisplayConfig } from './table-event.model';
import * as i0 from "@angular/core";
/**
 * ReusableTableComponent
 * Enterprise-grade configurable table component with dynamic columns, actions,
 * export (Excel/PDF/CSV), printing, column toggle, inline filtering, and more.
 * Fully generic and production-ready.
 */
export declare class ReusableTableComponent implements OnInit, AfterViewInit, OnChanges {
    private destroyRef;
    private dialog;
    private snackBar;
    private cdr;
    private elementRef;
    private renderer;
    /** Fully customizable table configuration */
    config?: TableConfig;
    /** Resolved config (defaults + custom) */
    tableConfig: TableConfig;
    /** Dynamic column configuration (replaces hardcoded displayedColumns) */
    columns: TableColumn[];
    /** Dynamic action buttons configuration */
    actions: TableAction[];
    /** Enable/disable export to Excel */
    enableExport: boolean;
    /** Enable/disable print functionality */
    enablePrint: boolean;
    /** Enable/disable column toggle feature */
    enableColumnToggle: boolean;
    /** Enable/disable add row button */
    enableAdd: boolean;
    /** Enable/disable delete row button */
    enableDelete: boolean;
    /** Enable/disable row selection checkboxes */
    enableRowSelection: boolean;
    /** Show/hide the action column */
    showActionColumn: boolean;
    /** Enable/disable inline editing */
    enableInlineEdit: boolean;
    /** Enable/disable column dragging for reorder */
    enableColumnDrag: boolean;
    /** Enable/disable column resize */
    enableColumnResize: boolean;
    /** Enable/disable sticky action column (stays visible when scrolling) */
    enableStickyActions: boolean;
    /** Enable/disable virtual scrolling for large datasets */
    enableVirtualScroll: boolean;
    /** Server-side pagination enabled */
    serverSidePagination: boolean;
    /** Backend pagination config */
    backendPaginationUrl: string;
    /** Controlled data input */
    data: any[];
    /** Feature configuration */
    featureConfig: TableFeatureConfig;
    /** Display configuration */
    displayConfig: TableDisplayConfig;
    /** Array of column names to display in the table (LEGACY) */
    displayedColumns: string[];
    /** Maximum height of the table container in pixels */
    tableMaxHeight: number;
    /** Height of each row in pixels */
    rowHeight: number;
    /** Height of the table header in pixels */
    headerHeight: number;
    /** Search term to filter table data */
    searchTerm: string;
    /** Custom filter predicate function */
    filterPredicate: ((data: any, filter: string) => boolean) | null;
    /** Page size for pagination */
    pageSize: number;
    /** Page size options for paginator */
    pageSizeOptions: number[];
    /** Enable/disable pagination */
    showPaginator: boolean;
    /** Single unified event emitter */
    events: EventEmitter<TableEvent>;
    /** Legacy outputs for backward compatibility */
    tableActionTriggered: EventEmitter<{
        action: string;
        row?: any;
        rows?: any[];
    }>;
    rowEditClicked: EventEmitter<any>;
    rowSelected: EventEmitter<any>;
    searchChanged: EventEmitter<string>;
    actionClicked: EventEmitter<{
        action: string;
        row: any;
    }>;
    inlineEditChange: EventEmitter<{
        row: any;
        column: string;
        value: any;
    }>;
    serverDataRequested: EventEmitter<any>;
    dataSource: MatTableDataSource<any, MatPaginator>;
    showSearch: boolean;
    searchInputValue: string;
    selectedRows: Set<any>;
    showColumnPanel: boolean;
    columnFilters: Map<string, string>;
    editingHoveredRow: number | null;
    showInsertColumnDialog: boolean;
    newColumnName: string;
    newColumnLabel: string;
    /** Track inline edit mode */
    editingCell: {
        rowIndex: number;
        column: string;
    } | null;
    editingValue: any;
    /** Track column order for drag-to-reorder */
    columnOrder: TableColumn[];
    draggedColumn: TableColumn | null;
    /** Advanced filters */
    advancedFilters: Map<string, any>;
    /** Track column being resized */
    resizingColumn: TableColumn | null;
    resizeStartX: number;
    resizeStartWidth: number;
    /** Store column widths */
    columnWidths: Map<string, string>;
    /** Current server-side pagination state */
    currentPageIndex: number;
    currentPageSize: number;
    totalRecordCount: number;
    isLoadingServerData: boolean;
    /** Virtual scroll buffer */
    virtualScrollBuffer: number;
    sort: MatSort;
    paginator: MatPaginator;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Apply CSS variables for complete theme customization
     */
    private applyCSSVariables;
    ngAfterViewInit(): void;
    /**
     * Initialize the default filter predicate for searching across all columns
     */
    private initializeFilterPredicate;
    /**
     * Attach MatSort to the table
     */
    private attachSort;
    /**
     * Attach MatPaginator to the table
     */
    private attachPaginator;
    /**
     * Attach server-side pagination handler to paginator
     */
    private attachServerPaginator;
    /**
     * Get columns to display - uses new Column config or falls back to legacy displayedColumns
     */
    get columnsToDisplay(): string[];
    /**
     * Update the displayed columns array (for internal updates)
     */
    private updateDisplayedColumns;
    /**
     * Get visible columns for the template
     */
    get visibleColumns(): TableColumn[];
    /** Get configured icons */
    get icons(): {
        editIcon?: string;
        deleteIcon?: string;
        insertAboveIcon?: string;
        insertBelowIcon?: string;
        searchIcon?: string;
        addIcon?: string;
        addColumnIcon?: string;
        columnToggleIcon?: string;
        exportIcon?: string;
        printIcon?: string;
        closeIcon?: string;
        showAllIcon?: string;
        hideAllIcon?: string;
        showIcon?: string;
        hideIcon?: string;
        columnDeleteIcon?: string;
        emptyStateIcon?: string;
    };
    /** Get configured tooltips */
    get tooltips(): {
        search?: string;
        addRow?: string;
        insertRowAbove?: string;
        insertRowBelow?: string;
        deleteRows?: string;
        insertColumn?: string;
        toggleColumns?: string;
        export?: string;
        print?: string;
        editRow?: string;
        deleteRow?: string;
        insertAboveRow?: string;
        insertBelowRow?: string;
        showAll?: string;
        hideAll?: string;
        deleteColumn?: string;
        resizeColumn?: string;
    };
    /** Get configured colors */
    get colors(): {
        primary?: string;
        neutral?: string;
        border?: string;
        toolbarBg?: string;
        toolbarText?: string;
        headerBg?: string;
        headerText?: string;
        headerBorder?: string;
        rowBg?: string;
        rowHoverBg?: string;
        rowBorder?: string;
        cellText?: string;
        selectedRowBg?: string;
        inputBg?: string;
        inputBorder?: string;
        inputText?: string;
        inputPlaceholder?: string;
        buttonHoverBg?: string;
        dangerColor?: string;
        successColor?: string;
        warningColor?: string;
        filterInputBg?: string;
        filterInputBorder?: string;
        filterInputText?: string;
    };
    /** Get configured row actions */
    get rowActions(): {
        enableEdit?: boolean;
        enableDelete?: boolean;
        enableInsertAbove?: boolean;
        enableInsertBelow?: boolean;
    };
    /**
     * Toggle search input visibility
     */
    toggleSearch(): void;
    /**
     * Clear search and reset filter
     */
    clearSearch(): void;
    /**
     * Handle search input and apply filter
     */
    onSearch(value: string): void;
    /**
     * Handle row click
     */
    onRowClick(row: any): void;
    /**
     * Handle action button clicks (both built-in row actions and custom actions)
     */
    onActionClicked(action: string, row: any): void;
    /**
     * Select a user row and emit event
     */
    selectRow(row: any): void;
    /**
     * Get row ID from various possible field names
     */
    getRowId(row: any): number;
    /**
     * Get row name from various possible field names
     */
    getRowName(row: any): string;
    /**
     * Update table data source
     */
    updateDataSource(data: any[]): void;
    /**
     * Toggle column visibility
     */
    toggleColumn(column: TableColumn): void;
    /**
     * Toggle the column panel
     */
    toggleColumnPanel(): void;
    /**
     * Show all columns
     */
    showAllColumns(): void;
    /**
     * Hide all columns
     */
    hideAllColumns(): void;
    /**
     * Toggle row selection
     */
    toggleRowSelection(row: any): void;
    /**
     * Toggle select all rows
     */
    toggleSelectAll(event: any): void;
    /**
     * Check if row is selected
     */
    isRowSelected(row: any): boolean;
    /**
     * Check if all rows are selected
     */
    get allRowsSelected(): boolean;
    /**
     * Emit add row event
     */
    onAdd(): void;
    /**
     * Insert row above selected row (if single row selected)
     */
    insertRowAbove(): void;
    /**
     * Insert row below selected row (if single row selected)
     */
    insertRowBelow(): void;
    /**
     * Insert row at specific index
     * @deprecated Use events emitter instead - parent controls data
     */
    insertRowAt(index: number): void;
    /**
     * Create an empty row object with default values or empty strings for editing
     */
    private createEmptyRow;
    /**
     * Get default value based on column type
     */
    private getDefaultValue;
    /**
     * Delete selected rows
     */
    onDeleteSelected(): void;
    /**
     * Delete single row with confirmation dialog
     */
    deleteRow(row: any): void;
    /**
     * Insert column - DISABLED for controlled component pattern
     * Column manipulation must be handled by parent component
     */
    insertColumn(): void;
    /**
     * Confirm column insertion - DISABLED for controlled component pattern
     */
    confirmInsertColumn(): void;
    /**
     * Cancel column insertion
     */
    cancelInsertColumn(): void;
    /**
     * Delete column - DISABLED for controlled component pattern
     * Column manipulation must be handled by parent component
     */
    deleteColumn(column: TableColumn): void;
    /**
     * Apply column-level filter
     */
    applyColumnFilter(columnKey: string, event: any): void;
    /**
     * Apply all active filters
     */
    private applyFilters;
    /**
     * Export table data to Excel (excludes action columns)
     */
    exportExcel(): Promise<void>;
    /**
     * Export table data to CSV (excludes action columns)
     */
    exportCSV(): void;
    /**
     * Export table data to PDF (excludes action columns)
     */
    exportPDF(): Promise<void>;
    /**
     * Print the table with clean HTML output (no cloning UI issues)
     */
    printTable(): void;
    /**
     * Escape HTML special characters
     */
    private escapeHtml;
    /**
     * Double-click to edit (not single click)
     * This matches Google Sheets, Excel, and AG Grid behavior
     */
    onCellDoubleClick(row: any, column: TableColumn, rowIndex: number, event: Event): void;
    /**
     * Save inline edit
     * Triggered by Enter key or blur event
     */
    saveInlineEdit(row: any, column: TableColumn): void;
    /**
     * Cancel inline edit
     * Triggered by Escape key
     */
    cancelInlineEdit(): void;
    /**
     * Check if cell is in edit mode
     */
    isEditingCell(rowIndex: number, columnKey: string): boolean;
    /**
     * Legacy method - kept for backward compatibility
     * Now calls onCellDoubleClick
     */
    startInlineEdit(row: any, column: TableColumn, rowIndex: number): void;
    /**
     * Handle column drag start
     */
    onColumnDragStart(column: TableColumn): void;
    /**
     * Handle column drop for reordering
     */
    onColumnDrop(targetColumn: TableColumn): void;
    /**
     * Apply advanced filter
     */
    applyAdvancedFilter(columnKey: string, operator: string, value: any): void;
    /**
     * Remove advanced filter
     */
    removeAdvancedFilter(columnKey: string): void;
    /**
     * Apply all advanced filters
     */
    private applyAdvancedFilters;
    /**
     * Clear all advanced filters
     */
    clearAdvancedFilters(): void;
    /**
     * Show toast notification (replaces native alerts)
     */
    private showToast;
    /**
     * TrackBy function for ngFor(*ngFor="let row of data; trackBy: trackByRowIndex")
     * Improves performance by telling Angular how to track items
     */
    trackByRowIndex(index: number): number;
    /**
     * TrackBy function for columns
     */
    trackByColumnKey(index: number, col: TableColumn): string;
    /**
     * TrackBy function for string arrays (like displayedColumns)
     */
    trackByString(index: number, item: string): string;
    /**
     * TrackBy function for custom actions
     */
    trackByActionId(index: number, action: TableAction): string;
    /**
     * Export with custom template
     */
    exportWithTemplate(templateName: string): void;
    /**
     * Export as JSON
     */
    exportJSON(): void;
    /**
     * Export summary (aggregated data)
     */
    private exportSummary;
    /**
     * Trigger server-side data request
     */
    requestServerData(pageIndex: number, pageSize: number, sort?: any): void;
    /**
     * Update data from server (for server-side pagination)
     */
    setServerData(data: any[], totalCount: number): void;
    /**
     * Start column resize
     */
    startColumnResize(event: MouseEvent, column: TableColumn): void;
    /**
     * Handle column resize on mouse move (global listener)
     */
    onMouseMove(event: MouseEvent): void;
    /**
     * End column resize (global listener)
     */
    onMouseUp(event: MouseEvent): void;
    /**
     * Get column width for template binding
     */
    getColumnWidth(column: TableColumn): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReusableTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReusableTableComponent, "app-reusable-table", never, { "config": { "alias": "config"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "actions": { "alias": "actions"; "required": false; }; "enableExport": { "alias": "enableExport"; "required": false; }; "enablePrint": { "alias": "enablePrint"; "required": false; }; "enableColumnToggle": { "alias": "enableColumnToggle"; "required": false; }; "enableAdd": { "alias": "enableAdd"; "required": false; }; "enableDelete": { "alias": "enableDelete"; "required": false; }; "enableRowSelection": { "alias": "enableRowSelection"; "required": false; }; "showActionColumn": { "alias": "showActionColumn"; "required": false; }; "enableInlineEdit": { "alias": "enableInlineEdit"; "required": false; }; "enableColumnDrag": { "alias": "enableColumnDrag"; "required": false; }; "enableColumnResize": { "alias": "enableColumnResize"; "required": false; }; "enableStickyActions": { "alias": "enableStickyActions"; "required": false; }; "enableVirtualScroll": { "alias": "enableVirtualScroll"; "required": false; }; "serverSidePagination": { "alias": "serverSidePagination"; "required": false; }; "backendPaginationUrl": { "alias": "backendPaginationUrl"; "required": false; }; "data": { "alias": "data"; "required": false; }; "featureConfig": { "alias": "featureConfig"; "required": false; }; "displayConfig": { "alias": "displayConfig"; "required": false; }; "displayedColumns": { "alias": "displayedColumns"; "required": false; }; "tableMaxHeight": { "alias": "tableMaxHeight"; "required": false; }; "rowHeight": { "alias": "rowHeight"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "searchTerm": { "alias": "searchTerm"; "required": false; }; "filterPredicate": { "alias": "filterPredicate"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "showPaginator": { "alias": "showPaginator"; "required": false; }; }, { "events": "events"; "tableActionTriggered": "tableActionTriggered"; "rowEditClicked": "rowEditClicked"; "rowSelected": "rowSelected"; "searchChanged": "searchChanged"; "actionClicked": "actionClicked"; "inlineEditChange": "inlineEditChange"; "serverDataRequested": "serverDataRequested"; }, never, never, true, never>;
}
//# sourceMappingURL=reusable-table.component.d.ts.map