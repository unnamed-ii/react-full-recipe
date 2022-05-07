import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=199d68749e454adf9d8fa4242595561e`)
        const detailData = await data.json();
        setDetails(detailData)
    }

    console.log(details)

    useEffect(() => {
        fetchDetails()
    }, [params.name])

    return (
        <div className="detail-wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt=""/>
            </div>
            <div className="detail-info">
                <button className={activeTab === "instructions" ? "btn active" : "btn"}
                        onClick={() => setActiveTab('instructions')}>Instructions
                </button>
                <button className={activeTab === "ingredients" ? "btn active" : "btn"}
                        onClick={() => setActiveTab('ingredients')}>Ingredients
                </button>
                {activeTab === 'instructions'
                    ?
                    <div className="instructions-text">
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}/>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}/>
                    </div>
                    :
                    <ul>
                        {details.extendedIngredients && details.extendedIngredients.map((i) =>
                            <li key={i.id}>
                                {i.original}
                            </li>
                        )}
                    </ul>}

            </div>
        </div>
    )
}

export default Recipe;