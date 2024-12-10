import { defineStore } from 'pinia'

export type TypeUser = {
  data: {
    email: string | ''
    fullName: string | ''
    id: number | 0
    role: string | ''
    tel?: string | ''
  }
  token: string | ''
}

const defaultvalue: TypeUser = {
  data: {
    email: '',
    fullName: '',
    id: 0,
    role: '',
    tel: '',
  },
  token: '',
}

export const useAuthStore = defineStore('auth', {
  //Здесь должен быть реальный стейт а не defaultvalue
  // state: () => defaultvalue, не верно!!!
  state: () => {return {
    data: {
      email: '',
      fullName: '',
      id: 0,
      role: '',
      tel: '',
    },
    token: '',
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


