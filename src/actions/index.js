import $ from 'jquery';

export const addTodo = (value) => {
    return {type: 'ADD_TODO', value: value}
}
export const removeTodo = (value) => {
    return {type: 'REMOVE_TODO', value: value}
}
export const completeTodo = (value) => {
    return {type: 'COMPLETE_TODO', value: value}
}
export const getJokes = () => {
    return (dispatch) => {
        $.get('http://api.icndb.com/jokes/random/3').done((response) => dispatch({type: 'GET_JOKES', value: response.value}))
    }

}
