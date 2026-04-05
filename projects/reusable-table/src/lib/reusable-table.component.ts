import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, DestroyRef, inject, ViewEncapsulation, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableColumn, TableAction } from './reusable-table.interfaces';
import { TableConfirmDialogComponent, type DialogData } from './table-confirm-dialog.component';
import { TableConfig, DEFAULT_TABLE_CONFIG, mergeTableConfig } from './reusable-table.config';
import { TableEvent, TableFeatureConfig, TableDisplayConfig, DEFAULT_FEATURE_CONFIG, DEFAULT_DISPLAY_CONFIG } from './table-event.model';

/**
 * ReusableTableComponent
 * Enterprise-grade configurable table component with dynamic columns, actions,
 * export (Excel/PDF/CSV), printing, column toggle, inline filtering, and more.
 * Fully generic and production-ready.
 */
@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ReusableTableComponent implements OnInit, AfterViewInit, OnChanges {
  private destroyRef = inject(DestroyRef);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  // ───────────────────────── CONFIGURATION ─────────────────────────
  
  /** Fully customizable table configuration */
  @Input() config?: TableConfig;
  
  /** Resolved config (defaults + custom) */
  tableConfig: TableConfig = DEFAULT_TABLE_CONFIG;

  // ───────────────────────── INPUTS: NEW CONFIGURABLE COLUMNS & ACTIONS ─────────────────────────
  
  /** Dynamic column configuration (replaces hardcoded displayedColumns) */
  @Input() columns: TableColumn[] = [];
  
  /** Dynamic action buttons configuration */
  @Input() actions: TableAction[] = [];
  
  /** Enable/disable export to Excel */
  @Input() enableExport: boolean = true;
  
  /** Enable/disable print functionality */
  @Input() enablePrint: boolean = true;
  
  /** Enable/disable column toggle feature */
  @Input() enableColumnToggle: boolean = true;
  
  /** Enable/disable add row button */
  @Input() enableAdd: boolean = false;
  
  /** Enable/disable delete row button */
  @Input() enableDelete: boolean = false;
  
  /** Enable/disable row selection checkboxes */
  @Input() enableRowSelection: boolean = false;
  
  /** Show/hide the action column */
  @Input() showActionColumn: boolean = true;
  
  /** Enable/disable inline editing */
  @Input() enableInlineEdit: boolean = false;
  
  /** Enable/disable column dragging for reorder */
  @Input() enableColumnDrag: boolean = false;
  
  /** Enable/disable column resize */
  @Input() enableColumnResize: boolean = true;
  
  /** Enable/disable sticky action column (stays visible when scrolling) */
  @Input() enableStickyActions: boolean = true;
  
  /** Enable/disable virtual scrolling for large datasets */
  @Input() enableVirtualScroll: boolean = false;
  
  /** Server-side pagination enabled */
  @Input() serverSidePagination: boolean = false;
  
  /** Backend pagination config */
  @Input() backendPaginationUrl: string = '';

  // ───────────────────────── INPUTS: LEGACY (for backward compatibility) ─────────────────────────
  // ───────────────────────── INPUTS: NEW CONTROLLED ARCHITECTURE ─────────────────────────
  
  /** Controlled data input */
  @Input() data: any[] = [];
  
  /** Feature configuration */
  @Input() featureConfig: TableFeatureConfig = DEFAULT_FEATURE_CONFIG;
  
  /** Display configuration */
  @Input() displayConfig: TableDisplayConfig = DEFAULT_DISPLAY_CONFIG;

  // ───────────────────────── INPUTS: LEGACY (BACKWARD COMPATIBILITY) ─────────────────────────
  
  /** Array of column names to display in the table (LEGACY) */
  @Input() displayedColumns: string[] = [];
  
  /** Maximum height of the table container in pixels */
  @Input() tableMaxHeight: number = 400;
  
  /** Height of each row in pixels */
  @Input() rowHeight: number = 44;
  
  /** Height of the table header in pixels */
  @Input() headerHeight: number = 56;
  
  /** Search term to filter table data */
  @Input() searchTerm: string = '';
  
  /** Custom filter predicate function */
  @Input() filterPredicate: ((data: any, filter: string) => boolean) | null = null;

  /** Page size for pagination */
  @Input() pageSize: number = 10;

  /** Page size options for paginator */
  @Input() pageSizeOptions: number[] = [5, 10, 25, 50];

  /** Enable/disable pagination */
  @Input() showPaginator: boolean = true;

  // ───────────────────────── OUTPUTS ─────────────────────────
  
  /** Single unified event emitter */
  @Output() events = new EventEmitter<TableEvent>();
  
  /** Legacy outputs for backward compatibility */
  @Output() tableActionTriggered = new EventEmitter<{ action: string; row?: any; rows?: any[] }>();
  @Output() rowEditClicked = new EventEmitter<any>();
  @Output() rowSelected = new EventEmitter<any>();
  @Output() searchChanged = new EventEmitter<string>();
  @Output() actionClicked = new EventEmitter<{ action: string; row: any }>();
  @Output() inlineEditChange = new EventEmitter<{ row: any; column: string; value: any }>();
  @Output() serverDataRequested = new EventEmitter<any>();

  // ───────────────────────── STATE ─────────────────────────
  
  dataSource = new MatTableDataSource<any>([]);
  showSearch = false;
  searchInputValue = '';
  selectedRows = new Set<any>();
  showColumnPanel = false;
  columnFilters: Map<string, string> = new Map();
  editingHoveredRow: number | null = null;
  
  // ───────────────────────── COLUMN INSERTION DIALOG STATE ─────────────────────────
  
  showInsertColumnDialog = false;
  newColumnName = '';
  newColumnLabel = '';

  // ───────────────────────── ADVANCED FEATURES STATE ─────────────────────────
  
  /** Track inline edit mode */
  editingCell: { rowIndex: number; column: string } | null = null;
  editingValue: any = null;
  
  /** Track column order for drag-to-reorder */
  columnOrder: TableColumn[] = [];
  draggedColumn: TableColumn | null = null;
  
  /** Advanced filters */
  advancedFilters: Map<string, any> = new Map();

  // ───────────────────────── COLUMN RESIZE STATE ─────────────────────────
  
  /** Track column being resized */
  resizingColumn: TableColumn | null = null;
  resizeStartX: number = 0;
  resizeStartWidth: number = 0;
  
  /** Store column widths */
  columnWidths: Map<string, string> = new Map();

  // ───────────────────────── VIRTUAL SCROLL & PAGINATION STATE ─────────────────────────
  
  /** Current server-side pagination state */
  currentPageIndex: number = 0;
  currentPageSize: number = 10;
  totalRecordCount: number = 0;
  isLoadingServerData: boolean = false;
  
  /** Virtual scroll buffer */
  virtualScrollBuffer: number = 5;

  // ───────────────────────── TABLE SORT & PAGINATOR ─────────────────────────
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // Merge custom config with defaults (legacy)
    this.tableConfig = mergeTableConfig(this.config);
    
    // Apply CSS variables for dynamic theming
    this.applyCSSVariables();
    
    this.initializeFilterPredicate();
    
    // Sync controlled data input
    this.dataSource.data = this.data;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // Update dataSource when controlled data input changes
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }

  /**
   * Apply CSS variables for complete theme customization
   */
  private applyCSSVariables(): void {
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

  ngAfterViewInit(): void {
    this.attachSort();
    this.attachPaginator();
    this.attachServerPaginator();
  }

  /**
   * Initialize the default filter predicate for searching across all columns
   */
  private initializeFilterPredicate(): void {
    if (this.filterPredicate) {
      this.dataSource.filterPredicate = this.filterPredicate;
    } else {
      // Default filter predicate: search across all displayed columns
      this.dataSource.filterPredicate = (data, filter: string) => {
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
  private attachSort(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * Attach MatPaginator to the table
   */
  private attachPaginator(): void {
    if (this.paginator && this.showPaginator && !this.serverSidePagination) {
      this.dataSource.paginator = this.paginator;
    }
  }

  /**
   * Attach server-side pagination handler to paginator
   */
  private attachServerPaginator(): void {
    if (this.paginator && this.serverSidePagination) {
      // Set initial paginator state
      if (this.pageSize && this.pageSize > 0) {
        this.paginator.pageSize = this.pageSize;
        this.currentPageSize = this.pageSize;
      }
      
      // Listen to page events and request server data
      this.paginator.page.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event: PageEvent) => {
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
 get columnsToDisplay(): string[] {
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
  private updateDisplayedColumns(): void {
    // Force change detection by recreating the array
    const newCols = [...this.columnsToDisplay];
    // This will trigger the getter and update the table
    this.dataSource.data = [...this.dataSource.data];
  }

  /**
   * Get visible columns for the template
   */
  get visibleColumns(): TableColumn[] {
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
  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.clearSearch();
    }
  }

  /**
   * Clear search and reset filter
   */
  clearSearch(): void {
    this.searchInputValue = '';
    this.dataSource.filter = '';
    this.showSearch = false;
    this.searchChanged.emit('');
  }

  /**
   * Handle search input and apply filter
   */
  onSearch(value: string): void {
    this.searchInputValue = value;
    this.dataSource.filter = value.trim().toLowerCase();
    this.searchChanged.emit(value);
  }

  /**
   * Handle row click
   */
  onRowClick(row: any): void {
    this.events.emit({ type: 'rowClicked', row });
    this.rowEditClicked.emit(row); // Legacy
  }

  /**
   * Handle action button clicks (both built-in row actions and custom actions)
   */
  onActionClicked(action: string, row: any): void {
    // Handle built-in row actions
    switch(action) {
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
  selectRow(row: any): void {
    this.rowSelected.emit(row);
  }

  /**
   * Get row ID from various possible field names
   */
  getRowId(row: any): number {
    return row.Users_Id ?? row.UsersId ?? row.Id ?? 0;
  }

  /**
   * Get row name from various possible field names
   */
  getRowName(row: any): string {
    return row.UserName ?? row['User Name'] ?? row.LoginName ?? '';
  }

  /**
   * Update table data source
   */
  updateDataSource(data: any[]): void {
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
  toggleColumn(column: TableColumn): void {
    column.hidden = !column.hidden;
  }

  /**
   * Toggle the column panel
   */
  toggleColumnPanel(): void {
    this.showColumnPanel = !this.showColumnPanel;
  }

  /**
   * Show all columns
   */
  showAllColumns(): void {
    this.columns.forEach(col => col.hidden = false);
  }

  /**
   * Hide all columns
   */
  hideAllColumns(): void {
    this.columns.forEach(col => col.hidden = true);
  }

  // ───────────────────────── ROW SELECTION ─────────────────────────

  /**
   * Toggle row selection
   */
  toggleRowSelection(row: any): void {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }
    this.events.emit({ type: 'selectionChanged', rows: Array.from(this.selectedRows) });
  }

  /**
   * Toggle select all rows
   */
  toggleSelectAll(event: any): void {
    if (event.checked) {
      this.dataSource.data.forEach(row => this.selectedRows.add(row));
    } else {
      this.selectedRows.clear();
    }
    this.events.emit({ type: 'selectionChanged', rows: Array.from(this.selectedRows) });
  }

  /**
   * Check if row is selected
   */
  isRowSelected(row: any): boolean {
    return this.selectedRows.has(row);
  }

  /**
   * Check if all rows are selected
   */
  get allRowsSelected(): boolean {
    return this.dataSource.data.length > 0 && this.selectedRows.size === this.dataSource.data.length;
  }

  // ───────────────────────── ADD / DELETE ROWS ─────────────────────────

  /**
   * Emit add row event
   */
  onAdd(): void {
    this.events.emit({ type: 'add' });
    // Legacy support
    this.tableActionTriggered.emit({ action: 'add', row: null });
  }

  /**
   * Insert row above selected row (if single row selected)
   */
  insertRowAbove(): void {
    if (this.selectedRows.size === 1) {
      const selectedRow = Array.from(this.selectedRows)[0];
      this.events.emit({ type: 'insertAbove', row: selectedRow });
    }
  }
  
  /**
   * Insert row below selected row (if single row selected)
   */
  insertRowBelow(): void {
    if (this.selectedRows.size === 1) {
      const selectedRow = Array.from(this.selectedRows)[0];
      this.events.emit({ type: 'insertBelow', row: selectedRow });
    }
  }
  /**
   * Insert row at specific index
   * @deprecated Use events emitter instead - parent controls data
   */
  insertRowAt(index: number): void {
    // Emit event - parent handles mutations
    const newRow = this.createEmptyRow();
    this.events.emit({ type: 'add', row: newRow });
  }

  /**
   * Create an empty row object with default values or empty strings for editing
   */
  private createEmptyRow(): any {
    const row: any = {};
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
            } else if (colKeyLower.includes('email')) {
              value = '';
            } else if (colKeyLower.includes('status')) {
              value = 'Pending';
            } else if (col.editable) {
              value = '-'; // Indicates empty/editable
            } else {
              value = '';
            }
          }
          
          row[col.key] = value;
        }
      });
    } else {
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
  private getDefaultValue(col: TableColumn): any {
    switch (col.type) {
      case 'date': return new Date().toLocaleDateString();
      case 'number': return 0;
      default: return '';
    }
  }

  /**
   * Delete selected rows
   */
 onDeleteSelected(): void {
  console.log("dle")
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
  deleteRow(row: any): void {
    const dialogData: DialogData = {
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
  insertColumn(): void {
    // Feature disabled - table must remain controlled by parent
  }

  /**
   * Confirm column insertion - DISABLED for controlled component pattern
   */
  confirmInsertColumn(): void {
    // Feature disabled - table must remain controlled by parent
  }

  /**
   * Cancel column insertion
   */
  cancelInsertColumn(): void {
    this.showInsertColumnDialog = false;
    this.newColumnName = '';
    this.newColumnLabel = '';
  }

  /**
   * Delete column - DISABLED for controlled component pattern
   * Column manipulation must be handled by parent component
   */
  deleteColumn(column: TableColumn): void {
    // Feature disabled - table must remain controlled by parent
  }

  // ───────────────────────── FILTERING ─────────────────────────

  /**
   * Apply column-level filter
   */
  applyColumnFilter(columnKey: string, event: any): void {
    const filterValue = event.target?.value || event || '';
    if (filterValue) {
      this.columnFilters.set(columnKey, filterValue.toLowerCase());
    } else {
      this.columnFilters.delete(columnKey);
    }
    this.applyFilters();
  }

  /**
   * Apply all active filters
   */
  private applyFilters(): void {
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
        if (!globalMatch) return false;
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
  async exportExcel(): Promise<void> {
    try {
      const xlsx = await import('xlsx');
      const data = this.dataSource.filteredData;
      
      // Exclude action columns
      const exportColumns = this.columns.length > 0
        ? this.columns.filter(c => c.type !== 'action')
        : this.displayedColumns.filter(col => col !== 'Actions');
      
      // Format data to match UI display - use consistent key/label
      const exportData = data.map(row => {
        const newRow: any = {};
        exportColumns.forEach(col => {
          const key = typeof col === 'string' ? col : col.key;
          const label = typeof col === 'string' ? col : (col.label || col.key);
          let value = row[key];
          
          // Format dates and numbers to match UI
          if (value instanceof Date) {
            value = value.toLocaleDateString();
          } else if (typeof value === 'number') {
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
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  }

  /**
   * Export table data to CSV (excludes action columns)
   */
  exportCSV(): void {
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
        } else if (typeof value === 'number') {
          value = value.toString();
        } else if (value === null || value === undefined) {
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
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  }

  /**
   * Export table data to PDF (excludes action columns)
   */
  async exportPDF(): Promise<void> {
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
        } else if (value === null || value === undefined) {
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
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  }

  /**
   * Print the table with clean HTML output (no cloning UI issues)
   */
  printTable(): void {
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
    } catch (error) {
      console.error('Error printing table:', error);
    }
  }

  /**
   * Escape HTML special characters
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ───────────────────────── INLINE EDITING (Google Sheets-like) ─────────────────────────

  /**
   * Double-click to edit (not single click)
   * This matches Google Sheets, Excel, and AG Grid behavior
   */
  onCellDoubleClick(row: any, column: TableColumn, rowIndex: number, event: Event): void {
    event.stopPropagation();
    if (!column.editable || column.type === 'action') return;
    
    this.editingCell = { rowIndex, column: column.key };
    this.editingValue = row[column.key];
    this.cdr.markForCheck();
  }

  /**
   * Save inline edit
   * Triggered by Enter key or blur event
   */
  saveInlineEdit(row: any, column: TableColumn): void {
    if (!this.editingCell) return;
    
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
  cancelInlineEdit(): void {
    this.editingCell = null;
    this.editingValue = null;
    this.cdr.markForCheck();
  }

  /**
   * Check if cell is in edit mode
   */
  isEditingCell(rowIndex: number, columnKey: string): boolean {
    return this.editingCell?.rowIndex === rowIndex && this.editingCell?.column === columnKey;
  }

  /**
   * Legacy method - kept for backward compatibility
   * Now calls onCellDoubleClick
   */
  startInlineEdit(row: any, column: TableColumn, rowIndex: number): void {
    // This is now double-click only, called from template
    // Single click will just select the row
  }

  // ───────────────────────── COLUMN DRAG & REORDER ─────────────────────────

  /**
   * Handle column drag start
   */
  onColumnDragStart(column: TableColumn): void {
    if (!this.enableColumnDrag) return;
    this.draggedColumn = column;
  }

  /**
   * Handle column drop for reordering
   */
  onColumnDrop(targetColumn: TableColumn): void {
    if (!this.draggedColumn || !this.enableColumnDrag) return;
    
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
  applyAdvancedFilter(columnKey: string, operator: string, value: any): void {
    this.advancedFilters.set(columnKey, { operator, value });
    this.applyAdvancedFilters();
  }

  /**
   * Remove advanced filter
   */
  removeAdvancedFilter(columnKey: string): void {
    this.advancedFilters.delete(columnKey);
    this.applyAdvancedFilters();
  }

  /**
   * Apply all advanced filters
   */
  private applyAdvancedFilters(): void {
    this.dataSource.filterPredicate = (data) => {
      // Check all active advanced filters
      for (let [columnKey, filter] of this.advancedFilters) {
        const value = data[columnKey];
        const { operator, value: filterValue } = filter;

        let matches = false;
        switch (operator) {
          case 'equals': matches = value === filterValue; break;
          case 'contains': matches = value?.toString().toLowerCase().includes(filterValue.toLowerCase()); break;
          case 'startsWith': matches = value?.toString().toLowerCase().startsWith(filterValue.toLowerCase()); break;
          case 'endsWith': matches = value?.toString().toLowerCase().endsWith(filterValue.toLowerCase()); break;
          case 'greaterThan': matches = Number(value) > Number(filterValue); break;
          case 'lessThan': matches = Number(value) < Number(filterValue); break;
          case 'between': matches = Number(value) >= filterValue.min && Number(value) <= filterValue.max; break;
          default: matches = true;
        }

        if (!matches) return false;
      }

      return true;
    };

    this.dataSource.filter = JSON.stringify(Array.from(this.advancedFilters.entries()));
  }

  /**
   * Clear all advanced filters
   */
  clearAdvancedFilters(): void {
    this.advancedFilters.clear();
    this.dataSource.filter = '';
  }

  // ───────────────────────── PERFORMANCE & HELPERS ─────────────────────────

  /**
   * Show toast notification (replaces native alerts)
   */
  private showToast(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
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
  trackByRowIndex(index: number): number {
    return index;
  }

  /**
   * TrackBy function for columns
   */
  trackByColumnKey(index: number, col: TableColumn): string {
    return col.key;
  }

  /**
   * TrackBy function for string arrays (like displayedColumns)
   */
  trackByString(index: number, item: string): string {
    return item;
  }

  /**
   * TrackBy function for custom actions
   */
  trackByActionId(index: number, action: TableAction): string {
    return action.action;
  }

  // ───────────────────────── EXPORT METHODS ─────────────────────────

  /**
   * Export with custom template
   */
  exportWithTemplate(templateName: string): void {
    // This would integrate with custom export templates
    switch(templateName) {
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
  exportJSON(): void {
    try {
      const data = this.dataSource.filteredData;
      const exportColumns = this.columns.filter(c => c.type !== 'action');
      
      const exportData = data.map(row => {
        const newRow: any = {};
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
    } catch (error) {
      console.error('Error exporting to JSON:', error);
    }
  }

  /**
   * Export summary (aggregated data)
   */
  private exportSummary(): void {
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
    } catch (error) {
      console.error('Error exporting summary:', error);
    }
  }

  // ───────────────────────── SERVER-SIDE PAGINATION ─────────────────────────

  /**
   * Trigger server-side data request
   */
  requestServerData(pageIndex: number, pageSize: number, sort?: any): void {
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
  setServerData(data: any[], totalCount: number): void {
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
  startColumnResize(event: MouseEvent, column: TableColumn): void {
    if (!this.enableColumnResize) return;
    event.preventDefault();
    event.stopPropagation();
    
    this.resizingColumn = column;
    this.resizeStartX = event.clientX;
    this.resizeStartWidth = column.width ? parseInt(column.width) : 150;
  }

  /**
   * Handle column resize on mouse move (global listener)
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.resizingColumn || !this.enableColumnResize) return;
    
    const deltaX = event.clientX - this.resizeStartX;
    let newWidth = Math.max(50, this.resizeStartWidth + deltaX); // Min 50px
    
    this.resizingColumn.width = `${newWidth}px`;
    this.columnWidths.set(this.resizingColumn.key, `${newWidth}px`);
    this.cdr.markForCheck();
  }

  /**
   * End column resize (global listener)
   */
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    this.resizingColumn = null;
  }

  /**
   * Get column width for template binding
   */
  getColumnWidth(column: TableColumn): string {
    return this.columnWidths.get(column.key) || column.width || 'auto';
  }
}
