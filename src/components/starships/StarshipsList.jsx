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
            {!starshipListData ? <p>Carregando...</p> : (
                <div>
                    {starshipListData.results.map((model) => (
                        <div className={styles.card} key={model.name}>
                            <h2>Model: {model.model} </h2>

                        </div>
                    ))}
                </div>
            )}



        </>
    )
}