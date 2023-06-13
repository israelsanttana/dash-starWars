import { useState, useEffect } from "react"
import styles from "./films.module.css"
import axios from "axios"


export function FilmsList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoader, setisLoader] = useState(false)
    const [filmsListData, setFilmsListData] = useState(null);

    const getFilms = async () => {
        setisLoader(true)
        try {
            const res = await axios.get(
                `https://swapi.dev/api/films/?page=${currentPage}&search=${searchQuery}`
            );

            const data = res.data;
            setFilmsListData(data);
            setTotalPages(Math.ceil(data.count / 10));
            setisLoader(false)


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
        getFilms();

    };

    useEffect(() => {
        getFilms();
    }, [currentPage]);

    const clearInput = (e) => {
        setSearchQuery(e.target.value)
        if (e.target.value === "") {
            getFilms();
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
            {filmsListData && (<div className="container">
                <div className="card_container">
                    {filmsListData.results.map((films) => (
                        <div className={styles.card} key={films.title}>
                            <h2> {films.title} </h2>
                            <h3>Episode: {films.episode_id} </h3>
                            <h3>Release date: {films.release_date} </h3>
                            <h3>Opening text: <br /> {films.opening_crawl}</h3>
                            <h3>Director: {films.director} </h3>
                            <h3>Producer: {films.producer} </h3>
                        </div>
                    ))}
                </div>
            </div>)}

        </section>
    )
}