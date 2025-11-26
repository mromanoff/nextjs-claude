import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: 'Modal content',
  };

  it('renders children correctly when open', () => {
    render(<Modal {...defaultProps}>Test Content</Modal>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false}>Test Content</Modal>);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Modal {...defaultProps} title="Test Title">Content</Modal>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies default size (md) when no size is specified', () => {
    const { container } = render(<Modal {...defaultProps}>Content</Modal>);
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    expect(modal?.className).toContain('max-w-md');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Modal {...defaultProps} size="sm">Content</Modal>);
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    expect(modal?.className).toContain('max-w-sm');
  });

  it('applies medium size correctly', () => {
    const { container } = render(<Modal {...defaultProps} size="md">Content</Modal>);
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    expect(modal?.className).toContain('max-w-md');
  });

  it('applies large size correctly', () => {
    const { container } = render(<Modal {...defaultProps} size="lg">Content</Modal>);
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    expect(modal?.className).toContain('max-w-2xl');
  });

  it('applies default variant (primary) when no variant is specified', () => {
    const { container } = render(<Modal {...defaultProps} title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-blue-500');
  });

  it('applies primary variant correctly', () => {
    const { container } = render(<Modal {...defaultProps} variant="primary" title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-blue-500');
  });

  it('applies secondary variant correctly', () => {
    const { container } = render(<Modal {...defaultProps} variant="secondary" title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-purple-500');
  });

  it('applies success variant correctly', () => {
    const { container } = render(<Modal {...defaultProps} variant="success" title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-green-500');
  });

  it('applies danger variant correctly', () => {
    const { container } = render(<Modal {...defaultProps} variant="danger" title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-red-500');
  });

  it('applies warning variant correctly', () => {
    const { container } = render(<Modal {...defaultProps} variant="warning" title="Title">Content</Modal>);
    const header = screen.getByText('Title').parentElement as HTMLElement;
    expect(header?.className).toContain('bg-amber-500');
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Modal {...defaultProps} onClose={handleClose}>Content</Modal>);

    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    const { container } = render(<Modal {...defaultProps} onClose={handleClose}>Content</Modal>);

    const backdrop = container.querySelector('[role="dialog"]') as HTMLElement;
    await user.click(backdrop);

    // Wait for the setTimeout to execute (150ms delay for visual feedback)
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it('does not call onClose when modal content is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Modal {...defaultProps} onClose={handleClose}>Content</Modal>);

    const content = screen.getByText('Content');
    await user.click(content);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('shows close button by default', () => {
    render(<Modal {...defaultProps}>Content</Modal>);
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(<Modal {...defaultProps} showCloseButton={false}>Content</Modal>);
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Modal {...defaultProps} className="custom-class">Content</Modal>);
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    expect(modal?.className).toContain('custom-class');
  });

  it('has proper ARIA attributes', () => {
    render(<Modal {...defaultProps} title="Test Title">Content</Modal>);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('has backdrop with semi-transparent styling', () => {
    const { container } = render(<Modal {...defaultProps}>Content</Modal>);
    const backdrop = container.querySelector('[role="dialog"]') as HTMLElement;
    expect(backdrop?.className).toContain('bg-black/50');
    expect(backdrop?.className).toContain('backdrop-blur-sm');
  });

  it('combines size, variant, and custom className', () => {
    const { container } = render(
      <Modal {...defaultProps} size="lg" variant="success" title="Title" className="extra-class">
        Content
      </Modal>
    );
    const modal = container.querySelector('[role="dialog"]')?.firstChild as HTMLElement;
    const header = screen.getByText('Title').parentElement as HTMLElement;

    expect(modal?.className).toContain('max-w-2xl');
    expect(modal?.className).toContain('extra-class');
    expect(header?.className).toContain('bg-green-500');
  });
});
