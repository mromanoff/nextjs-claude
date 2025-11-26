import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders initials correctly from full name', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles single name correctly', () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText('AL')).toBeInTheDocument();
  });

  it('handles single character name', () => {
    render(<Avatar name="A" />);
    expect(screen.getByText('AA')).toBeInTheDocument();
  });

  it('handles empty name', () => {
    render(<Avatar name="" />);
    expect(screen.getByText('AA')).toBeInTheDocument();
  });

  it('handles whitespace-only name', () => {
    render(<Avatar name="   " />);
    expect(screen.getByText('AA')).toBeInTheDocument();
  });

  it('handles multi-word names (takes first and last initial)', () => {
    render(<Avatar name="Bob Smith Jr" />);
    expect(screen.getByText('BJ')).toBeInTheDocument();
  });

  it('applies default size (md) when no size is specified', () => {
    const { container } = render(<Avatar name="Test User" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-10');
    expect(avatar.className).toContain('w-10');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Avatar name="Test User" size="sm" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-8');
    expect(avatar.className).toContain('w-8');
  });

  it('applies medium size correctly', () => {
    const { container } = render(<Avatar name="Test User" size="md" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-10');
    expect(avatar.className).toContain('w-10');
  });

  it('applies large size correctly', () => {
    const { container } = render(<Avatar name="Test User" size="lg" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-12');
    expect(avatar.className).toContain('w-12');
  });

  it('applies extra large size correctly', () => {
    const { container } = render(<Avatar name="Test User" size="xl" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-16');
    expect(avatar.className).toContain('w-16');
  });

  it('applies default variant when no variant is specified', () => {
    const { container } = render(<Avatar name="Test User" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('bg-foreground/10');
    expect(avatar.className).toContain('text-foreground');
  });

  it('applies default variant correctly', () => {
    const { container } = render(<Avatar name="Test User" variant="default" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('bg-foreground/10');
    expect(avatar.className).toContain('text-foreground');
  });

  it('applies primary variant correctly', () => {
    const { container } = render(<Avatar name="Test User" variant="primary" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.style.backgroundColor).toBe('var(--primary)');
  });

  it('applies secondary variant correctly', () => {
    const { container } = render(<Avatar name="Test User" variant="secondary" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.style.backgroundColor).toBe('var(--secondary)');
  });

  it('applies accent variant correctly', () => {
    const { container } = render(<Avatar name="Test User" variant="accent" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.style.backgroundColor).toBe('var(--success)');
  });

  it('renders with rounded-full class', () => {
    const { container } = render(<Avatar name="Test User" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('rounded-full');
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Avatar name="Test User" className="custom-class" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('custom-class');
  });

  it('sets aria-label attribute correctly', () => {
    const { container } = render(<Avatar name="John Doe" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.getAttribute('aria-label')).toBe('Avatar for John Doe');
  });

  it('sets title attribute to full name', () => {
    const { container } = render(<Avatar name="John Doe" />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.getAttribute('title')).toBe('John Doe');
  });

  it('combines size, variant, and custom className', () => {
    const { container } = render(
      <Avatar name="Test User" size="lg" variant="primary" className="extra-spacing" />
    );
    const avatar = container.firstChild as HTMLElement;
    expect(avatar.className).toContain('h-12');
    expect(avatar.style.backgroundColor).toBe('var(--primary)');
    expect(avatar.className).toContain('extra-spacing');
  });
});
