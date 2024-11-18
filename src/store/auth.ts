import { defineStore } from 'pinia'

type TAuthData = {
  email: string
  fullName: string
  id: null
  role: string
}

type TAuthStore = {
  user: {
    data: TAuthData
    token: string
  }
}

const defaultvalue: { user: { data: TAuthData; token: string } } = {
  user: {
    data: {
      email: '',
      fullName: '',
      id: null,
      role: '',
    },
    token: '',
  },
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultvalue,
  getters: {
    isAuth: (state) => state.user,
  },
  actions: {
    clear() {
      this.$patch(defaultvalue)
    },

    set(input: TAuthStore) {
      this.$patch({ user: input })
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
