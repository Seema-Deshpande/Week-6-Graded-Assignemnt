import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Home from '../../../src/pages/Question/Home.jsx';

describe('Home', () => {
  it('renders the Ask Question button', async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText('Ask Question')).toBeInTheDocument();
    });
  });

  it('shows a loading spinner initially', () => {
    render(<Home />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders questions after loading', async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(/How do I center a div using CSS Flexbox/i)).toBeInTheDocument();
    });
  });

  it('displays the question count after loading', async () => {
    render(<Home />);
    await waitFor(() => {
      const subtitle = document.querySelector('.home-subtitle');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle.textContent).toContain('20');
    });
  });

  it('alerts when Ask Question button is clicked', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Home />);
    const btn = await screen.findByText('Ask Question');
    await userEvent.click(btn);
    expect(alertSpy).toHaveBeenCalledWith('Ask Question clicked');
    alertSpy.mockRestore();
  });
});