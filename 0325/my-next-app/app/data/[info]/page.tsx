'use client'
import { NextPage } from "next";
import { useParams } from "next/navigation";

const MyPage: NextPage = () => {
    const params = useParams()
    const { info } = params

    return (
        <div className="my-page">
            <h1>My Page Info</h1>
            <p>{info}</p>
        </div>
    )
}

export default MyPage