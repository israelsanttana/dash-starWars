import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./planets.module.css"

export function PlanetsList() {

    const [planetData, setPlanetData] = useState(null);

    const getPlanets = async () => {

        try {
            const res = await axios.get(
                "https://swapi.dev/api/planets/"
            );

            const data = res.data;
            setPlanetData(data);


        } catch (error) {
            console.log(error)

        };

    };


    useEffect(() => {
        getPlanets();

    }, []);


    return (
        <>
            {!planetData ? <p>Cerregando...</p> : (
                <div>
                    {planetData.results.map((planet) => (
                        <div
                            key={planet.name} className={styles.card}>
                            <h2> Planet: {planet.name}</h2>
                            <h3>Climate: {planet.climate}</h3>
                            <h3>Gravity: {planet.gravity}</h3>
                            <h3>terrain: {planet.terrain}</h3>
                            <h3>Population: {planet.population}</h3>
                            <h3>Diameter: {planet.diameter} </h3>
                        </div>
                    ))
                    }
                </div>
            )}

        </>
    )
}