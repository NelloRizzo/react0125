import { FC, useEffect, useState } from "react";
import { Province } from "../../models/Province";
import axios from "axios";
import axios_instance from "../http_config";
import { PROVINCES_URL } from "../http_config";
import './Provinces.scss'
interface ProvincesProps {
    onProvinceSelected?: (acronym: string) => void;
}

const Provinces: FC<ProvincesProps> = ({ onProvinceSelected }) => {
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [wait, setWait] = useState<boolean>(false);

    const cancelationTokenSource = axios.CancelToken.source();

    useEffect(() => {
        setWait(true)
        const fetchProvinces = () => {
            axios_instance.get<Province[]>(PROVINCES_URL, { cancelToken: cancelationTokenSource.token })
                .then(response => {
                    setProvinces(response.data);
                    setWait(false);
                })
                .catch(error => {
                    console.log("Error code", error.code)
                    setWait(true);
                    if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED') {
                        console.log('Network Error attempt to reconnect...', error.message);
                        setTimeout(fetchProvinces, 2000);
                    }
                    else if (axios.isCancel(error)) {
                        console.log('Request canceled', error.message);
                        setWait(false);
                    }
                });
        }
        fetchProvinces();
    }, []);

    function handleCancelRequest(): void {
        console.log('Request canceled');
        cancelationTokenSource.cancel('Request canceled');
    }

    return (
        <div className={wait ? 'wait provinces' : 'provinces'}>
            <h2>Province Italiane</h2>
            <button onClick={handleCancelRequest}>Cancel Request</button>
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