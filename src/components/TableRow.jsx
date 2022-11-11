import React from 'react';
import TableAction from './TableAction'


const TableRow = (props) => {

    const showStudentDeatails = () => {
        {/*ToDo*/}
    };

    return (
        <table className="table table-hover">
            <tbody>
                {
                    props.studentList.map(
                        student =>
                            <tr key={student.id}>
                                <td>{student.firstName} </td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.country}</td>
                                <td>{student.city}</td>
                                <td>
                                    <TableAction
                                      studentId={student.id}
                                      showStudentDeatails={showStudentDeatails}
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