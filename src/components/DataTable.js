import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import ShowStudentDetails from './ShowStudentDetails'


const DataTable = (props) => {
    const [studentList, setStudentList] = useState([]);
    const [student, setStudent] = useState({});
    const [showDetails, setShowDetails] = useState(false);

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

    const showStudentDetails = (id) => {
        setStudent(studentList[id - 1]);
        setShowDetails(true);
    }

    const hideStudentDetails = (id) => {
        setShowDetails(false);
    }

    const main =
        showDetails ? (
            <div>
                <ShowStudentDetails
                    student={student}
                    hideStudentDetails={hideStudentDetails}
                />
            </div>
        ) :
            (
                <table className="table table-hover mt-5">
                    <TableHeader />
                    <TableRow
                        studentList={studentList}
                        showStudentDetails={showStudentDetails}
                    />
                </table>
            );


    return (
        <div>
            <div className='container'>
                {main}
            </div>
        </div>
    );

}

export default DataTable;