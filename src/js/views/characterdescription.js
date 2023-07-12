import React, { useState, useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from "../store/appContext"
function Characterdescription() {

    let params = useParams()

    const { store, actions } = useContext(Context)
    let character = store.characters.find((item, index) => index == params.id)
    console.log(character)
    return (

        <div>
            <h1>{character && character.name}</h1>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.id) + 1}.jpg`}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='d-flex gap-5'>
                <section>
                    <h3> height </h3>

                    <p>{character && character.height}</p>
                </section>
                <section>
                    <h3> mass </h3>

                    <p>{character && character.mass}</p>
                </section>
                <section>
                    <h3> birth year </h3>

                    <p>{character && character.birth_year}</p>
                </section>

            </div>
        </div>
    )
}
export default Characterdescription