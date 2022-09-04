export const ACTIONS = {
    ADD_ORDER: 'ADD_ORDER',
    REMOVE_ORDER: 'REMOVE_ORDER'
}

export default function orderReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ORDER:
            return [...state, action.payload];
        case ACTIONS.REMOVE_ORDER:
            return state.filter(order => order.id !== action.payload);
        default:
            return state;
    }
}