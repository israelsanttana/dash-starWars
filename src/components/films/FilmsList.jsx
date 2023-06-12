import { useState, useEffect } from "react"
import styles from "./films.module.css"
import axios from "axios"


export function FilmsList() {

    const [filmsListData, setFilmsListData] = useState(null);

    const getFilms = async () => {

        try {
            const res = await axios.get(
                "https://swapi.dev/api/films/"
            );

            const data = res.data;
            setFilmsListData(data);


        } catch (error) {
            console.log(error)

        };

    };


    useEffect(() => {
        getFilms();

    }, []);


    return (
        <>

            {!filmsListData ? <div className="loader"></div> : (
                <div className={styles.content}>
                    {filmsListData.results.map((films) => (
                        <div className={styles.card} key={films.title}>
                            <h2> {films.title} </h2>
                            <h3>Episode: {films.episode_id} </h3>
                            <h3>Release date: {films.release_date} </h3>
                            <h3>Opening text: <br /> {films.opening_crawl}</h3>
                            <h3>Director: {films.director} </h3>
                            <h3>Producer: {films.producer} </h3>
                            <h3></h3>

                        </div>
                    ))}
                </div>
            )}


        </>
    )
}