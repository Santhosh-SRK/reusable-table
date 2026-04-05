import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MaterialModules } from '../../shared/modules/material.imports';
// import { ReusableTableComponent, TableEvent, TableColumn, TableAction } from '../../shared/components/reusable-table';
import { ReusableTableComponent } from '@tasktrack/reusable-table';
interface DocumentItem {
  type: string;
  name: string;
  uploadedOn: string;
}

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    ReusableTableComponent,
    // ...MaterialModules
  ],
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.scss']
})
export class DocumentUploadComponent implements AfterViewInit {

documentTypeControl = new FormControl('', Validators.required);

  showAddDocPopup = false;

  // Legacy columns support
  displayedColumns = ['type', 'name', 'uploadedOn', 'Actions'];

  // // New column configuration
  // columns: TableColumn[] = [
  //   {
  //     key: 'type',
  //     label: 'Document Type',
  //     sortable: true,
  //     filterable: true,
  //     type: 'text',
  //     width: '150px'
  //   },
  //   {
  //     key: 'name',
  //     label: 'File Name',
  //     sortable: true,
  //     filterable: true,
  //     type: 'text',
  //     width: '250px',
  //     editable: true
  //   },
  //   {
  //     key: 'uploadedOn',
  //     label: 'Uploaded On',
  //     sortable: true,
  //     filterable: false,
  //     type: 'text',
  //     width: '120px'
  //   },
  //   {
  //     key: 'Actions',
  //     label: 'Actions',
  //     sortable: false,
  //     filterable: false,
  //     type: 'action',
  //     width: '120px'
  //   }
  // ];

  // Action buttons
  // actions: TableAction[] = [
  //   {
  //     label: 'Edit',
  //     icon: 'edit',
  //     action: 'edit',
  //     color: 'text-primary'
  //   },
  //   {
  //     label: 'Delete',
  //     icon: 'delete',
  //     action: 'delete',
  //     color: 'text-danger'
  //   }
  // ];

