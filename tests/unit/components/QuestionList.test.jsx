import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import QuestionList from '../../../src/components/Question/QuestionList.jsx';

const mockQuestions = [
  {
    _id: 'q1',
    title: 'How do I center a div?',
    description: 'Trying to center using Flexbox.',
    tags: [{ name: 'CSS' }],
    voteCount: 23,
    views: 120,
    answers: [{ _id: 'a1', answerText: 'Use flexbox', author: { name: 'user1' }, voteCount: 5 }],
    author: { _id: 'u1', name: 'user123' },
    createdAt: '2023-10-01T12:00:00Z',
  },
  {
    _id: 'q2',
    title: 'Difference between let and const?',
    description: 'When to use let vs const.',
    tags: [{ name: 'JavaScript' }],
    voteCount: 10,
    views: 50,
    author: { _id: 'u2', name: 'devAlice' },
    createdAt: '2023-10-02T09:00:00Z',
  },
];

describe('QuestionList', () => {
  it('renders a loading spinner when loading is true', () => {
    render(<QuestionList questions={[]} loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders question titles when loading is false', () => {
    render(<QuestionList questions={mockQuestions} loading={false} />);
    expect(screen.getByText('How do I center a div?')).toBeInTheDocument();
    expect(screen.getByText('Difference between let and const?')).toBeInTheDocument();
  });

  it('renders question descriptions', () => {
    render(<QuestionList questions={mockQuestions} loading={false} />);
    expect(screen.getByText('Trying to center using Flexbox.')).toBeInTheDocument();
  });

  it('renders vote counts for questions', () => {
    render(<QuestionList questions={mockQuestions} loading={false} />);
    expect(screen.getByText('23')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders empty state when no questions are provided', () => {
    render(<QuestionList questions={[]} loading={false} />);
    expect(screen.getByText(/No questions found/i)).toBeInTheDocument();
  });
});