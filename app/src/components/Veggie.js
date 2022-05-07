import {Splide, SplideSlide} from "@splidejs/react-splide";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie')

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=199d68749e454adf9d8fa4242595561e&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
    }

    return (
        <div>
            <div className="recipe-wrapper_card">
                <h3>Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: '5rem'
                }}>
                    {veggie.map((recipe) =>
                        <SplideSlide key={recipe.id}>
                            <div className="recipe-wrapper_card">
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <div className="recipe-wrapper_gradient"/>
                                </Link>
                            </div>
                        </SplideSlide>
                    )}
                </Splide>
            </div>
        </div>
    )
}

export default Veggie;