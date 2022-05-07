import React, {useEffect, useState} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import {Link} from "react-router-dom";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular')

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=199d68749e454adf9d8fa4242595561e&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    return (
        <div>
            <div className="recipe-wrapper_card">
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: '5rem'
                }}>
                    {popular.map((recipe) =>
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

export default Popular;