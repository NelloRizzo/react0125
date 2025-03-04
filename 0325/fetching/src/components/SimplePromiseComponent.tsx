import { useEffect, useState } from "react";

const SimplePromiseComponent = () => {
    const [data, setData] = useState<string>('Waiting for promise');
    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
        const fetchData = async () => {
            const promise = new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    const rnd = Math.floor(Math.random() * 10);
                    if (rnd < 5) {
                        reject('Promise rejected ' + rnd);
                    }
                    resolve('Promise resolved ' + rnd);
                }, 3000);
            })
            try {
                const value = await promise;
                setData(value);
            } catch (error) {
                console.error(error);
                setData('Error occurred');
            }
        }
        fetchData();
        /*        promise.then((value) => {
                    setData(value);
                }).catch((error) => {
                    console.error(error);
                    setData('Error occurred');
                });*/
    }, []);

    return (
        <div className="simple-promise">
            <h2>Simple Promise</h2>
            <div>{time.toLocaleTimeString()}</div>
            <div>
                {data}
            </div>
        </div>
    );
}
export default SimplePromiseComponent;