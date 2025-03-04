import { FC, useEffect, useState } from "react";
import { Photo } from "../models/Models";
import axios_instance, { SEARCH_URL } from "../http/config";
import './Gallery.scss'
const Gallery: FC<{ search: string }> = ({ search }) => {
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() => {
        const fetch = async () => {
            var response = await axios_instance.get<Photo[]>(`${SEARCH_URL}?query=${search}`)
            setPhotos(response.data)
        }
        if (search.length) fetch()
    }, [search])
    return (
        <div className="gallery">
            <h2>Ricerca: {search}</h2>
            {photos.map(p => (
                <img src={p.src.tiny} alt={p.alt} />
            ))}
            <div className="credits">
                <span>Photos provided by</span>
                <a href="https://www.pexels.com">
                    <img src="https://images.pexels.com/lib/api/pexels-white.png" height={30} />
                </a>
            </div>
        </div>
    )
}

export default Gallery