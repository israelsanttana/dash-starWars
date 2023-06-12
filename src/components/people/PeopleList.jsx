import axios from "axios";
import { useEffect, useState } from "react"
import styles from "./people.module.css"


export function PeopleList() {

    const [peopleData, setPeopleData] = useState(null);

    const getPeople = async () => {

        try {
            const res = await axios.get(
                "https://swapi.dev/api/people/"
            );

            const data = res.data;
            setPeopleData(data);


        } catch (error) {
            console.log(error)

        };

    };


    useEffect(() => {
        getPeople();

    }, []);


    return (
        <>

            {!peopleData ? <p>Carregando...</p> : (
                <div className={styles.cardName}>
                    {peopleData.results.map((person) => (
                        <div className={styles.card}
                            key={person.name}
                        >
                            <h2>Name: {person.name}</h2>
                            <h3>Height: {person.height}cm</h3>
                            <h3>Mass: {person.mass} kg</h3>
                            <h3>Gender: {person.gender}</h3>
                            <h3>Birth year:{person.birth_year} </h3>
                            <h3>Homeworld: {person.homeworld}</h3>
                            <h3>Films: {person.films}</h3>


                        </div>
                    ))}
                </div>
            )}

        </>


    )
};