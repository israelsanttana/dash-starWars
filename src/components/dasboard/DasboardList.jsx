import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./dashboardList.module.css"

export function DashboardList() {
    const [isLoading, setIsLoading] = useState(true);
    const [peopleCount, setPeopleCount] = useState(0);
    const [planetsCount, setPlanetsCount] = useState(0);
    const [starshipsCount, setStarshipsCount] = useState(0);
    const [filmsCount, setFilmsCount] = useState(0);

    const getData = async () => {
        try {
            const [
                resPeople,
                resPlanets,
                resStarships,
                resFilms
            ] = await Promise.all([
                axios.get("https://swapi.dev/api/people/"),
                axios.get("https://swapi.dev/api/planets/"),
                axios.get("https://swapi.dev/api/starships/"),
                axios.get("https://swapi.dev/api/films/")
            ]);

            setPeopleCount(resPeople.data.count);
            setPlanetsCount(resPlanets.data.count);
            setStarshipsCount(resStarships.data.count);
            setFilmsCount(resFilms.data.count);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <div className="container">
            <div className={styles.dash_container}>
                <div className={styles.employees}>
                    <h2>Total de Pessoas: {peopleCount}</h2>

                </div>
                <div className={styles.offices}>
                    <h2>Total de Planetas: {planetsCount}</h2>
                </div>
                <div className={styles.fleet}>
                    <h2>Total de Starships: {starshipsCount}</h2>
                </div>
                <div className={styles.projects}>
                    <h2>Total de Filmes: {filmsCount}</h2>
                </div>
            </div>
        </div>
    );
}
