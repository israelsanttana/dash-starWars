import axios from "axios";
import { useEffect, useState } from "react"


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
        <div>
            <div>
                {peopleData && (
                    <ul>
                        {peopleData.results.map((name) => (
                            <li key={name.name}>{name.name}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                {peopleData && (
                    <ul>
                        {peopleData.results.map((age) => (
                            <li key={age.height}>{age.height}</li>
                        ))}
                    </ul>
                )}

            </div>

        </div>

    )
};