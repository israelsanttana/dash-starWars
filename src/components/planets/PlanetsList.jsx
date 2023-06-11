import { useState, useEffect } from "react";
import axios from "axios";

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
                            key={planet.name}>
                            <h2> Planet: {planet.name} </h2>
                        </div>
                    ))
                    }
                </div>
            )}

        </>
    )
}