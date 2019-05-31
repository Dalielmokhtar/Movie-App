
export default function ratingReducer(state=0,action){
 if (action.type === "RATE")
{ return action.payload}
 return state
}
