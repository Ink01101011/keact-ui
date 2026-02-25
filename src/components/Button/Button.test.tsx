import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary-500');
    expect(button).toHaveClass('text-white');
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="secondary">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-500');

    rerender(<Button variant="outline">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('border');
    expect(screen.getByRole('button')).toHaveClass('border-primary-500');

    rerender(<Button variant="ghost">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3');
    expect(screen.getByRole('button')).toHaveClass('py-2');
    expect(screen.getByRole('button')).toHaveClass('text-sm');

    rerender(<Button size="lg">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-5');
    expect(screen.getByRole('button')).toHaveClass('py-3');
    expect(screen.getByRole('button')).toHaveClass('text-lg');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading state', () => {
    render(<Button loading>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('pointer-events-none');
  });

  it('applies fullWidth class when fullWidth prop is true', () => {
    render(<Button fullWidth>Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Button</Button>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });
});
