export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // remove after finished devloping
    token:"BQBWayRslWEOu_lpfk-nvN6XhXmMdZraTQO-CcwbuefvEIGY7WQ2ps9diNfayCdOpksgyJ88ohBFrIeez1N8rNNTWMSePznlDN2F2cwHOO9Bjl0ibGOfCPqLmzWYSh-XnLeC7H7nzpfmuZYmJA7dMO0gi93PFOSHBH5s810x76wHdNvpVDdF",
};

const reducer = (state,action) => {
    console.log(action);
    // action contains -> 1.type 2.[payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token, 
            }    
        default:
            return state;    
    }

}
export default reducer;