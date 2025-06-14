# Dropdown Menu Variants

The dropdown menu component now supports modern, minimal, classic, and professional variants. Here are examples of how to use the different variants:

## DropdownMenuContent Variants

### Basic Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Default variant
<DropdownMenuContent>
  <DropdownMenuItem>Item 1</DropdownMenuItem>
</DropdownMenuContent>

// Modern variant with clean design
<DropdownMenuContent variant="modern" size="lg">
  <DropdownMenuItem>Item 1</DropdownMenuItem>
</DropdownMenuContent>

// Glassmorphism effect variant
<DropdownMenuContent variant="glass">
  <DropdownMenuItem>Item 1</DropdownMenuItem>
</DropdownMenuContent>

// Professional variant
<DropdownMenuContent variant="professional">
  <DropdownMenuItem>Item 1</DropdownMenuItem>
</DropdownMenuContent>
```

### Available Content Variants:

- `default` - Clean background with subtle border
- `minimal` - Ultra-clean look without border
- `modern` - Contemporary design with enhanced shadows
- `classic` - Traditional card-style appearance
- `professional` - Corporate-friendly styling
- `glass` - Advanced glassmorphism with backdrop blur

### Available Content Sizes:

- `sm` - Small (6rem min-width)
- `default` - Default (8rem min-width)
- `lg` - Large (12rem min-width)
- `xl` - Extra large (16rem min-width)

## DropdownMenuItem Variants

```tsx
// Default item with accent hover
<DropdownMenuItem>Default Item</DropdownMenuItem>

// Minimal variant with subtle hover
<DropdownMenuItem variant="minimal">Minimal Item</DropdownMenuItem>

// Modern variant with primary color hover
<DropdownMenuItem variant="modern">Modern Item</DropdownMenuItem>

// Classic variant with secondary hover
<DropdownMenuItem variant="classic">Classic Item</DropdownMenuItem>

// Professional variant with neutral hover
<DropdownMenuItem variant="professional">Professional Item</DropdownMenuItem>

// Destructive variant
<DropdownMenuItem variant="destructive">Delete Item</DropdownMenuItem>

// Ghost variant with subtle interaction
<DropdownMenuItem variant="ghost">Ghost Item</DropdownMenuItem>

// Large size
<DropdownMenuItem size="lg">Large Item</DropdownMenuItem>
```

### Available Item Variants:

- `default` - Accent color hover and focus
- `minimal` - Subtle muted hover effect
- `modern` - Primary color hover with enhanced contrast
- `classic` - Secondary color hover styling
- `professional` - Neutral slate hover colors
- `destructive` - Red styling for dangerous actions
- `ghost` - Ultra-subtle hover interactions

### Available Item Sizes:

- `sm` - Compact padding and text
- `default` - Standard padding and text
- `lg` - Generous padding and text

## DropdownMenuLabel Variants

```tsx
// Default label
<DropdownMenuLabel>Default Label</DropdownMenuLabel>

// Modern label with primary accent
<DropdownMenuLabel variant="modern">Modern Label</DropdownMenuLabel>

// Professional label
<DropdownMenuLabel variant="professional">Professional Label</DropdownMenuLabel>

// Minimal muted label
<DropdownMenuLabel variant="minimal">Minimal Label</DropdownMenuLabel>

// Large classic label
<DropdownMenuLabel size="lg" variant="classic">Classic Large Label</DropdownMenuLabel>
```

### Available Label Variants:

- `default` - Standard foreground text
- `minimal` - Muted appearance
- `modern` - Primary color with semibold weight
- `classic` - Traditional medium weight
- `professional` - Slate colors with semibold weight
- `muted` - Subtle muted appearance

## DropdownMenuSeparator Variants

```tsx
// Default separator
<DropdownMenuSeparator />

// Modern separator with primary accent
<DropdownMenuSeparator variant="modern" />

// Professional separator
<DropdownMenuSeparator variant="professional" />

// Minimal separator
<DropdownMenuSeparator variant="minimal" />

// Subtle separator
<DropdownMenuSeparator variant="subtle" />
```

### Available Separator Variants:

- `default` - Subtle border with 60% opacity
- `minimal` - Ultra-subtle with 30% opacity
- `modern` - Primary color accent
- `classic` - Traditional full opacity border
- `professional` - Neutral slate colors
- `muted` - Very subtle with 10% opacity
- `subtle` - Lightest possible with 20% opacity

## Complete Example

```tsx
function ExampleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent variant="modern" size="lg">
        <DropdownMenuLabel variant="modern">Account Actions</DropdownMenuLabel>
        <DropdownMenuSeparator variant="modern" />
        <DropdownMenuItem variant="default">Profile Settings</DropdownMenuItem>
        <DropdownMenuItem variant="minimal">Preferences</DropdownMenuItem>
        <DropdownMenuItem variant="professional">Settings</DropdownMenuItem>
        <DropdownMenuSeparator variant="subtle" />
        <DropdownMenuItem variant="destructive">Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Glassmorphism Example

```tsx
function GlassDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Glass Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent variant="glass" size="default">
        <DropdownMenuLabel variant="modern">Glass Menu</DropdownMenuLabel>
        <DropdownMenuSeparator variant="subtle" />
        <DropdownMenuItem variant="ghost">Item 1</DropdownMenuItem>
        <DropdownMenuItem variant="ghost">Item 2</DropdownMenuItem>
        <DropdownMenuItem variant="ghost">Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

This provides a modern, minimal, classic, and professional theming system for dropdown menus that maintains consistency with your app's design principles.
