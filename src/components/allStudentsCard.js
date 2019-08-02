import React from "react";

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

function allStudentsCard ({firstName, lastName, image, gpa}) {
    return (
        <div className = "Card">
            <img src = {image}></img>
            {firstName}
            {lastName}
            {gpa}
        </div>
    );
}

export default allStudentsCard;