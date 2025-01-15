
export default function EventHandlerComponent() {

    const clickHandler = (e: any) => {
        console.log('Click rilevato', e.target.innerText)
    }

    return (
        <div className="my-component">
            <button onClick={clickHandler}>Test</button>
            <button onClick={(e) => clickHandler(e)}>Prova</button>
        </div >
    )
}