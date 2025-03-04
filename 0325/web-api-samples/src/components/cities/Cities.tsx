import { FC, useEffect, useState } from "react";
import { City } from "../../models/City";
import axios from "axios";
import { CITIES_BY_PROVINCE_URL } from "../http_config";

const Cities: FC<{ acronym?: string }> = ({ acronym }) => {
    const [cities, setCities] = useState<City[]>([]);
    useEffect(() => {
        const fetchCities = (acronym: string) => {
            axios.get<City[]>(CITIES_BY_PROVINCE_URL.replace('ACRONYM', acronym))
                .then(response => {
                    setCities(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        if (acronym) fetchCities(acronym);
    }, [acronym]);
    return (
        <div>
            <h2>Città Italiane</h2>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cities;