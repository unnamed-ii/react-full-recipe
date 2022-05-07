import React, {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Popular() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        navigate('/searched/'+input)
    }

    return (
        <form className="search-form" onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Popular;