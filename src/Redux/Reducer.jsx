const initialState = {
    userData: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_User": {
            return {
                ...state, userData: [...state.userData, action.payload],
            }
        }
        case "Delete_User": {
            return {
                ...state, userData: state.userData.filter(
                    (i, index) => index !== action.payload
                ),
            }
        }
        case 'Update_User': {
            return {
                ...state, userData: state.userData.map((i, index) =>
                    index === action.payload.id ? action.payload : i
                ),
            };
        }
        default: return state;
    }
}

export default Reducer