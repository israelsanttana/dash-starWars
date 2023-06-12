import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./people.module.css";

export function PeopleList() {
    const [peopleData, setPeopleData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoader, setisLoader] = useState(false)

    const getPeople = async () => {
        setisLoader(true)
        try {
            const res = await axios.get(
                `https://swapi.dev/api/people/?page=${currentPage}&search=${searchQuery}`
            );
            const data = res.data;
            setPeopleData(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            setisLoader(false)
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

    const handleFilter = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        getPeople();

    };

    useEffect(() => {
        getPeople();
    }, [currentPage]);

    const clearInput = (e) => {
        setSearchQuery(e.target.value)
        if (e.target.value === "") {
            getPeople();

        }
    };


    return (
        <section className={styles.people_container}>
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
                            <button>Filter</button>
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
            {peopleData && (<div className="container">
                <div className="card_container">
                    {peopleData.map((person) => (
                        <div className={styles.card} key={person.name}>
                            <h2>Name: {person.name}</h2>
                            <h3>Height: {person.height}cm</h3>
                            <h3>Mass: {person.mass} kg</h3>
                            <h3>Gender: {person.gender}</h3>
                            <h3>Birth year: {person.birth_year}</h3>
                        </div>
                    ))}
                </div>
            </div>)}
        </section>
    );
}
