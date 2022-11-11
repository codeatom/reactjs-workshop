import React from 'react';
import TableAction from './TableAction'


const TableRow = (props) => {
    return (
        <table className="table table-hover">
            <tbody>
                {
                    props.studentList.map(
                        student =>
                            <tr key={student.id} className='center-text'>
                                <td>{student.firstName} </td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.country}</td>
                                <td>{student.city}</td>
                                <td>
                                    <TableAction
                                      studentId={student.id}
                                      showStudentDetails={props.showStudentDetails}
                                    />
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    );

}

export default TableRow;