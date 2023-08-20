const defState = {
    users: [],
};

const AddUser = "AddUser"
const RemoveUser = "RemoveUser"
const FetchUser = "FetchUser"

export const UserReducer = (state = defState, action) => {
    switch (action.type) {
        case AddUser: return { ...state, users: [...state.users, action.payload]}
        case RemoveUser: return { ...state, users: state.users.filter(x=> x.id !== action.payload) }
        case FetchUser: return { ...state, users: [...state.users, ...action.payload]}
        default: return state;
    }
};

export const addUserAction = (payload) => ({ type: AddUser, payload: {name: payload, id: Date.now()}});
export const removeUserAction = (payload) => ({ type: RemoveUser, payload: payload });
export const FetchUsersAction = (payload) => ({ type: FetchUser, payload: payload });