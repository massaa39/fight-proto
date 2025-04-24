import { render, screen } from '@testing-library/react';
import FighterForm from '../components/FighterForm';

test('renders form inputs and button', () => {
  render(<FighterForm />);
  expect(screen.getByPlaceholderText('選手1')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('選手2')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /予測＆記事生成/ })).toBeInTheDocument();
});
