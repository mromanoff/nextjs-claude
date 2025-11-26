import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default size (md) when no size is specified', () => {
    const { container } = render(<Card>Default Size</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-4');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Card size="sm">Small Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-3');
  });

  it('applies medium size correctly', () => {
    const { container } = render(<Card size="md">Medium Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-4');
  });

  it('applies large size correctly', () => {
    const { container } = render(<Card size="lg">Large Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-6');
  });

  it('applies default variant (primary) when no variant is specified', () => {
    const { container } = render(<Card>Default Variant</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-blue-50');
  });

  it('applies primary variant correctly', () => {
    const { container } = render(<Card variant="primary">Primary Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-blue-50');
  });

  it('applies secondary variant correctly', () => {
    const { container } = render(<Card variant="secondary">Secondary Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-purple-50');
  });

  it('applies success variant correctly', () => {
    const { container } = render(<Card variant="success">Success Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-green-50');
  });

  it('applies danger variant correctly', () => {
    const { container } = render(<Card variant="danger">Danger Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-red-50');
  });

  it('applies warning variant correctly', () => {
    const { container } = render(<Card variant="warning">Warning Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-yellow-50');
  });

  it('applies disabled state correctly', () => {
    const { container } = render(<Card disabled>Disabled Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('opacity-50');
    expect(card.className).toContain('cursor-not-allowed');
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Card className="custom-class">Custom Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('custom-class');
  });

  it('combines size, variant, and custom className', () => {
    const { container } = render(
      <Card size="lg" variant="success" className="extra-padding">
        Combined Props
      </Card>
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-6');
    expect(card.className).toContain('bg-green-50');
    expect(card.className).toContain('extra-padding');
  });
});
