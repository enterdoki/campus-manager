const FETCH_CAMPUS = "FETCH_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const fetchAllCampus = (campus) => {
    return{
        type: FETCH_CAMPUS,
        payload: campus
    }
}

const removeCampus = (id) =>{
    console.log(id)
    return{
        type: DELETE_CAMPUS,
        payload: id
    }
}

export const deleteCampusThunk = (id) => (dispatch) =>{
    dispatch(removeCampus(id));
}

export const fetchAllCampusThunk = () => (dispatch) =>{
    const arrayOfCampusFromApi = [
        {
            "campusId": 4,
            "campus": "Hunter College",
            "email": "jerryjingle@bells.com",
            "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
            "gpa": null,
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
        },
        {
            "campusId": 7,
            "campus": "Stony brook",
            "email": "jerryjingle@bells.com",
            "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
            "gpa": null,
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
        },
        {
            "campusId": 1,
            "campus": "Queens College",
            "email": "jerryjingle@bells.com",
            "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
            "gpa": null,
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
        },
        {
            "campusId": 5,
            "campus": "Bronx College",
            "email": "jerryjingle@bells.com",
            "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
            "gpa": null,
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
        },
        {
            "campusId": 2,
            "campus": "NYU",
            "email": "jerryjingle@bells.com",
            "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
            "gpa": null,
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
        },
    ]
    dispatch(fetchAllCampus(arrayOfCampusFromApi));
}

export default (state = [], action) =>{  
    switch(action.type){
        case FETCH_CAMPUS:
            return action.payload;
        case DELETE_CAMPUS:
            return state.filter(campus=>campus.campusId !== action.payload)
        default:
            return state;
    }
}