import { useSelector } from "react-redux"
import { RootState } from "../../store-management/store"

export default function ShowCurrentWeather() {
    const wheather = useSelector((s: RootState) => s.wheather)
    return (
        <div className="show-current-weather">
            <div className='location'>{wheather.data.location.name}</div>
            <div className='description'>{wheather.data.current.condition.text}</div>
            <div className='icon'><img src={wheather.data.current.condition.icon} /></div>
        </div>
    )
}