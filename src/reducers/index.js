import { UPDATE_STORE } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const Reducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case UPDATE_STORE:
            console.log('Is the action getting here????');
            return {
                ...state,
                store: action.payload
            };
        default:
            return state;
    }
};

// const state = {

// };

// const removeFeature = item => {
//     // dispatch an action here to remove an item
// };

// const buyItem = item => {
//     // dipsatch an action here to add an item
// };