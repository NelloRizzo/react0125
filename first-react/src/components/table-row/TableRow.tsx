interface TableRowProps {
    first: number
    second: number
}
export default function TableRow({ first, second }: TableRowProps) {
    return (
        <div className="row">
            <div className="number">{first}</div>
            <div className="op">&times;</div>
            <div className="number">{second}</div>
            <div className="op">&#61;</div>
            <div className="number">{first * second}</div>
        </div>
    )
}