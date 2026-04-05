/**
 * Unified event model for all table interactions
 * STRICT CONTRACT - No inconsistency
 * Single source of truth for table communication
 */
export interface TableEvent {
  type:
    | 'add'
    | 'edit'
    | 'delete'
    | 'insertAbove'
    | 'insertBelow'
    | 'deleteSelected'
    | 'cellEdit'
    | 'rowClicked'
    | 'selectionChanged';

  row?: any;
  rows?: any[];
  column?: string;
  value?: any;
}

/**
 * Simple, clean feature configuration
 * No deep nesting, no complexity
 */
export interface TableFeatureConfig {
  add?: boolean;
  delete?: boolean;
  selection?: boolean;
  inlineEdit?: boolean;
  print?: boolean;
  search?: boolean;
  columnToggle?: boolean;
}

export interface TableDisplayConfig {
  maxHeight?: number;
  rowHeight?: number;
  headerHeight?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  paginated?: boolean;
}

export const DEFAULT_FEATURE_CONFIG: TableFeatureConfig = {
  add: false,
  delete: false,
  selection: false,
  inlineEdit: false,
  print: false,
  search: true,
  columnToggle: true
};

export const DEFAULT_DISPLAY_CONFIG: TableDisplayConfig = {
  maxHeight: 400,
  rowHeight: 44,
  headerHeight: 56,
  pageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
  paginated: true
};
