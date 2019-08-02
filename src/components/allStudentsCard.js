import React from "react";
import "../styles/allStudentsCard.css"

const studentToAdd = {
    "id": 2,
    "firstName": "bob",
    "lastName": "jones",
    "email": "bobbyboy1234@yahoo.com",
    "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
    "gpa": 3.7,
    "createdAt": "2018-12-05T23:02:45.270Z",
    "updatedAt": "2019-06-14T00:15:35.429Z",
    "campusId": 1
}

const StudentsCard = (props) => {
    const {students, removeStudent, addStudent } = props;
    return (
        <div className = "Card">
            <div className = "button">
            <button onClick = {() => addStudent(studentToAdd)}>Add Student</button>
            </div>
            <div className = "main-cards">
            {students.map(student => 
            <div><img src={student.imageUrl} width="100" height="100" onClick = {() => removeStudent(student.id)}></img>
                {student.firstName}
                {student.lastName}
                {student.gpa}
            </div>
            )}
            </div>
            
        </div>
    );
}

export default StudentsCard;