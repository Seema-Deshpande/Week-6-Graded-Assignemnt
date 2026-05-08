import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import QuestionDetail from '../../../src/pages/Question/QuestionDetail.jsx';

describe('QuestionDetail', () => {
  it('shows a loading state initially', () => {
    render(<QuestionDetail id="q1" />);
    expect(screen.getByText(/Loading question/i)).toBeInTheDocument();
  });

  it('renders question title after loading', async () => {
    render(<QuestionDetail id="q1" />);
    await waitFor(() => {
      expect(screen.getByText(/How do I center a div using CSS Flexbox/i)).toBeInTheDocument();
    });
  });

  it('renders the answer list with answer count', async () => {
    render(<QuestionDetail id="q1" />);
    await waitFor(() => {
      expect(screen.getByText(/3 Answers/i)).toBeInTheDocument();
    });
  });

  it('renders the answer form', async () => {
    render(<QuestionDetail id="q1" />);
    await waitFor(() => {
      expect(screen.getByText('Your Answer')).toBeInTheDocument();
    });
  });

  it('shows not found message for invalid id', async () => {
    render(<QuestionDetail id="invalid" />);
    await waitFor(() => {
      expect(screen.getByText(/Question not found/i)).toBeInTheDocument();
    });
  });
});