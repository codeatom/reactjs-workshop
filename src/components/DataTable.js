import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader'
import TableRow from './TableRow'


const DataTable = (props) => {
    const [studentList, setStudentList] = useState([]);
    
    useEffect(() => {
        initStudentList();
    }, []);

    const initStudentList = () => {
        const students = [];

        students.push({ id: 1, firstName: "Chris", lastName: "Christopher", age: 50, country: "Sweden", city: "karlskrona" });
        students.push({ id: 2, firstName: "Luci", lastName: "Lucky", age: 40, country: "Sweden", city: "karlskrona" });
        students.push({ id: 3, firstName: "Anto", lastName: "Anthony", age: 30, country: "Sweden", city: "karlskrona" });
        students.push({ id: 4, firstName: "Joe", lastName: "Joey", age: 50, country: "Sweden", city: "karlskrona" });

        setStudentList(students);
    };

    return (
        <div>
            <div className='container'>
                <TableHeader />
                <TableRow
                    studentList={studentList}
                />
            </div>
        </div>
    );

}

export default DataTable;