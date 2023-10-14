import { useDispatch, useSelector } from "react-redux";
import { addUserAction, removeUserAction} from "../../store/users-reducer";
import { fetchUsers } from "../AsyncActions/AddApiUsers";

function Users() {

    const users = useSelector(state=>state.users.users);
    const dispatch = useDispatch();

    const AddUser = (username)=>{
        dispatch(addUserAction(username));
    }

    const RemoveUser = (id) => {
        dispatch(removeUserAction(id));
    }

    const FetchUsers = ()=>{
        dispatch(fetchUsers());
    }

    return ( 
        <>
            <button className="btn btn-primary" onClick={()=>AddUser(prompt())}>Add User</button>
            <button className="btn btn-primary" onClick={() => FetchUsers()}>Fetch User</button>
            {users.length > 0 ?
                <div>
                    {users.map((user) =>
                        <div>
                            <h1>{user.name}    <button className="btn btn-danger" onClick={() => RemoveUser(user.id)}>Remove User</button></h1>
                        </div>
                    )}
                </div>
                :
                <h1>No any users</h1>
            }
        </> 
    );
}

export default Users;