  tableData = [
  { id: 1, name: 'Santhosh', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Ram', role: 'Tester', status: 'Inactive' }
];

columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', editable: true },
  { key: 'role', label: 'Role', editable: true },
   { key: 'actions', label: 'Actions', type: 'action'as const }

];

actions = [
  { label: 'Edit', icon: 'edit', action: 'edit' },
  { label: 'Delete', icon: 'delete', action: 'delete' }
];

handleTableEvents(event: any) {
  console.log('EVENT:', event);

  switch (event.type) {

    case 'delete':
      this.tableData = this.tableData.filter(r => r !== event.row);
      break;

   case 'deleteSelected':
  this.tableData = this.tableData.filter(
    r => !event.rows.some((row: any) => row.id === r.id)
  );
  break;

    case 'insertAbove': {
  const index = this.tableData.findIndex(r => r.id === event.row.id); 
  if (index === -1) return; // safety

  this.tableData.splice(index, 0, this.createRow());
  this.tableData = [...this.tableData];
  break;
}

case 'insertBelow': {
  const index = this.tableData.findIndex(r => r.id === event.row.id); 

  if (index === -1) return;

  this.tableData.splice(index + 1, 0, this.createRow());
  this.tableData = [...this.tableData];
  break;
}

    case 'add':
      this.tableData = [...this.tableData, this.createRow()];
      break;
  }
}
createRow() {
  return {
    id: Math.floor(Math.random() * 1000),
    name: 'New',
    role: 'New',
    status: 'Active'   // ✅ FIX
  };
}
  dataSource = new MatTableDataSource<DocumentItem>([
    { type: 'Software', name: 'GitHub_React_Guide.pdf', uploadedOn: '11-07-2025' },
    { type: 'TestData', name: 'cs-cheat-sheet.pdf', uploadedOn: '11-07-2025' },
    { type: 'Demo Document', name: 'Motors List (6).pdf', uploadedOn: '15-09-2025' },
    { type: 'Harshith Testing', name: 'iPUMPNET_Prediction_Analysis.pdf', uploadedOn: '26-11-2025' }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
saveDocument(){
  console.log("savedoc..//..hit")
  if(!this.selectedFile){
    alert('Please select a file to upload.');
    return;
  }
}

openAddDocumentType(): void {
  console.log("hitt...")
  this.showAddDocPopup = true;
  this.documentTypeControl.reset();
}

closeAddDocumentType(): void {
  this.showAddDocPopup = false;
}

confirmAddDocumentType(): void {
 if (this.documentTypeControl.invalid) {
    this.documentTypeControl.markAsTouched();
    return;
  }

  const value = this.documentTypeControl.value;
  console.log('Document Type:', value);  console.log('Confirmed');
  this.showAddDocPopup = false;
}

selectedFile: File | null = null;

allowedTypes = [
  'application/pdf',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

maxFileSize = 5 * 1024 * 1024; // 5MB

onFileSelected(event: Event): void {
  console.log("file hit")
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];

  // Type Validation
  if (!this.allowedTypes.includes(file.type)) {
    alert('Only PDF, TXT, DOC, DOCX files are allowed.');
    input.value = '';
    return;
  }

  // Size Validation
  if (file.size > this.maxFileSize) {
    alert('File size should not exceed 5MB.');
    input.value = '';
    return;
  }

  this.selectedFile = file;
  console.log('File Selected:', file);
}

onTableAction(event: any): void {
  const action = event.action.toLowerCase();
  console.log(`Action: ${action} on document:`, event.row);
  
  switch(action) {
    case 'edit':
      console.log('Edit document:', event.row.name);
      // Handle edit logic here
      break;
    
    case 'delete':
      console.log('Delete document:', event.row.name);
      this.deleteDocument(event.row);
      break;
    
    default:
      console.log('Unknown action:', action);
  }
}

deleteDocument(doc: DocumentItem): void {
  const index = this.dataSource.data.indexOf(doc);
  if (index > -1) {
    const updatedData = this.dataSource.data.filter((_, i) => i !== index);
    this.dataSource.data = updatedData;
    console.log('Document deleted:', doc.name);
  }
}

/**
 * Handle unified table events (add, delete, insert, etc.)
 */
// onTableEvents(event: TableEvent): void {
//   switch(event.type) {
//     case 'add':
//       // Handle add new row
//       this.addNewDocument();
//       break;
    
//     case 'delete':
//       // Handle delete single row
//       if (event.row) {
//         this.deleteDocument(event.row);
//       }
//       break;
    
//     case 'deleteSelected':
//       // Handle delete multiple selected rows
//       if (event.rows && event.rows.length > 0) {
//         event.rows.forEach(row => this.deleteDocument(row));
//       }
//       break;
    
//     case 'insertAbove':
//       // Insert row above the current row
//       if (event.row) {
//         const index = this.dataSource.data.indexOf(event.row);
//         if (index > -1) {
//           this.insertDocumentAt(index);
//         }
//       }
//       break;
    
//     case 'insertBelow':
//       // Insert row below the current row
//       if (event.row) {
//         const index = this.dataSource.data.indexOf(event.row);
//         if (index > -1) {
//           this.insertDocumentAt(index + 1);
//         }
//       }
//       break;
    
//     case 'cellEdit':
//       // Handle inline cell edit - update the row data
//       if (event.row && event.column && event.value !== undefined) {
//         console.log(`Cell edited - Column: ${event.column}, Value: ${event.value}, Row:`, event.row);
//         // Update the specific field in the row
//         event.row[event.column] = event.value;
//         // Trigger change detection by refreshing dataSource
//         this.dataSource.data = [...this.dataSource.data];
//       }
//       break;
    
//     case 'rowClicked':
//       // Handle row click
//       console.log('Row clicked:', event.row);
//       break;
//   }
// }

/**
 * Add a new empty document row
 */
addNewDocument(): void {
  const newDocument: DocumentItem = {
    type: 'New Document',
    name: 'Untitled.pdf',
    uploadedOn: new Date().toLocaleDateString('en-GB')
  };
  
  const updatedData = [...this.dataSource.data, newDocument];
  this.dataSource.data = updatedData;
  console.log('New document added:', newDocument);
}

/**
 * Insert document at specific index
 */
insertDocumentAt(index: number): void {
  const newDocument: DocumentItem = {
    type: 'New Document',
    name: 'Untitled.pdf',
    uploadedOn: new Date().toLocaleDateString('en-GB')
  };
  
  const updatedData = [...this.dataSource.data];
  updatedData.splice(index, 0, newDocument);
  this.dataSource.data = updatedData;
  console.log('Document inserted at index:', index, newDocument);
}
}