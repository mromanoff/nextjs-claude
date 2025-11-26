import Card from '@/components/ui/Card/Card';
import Icon from '@/components/ui/Icon/Icon';

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">UI Component Preview</h1>
          <p className="text-zinc-600 dark:text-zinc-400">View and test UI components</p>
        </div>

        {/* Card Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Card</h2>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card variant="primary">
                <h4 className="font-semibold mb-2">Primary Card</h4>
                <p className="text-sm">This is a primary card with blue accent colors.</p>
              </Card>

              <Card variant="secondary">
                <h4 className="font-semibold mb-2">Secondary Card</h4>
                <p className="text-sm">This is a secondary card with purple accent colors.</p>
              </Card>

              <Card variant="success">
                <h4 className="font-semibold mb-2">Success Card</h4>
                <p className="text-sm">This is a success card with green accent colors.</p>
              </Card>

              <Card variant="danger">
                <h4 className="font-semibold mb-2">Danger Card</h4>
                <p className="text-sm">This is a danger card with red accent colors.</p>
              </Card>

              <Card variant="warning">
                <h4 className="font-semibold mb-2">Warning Card</h4>
                <p className="text-sm">This is a warning card with yellow accent colors.</p>
              </Card>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card size="sm" variant="primary">
                <h4 className="font-semibold mb-1">Small Card</h4>
                <p className="text-xs">Compact size with less padding.</p>
              </Card>

              <Card size="md" variant="secondary">
                <h4 className="font-semibold mb-2">Medium Card</h4>
                <p className="text-sm">Default size with standard padding.</p>
              </Card>

              <Card size="lg" variant="success">
                <h4 className="font-semibold mb-2">Large Card</h4>
                <p className="text-base">Spacious size with extra padding.</p>
              </Card>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Disabled State</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <Card variant="primary">
                <h4 className="font-semibold mb-2">Enabled Card</h4>
                <p className="text-sm">This card is in normal state.</p>
              </Card>

              <Card variant="primary" disabled>
                <h4 className="font-semibold mb-2">Disabled Card</h4>
                <p className="text-sm">This card is in disabled state with reduced opacity.</p>
              </Card>
            </div>
          </div>

          {/* Combined Props */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Combined Props</h3>
            <Card size="lg" variant="warning" className="max-w-2xl">
              <h4 className="font-semibold mb-3">Featured Card</h4>
              <p className="mb-4">
                This card combines a large size with warning variant and custom className.
                It demonstrates how multiple props work together.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Size: Large</li>
                <li>Variant: Warning</li>
                <li>Custom className applied</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Icon Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Icon</h2>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Icon variant="primary">
                🔵
              </Icon>

              <Icon variant="secondary">
                🟣
              </Icon>

              <Icon variant="success">
                ✅
              </Icon>

              <Icon variant="danger">
                ❌
              </Icon>

              <Icon variant="warning">
                ⚠️
              </Icon>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Sizes</h3>
            <div className="flex items-center gap-4">
              <Icon size="sm" variant="primary">
                🎨
              </Icon>

              <Icon size="md" variant="secondary">
                🎨
              </Icon>

              <Icon size="lg" variant="success">
                🎨
              </Icon>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Disabled State</h3>
            <div className="flex gap-4">
              <Icon variant="primary">
                🔔
              </Icon>

              <Icon variant="primary" disabled>
                🔔
              </Icon>
            </div>
          </div>

          {/* Combined Props */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Combined Props</h3>
            <div className="flex gap-4">
              <Icon size="lg" variant="warning" className="shadow-lg">
                🎉
              </Icon>

              <Icon size="lg" variant="success" className="shadow-lg">
                🌟
              </Icon>

              <Icon size="lg" variant="danger" className="shadow-lg">
                🔥
              </Icon>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
