import React from 'react';


const TableAction = (props) => {
    return (
        <button className='btn btn-outline-primary' onClick={()=> {props.showStudentDetails(props.studentId)}}>
            Detail
        </button>
    );

}

export default TableAction;