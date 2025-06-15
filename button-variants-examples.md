# Button Variants

*Last Updated: June 15, 2025*

The button component has been updated with modern, minimal, classic, and professional variants that follow the app's design principles for the Paragon Trails travel platform.

## 🎨 Button Variants Overview

### Basic Usage

```tsx
import { Button } from "@/components/ui/button";

// Default variant
<Button>Default Button</Button>

// Minimal variant
<Button variant="minimal">Minimal Button</Button>

// Modern variant with gradient
<Button variant="modern">Modern Button</Button>

// Professional variant
<Button variant="professional">Professional Button</Button>

// Glassmorphism variant
<Button variant="glass">Glass Button</Button>
```

### Available Button Variants:

- **`default`** - Primary color with clean shadows and hover effects
- **`minimal`** - Clean background with subtle border and muted hover
- **`modern`** - Gradient background with enhanced shadows and smooth transitions
- **`classic`** - Traditional secondary styling with consistent borders
- **`professional`** - Corporate-friendly slate colors with neutral appearance
- **`glass`** - Authentic glassmorphism with white/black transparency, medium backdrop blur, and adaptive dark mode support
- **`destructive`** - Red styling for dangerous actions
- **`outline`** - Transparent background with border and accent hover
- **`ghost`** - Transparent with subtle hover effects
- **`link`** - Text-only with underline hover
- **`icon`** - Square button optimized for icons

### Available Button Sizes:

- **`sm`** - Small (height: 32px, text: xs)
- **`default`** - Standard (height: 36px, text: sm)
- **`lg`** - Large (height: 44px, text: base)
- **`xl`** - Extra large (height: 48px, text: lg)
- **`icon`** - Square icon button (36x36px)

## Design Features

### Modern Enhancements:

- **Rounded corners** changed to `rounded-lg` for contemporary look
- **Refined typography** with medium font weight (removed bold/uppercase)
- **Enhanced focus states** with proper ring colors for each variant
- **Smooth transitions** for all interactive states
- **Consistent shadow system** across variants

### Variant-Specific Hover Colors:

- **Default**: Primary color darkening on hover
- **Minimal**: Subtle muted background on hover
- **Modern**: Gradient shift with enhanced shadows
- **Classic**: Secondary color opacity change
- **Professional**: Neutral slate color transitions
- **Glass**: White/black transparency layers with enhanced border visibility on hover and proper dark mode adaptation

### Professional Features:

- **Accessibility-focused** with proper contrast ratios
- **Dark mode support** with optimized color schemes
- **Progressive enhancement** for authentic glassmorphism with white/black transparency layers and adaptive dark mode
- **Consistent spacing** and sizing across all variants

## Usage Examples

### Action Buttons

```tsx
<div className="flex gap-2">
  <Button variant="default">Save Changes</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="destructive">Delete</Button>
</div>
```

### Navigation Buttons

```tsx
<div className="flex gap-2">
  <Button variant="ghost">Back</Button>
  <Button variant="minimal">Continue</Button>
  <Button variant="modern">Get Started</Button>
</div>
```

### Professional Interface

```tsx
<div className="flex gap-2">
  <Button variant="professional" size="lg">
    Enterprise Action
  </Button>
  <Button variant="classic" size="lg">
    Traditional Choice
  </Button>
</div>
```

### Glass Effect (Modern UI)

```tsx
<div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-8">
  <Button variant="glass" size="lg">
    Glass Button
  </Button>
</div>

// For dark backgrounds
<div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
  <Button variant="glass" size="lg">
    Dark Glass Button
  </Button>
</div>
```

### Icon Buttons

```tsx
<div className="flex gap-2">
  <Button variant="icon" size="icon">
    <Plus className="h-4 w-4" />
  </Button>
  <Button variant="ghost" size="icon">
    <Settings className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
    <Search className="h-4 w-4" />
  </Button>
</div>
```

### Size Variations

```tsx
<div className="flex items-center gap-2">
  <Button variant="modern" size="sm">
    Small
  </Button>
  <Button variant="modern" size="default">
    Default
  </Button>
  <Button variant="modern" size="lg">
    Large
  </Button>
  <Button variant="modern" size="xl">
    Extra Large
  </Button>
</div>
```

## Complete Theme Example

```tsx
function ButtonShowcase() {
  return (
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Primary Actions</h3>
        <div className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button variant="modern">Modern</Button>
          <Button variant="professional">Professional</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Secondary Actions</h3>
        <div className="flex gap-2">
          <Button variant="minimal">Minimal</Button>
          <Button variant="classic">Classic</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Special Effects</h3>
        <div className="flex gap-2">
          <Button variant="glass">Glass</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-2">
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}
```

This provides a comprehensive, modern button system that maintains consistency with your app's professional design principles while offering the flexibility needed for various UI contexts.
