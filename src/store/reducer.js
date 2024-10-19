

const initialState ={
    loading:false,
    error:null,
    data:[]
}

export const appReducer = (state = initialState ,action )=>{
    switch(action.type){
        case 'GET_SUCCESS':
            return {
                ...state,
                loading:false,
                error:null,
                data:[...action.payload]
            }
        case 'POST_SUCCESS':
            return {
                ...state,
                loading:false,
                error:null,
                data:[state.data.concat({...action.payload})]
            }
        default: return { ...state , data:state.data,loading:state.loading, error:null}
    }
}