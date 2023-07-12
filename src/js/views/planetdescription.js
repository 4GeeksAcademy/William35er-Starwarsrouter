import React, { useState, useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from "../store/appContext"
function Planetdescription() {
   
    let params = useParams()
    
    const {store,actions}=useContext(Context)
    let planet = store.planets.find((item,index)=>index==params.id)
    return (

        <div>
            <h1>{planet && planet.name}</h1>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.id)+1}.jpg`}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='d-flex gap-5'>
                <section>
                    <h3> terrain </h3>

                    <p>{planet && planet.terrain}</p>
                </section>
                <section>
                    <h3> climate </h3>

                    <p>{planet && planet.climate}</p>
                </section>
                <section>
                    <h3> gravity </h3>

                    <p>{planet && planet.gravity}</p>
                </section>

            </div>
        </div>
    )
}
export default Planetdescription