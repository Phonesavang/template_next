# GitHub Copilot Rules for Next.js + Material-UI Project

## Project Structure & Architecture

- This is a Next.js 15 project using TypeScript
- Uses Material-UI v7 (@mui/material) for UI components
- Tailwind CSS for additional styling
- File structure follows Next.js App Router pattern
- Internationalization support with English and Lao languages

## Code Style & Conventions

### TypeScript

- Always use TypeScript for all files
- Use strict mode TypeScript settings
- Prefer type imports when importing only types: `import type { ... }`
- Use proper typing for Material-UI components and themes
- For Material-UI theme typing, use `ThemeOptions['property']` pattern

### React Components

- Use functional components with hooks
- Prefer arrow function syntax for components
- Use "use client" directive when client-side features are needed
- Export components as default exports
- Use proper TypeScript interfaces for props

### Material-UI Specific

- Import from `@mui/material` for components
- Import from `@mui/icons-material` for icons
- Use theme-based styling when possible
- For typography, use `ThemeOptions['typography']` type
- Prefer sx prop over styled-components for simple styling

### File Organization

- Place reusable components in appropriate directories
- Use barrel exports (index.ts) for cleaner imports
- Keep related files (types, hooks, services) in their respective folders
- Place static assets in the public folder

### Internationalization

- Support both English (en) and Lao (la) languages
- Use translation keys consistently
- Place translation files in src/locales/

### Styling

- Use Tailwind CSS classes for utility styling
- Use Material-UI's sx prop for component-specific styles
- Keep global styles in src/styles/globals.css
- Use CSS custom properties for theme variables

## Import Patterns

### Preferred imports:

```typescript
// Next.js
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// React
import { useState, useEffect, useCallback } from "react";
import type { FC, ReactNode } from "react";

// Material-UI
import { Button, Typography, Box } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

// Internal imports using path aliases
import "@/src/styles/globals.css";
import { someService } from "@/src/services/axios";
import type { SomeType } from "@/src/models/types";
```

## Component Patterns

### Basic Component Structure:

```typescript
"use client";
import type { FC } from "react";
import { Box, Typography } from "@mui/material";

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

const Component: FC<ComponentProps> = ({ title, children }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Box>
  );
};

export default Component;
```

### Page Component Structure:

```typescript
import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

const PageName: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Page Title</Typography>
      {/* Page content */}
    </Container>
  );
};

export default PageName;
```

## Specific Guidelines

### Theme Configuration

- Place theme files in src/theme/ directory
- Use proper Material-UI v7 typing patterns
- Support both light and dark mode if needed

### API Integration

- Use axios for HTTP requests
- Place API services in src/services/ directory
- Use proper TypeScript interfaces for API responses

### State Management

- Use React hooks for local state
- Consider context for shared state
- Use proper TypeScript typing for state

### Error Handling

- Use try-catch blocks for async operations
- Provide meaningful error messages
- Consider using Material-UI Alert components for user feedback

### Performance

- Use Next.js Image component for images
- Implement lazy loading where appropriate
- Use React.memo for expensive components
- Prefer server components when possible

## File Naming Conventions

- Use camelCase for files and directories
- Use PascalCase for component files
- Use kebab-case for page routes
- Use descriptive names that reflect functionality

## Testing Considerations

- Write tests for complex business logic
- Test API integrations
- Consider accessibility testing for UI components

## Security

- Validate user inputs
- Use environment variables for sensitive data
- Follow Next.js security best practices
