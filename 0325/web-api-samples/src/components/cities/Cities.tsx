import { FC, useEffect, useState } from "react";
import { City } from "../../models/City";
import axios from "axios";
import axios_instance from "../http_config";
import { CITIES_BY_PROVINCE_URL } from "../http_config";
import './Cities.scss'
const Cities: FC<{ acronym?: string }> = ({ acronym }) => {
    const [cities, setCities] = useState<City[]>([]);
    useEffect(() => {
        const fetchCities = (acronym: string) => {
            axios_instance.get<City[]>(CITIES_BY_PROVINCE_URL.replace('ACRONYM', acronym))
                .then(response => {
                    setCities(response.data);
                })
                .catch(error => {
                    console.log("Error code", error.code)
                    if (acronym && error.code === 'ERR_NETWORK')
                        setTimeout(() => fetchCities(acronym), 2000);

                });
        }
        if (acronym) fetchCities(acronym);
    }, [acronym]);
    return (
        <div className="cities">
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