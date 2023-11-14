import { http } from 'msw';

export const handlers = [
  http.get('https://www.themealdb.com/api/json/v1/1/random.php', (req, res, ctx) => {
    return res(
      ctx.json({
        meals: [
          {
            strMeal: 'Mocked Meal',
            strMealThumb: 'mocked-image.jpg',
          },
        ],
      })
    );
  }),
];
