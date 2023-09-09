import { useEffect, useState } from "react";


function Meal() {
    const [mealData, setMealData] = useState();
    const [error, setError] = useState();


    useEffect(() => {
        const getMealData = async () => {

            try {
                let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php"
                );
                if (response.status === 200) {
                    let data = await response.json();
                    setMealData(data.meals[0]);
                } else {
                    setError('Error fetching meal data:')
                }
            } catch (error) {
                setError('Error', error)
            }
        };
        getMealData();

    }, [])


    return (

        <div>
      <h2 className="green-text">Bon Appétit</h2>

            {mealData && (
                <div className="meal">
                    <h3>{mealData.strMeal}</h3>
                    <img src={mealData.strMealThumb} alt={mealData.strMeal}
                        className="meal-image"


                    />
                    <p>{error} </p>
                </div>
            )}
        </div>
    );
}

export default Meal;
