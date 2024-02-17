import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./dashboardList.module.css";
import iconDeathStar from "../../assets/death-Star.png";
import iconR2d2 from "../../assets/r2d2.png";
import iconStarship from "../../assets/starship.png";
import iconStormtrooper from "../../assets/stormtrooper.png";

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
                    <div className={styles.total_card}>
                        <img src={iconStormtrooper} width={80} alt="" />
                        <h2> Total employees: <span>{peopleCount}</span></h2>
                    </div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias asperiores fugiat quos dolores et facere amet dolor reprehenderit odio totam vitae, nisi nihil id quaerat omnis libero quam provident delectus?
                    </h3>

                </div>
                <div className={styles.offices}>
                    <div className={styles.total_card}>
                        <img src={iconDeathStar} width={80} alt="" />
                        <h2> Total offices: <span>{planetsCount}</span></h2>

                    </div>

                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias asperiores fugiat quos dolores et facere amet dolor reprehenderit odio totam vitae, nisi nihil id quaerat omnis libero quam provident delectus?
                    </h3>
                </div>
                <div className={styles.fleet}>
                    <div className={styles.total_card}>
                        <img src={iconStarship} width={80} alt="" />
                        <h2>Total fleet: <span>{starshipsCount}</span></h2>
                    </div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias asperiores fugiat quos dolores et facere amet dolor reprehenderit odio totam vitae, nisi nihil id quaerat omnis libero quam provident delectus?
                    </h3>
                </div>
                <div className={styles.projects}>
                    <div className={styles.total_card}>
                        <img src={iconR2d2} width={70} alt="" />
                        <h2> Total projects: <span>{filmsCount}</span></h2>
                    </div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias asperiores fugiat quos dolores et facere amet dolor reprehenderit odio totam vitae, nisi nihil id quaerat omnis libero quam provident delectus?
                    </h3>
                </div>
            </div>
        </div>
    );
}
