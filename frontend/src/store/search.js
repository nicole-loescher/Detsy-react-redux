
const LOAD = 'search/LOAD'

const searchLoader = (results) =>{
    return {
        type: LOAD,
        results
    }
}

export const loadSearchItems = (search) => async dispatch => {
    const res = await fetch(`/api/search/${search}`)
    console.log(res)
    return dispatch(searchLoader(res.data))
}

const initialState = {
    results: ['a']
}
const searchReducer = (state =initialState, action) => {
    switch(action.type){
        case LOAD: {
            const allResults = {}
            action.results.forEach(result => {
                allResults[result.id] = result;
            })
            return {
                ...allResults,
                ...state
            }
        }
    default:
        return state
    }
}

export default searchReducer;