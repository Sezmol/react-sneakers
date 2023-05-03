const initialState = {
    sneakers: [
        {id: 1, image: '/img/sneakers1.jpg', name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
        {id: 2, image: '/img/sneakers1.jpg', name: 'Мужские Кроссовки Nike Blazer Mid Suede2', price: 13999}
    ]
}

export const appReducer = (state = initialState, action) => {
    return state;
}