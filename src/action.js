import {ADD_Movie,RATE} from "./actionTypes"

export function addMovie(payload){
    return {type: ADD_Movie, payload}
}
export function getRating(payload){
    return {type: RATE, payload}
}