import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./starships.module.css"

export function StarshipsList() {

    const [starshipListData, setStarshipListData] = useState(null)

    const getStarships = async () => {

        try {
            const res = await axios.get(
                "https://swapi.dev/api/starships/"
            )
            const data = res.data
            setStarshipListData(data)

        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        getStarships()

    }, [])


    return (
        <>
            {!starshipListData ? <div className="loader"></div> : (
                <div>
                    {starshipListData.results.map((model) => (
                        <div className={styles.card} key={model.name}>
                            <h2>Model: {model.model} </h2>
                            <h3>Manufacturer: {model.manufacturer} </h3>
                            <h3>
                                Max atmosphering speed:
                                {model.max_atmosphering_speed}
                            </h3>
                            <h3>Cost in credits: {model.cost_in_credits} </h3>
                            <h3>Passengers: {model.passengers} </h3>
                            <h3>Hyperdrive rating: {model.hyperdrive_rating} </h3>

                        </div>
                    ))}
                </div>
            )}



        </>
    )
}