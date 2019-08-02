const FETCH_CAMPUS = "FETCH_CAMPUS";

const fetchAllCampus = (campus) => {
    return{
        type: FETCH_CAMPUS,
        payload: campus
    }
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
        default:
            return state;
    }
}