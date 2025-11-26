'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card/Card';
import Icon from '@/components/ui/Icon/Icon';
import Avatar from '@/components/ui/Avatar/Avatar';
import Button from '@/components/ui/Button/Button';
import Modal from '@/components/ui/Modal/Modal';

export default function PreviewPage() {
  const [modalStates, setModalStates] = useState({
    primary: false,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    small: false,
    medium: false,
    large: false,
    noTitle: false,
    noCloseButton: false,
  });

  const openModal = (key: keyof typeof modalStates) => {
    setModalStates(prev => ({ ...prev, [key]: true }));
  };

  const closeModal = (key: keyof typeof modalStates) => {
    setModalStates(prev => ({ ...prev, [key]: false }));
  };

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">UI Component Preview</h1>
          <p className="text-foreground/70">View and test UI components</p>
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

        {/* Avatar Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Avatar</h2>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Avatar name="John Doe" variant="default" />
              <Avatar name="Jane Smith" variant="primary" />
              <Avatar name="Bob Wilson" variant="secondary" />
              <Avatar name="Alice Brown" variant="accent" />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Sizes</h3>
            <div className="flex items-center gap-4">
              <Avatar name="John Doe" size="sm" variant="primary" />
              <Avatar name="John Doe" size="md" variant="primary" />
              <Avatar name="John Doe" size="lg" variant="primary" />
              <Avatar name="John Doe" size="xl" variant="primary" />
            </div>
          </div>

          {/* Combined Props */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Combined Props</h3>
            <div className="flex gap-4">
              <Avatar name="Alex" size="xl" variant="primary" />
              <Avatar name="Sam Johnson" size="xl" variant="secondary" />
              <Avatar name="Taylor Green" size="xl" variant="accent" />
            </div>
          </div>
        </section>

        {/* Button Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Button</h2>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Sizes</h3>
            <div className="flex items-center gap-4">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="lg" variant="primary">Large</Button>
              <Button size="xl" variant="primary">Extra Large</Button>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Disabled State</h3>
            <div className="flex gap-4">
              <Button variant="primary">Enabled</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          {/* Combined Props */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Combined Props</h3>
            <div className="flex gap-4">
              <Button size="lg" variant="primary">Click Me</Button>
              <Button size="lg" variant="secondary">Learn More</Button>
              <Button size="lg" variant="outline">Cancel</Button>
            </div>
          </div>
        </section>

        {/* Modal Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Modal</h2>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => openModal('primary')}>
                Primary Modal
              </Button>
              <Button variant="secondary" onClick={() => openModal('secondary')}>
                Secondary Modal
              </Button>
              <Button variant="accent" onClick={() => openModal('success')}>
                Success Modal
              </Button>
              <Button variant="default" onClick={() => openModal('danger')}>
                Danger Modal
              </Button>
              <Button variant="default" onClick={() => openModal('warning')}>
                Warning Modal
              </Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Sizes</h3>
            <div className="flex items-center gap-4">
              <Button variant="primary" onClick={() => openModal('small')}>
                Small Modal
              </Button>
              <Button variant="primary" onClick={() => openModal('medium')}>
                Medium Modal
              </Button>
              <Button variant="primary" onClick={() => openModal('large')}>
                Large Modal
              </Button>
            </div>
          </div>

          {/* Special Cases */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Special Cases</h3>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => openModal('noTitle')}>
                No Title
              </Button>
              <Button variant="outline" onClick={() => openModal('noCloseButton')}>
                No Close Button
              </Button>
            </div>
          </div>

          {/* Modal instances */}
          <Modal
            isOpen={modalStates.primary}
            onClose={() => closeModal('primary')}
            title="Primary Modal"
            variant="primary"
          >
            <p>This is a primary modal with blue header styling and a semi-transparent backdrop.</p>
          </Modal>

          <Modal
            isOpen={modalStates.secondary}
            onClose={() => closeModal('secondary')}
            title="Secondary Modal"
            variant="secondary"
          >
            <p>This is a secondary modal with purple header styling and a semi-transparent backdrop.</p>
          </Modal>

          <Modal
            isOpen={modalStates.success}
            onClose={() => closeModal('success')}
            title="Success Modal"
            variant="success"
          >
            <p>This is a success modal with green header styling. Great for confirmation messages!</p>
          </Modal>

          <Modal
            isOpen={modalStates.danger}
            onClose={() => closeModal('danger')}
            title="Danger Modal"
            variant="danger"
          >
            <p>This is a danger modal with red header styling. Use for warnings or destructive actions.</p>
          </Modal>

          <Modal
            isOpen={modalStates.warning}
            onClose={() => closeModal('warning')}
            title="Warning Modal"
            variant="warning"
          >
            <p>This is a warning modal with amber header styling. Use for important notices.</p>
          </Modal>

          <Modal
            isOpen={modalStates.small}
            onClose={() => closeModal('small')}
            title="Small Modal"
            size="sm"
            variant="primary"
          >
            <p>This is a small modal perfect for brief messages.</p>
          </Modal>

          <Modal
            isOpen={modalStates.medium}
            onClose={() => closeModal('medium')}
            title="Medium Modal"
            size="md"
            variant="secondary"
          >
            <p>This is a medium modal (default size) suitable for most content.</p>
          </Modal>

          <Modal
            isOpen={modalStates.large}
            onClose={() => closeModal('large')}
            title="Large Modal"
            size="lg"
            variant="success"
          >
            <p className="mb-4">This is a large modal with plenty of space for content.</p>
            <p>Perfect for forms, detailed information, or complex interactions.</p>
          </Modal>

          <Modal
            isOpen={modalStates.noTitle}
            onClose={() => closeModal('noTitle')}
          >
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Custom Content
              </h3>
              <p>This modal has no title prop, giving you full control over the content styling.</p>
            </div>
          </Modal>

          <Modal
            isOpen={modalStates.noCloseButton}
            onClose={() => closeModal('noCloseButton')}
            title="No Close Button"
            variant="warning"
            showCloseButton={false}
          >
            <p className="mb-4">
              This modal has no close button. You must click the backdrop or press ESC to close it.
            </p>
            <Button variant="primary" onClick={() => closeModal('noCloseButton')}>
              Close Modal
            </Button>
          </Modal>
        </section>
      </div>
    </main>
  );
}
