import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./planets.module.css"

export function PlanetsList() {

    const [planetData, setPlanetData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoader, setisLoader] = useState(false);

    const getPlanets = async () => {
        setisLoader(true)
        try {
            const res = await axios.get(
                `https://swapi.dev/api/planets/?page=${currentPage}&search=${searchQuery}`
            );

            const data = res.data;
            setPlanetData(data);
            setTotalPages(Math.ceil(data.count / 10));
            setisLoader(false);


        } catch (error) {
            console.log(error)

        };

    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFilter = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        getPlanets();

    };

    useEffect(() => {
        getPlanets();
    }, [currentPage]);

    const clearInput = (e) => {
        setSearchQuery(e.target.value)
        if (e.target.value === "") {
            getPlanets();
        }
    };





    return (
        <section>
            <div className="container">
                <div className="controller">
                    <div className="filter">
                        <form onSubmit={handleFilter}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={clearInput}
                                placeholder="Search..."
                            />
                            <button> Filter</button>
                        </form>
                    </div>

                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {isLoader && (<div className="loader"></div>)}
            {planetData && (<div className="container">
                <div className="card_container">
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
                    ))}
                </div>
            </div>)}



        </section>
    )
}