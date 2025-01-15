import TableRow from '../table-row/TableRow'
import './Table.scss'
interface TableProps {
    number: number
}
export default function Table({ number }: TableProps) {
    return (
        <div className="table">
            {
                Array.from({ length: 10 }).map((_, i) => (
                    <TableRow first={number} second={i+1}></TableRow>
                ))
            }
        </div>
    )
}