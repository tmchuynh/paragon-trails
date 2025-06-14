# Select Component Variants

The select component has been updated with modern, minimal, classic, and professional variants that follow the app's design principles and maintain consistency with button and dropdown menu components.

## Select Variants

### Basic Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Default variant
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Modern variant with large size
<Select>
  <SelectTrigger variant="modern" size="lg">
    <SelectValue placeholder="Modern Select" />
  </SelectTrigger>
  <SelectContent variant="modern">
    <SelectItem variant="modern" size="lg" value="option1">Option 1</SelectItem>
    <SelectItem variant="modern" size="lg" value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Glassmorphism variant
<Select>
  <SelectTrigger variant="glass">
    <SelectValue placeholder="Glass Select" />
  </SelectTrigger>
  <SelectContent variant="glass">
    <SelectItem variant="glass" value="option1">Option 1</SelectItem>
    <SelectItem variant="glass" value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

## SelectTrigger Variants

### Available Trigger Variants:

- **`default`** - Clean border with subtle hover effects
- **`minimal`** - Ultra-subtle borders with muted hover
- **`modern`** - Primary color accents with enhanced interaction
- **`classic`** - Traditional secondary styling
- **`professional`** - Corporate-friendly slate colors
- **`glass`** - Advanced glassmorphism with backdrop blur

### Available Trigger Sizes:

- **`sm`** - Small (height: 32px, text: xs)
- **`default`** - Standard (height: 36px, text: sm)
- **`lg`** - Large (height: 44px, text: base)

## SelectContent Variants

### Available Content Variants:

- **`default`** - Clean background with subtle border
- **`minimal`** - Ultra-clean look without border
- **`modern`** - Contemporary design with enhanced shadows
- **`classic`** - Traditional card-style appearance
- **`professional`** - Corporate-friendly styling
- **`glass`** - Advanced glassmorphism with backdrop blur

## SelectItem Variants

### Available Item Variants:

- **`default`** - Accent color hover and focus
- **`minimal`** - Subtle muted hover effect
- **`modern`** - Primary color hover with enhanced contrast
- **`classic`** - Secondary color hover styling
- **`professional`** - Neutral slate hover colors
- **`glass`** - Transparent white hover effects

### Available Item Sizes:

- **`sm`** - Compact padding and text
- **`default`** - Standard padding and text
- **`lg`** - Generous padding and text

## Usage Examples

### Form Select

```tsx
<div className="space-y-2">
  <label htmlFor="country" className="text-sm font-medium">
    Country
  </label>
  <Select>
    <SelectTrigger variant="default" id="country">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent variant="default">
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### Modern Interface

```tsx
<Select>
  <SelectTrigger variant="modern" size="lg">
    <SelectValue placeholder="Choose your plan" />
  </SelectTrigger>
  <SelectContent variant="modern">
    <SelectLabel variant="modern" size="lg">
      Plans
    </SelectLabel>
    <SelectItem variant="modern" size="lg" value="basic">
      Basic Plan
    </SelectItem>
    <SelectItem variant="modern" size="lg" value="pro">
      Pro Plan
    </SelectItem>
    <SelectItem variant="modern" size="lg" value="enterprise">
      Enterprise
    </SelectItem>
  </SelectContent>
</Select>
```

### Professional Interface

```tsx
<Select>
  <SelectTrigger variant="professional" size="default">
    <SelectValue placeholder="Department" />
  </SelectTrigger>
  <SelectContent variant="professional">
    <SelectLabel variant="professional">Departments</SelectLabel>
    <SelectSeparator variant="professional" />
    <SelectItem variant="professional" value="hr">
      Human Resources
    </SelectItem>
    <SelectItem variant="professional" value="finance">
      Finance
    </SelectItem>
    <SelectItem variant="professional" value="engineering">
      Engineering
    </SelectItem>
    <SelectSeparator variant="professional" />
    <SelectItem variant="professional" value="other">
      Other
    </SelectItem>
  </SelectContent>
