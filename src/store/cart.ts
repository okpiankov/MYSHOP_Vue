import { defineStore } from 'pinia'

export type TypeCartObject = {
  image: null | string
  type: null | string
  name: null | string
  description: null | string
  price: null | number
  id: null | number
  quantity?: null | number
}

type TypeCart = TypeCartObject[]

const initialState: TypeCart = []

export const useCartStore = defineStore('cart', {
  state: () => initialState,
  getters: {
    IsCart: (state) => state,
  },
  actions: {
    clear() {
      this.$patch([])
    },

    set(cart: TypeCart) {
      this.$patch(cart)
    },
  },
})

// export type TypeCart = [
//   {
//     image: null | string
//     type: null | string
//     name: null | string
//     description: null | string
//     price: null | number
//     id: null | number
//     quantity?: null | number
//   },
// ]

// const initialState: TypeCart = [
//   {
//     image: null,
//     type: null,
//     name: null,
//     description: null,
//     price: null,
//     id: null,
//     quantity: null,
//   },
// ]

// IsCart: (state) => {
//     return { cart: state }
//   },

// set(input: TypeCart) {
//     this.$patch({cart: input})
//   },
