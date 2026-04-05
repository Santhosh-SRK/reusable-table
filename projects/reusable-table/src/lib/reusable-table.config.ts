/**
 * Reusable Table Configuration
 * Fully customizable theme, colors, icons, and behavior
 * Plug-and-play configuration object
 */

export interface TableConfig {
  // ───────────────────────── COLORS ─────────────────────────
  colors?: {
    // Primary & Neutral
    primary?: string;                      // Default: #6b7280
    neutral?: string;                      // Default: #ffffff
    border?: string;                       // Default: #e5e7eb
    
    // Toolbar
    toolbarBg?: string;                    // Default: #ffffff
    toolbarText?: string;                  // Default: #6b7280
    
    // Header Row
    headerBg?: string;                     // Default: #f9fafb
    headerText?: string;                   // Default: #374151
    headerBorder?: string;                 // Default: #e5e7eb
    
    // Data Rows
    rowBg?: string;                        // Default: #ffffff
    rowHoverBg?: string;                   // Default: #f9fafb
    rowBorder?: string;                    // Default: #e5e7eb
    cellText?: string;                     // Default: #374151
    selectedRowBg?: string;                // Default: rgba(33, 150, 243, 0.1)
    
    // Input Fields
    inputBg?: string;                      // Default: #ffffff
    inputBorder?: string;                  // Default: #e5e7eb
    inputText?: string;                    // Default: #6b7280
    inputPlaceholder?: string;             // Default: #9ca3af
    
    // Buttons & Icons
    buttonHoverBg?: string;                // Default: #f3f4f6
    dangerColor?: string;                  // Default: #ef4444
    successColor?: string;                 // Default: #10b981
    warningColor?: string;                 // Default: #f59e0b
    
    // Filter Input
    filterInputBg?: string;                // Default: #ffffff
    filterInputBorder?: string;            // Default: #e5e7eb
    filterInputText?: string;              // Default: #6b7280
  };

  // ───────────────────────── ICONS ─────────────────────────
  icons?: {
    // Row Actions
    editIcon?: string;                     // Default: 'edit'
    deleteIcon?: string;                   // Default: 'delete'
    insertAboveIcon?: string;              // Default: 'arrow_upward'
    insertBelowIcon?: string;              // Default: 'arrow_downward'
    
    // Toolbar Icons
    searchIcon?: string;                   // Default: 'search'
    addIcon?: string;                      // Default: 'add'
    addColumnIcon?: string;                // Default: 'add_column'
    columnToggleIcon?: string;             // Default: 'view_column'
    exportIcon?: string;                   // Default: 'file_download'
    printIcon?: string;                    // Default: 'print'
    closeIcon?: string;                    // Default: 'close'
    
    // Column Operations
    showAllIcon?: string;                  // Default: 'check_circle'
    hideAllIcon?: string;                  // Default: 'radio_button_unchecked'
    showIcon?: string;                     // Default: 'check_box'
    hideIcon?: string;                     // Default: 'check_box_outline_blank'
    columnDeleteIcon?: string;             // Default: 'delete'
    
    // Other
    emptyStateIcon?: string;               // Default: 'person_off'
  };

  // ───────────────────────── TOOLTIPS ─────────────────────────
  tooltips?: {
    // Toolbar
    search?: string;                       // Default: 'Search'
    addRow?: string;                       // Default: 'Add New Row'
    insertRowAbove?: string;               // Default: 'Insert Row Above'
    insertRowBelow?: string;               // Default: 'Insert Row Below'
    deleteRows?: string;                   // Default: 'Delete Selected'
    insertColumn?: string;                 // Default: 'Insert Column'
    toggleColumns?: string;                // Default: 'Toggle Columns'
    export?: string;                       // Default: 'Export'
    print?: string;                        // Default: 'Print'
    
    // Row Actions
    editRow?: string;                      // Default: 'Edit'
    deleteRow?: string;                    // Default: 'Delete'
    insertAboveRow?: string;               // Default: 'Insert Above'
    insertBelowRow?: string;               // Default: 'Insert Below'
    
    // Column Operations
    showAll?: string;                      // Default: 'Show All'
    hideAll?: string;                      // Default: 'Hide All'
    deleteColumn?: string;                 // Default: 'Delete Column'
    resizeColumn?: string;                 // Default: 'Drag to resize'
  };

  // ───────────────────────── ROW ACTIONS ─────────────────────────
  rowActions?: {
    enableEdit?: boolean;                  // Default: true
    enableDelete?: boolean;                // Default: true
    enableInsertAbove?: boolean;           // Default: true
    enableInsertBelow?: boolean;           // Default: true
  };

  // ───────────────────────── SPACING & SIZING ─────────────────────────
  sizing?: {
    rowHeight?: number;                    // Default: 44
    headerHeight?: number;                 // Default: 56
    toolbarHeight?: number;                // Default: 56
    cellPadding?: string;                  // Default: '10px 12px'
    headerCellPadding?: string;            // Default: '10px 12px'
    borderRadius?: string;                 // Default: '10px'
  };

  // ───────────────────────── TYPOGRAPHY ─────────────────────────
  typography?: {
    headerFontSize?: string;               // Default: '13px'
    headerFontWeight?: number;             // Default: 600
    cellFontSize?: string;                 // Default: '0.875rem'
    fontFamily?: string;                   // Default: system fonts
  };

  // ───────────────────────── DARK THEME ─────────────────────────
  darkMode?: {
    enabled?: boolean;                     // Default: false
    headerBg?: string;                     // Default: #1f2937
    rowBg?: string;                        // Default: #111827
    rowHoverBg?: string;                   // Default: #1f2937
    text?: string;                         // Default: #e5e7eb
    border?: string;                       // Default: #374151
  };
}

/**
 * Default Table Configuration
 * All values are production-ready and modern
 */
export const DEFAULT_TABLE_CONFIG: TableConfig = {
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
export function mergeTableConfig(customConfig?: TableConfig): TableConfig {
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
