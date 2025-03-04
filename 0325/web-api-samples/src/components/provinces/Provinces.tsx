import { FC, useEffect, useState } from "react";
import { Province } from "../../models/Province";
import axios from "axios";
import { PROVINCES_URL } from "../http_config";
import './Provinces.scss'
interface ProvincesProps {
    onProvinceSelected?: (acronym: string) => void;
}

const Provinces: FC<ProvincesProps> = ({ onProvinceSelected }) => {
    const [provinces, setProvinces] = useState<Province[]>([]);
    useEffect(() => {
        const fetchProvinces = () => {
            axios.get<Province[]>(PROVINCES_URL)
                .then(response => {
                    setProvinces(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        fetchProvinces();
    }, []);
    return (
        <div>
            <h2>Province Italiane</h2>
            <ul>
                {provinces.map((province) => (
                    <li key={province.id} onClick={() => onProvinceSelected && onProvinceSelected(province.acronym)}>
                        {province.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Provinces;