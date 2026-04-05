/**
 * Reusable Table Configuration
 * Fully customizable theme, colors, icons, and behavior
 * Plug-and-play configuration object
 */
export interface TableConfig {
    colors?: {
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
    icons?: {
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
    tooltips?: {
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
    rowActions?: {
        enableEdit?: boolean;
        enableDelete?: boolean;
        enableInsertAbove?: boolean;
        enableInsertBelow?: boolean;
    };
    sizing?: {
        rowHeight?: number;
        headerHeight?: number;
        toolbarHeight?: number;
        cellPadding?: string;
        headerCellPadding?: string;
        borderRadius?: string;
    };
    typography?: {
        headerFontSize?: string;
        headerFontWeight?: number;
        cellFontSize?: string;
        fontFamily?: string;
    };
    darkMode?: {
        enabled?: boolean;
        headerBg?: string;
        rowBg?: string;
        rowHoverBg?: string;
        text?: string;
        border?: string;
    };
}
/**
 * Default Table Configuration
 * All values are production-ready and modern
 */
export declare const DEFAULT_TABLE_CONFIG: TableConfig;
/**
 * Merge config with defaults
 */
export declare function mergeTableConfig(customConfig?: TableConfig): TableConfig;
//# sourceMappingURL=reusable-table.config.d.ts.map