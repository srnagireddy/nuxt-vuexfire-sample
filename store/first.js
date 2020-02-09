/*
import firebase from '@/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'

const db = firebase.database()
const itemsRef = db.ref('xxx')

export const state = () => ({
  items: []
})

export const getters = {
  items: state => {
    return state.items
  }
}

export const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('items', itemsRef)
  })
}
*/


/*
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.initializeApp({ projectId: 'aw-corporate' }).firestore()

new Vue.Store({
  // setup the reactive todos property
  state: {
    todos: [],
  },

  mutations: vuexfireMutations,

  actions: {
    bindTodosRef: firestoreAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirestoreRef` and `unbindFirestoreRef`
      // we return the promise returned by `bindFirestoreRef` that will
      // resolve once data is ready
      return context.bindFirestoreRef('todos', db.collection('todos'))
    }),
  },
})
*/

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = (!firebase.apps.length) ? firebase.initializeApp({ projectId: 'aw-corporate', databaseURL: 'https://aw-corporate.firebaseio.com' }).firestore() : firebase.app().firestore()

export const state = () => ({
  todos: []
})

export const getters = {
  todos: state => {
    return state.todos
  }
}

export const mutations = vuexfireMutations

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', db.collection('todos'))
  })
}
