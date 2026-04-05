# @ReusableTable/reusable-table Library Setup & Publishing Guide

## Project Structure

```
projects/
└── reusable-table/
    ├── src/
    │   ├── lib/                 # Component library source
    │   │   ├── reusable-table.component.ts
    │   │   ├── reusable-table.component.html
    │   │   ├── reusable-table.component.scss
    │   │   ├── reusable-table.interfaces.ts
    │   │   ├── reusable-table.config.ts
    │   │   ├── table-event.model.ts
    │   │   └── table-confirm-dialog.component.ts
    │   └── public-api.ts         # Main library export
    ├── package.json              # Library metadata & dependencies
    ├── ng-package.json           # ng-packagr configuration
    ├── tsconfig.lib.json         # Library TypeScript config
    ├── tsconfig.spec.json        # Test TypeScript config
    ├── README.md                 # Library documentation
    └── .npmignore                # npm publish ignore file
```

## Build the Library

Build the library locally for deployment:

```bash
npm run build:lib
```

Output will be in:
```
dist/reusable-table/
```

## Publishing to npm

### 1. Setup npm Account

If you don't have an npm account, create one at https://www.npmjs.com

```bash
npm adduser
npm login
```

### 2. Update Library Version

Edit `projects/reusable-table/package.json`:

```json
{
  "version": "1.0.0"  // Increment according to semver
}
```

### 3. Publish to npm

Option A: One-step publish script
```bash
npm run publish:lib
```

Option B: Manual steps
```bash
npm run build:lib
cd dist/reusable-table
npm publish
cd ../..
```

### 4. Verify Publishing

Check npm registry:
```bash
npm view @tasktrack/reusable-table
```

## Using the Published Library

Once published, users can install it:

```bash
npm install @tasktrack/reusable-table
```

Then import and use:

```typescript
import { Component } from '@angular/core';
import { ReusableTableComponent, TableColumn } from '@tasktrack/reusable-table';

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [ReusableTableComponent],
  template: `
    <app-reusable-table
      [columns]="columns"
      [data]="data"
      (events)="onEvents($event)">
    </app-reusable-table>
  `
})
export class MyTableComponent {
  columns: TableColumn[] = [];
  data = [];
  
  onEvents(event: any) {
    console.log(event);
  }
}
```

## Development Workflow

### Building
```bash
npm run build:lib
```

### Testing
```bash
ng test reusable-table
```

### Watching
```bash
ng build reusable-table --watch
```

## Library Configuration Files

### package.json (Library)
- **name**: `@tasktrack/reusable-table`
- **version**: semantic versioning (1.0.0)
- **peerDependencies**: Angular 18+ and related packages
- **dependencies**: xlsx, jspdf, jspdf-autotable

### ng-package.json
Configures ng-packagr build settings. Points to:
- `entryFile`: `src/public-api.ts`
- Output: `../../dist/reusable-table`

### public-api.ts
Main barrel export that re-exports:
- `ReusableTableComponent`
- `TableColumn`, `TableAction` interfaces
- `TableConfig` and defaults
- `TableEvent` and feature/display configs
- `TableConfirmDialogComponent`

## npm Script Reference

```bash
# Build the library
npm run build:lib

# Publish to npm (build + publish)
npm run publish:lib

# Main app
npm run start       # Dev server
npm run build       # Build app

# Testing & Stories
npm run test        # Run tests
npm run storybook   # Start Storybook
```

## Publishing Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] Version bumped in `projects/reusable-table/package.json`
- [ ] CHANGELOG updated
- [ ] Git commit and tag (optional but recommended)
- [ ] `npm run publish:lib` or manual publish

## Important Notes

- **Scoped Package**: The library is scoped as `@tasktrack/reusable-table`. You need npm account with this scope or change the scope name.
- **Peer Dependencies**: Users must install Angular 18+, Material, and CDK separately.
- **sideEffects**: Set to `false` for better tree-shaking in consuming projects.
- **Build Output**: ng-packagr generates ESM, UMD, and type definitions automatically.

## Troubleshooting

### Build fails with "ng-packagr not found"
```bash
npm install ng-packagr@^18 --save-dev
```

### Module not found after install
- Check that `@tasktrack/reusable-table` is published to npm
- Clear node_modules and reinstall
- Verify path mapping in tsconfig.json

### Publishing permission denied
```bash
npm whoami              # Check current user
npm logout              # Logout
npm login               # Login with correct account
```

## Next Steps

1. ✅ Library structure created
2. ✅ Configuration files set up
3. ✅ Build scripts added
4. ⏭️ Build locally: `npm run build:lib`
5. ⏭️ Test the build: Check `dist/reusable-table/` folder
6. ⏭️ Create npm account and publish to registry
7. ⏭️ Update importing projects to use npm package

---

For detailed API documentation, see `projects/reusable-table/README.md`
