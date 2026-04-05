# Reusable Table Component 🚀

Enterprise-grade Angular data table with plug-and-play configuration.

---

## ✨ Features

* Dynamic columns & actions
* Global search + column filters
* Sorting & pagination
* Row selection (bulk actions)
* Inline editing (Google Sheets style)
* Export (Excel, CSV, PDF, JSON)
* Print support
* Column toggle & resize
* Controlled architecture (AG Grid style)
* Fully customizable via config

---

## 🔥 Key Concept

This table is a **controlled component**.

👉 The table DOES NOT mutate data
👉 Parent component handles ALL logic

---

## 📦 Installation

```bash
npm install your-package-name
```

---

## ⚙️ Usage

### 1. Import

```ts
import { ReusableTableComponent, TableColumn, TableAction } from 'your-package-name';

@Component({
  standalone: true,
  imports: [ReusableTableComponent]
})
export class AppComponent {}
```

---

### 2. Define Columns

```ts
columns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true, editable: true },
  { key: 'email', label: 'Email' },
  { key: 'actions', label: 'Actions', type: 'action' }
];
```

---

### 3. Define Actions

```ts
actions: TableAction[] = [
  {
    label: 'Edit',
    icon: 'edit',
    action: 'edit'
  },
  {
    label: 'Delete',
    icon: 'delete',
    action: 'delete'
  }
];
```

---

### 4. Template

```html
<app-reusable-table
  [data]="users"
  [columns]="columns"
  [actions]="actions"

  [enableRowSelection]="true"
  [enableAdd]="true"
  [enableDelete]="true"
  [enableInlineEdit]="true"

  (events)="handleTableEvent($event)">
</app-reusable-table>
```

---

### 5. Handle Events (IMPORTANT)

```ts
handleTableEvent(event: any) {
  switch (event.type) {

    case 'add':
      this.users = [...this.users, this.createRow()];
      break;

    case 'delete':
      this.users = this.users.filter(u => u !== event.row);
      break;

    case 'deleteSelected':
      this.users = this.users.filter(u => !event.rows.includes(u));
      break;

    case 'insertAbove':
      this.insertAbove(event.row);
      break;

    case 'insertBelow':
      this.insertBelow(event.row);
      break;

    case 'cellEdit':
      this.updateCell(event);
      break;
  }
}
```

---

## 📋 API

### Inputs

| Input              | Type          | Description               |
| ------------------ | ------------- | ------------------------- |
| data               | any[]         | Table data                |
| columns            | TableColumn[] | Column config             |
| actions            | TableAction[] | Row actions               |
| enableAdd          | boolean       | Show add button           |
| enableDelete       | boolean       | Enable delete             |
| enableRowSelection | boolean       | Enable checkbox selection |
| enableInlineEdit   | boolean       | Enable cell editing       |
| enableExport       | boolean       | Enable export             |
| enablePrint        | boolean       | Enable print              |

---

### Output

| Event  | Description          |
| ------ | -------------------- |
| events | Unified event stream |

---

## 🧠 Event Model

```ts
{
  type: 'add' | 'delete' | 'deleteSelected' | 'insertAbove' | 'insertBelow' | 'cellEdit',
  row?: any,
  rows?: any[]
}
```

---

## 🎯 Philosophy

* Stateless UI
* Fully controlled
* High performance (OnPush)
* Enterprise-ready

---

## ⚡ Angular Compatibility

| Angular Version | Supported |
| --------------- | --------- |
| 18             | ✅         |
| 19              | ✅         |
| 20              | ✅         |
| 21              | ✅         |

---

## 🚀 Roadmap

* Column pinning
* Keyboard navigation
* Copy/paste cells
* Context menu

---

## 📝 License

MIT
