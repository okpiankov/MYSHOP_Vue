import { defineStore } from 'pinia'
import { computed } from 'vue'

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
  //Здесь должен быть реальный стейт а не initialState
  state: () => {
    return { cart: [] }
  },
  getters: {
    IsCart: (state) => state,
    //Логика подсчета общей стоимости с учетом quantity
    //total_cost: () => {...} через : не верно!
    total_cost() {
      const arrayPrices = this.cart.map((item) => item.price * item.quantity).map(parseFloat)
      return arrayPrices.reduce((sum, current) => sum + current, 0)
    },
  },
  actions: {
    add(product) {
      const cartProduct = this.cart.find((item) => item.id === product.id)
      if (!cartProduct) {
        this.cart.push({ ...product, quantity: 1 })
      } else {
        cartProduct.quantity++
      }
    },
    increment(product_id) {
      const product = this.cart.find((item) => item.id === product_id)
      if (product) {
        product.quantity++
      }
    },
    decrement(product_id) {
      const product = this.cart.find((item) => item.id === product_id)
      if (product) {
        product.quantity--
        if (product.quantity === 0) this.cart = this.cart.filter((item) => item.id !== product_id)
      }
      // if (product.lenght <= 0) {
      //   this.cart = this.cart.filter((item) => item.id !== product_id)
      // }
    },
    delete(product_id) {
      this.cart = this.cart.filter((item) => item.id !== product_id)
    },
    clear() {
      this.$patch(initialState)
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
