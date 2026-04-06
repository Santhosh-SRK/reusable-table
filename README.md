# 📊 Angular Reusable Table

A powerful and reusable Angular Material table component with support for dynamic columns, sorting, pagination, and action buttons.

---

## 🚀 Features

* ✅ Dynamic column configuration
* ✅ Built with Angular Material
* ✅ Sorting & Pagination support
* ✅ Reusable across multiple modules
* ✅ Action buttons (Edit / Delete / View)
* ✅ Clean and customizable UI

---
🔗 **Live Demo:**  
👉 https://santhosh-srk.github.io/reusable-table/

---

## ✨ Overview

This library was built to eliminate repeated table logic across applications by providing a highly configurable and reusable solution.

It supports dynamic data rendering, advanced features like export and pagination, and clean integration into any Angular project.

---

## 📦 Installation

```bash
npm install @tasktrack/reusable-table
```
---
```bash
Reffer User guide in code repository for deatiled explanation please
```

---

## ⚙️ Requirements

* Angular 18+
* Angular Material 18+

---

## 🔧 Setup

### 1. Install Angular Material (if not already installed)

```bash
ng add @angular/material
```

---

### 2. Import Module

In your module:

```ts
import { ReusableTableModule } from '@tasktrack/reusable-table';

@NgModule({
  imports: [ReusableTableModule]
})
export class AppModule {}
```

---

## 🧑‍💻 Usage

### Step 1: Define Columns

```ts
columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];
```

---

### Step 2: Define Data

```ts
data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];
```

---

### Step 3: Use Component in HTML

```html
<app-reusable-table
  [columns]="columns"
  [data]="data"
  (action)="handleAction($event)">
</app-reusable-table>
```

---

### Step 4: Handle Actions

```ts
handleAction(event: any) {
  console.log('Action:', event);
}
```

---

## 🎯 Inputs

| Input   | Type  | Description                |
| ------- | ----- | -------------------------- |
| columns | array | Table column configuration |
| data    | array | Table data                 |

---

## 📤 Outputs

| Output | Description                         |
| ------ | ----------------------------------- |
| action | Emits when action button is clicked |

---

## 🎨 Styling

If your library exposes styles:

```scss
@use '@tasktrack/reusable-table/styles';
```

---


## 🛠 Development

Build the library:

```bash
ng build reusable-table
```

---

## 📦 Publish

```bash
cd dist/reusable-table
npm publish --access public
```

---

## 🔄 Versioning

```bash
npm version patch
npm publish
```

---

## 🧾 License

MIT License

---

## 👨‍💻 Author

**TaskTrack**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
