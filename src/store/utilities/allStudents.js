const axios = require('axios');
// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT"

// ACTION CREATOR;
const fetchAllStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

const editStudent = (id,arr) => {
    return{
        type: EDIT_STUDENT,
        id: id,
        payload: arr
    }
}

// THUNK CREATOR;
export const fetchAllStudentsThunk = () => async(dispatch) => {
    try{
        let {data} = await axios.get("https://campus-manager-api.herokuapp.com/students");
        dispatch(fetchAllStudents(data));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

export const removeStudentThunk = (id) => async(dispatch) => {
    try{
        await axios.delete(`https://campus-manager-api.herokuapp.com/students/${id}`);
        dispatch(removeStudent(id));
    }catch(err){
        console.log(err);
    }
}

export const addStudentThunk = (arr) => async(dispatch) =>{
    try{
        let {data} = await axios.post("https://campus-manager-api.herokuapp.com/students",arr);
        let student = await data
        dispatch(addStudent(student));
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

export const editStudentThunk = (id,arr) =>async(dispatch)=>{
    try{
        let data = await axios.put(`https://campus-manager-api.herokuapp.com/students/${id}`,arr);
        dispatch(editStudent(id,arr));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            return [...state, action.payload]
        case EDIT_STUDENT:
            return [...state.filter(item => item.id !== action.id), action.payload];
        default:
            return state;
    }
}