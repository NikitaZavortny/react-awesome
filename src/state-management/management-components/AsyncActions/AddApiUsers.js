import { FetchUsersAction } from "../../store/users-reducer";

export const fetchUsers = ()=>{
    return function(dispatch)
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(FetchUsersAction(json)))
    }
};