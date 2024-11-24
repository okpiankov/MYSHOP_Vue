import { defineStore } from 'pinia'
// import { cloneDeep } from 'lodash'

export type TypeUser = {
  data: {
    email: string | null
    fullName: string | null
    id: number | null
    role: string | null
    tel?: string | null
  }
  token: string | null
}

const defaultvalue: TypeUser = {
  data: {
    email: null,
    fullName: null,
    id: null,
    role: null,
    tel: null,
  },
  token: null,
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultvalue,
  getters: {
    isAuth: (state) => state,
  },
  actions: {
    // clear: () => defaultvalue
    reset() {
      return this.$patch(defaultvalue)
    // clear() {
    //   this.$patch(defaultvalue)
    },
    set(data: TypeUser) {
      this.$patch( data )
    },
  },
})


export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true,
  }),

  actions: {
    set(data: boolean) {
      this.$patch({ isLoading: data })
    },
  },
}) 

// type TAuthstore = {
//   email: string
//   name: string
//   status: boolean
// }

// const defaultvalue: { user: TAuthstore } = {
//   user: {
//     email: '',
//     name: '',
//     status: false,
//   },
// }
// export const useAuthstore = defineStore('auth', {
//   state: () => defaultvalue,
//   getters: {
//     isAuth: (state) => state.user.status,
//   },
//   actions: {
//     clear() {
//       this.$patch(defaultvalue)
//     },

//     set(input: TAuthstore) {
//       this.$patch({ user: input })
//     },
//   },
// })

// export  const useIsLoadingStore = defineStore('isLoading', {
//   state: () => ({
//     isLoading: true,
//   }),

//   actions: {
//     set(data: boolean) {
//       this.$patch({ isLoading: data })
//     },
//   },
// })

// // Is чтобы понять что это boolean значение


// type TAuthData = {
//   email: string
//   fullName: string
//   id: null
//   role: string
// }

// type TAuthStore = {
//   user: {
//     data: TAuthData
//     token: string
//   }
// }

// const defaultvalue: { user: { data: TAuthData; token: string } } = {
//   user: {
//     data: {
//       email: '',
//       fullName: '',
//       id: null,
//       role: '',
//     },
//     token: '',
//   },
// }


// export  function resetStore({ useAuthStore }) {
//   const defaultvalue = cloneDeep(useAuthStore.$state)
//   useAuthStore.$reset = () => useAuthStore.$patch(cloneDeep(defaultvalue))
// }