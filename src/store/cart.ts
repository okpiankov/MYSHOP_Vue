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
  // state: () => {return []},
  state: () => {return {cart:[]}},
  getters: {
    IsCart: (state) => state,
  },
  actions: {
    clear() {
      this.$patch({cart: initialState})
    },
    add(productID) {
      this.cart.push({ ...productID, quantity: 1 })
    },
  
    set(cart: TypeCart) {
      //this.cart =[...cart]
      // this.$patch([...cart])
       
      this.$patch({cart: cart}) 
    },
  },
})





// export type TypeCartObject = {
//   image: null | string
//   type: null | string
//   name: null | string
//   description: null | string
//   price: null | number
//   id: null | number
//   quantity?: null | number
// }

// type TypeCart = TypeCartObject[]

// const initialState: TypeCart = []

// export const useCartStore = defineStore('cart', {
//   // state: () => {return []},
//   state: () => {return {cart:[]}},
//   getters: {
//     IsCart: (state) => state,
//   },
//   actions: {
//     clear() {
//       this.$patch({cart: initialState})
//     },
//     add(obj: TypeCartObject) {
//       this.cart.push(obj)
//     },
//     set(cart: TypeCart) {
//       //this.cart =[...cart]
//       // this.$patch([...cart])
       
//       this.$patch({cart: cart}) 
//     },
//   },
// })










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
