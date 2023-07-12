const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl="https://swapi.dev/api"
	return {
		store: {
		characters:[], 
		planets:[],
		vehicles:[],
		favorites:[]

		},

		actions: {
			fetchCharacters:()=>{
				fetch(apiUrl+"/people").then(response=>response.json()).then(data=>setStore({characters:data.results})).catch(error=>console.log(error))
			},
			fetchPlanets:()=>{
				fetch(apiUrl+"/planets").then(response=>response.json()).then(data=>setStore({planets:data.results})).catch(error=>console.log(error))
			},
			fetchVehicles:()=>{
				fetch(apiUrl+"/vehicles").then(response=>response.json()).then(data=>setStore({vehicles:data.results})).catch(error=>console.log(error))
			},
			addToFavorites:(item)=>{
				let newFavorites=[...new Set([...getStore().favorites, item])]
				setStore({favorites:newFavorites})
			},
			removeFromFavorites:(targetName)=>{
				let newFavorites= getStore().favorites.filter(name=>name!=targetName)
				setStore({favorites:newFavorites})

			}

			
		}
	};
};

export default getState;
