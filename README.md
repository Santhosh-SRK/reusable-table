# @tasktrack/reusable-table

Enterprise-grade Angular table component library with comprehensive features for data management.

## Features

✨ **Core Features:**
- Dynamic column configuration with sorting & filtering
- Row selection (single & multi-select)
- Inline cell editing with multiple input types
- Add/Delete/Insert row operations
- Pagination (client & server-side)
- Virtual scrolling support
- Material Design integration

📊 **Export & Print:**
- Export to Excel (.xlsx)
- Export to CSV
- Export to PDF
- Print-friendly table view

🎨 **Customization:**
- Fully configurable via TableConfig
- Dark mode support
- Custom themes with CSS variables
- Customizable columns, actions, and icons
- Material Design components

## Installation

```bash
npm install @tasktrack/reusable-table
```

## Quick Start

```typescript
import { Component } from '@angular/core';
import { ReusableTableComponent, TableColumn, TableAction, TableEvent } from '@tasktrack/reusable-table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [ReusableTableComponent],
  template: `
    <app-reusable-table
      [columns]="columns"
      [actions]="actions"
      [data]="dataSource.data"
      [enableRowSelection]="true"
      [enableAdd]="true"
      [enableDelete]="true"
      [enableInlineEdit]="true"
      (events)="onTableEvents($event)">
    </app-reusable-table>
  `
})
export class MyTableComponent {
  columns: TableColumn[] = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      filterable: true,
      type: 'text',
      editable: true
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      filterable: true,
      type: 'text',
      editable: true
    }
  ];

  actions: TableAction[] = [
    { label: 'Edit', icon: 'edit', action: 'edit', color: 'text-primary' },
    { label: 'Delete', icon: 'delete', action: 'delete', color: 'text-danger' }
  ];

  dataSource = new MatTableDataSource([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);

  onTableEvents(event: TableEvent): void {
    switch(event.type) {
      case 'add':
        // Handle add
        break;
      case 'delete':
        // Handle delete
        break;
      case 'cellEdit':
        // Handle cell edit
        break;
    }
  }
}
```

## Configuration

### TableColumn Interface

```typescript
interface TableColumn {
  key: string;                    // Data key
  label: string;                  // Display label
  type?: 'text' | 'date' | 'number' | 'action';
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  inputType?: string;             // 'text', 'textarea', 'date', 'select'
  options?: { label: string; value: any }[];
  width?: string;
  hidden?: boolean;
}
```

### TableAction Interface

```typescript
interface TableAction {
  label: string;
  icon: string;
  action: string;
  color?: string;
  matTooltip?: string;
  disabled?: boolean;
}
```

### TableEvent Types

- `add` - Add new row
- `delete` - Delete single row
- `deleteSelected` - Delete selected rows
- `insertAbove` - Insert row above selected
- `insertBelow` - Insert row below selected
- `cellEdit` - Inline cell edit
- `rowClicked` - Row click event
- `selectionChanged` - Row selection changed

## Inputs

```typescript
// Feature flags
[enableRowSelection]="true"       // Show row checkboxes
[enableAdd]="true"                // Show add button
[enableDelete]="true"             // Show delete button
[enableInlineEdit]="true"         // Enable double-click to edit
[enableExport]="true"             // Show export options
[enablePrint]="true"              // Show print button
[enableColumnToggle]="true"       // Show column visibility toggle
[enableColumnResize]="true"       // Allow column resizing

// Data & display
[columns]="columns"               // Column configuration
[actions]="actions"               // Action buttons
[data]="dataSource.data"          // Table data
[tableMaxHeight]="400"            // Max height in px
[rowHeight]="44"                  // Row height in px
[headerHeight]="56"               // Header height in px
[showActionColumn]="true"         // Show action column
[showPaginator]="true"            // Show pagination
```

## Outputs

```typescript
(events)="onTableEvents($event)"          // Main event emitter
(actionClicked)="onAction($event)"        // Action button clicks (legacy)
(rowSelected)="onRowSelect($event)"       // Row selection (legacy)
(searchChanged)="onSearch($event)"        // Search input (legacy)
```

## Dependencies

- @angular/core ^18.0.0
- @angular/common ^18.0.0
- @angular/material ^18.0.0
- @angular/cdk ^18.0.0
- @angular/forms ^18.0.0
- xlsx (for Excel export)
- jspdf (for PDF export)

## License

MIT
