import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders site title "MyApp"', () => {
    render(<Header />);
    expect(screen.getByText('MyApp')).toBeInTheDocument();
  });

  it('renders Home navigation link', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders Preview navigation link', () => {
    render(<Header />);
    expect(screen.getByText('Preview')).toBeInTheDocument();
  });

  it('renders About navigation link', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('Home link has correct href', () => {
    render(<Header />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('Preview link has correct href', () => {
    render(<Header />);
    const previewLink = screen.getByText('Preview').closest('a');
    expect(previewLink).toHaveAttribute('href', '/preview');
  });

  it('About link has correct href', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('renders user name "John Doe"', () => {
    render(<Header />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders Avatar component with initials', () => {
    render(<Header />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('Avatar has correct aria-label', () => {
    render(<Header />);
    const avatar = screen.getByLabelText('Avatar for John Doe');
    expect(avatar).toBeInTheDocument();
  });

  it('has sticky positioning class', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header?.className).toContain('sticky');
  });

  it('navigation is hidden on mobile with md breakpoint', () => {
    const { container } = render(<Header />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('hidden');
    expect(nav?.className).toContain('md:flex');
  });
});
