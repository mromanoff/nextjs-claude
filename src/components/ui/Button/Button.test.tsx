import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies default size (md) when no size is specified', () => {
    const { container } = render(<Button>Default Size</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-4');
    expect(button.className).toContain('py-2');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Button size="sm">Small Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-3');
    expect(button.className).toContain('py-1.5');
  });

  it('applies medium size correctly', () => {
    const { container } = render(<Button size="md">Medium Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-4');
    expect(button.className).toContain('py-2');
  });

  it('applies large size correctly', () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-5');
    expect(button.className).toContain('py-2.5');
  });

  it('applies extra large size correctly', () => {
    const { container } = render(<Button size="xl">XL Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-6');
    expect(button.className).toContain('py-3');
  });

  it('applies default variant when no variant is specified', () => {
    const { container } = render(<Button>Default Variant</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('bg-zinc-200');
  });

  it('applies default variant correctly', () => {
    const { container } = render(<Button variant="default">Default Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('bg-zinc-200');
  });

  it('applies primary variant correctly', () => {
    const { container } = render(<Button variant="primary">Primary Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('bg-blue-500');
  });

  it('applies secondary variant correctly', () => {
    const { container } = render(<Button variant="secondary">Secondary Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('bg-purple-500');
  });

  it('applies accent variant correctly', () => {
    const { container } = render(<Button variant="accent">Accent Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('bg-green-500');
  });

  it('applies outline variant correctly', () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('border-2');
  });

  it('applies ghost variant correctly', () => {
    const { container } = render(<Button variant="ghost">Ghost Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('text-zinc-700');
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByText('Clickable');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state with opacity-50', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('opacity-50');
    expect(button.className).toContain('cursor-not-allowed');
  });

  it('button is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);

    const button = screen.getByText('Disabled');
    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies default type (button)', () => {
    render(<Button>Default Type</Button>);
    const button = screen.getByText('Default Type') as HTMLButtonElement;
    expect(button.type).toBe('button');
  });

  it('applies submit type correctly', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText('Submit') as HTMLButtonElement;
    expect(button.type).toBe('submit');
  });

  it('applies reset type correctly', () => {
    render(<Button type="reset">Reset</Button>);
    const button = screen.getByText('Reset') as HTMLButtonElement;
    expect(button.type).toBe('reset');
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Button className="custom-class">Custom Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('custom-class');
  });

  it('has focus ring styling', () => {
    const { container } = render(<Button>Focus Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('focus:ring-2');
  });

  it('combines size, variant, and custom className', () => {
    const { container } = render(
      <Button size="lg" variant="primary" className="extra-padding">
        Combined Props
      </Button>
    );
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('px-5');
    expect(button.className).toContain('bg-blue-500');
    expect(button.className).toContain('extra-padding');
  });
});
