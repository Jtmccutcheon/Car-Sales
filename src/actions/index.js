// STEP 4 - ALL the action things
// actions - objects that describe to a reducer how state should change based on some event
// action creators - a function that "creates" and action by return action objects out of it
// action types - capture action type strings in a variable to save us from misspellings

export const UPDATE_STORE = 'UPDATE_STORE';

export const updateStoreAC = store => {
    console.log(store);
    return { type: UPDATE_STORE, payload: store };
};