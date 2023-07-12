import React,{useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Charactercard from "../component/charactercard";
import Vehiclecard from "../component/vehiclecard";
import Planetcard from "../component/planetcard";
import { Context } from "../store/appContext";

export const Home = () =>{
	const {store,actions}=useContext(Context)
	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>	
			<div className="d-flex overflow-auto">
			{store.characters.map((character,index)=>{return<div>
			<Charactercard character={character}index={index}/>
			</div>})}
				</div>
				<h1>Planets</h1>	
			<div className="d-flex overflow-auto">
			{store.planets.map((planet,index)=>{return<div>
			<Planetcard planet={planet}index={index}/>
			</div>})}
				</div>
				<h1>Vehicles</h1>	
			<div className="d-flex overflow-auto">
			{store.vehicles.map((vehicle,index)=>{return<div>
			<Vehiclecard vehicle={vehicle}index={index}/>
			</div>})}
				</div>
		</div>
	);
} 
