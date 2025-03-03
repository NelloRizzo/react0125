import { FC } from "react";

const MinutesViewer: FC<{ minutes: number }> = ({ minutes }) => {
    return <span className="minutes bordered">{minutes.toString().padStart(2, '0')}</span>;
}

export default MinutesViewer