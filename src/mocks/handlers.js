import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://www.themealdb.com/api/json/v1/1/random.php', () => {
    return HttpResponse.json({
        
          meals: [
            {
              strMeal: 'Mocked Meal',
              strMealThumb: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
            },
          ],
      })
  
  }),
];

