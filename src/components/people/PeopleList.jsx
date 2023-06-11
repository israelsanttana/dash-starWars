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
                            <h2>Nome: {person.name}</h2>
                            <h3>Altura: {person.height}cm</h3>
                            <h3>Peso: {person.mass} kg</h3>
                            <h3>Gênero: {person.gender}</h3>
                            <h3>Planeta natal: </h3>
                            <h3>Filmes: </h3>
                        </div>
                    ))}
                </div>
            )}

        </>


    )
};