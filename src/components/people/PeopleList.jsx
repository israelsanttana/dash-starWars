import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./people.module.css";

export function PeopleList() {
    const [peopleData, setPeopleData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const getPeople = async () => {
        try {
            const res = await axios.get(
                `https://swapi.dev/api/people/?page=${currentPage}&search=${searchQuery}`
            );
            const data = res.data;
            setPeopleData(data.results);
            setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 results per page
        } catch (error) {
            console.log(error);
        }
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

    const handleFilter = () => {
        setCurrentPage(1);
        getPeople();
    };

    useEffect(() => {
        getPeople();
    }, [currentPage, searchQuery]);

    return (
        <section className={styles.people_container}>
            <div className="container">
                <div className={styles.controller}>

                    <div className={styles.filter}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                        />
                        <button onClick={handleFilter}>Filter</button>
                    </div>

                    <div className={styles.pagination}>
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

            {!peopleData ? (
                <div className="loader"></div>
            ) : (
                <div className="container">
                    <div className={styles.card_container}>
                        {peopleData.map((person) => (
                            <div className={styles.card} key={person.name}>
                                <h2>Name: {person.name}</h2>
                                <h3>Height: {person.height}cm</h3>
                                <h3>Mass: {person.mass} kg</h3>
                                <h3>Gender: {person.gender}</h3>
                                <h3>Birth year: {person.birth_year}</h3>
                                {/* <h3>Homeworld: {person.homeworld}</h3>
                            <h3>Films: {person.films}</h3> */}
                            </div>
                        ))}
                    </div>
                </div>
            )}


        </section>
    );
}
