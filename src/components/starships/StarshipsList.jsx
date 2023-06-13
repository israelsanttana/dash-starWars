import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./starships.module.css"

export function StarshipsList() {

    const [starshipListData, setStarshipListData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoader, setisLoader] = useState(false);

    const getStarships = async () => {

        try {
            setisLoader(true);
            const res = await axios.get(
                `https://swapi.dev/api/starships/?page=${currentPage}&search=${searchQuery}`
            )
            const data = res.data
            setStarshipListData(data);
            setTotalPages(Math.ceil(data.count / 10));
            setisLoader(false);

        } catch (error) {
            console.log(error)
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
        getStarships()

    };

    useEffect(() => {
        getStarships()
    }, [currentPage]);

    const clearInput = (e) => {
        setSearchQuery(e.target.value)
        if (e.target.value === "") {
            getStarships()
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
            {starshipListData && (<div className="container">
                <div className="card_container">
                    {starshipListData.results.map((model) => (
                        <div className={styles.card} key={model.name}>
                            <h2>Model: {model.model} </h2>
                            <h3>Manufacturer: {model.manufacturer} </h3>
                            <h3>
                                Max atmosphering speed:
                                {model.max_atmosphering_speed}
                            </h3>
                            <h3>Cost in credits: {model.cost_in_credits} </h3>
                            <h3>Passengers: {model.passengers} </h3>
                            <h3>Hyperdrive rating: {model.hyperdrive_rating} </h3>
                        </div>
                    ))}
                </div>
            </div>)}
        </section>
    )
}