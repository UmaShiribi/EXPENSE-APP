import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import PaginationChart from './PaginationChart';

const ChartTableExpense = (props) => {
    const { result } = props
    // pagiNation
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(3)

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = result.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(result.length / recordsPerPage)

    return (
        <div>
            <Table striped bordered hover >
                <thead>
                    <th>Category title</th>
                    <th>Total Expenses</th>
                </thead>
                <tbody>
                    {
                        currentRecords.map((expense, i) => {
                            return <tr key={i}>
                                <td>{expense.titleCategory}</td>
                                <td>{expense.sum}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <PaginationChart
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default ChartTableExpense