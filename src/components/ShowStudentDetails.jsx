import React from 'react';
import '../App.css';


const ShowStudentDetails = (props) => {

    return (
        <div>
            <div className="card mt-5 card-width">
                <div className="card-header bg-dark text-white d-md-flex mb-2 boldFont">
                    Student Information
                </div>
                <div className="d-md-flex mb-3 boldFont">
                    <div className="col-md-6">
                        <span className='me-2'>{props.student.country}</span>
                        <span>{props.student.city}</span>
                    </div>
                </div>
                <div className="d-md-flex mb-3">
                    <div className="col-md-4" >
                        <span>Id:</span>
                    </div>
                    <div className="col-md-4">
                        <span>{props.student.id}</span>
                    </div>
                </div>
                <div className="d-md-flex mb-3">
                    <div className="col-md-4">
                        <span>First Name:</span>
                    </div>
                    <div className="col-md-4">
                        <span>{props.student.firstName}</span>
                    </div>
                </div>
                <div className="d-md-flex mb-3">
                    <div className="col-md-4">
                        <span>Last Name:</span>
                    </div>
                    <div className="col-md-4">
                        <span>{props.student.lastName}</span>
                    </div>
                </div>
                <div className="d-md-flex mb-3">
                    <div className="col-md-4">
                        <span>Age:</span>
                    </div>
                    <div className="col-md-4">
                        <span>{props.student.age}</span>
                    </div>
                </div>

                <div className="d-md-flex ms-3">
                    <button className='btn btn-outline-primary' onClick={() => { props.hideStudentDetails(props.studentId) }}>
                        Hide
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ShowStudentDetails;

