import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Icon from './Icon';

describe('Icon', () => {
  it('renders children correctly', () => {
    render(<Icon>🎨</Icon>);
    expect(screen.getByText('🎨')).toBeInTheDocument();
  });

  it('applies default size (md) when no size is specified', () => {
    const { container } = render(<Icon>⭐</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('h-10');
    expect(icon.className).toContain('w-10');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Icon size="sm">🔔</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('h-8');
    expect(icon.className).toContain('w-8');
  });

  it('applies medium size correctly', () => {
    const { container } = render(<Icon size="md">🏠</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('h-10');
    expect(icon.className).toContain('w-10');
  });

  it('applies large size correctly', () => {
    const { container } = render(<Icon size="lg">⚡</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('h-12');
    expect(icon.className).toContain('w-12');
  });

  it('applies default variant (primary) when no variant is specified', () => {
    const { container } = render(<Icon>💙</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-blue-100');
  });

  it('applies primary variant correctly', () => {
    const { container } = render(<Icon variant="primary">🔵</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-blue-100');
  });

  it('applies secondary variant correctly', () => {
    const { container } = render(<Icon variant="secondary">🟣</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-purple-100');
  });

  it('applies success variant correctly', () => {
    const { container } = render(<Icon variant="success">✅</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-green-100');
  });

  it('applies danger variant correctly', () => {
    const { container } = render(<Icon variant="danger">❌</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-red-100');
  });

  it('applies warning variant correctly', () => {
    const { container } = render(<Icon variant="warning">⚠️</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('bg-yellow-100');
  });

  it('applies disabled state correctly', () => {
    const { container } = render(<Icon disabled>🚫</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('opacity-50');
    expect(icon.className).toContain('cursor-not-allowed');
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Icon className="custom-class">✨</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('custom-class');
  });

  it('combines size, variant, and custom className', () => {
    const { container } = render(
      <Icon size="lg" variant="success" className="extra-margin">
        🎉
      </Icon>
    );
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('h-12');
    expect(icon.className).toContain('bg-green-100');
    expect(icon.className).toContain('extra-margin');
  });

  it('renders as a circular element', () => {
    const { container } = render(<Icon>⚫</Icon>);
    const icon = container.firstChild as HTMLElement;
    expect(icon.className).toContain('rounded-full');
  });
});
