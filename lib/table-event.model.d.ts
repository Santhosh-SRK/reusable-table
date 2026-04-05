/**
 * Unified event model for all table interactions
 * STRICT CONTRACT - No inconsistency
 * Single source of truth for table communication
 */
export interface TableEvent {
    type: 'add' | 'edit' | 'delete' | 'insertAbove' | 'insertBelow' | 'deleteSelected' | 'cellEdit' | 'rowClicked' | 'selectionChanged';
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
export declare const DEFAULT_FEATURE_CONFIG: TableFeatureConfig;
export declare const DEFAULT_DISPLAY_CONFIG: TableDisplayConfig;
//# sourceMappingURL=table-event.model.d.ts.map