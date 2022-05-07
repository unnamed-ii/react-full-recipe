import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link, useParams} from 'react-router-dom'

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=199d68749e454adf9d8fa4242595561e&cuisine=${name}`);
        const data = await api.json();
        setCuisine(data.results)
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])

    return (
        <motion.div className="cuisine-grid"
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
        >

            {cuisine.map((i) =>
                <div className="cuisine-card" key={i.id}>
                    <Link to={'/recipe/'+i.id}>
                        <img src={i.image} alt=""/>
                        <h4>{i.title}</h4>
                    </Link>
                </div>
            )}
        </motion.div>
    )
}

export default Cuisine;