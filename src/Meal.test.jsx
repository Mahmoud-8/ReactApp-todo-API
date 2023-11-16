import { test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import Meal from './Meal';

const handlers = [
  http.get('https://www.themealdb.com/api/json/v1/1/random.php', (req, res,) => {
    return res(HttpResponse.json({
      meals: [
        {
          strMeal: 'Mocked Meal',
          strMealThumb: '',
        },
      ],
    }));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders Meal component with mocked data', async () => {
  render(<Meal />);

  const mealTitle = await screen.findByText('Mocked Meal');

  expect(mealTitle).toBeInTheDocument();
});
