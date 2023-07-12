import React, { useState, useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from "../store/appContext"
function Vehicledescription() {

    let params = useParams()

    const { store, actions } = useContext(Context)
    let vehicle = store.vehicles.find((item, index) => index == params.id)
    return (

        <div>
            <h1>{vehicle && vehicle.name}</h1>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.id) + 1}.jpg`}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='d-flex gap-5'>
                <section>
                    <h3> model </h3>

                    <p>{vehicle && vehicle.model}</p>
                </section>
                <section>
                    <h3> manufacturer </h3>

                    <p>{vehicle && vehicle.manufacturer}</p>
                </section>
                <section>
                    <h3> passengers </h3>

                    <p>{vehicle && vehicle.passengers}</p>
                </section>

            </div>
        </div>
    )
}
export default Vehicledescription