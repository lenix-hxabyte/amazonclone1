export const initialState = {
    basket: [
        {
            id: "45345",
            title: "new appe",
            price: 50,
            image: "buzz img.jpg"
        
        } ,
        {
            id: "3",
            title: "new appe",
            price: 500,
            image: "buzz img.jpg"
        
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0)

const reducer=(state, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
        //loic for add item in basket
        return { ...state,basket: 
            [...state.basket, action.item],
        };
        
        case 'REMOVE_FROM_BASKET': 

        let newBasket= [...state.basket];
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id)
        if(index >=0) {
            newBasket.splice(index, 1)
        }
        else {
            console.warn(`cant remove ${action.id}`)
        }
            return { ...state, basket: newBasket, }
        
            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
        default:
            return state;

    }
}

export default reducer;