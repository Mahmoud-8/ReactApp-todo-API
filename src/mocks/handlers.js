import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://www.themealdb.com/api/json/v1/1/random.php', (req, res) => {
    return res(
      new HttpResponse({
        body: {
          meals: [
            {
              strMeal: 'Mocked Meal',
              strMealThumb: 'mocked-image.jpg',
            },
          ],
        },
      })
    );
  }),
];
