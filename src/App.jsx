import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { Gifgrid } from "./Gifgrid";
import './style.css';

export const App = () => {



    const [categories, setCategories] = useState(['']);
    
    const handleAddCategory = (value) => {
        setCategories([value, ...categories])
    }

    const handleReset = () => {
        setCategories(['']);
    }

    const handleFilter = (category) =>{
        const catFiltred = categories.filter(fitem=> fitem !== category)
        console.log(category)
        setCategories( catFiltred )                    
    }

    return (
        <>
            <h1>
                {console.log(categories.id)}
                <span className="move">GifApp</span>
            </h1>

            <AddCategory handleReset={handleReset} handleAddCategory={handleAddCategory} />

            {
                categories.map((category => <Gifgrid handleFilter={handleFilter} key={category} category={category} />))
            }

        </>
    )

}