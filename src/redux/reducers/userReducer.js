const initialValue = {}

const userReducer = (state= initialValue, action)=>{
    switch(action.type){
        case "USER_REGISTER":{
            return {}
        }
        case "USER_ACCOUNT":{
            return {...action.payload}
        }
        case "USER_UPDATE":{
            return {...state,...action.payload}
        }
        case "USER_LOGOUT":{
            return{}
        }
        default:{
            return state
        }

    }

}

export default userReducer