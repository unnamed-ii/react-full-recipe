import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=199d68749e454adf9d8fa4242595561e&query=${name}`);
        const data = await api.json();
        setSearchedRecipes(data.results)
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    return (
        <div className="cuisine-grid">
            {searchedRecipes.map((i) =>
                <div className="cuisine-card" key={i.id}>
                    <Link to={'/recipe/'+i.id}>
                        <img src={i.image} alt=""/>
                        <h4>{i.title}</h4>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Searched;