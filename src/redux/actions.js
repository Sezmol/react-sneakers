import { ADD_TO_CART, ADD_TO_FAVORITES, CHECKOUT, CLOSE_CART, OPEN_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "./types"

export function addToCart(item) {
    return {
        action: ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(id) {
    return {
        action: REMOVE_FROM_CART,
        payload: id
    }
}

export function removeAllFromCart() {
    return {
        action: REMOVE_ALL_FROM_CART
    }
}

export function openCart() {
    return {
        action: OPEN_CART
    }
}

export function closeCart() {
    return {
        action: CLOSE_CART
    }
}

export function addToFavorites(item) {
    return {
        action: ADD_TO_FAVORITES,
        payload: item
    }
}

export function removeFromFavorites(id) {
    return {
        action: REMOVE_FROM_FAVORITES,
        payload: id
    }
}

export function checkout(items) {
    return {
        action: CHECKOUT,
        payload: items
    }
}