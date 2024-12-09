import { defineStore } from 'pinia'

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
  //Здесь должен быть реальный стейт а не defaultvalue
  // state: () => defaultvalue, не верно!!!
  state: () => {return {
    data: {
      email: null,
      fullName: null,
      id: null,
      role: null,
      tel: null,
    },
    token: null,
  }},
  getters: {
    isAuth: (state) => state,
  },
  actions: {
    clear() {
      this.$patch(defaultvalue)
    },
    set(data: TypeUser) {
      this.$patch( data )
    },
  },
})


export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: false,
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


