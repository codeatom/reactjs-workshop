import React from 'react';


const TableHeader = (props) => {
    return (
        <table className="table table-hover mt-5">
            <thead className="table-dark">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    );

}

export default TableHeader;