</Select>
```

### Minimal Design

```tsx
<Select>
  <SelectTrigger variant="minimal" size="sm">
    <SelectValue placeholder="Filter by" />
  </SelectTrigger>
  <SelectContent variant="minimal">
    <SelectItem variant="minimal" size="sm" value="all">
      All Items
    </SelectItem>
    <SelectItem variant="minimal" size="sm" value="active">
      Active
    </SelectItem>
    <SelectItem variant="minimal" size="sm" value="inactive">
      Inactive
    </SelectItem>
  </SelectContent>
</Select>
```

### Glass Effect

```tsx
<div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8">
  <Select>
    <SelectTrigger variant="glass">
      <SelectValue placeholder="Glass Select" />
    </SelectTrigger>
    <SelectContent variant="glass">
      <SelectLabel variant="glass">Options</SelectLabel>
      <SelectSeparator variant="glass" />
      <SelectItem variant="glass" value="option1">
        Glass Option 1
      </SelectItem>
      <SelectItem variant="glass" value="option2">
        Glass Option 2
      </SelectItem>
      <SelectItem variant="glass" value="option3">
        Glass Option 3
      </SelectItem>
    </SelectContent>
  </Select>
</div>
```

### Grouped Options

```tsx
<Select>
  <SelectTrigger variant="classic" size="lg">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent variant="classic">
    <SelectLabel variant="classic" size="lg">
      Fruits
    </SelectLabel>
    <SelectSeparator variant="classic" />
    <SelectItem variant="classic" size="lg" value="apple">
      Apple
    </SelectItem>
    <SelectItem variant="classic" size="lg" value="banana">
      Banana
    </SelectItem>
    <SelectItem variant="classic" size="lg" value="orange">
      Orange
    </SelectItem>
    <SelectSeparator variant="classic" />
    <SelectLabel variant="classic" size="lg">
      Vegetables
    </SelectLabel>
    <SelectItem variant="classic" size="lg" value="carrot">
      Carrot
    </SelectItem>
    <SelectItem variant="classic" size="lg" value="lettuce">
      Lettuce
    </SelectItem>
  </SelectContent>
</Select>
```

## Design Features

### Modern Enhancements:

- **Rounded corners** updated to `rounded-lg` for contemporary look
- **Enhanced focus states** with variant-specific ring colors
- **Smooth transitions** for all interactive elements
- **Consistent shadow system** across variants
- **Improved spacing** with better padding distribution

### Variant-Specific Styling:

- **Default**: Subtle borders with accent color interactions
- **Minimal**: Ultra-clean appearance with minimal visual elements
- **Modern**: Primary color accents with gradient-like effects
- **Classic**: Traditional styling with secondary color themes
- **Professional**: Neutral slate colors for corporate environments
- **Glass**: Advanced glassmorphism with proper backdrop blur

### Accessibility Features:

- **Proper contrast ratios** across all variants
- **Enhanced focus indicators** with visible ring styles
- **Consistent sizing** for touch-friendly interactions
- **Screen reader compatibility** maintained through semantic structure

## Complete Theme Example

```tsx
function SelectShowcase() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default Variants</h3>
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger variant="default">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent variant="default">
              <SelectItem variant="default" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="minimal">
              <SelectValue placeholder="Minimal" />
            </SelectTrigger>
            <SelectContent variant="minimal">
              <SelectItem variant="minimal" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Enhanced Variants</h3>
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger variant="modern">
              <SelectValue placeholder="Modern" />
            </SelectTrigger>
            <SelectContent variant="modern">
              <SelectItem variant="modern" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="professional">
              <SelectValue placeholder="Professional" />
            </SelectTrigger>
            <SelectContent variant="professional">
              <SelectItem variant="professional" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Special Effects</h3>
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger variant="classic">
              <SelectValue placeholder="Classic" />
            </SelectTrigger>
            <SelectContent variant="classic">
              <SelectItem variant="classic" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="glass">
              <SelectValue placeholder="Glass" />
            </SelectTrigger>
            <SelectContent variant="glass">
              <SelectItem variant="glass" value="1">
                Option 1
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
```

This provides a comprehensive, modern select system that maintains consistency with your app's button and dropdown menu components while offering the flexibility needed for various form contexts.
