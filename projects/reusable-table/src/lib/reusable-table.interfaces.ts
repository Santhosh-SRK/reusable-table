/**
 * Table Column Configuration Interface
 * Defines the structure and behavior of a table column
 */
export interface TableColumn {
  /** Unique identifier for the column */
  key: string;
  
  /** Display label for the column header */
  label: string;
  
  /** Whether the column is sortable */
  sortable?: boolean;
  
  /** Whether the column is filterable */
  filterable?: boolean;
  
  /** Data type for formatting: 'text' | 'date' | 'number' | 'badge' | 'action' */
  type?: 'text' | 'date' | 'number' | 'badge' | 'action';
  
  /** Whether the column is hidden */
  hidden?: boolean;
  
  /** Column width (CSS value) */
  width?: string;

  /** Enable inline editing for this column */
  editable?: boolean;

  /** Draggable column (for reordering) */
  draggable?: boolean;

  /** Input type for inline editing ('text' | 'number' | 'date' | 'select') */
  inputType?: 'text' | 'number' | 'date' | 'select' | 'textarea';

  /** Select options for inline editing (if inputType === 'select') */
  options?: Array<{ label: string; value: any }>;

  /** Default value when creating a new row */
  defaultValue?: any;

  /** Mark column as user-added (inserted dynamically, can be deleted) */
  userAdded?: boolean;
}

/**
 * Table Action Configuration Interface
 * Defines the structure of actionable buttons in the table
 */
export interface TableAction {
  /** Display text for the action button */
  label: string;
  
  /** Material Icon name */
  icon: string;
  
  /** CSS color class or color value */
  color?: string;
  
  /** Unique action identifier */
  action: string;
  
  /** Whether the action should be visible */
  visible?: (row: any) => boolean;
}

/**
 * Advanced Filter Configuration
 * For advanced filtering/faceted search
 */
export interface TableFilter {
  columnKey: string;
  operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'greaterThan' | 'lessThan' | 'between';
  value: any;
  caseSensitive?: boolean;
}

/**
 * Export Template Configuration
 * For customized export templates
 */
export interface ExportTemplate {
  name: string;
  format: 'excel' | 'csv' | 'pdf' | 'json';
  includeColumns?: string[];
  excludeColumns?: string[];
  customHeader?: string;
  customFooter?: string;
  dateFormat?: string;
  numberFormat?: string;
}

/**
 * Server-side Pagination Configuration
 */
export interface ServerPaginationConfig {
  pageIndex: number;
  pageSize: number;
  sort?: { active: string; direction: 'asc' | 'desc' };
  filters?: TableFilter[];
}
