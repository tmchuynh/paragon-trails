# Checkbox Component Variants

The checkbox component has been updated with comprehensive variants using all the colors defined in globals.css, providing consistent theming across your application.

## Checkbox Variants

### Basic Usage

```tsx
import { Checkbox } from "@/components/ui/checkbox";

// Default variant
<Checkbox />

// Secondary variant
<Checkbox variant="secondary" />

// Success variant with large size
<Checkbox variant="success" size="lg" />

// Error variant with small size
<Checkbox variant="error" size="sm" />
```

### Available Checkbox Variants:

Using all the colors from your globals.css theme:

- **`default`** - Primary color (blue) - `oklch(0.45 0.12 220)`
- **`secondary`** - Secondary color (purple) - `oklch(0.35 0.08 260)`
- **`tertiary`** - Tertiary color (light blue) - `oklch(0.65 0.06 200)`
- **`fancy`** - Fancy color (dark purple) - `oklch(0.25 0.1 280)`
- **`accent`** - Accent color (cyan) - `oklch(0.52 0.08 200)`
- **`destructive`** - Destructive color (red) - `oklch(0.48 0.15 15)`
- **`success`** - Success color (green) - `oklch(0.5 0.12 150)`
- **`warning`** - Warning color (orange) - `oklch(0.58 0.1 80)`
- **`error`** - Error color (red) - `oklch(0.48 0.15 15)`
- **`info`** - Info color (blue) - `oklch(0.52 0.08 200)`
- **`muted`** - Muted color (gray) - `oklch(0.94 0.01 180)`

### Available Checkbox Sizes:

- **`sm`** - Small (14px)
- **`default`** - Standard (16px)
- **`lg`** - Large (20px)

## Usage Examples

### Form Checkboxes

```tsx
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" variant="default" />
    <label htmlFor="terms" className="text-sm font-medium">
      Accept terms and conditions
    </label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox id="newsletter" variant="info" />
    <label htmlFor="newsletter" className="text-sm font-medium">
      Subscribe to newsletter
    </label>
  </div>
</div>
```

### Status Indicators

```tsx
<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox variant="success" size="sm" checked />
    <span className="text-sm text-success">Task completed</span>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="warning" size="sm" checked />
    <span className="text-sm text-warning">Needs attention</span>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="error" size="sm" checked />
    <span className="text-sm text-error">Critical issue</span>
  </div>
</div>
```

### Feature Toggles

```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium">Dark Mode</h4>
      <p className="text-sm text-muted-foreground">Toggle dark theme</p>
    </div>
    <Checkbox variant="accent" size="lg" />
  </div>

  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium">Premium Features</h4>
      <p className="text-sm text-muted-foreground">
        Enable premium functionality
      </p>
    </div>
    <Checkbox variant="fancy" size="lg" />
  </div>
</div>
```

### Multi-Select Lists

```tsx
<div className="space-y-2">
  <h3 className="font-medium">Select Categories</h3>

  <div className="flex items-center space-x-2">
    <Checkbox variant="tertiary" />
    <label className="text-sm">Technology</label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="secondary" />
    <label className="text-sm">Design</label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="accent" />
    <label className="text-sm">Business</label>
  </div>
</div>
```

### Settings Panel

```tsx
<div className="space-y-6">
  <div>
    <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox variant="info" />
        <label className="text-sm">Email notifications</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="warning" />
        <label className="text-sm">SMS alerts</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="success" />
        <label className="text-sm">Push notifications</label>
      </div>
    </div>
  </div>
</div>
```

### Size Variations

```tsx
<div className="flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    <Checkbox variant="default" size="sm" />
    <label className="text-xs">Small</label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="default" size="default" />
    <label className="text-sm">Default</label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox variant="default" size="lg" />
    <label className="text-base">Large</label>
  </div>
</div>
```

## Design Features

### Color Consistency:

- **Uses globals.css colors** - All variants use the exact color values from your theme
- **Automatic dark mode** - Colors adapt automatically based on your CSS custom properties
- **Consistent focus states** - Each variant has appropriate focus ring colors
- **Proper contrast** - Foreground colors ensure readability on colored backgrounds

### Enhanced Accessibility:

- **Focus indicators** - Visible focus rings with variant-specific colors
- **Size scaling** - Check icon scales appropriately with checkbox size
- **Proper contrast ratios** - Colors meet accessibility standards
- **Screen reader friendly** - Maintains semantic structure

### Interactive States:

- **Smooth transitions** - Enhanced transition effects for state changes
- **Disabled states** - Consistent opacity and cursor behavior
- **Error states** - Built-in aria-invalid support with destructive styling
- **Hover effects** - Subtle interactions that respect the variant colors

## Complete Color Showcase

```tsx
function CheckboxShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      <div className="flex items-center space-x-2">
        <Checkbox variant="default" />
        <label className="text-sm">Default (Primary)</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="secondary" />
        <label className="text-sm">Secondary</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="tertiary" />
        <label className="text-sm">Tertiary</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="fancy" />
        <label className="text-sm">Fancy</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="accent" />
        <label className="text-sm">Accent</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="success" />
        <label className="text-sm">Success</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="warning" />
        <label className="text-sm">Warning</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="error" />
        <label className="text-sm">Error</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="info" />
        <label className="text-sm">Info</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="muted" />
        <label className="text-sm">Muted</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox variant="destructive" />
        <label className="text-sm">Destructive</label>
      </div>
    </div>
  );
}
```

This provides a comprehensive checkbox system that leverages all the colors from your globals.css theme, ensuring perfect consistency across your application while offering the flexibility needed for various UI contexts.
