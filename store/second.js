/*
import firebase from '@/plugins/firebase'
import { vuexfireMutations, firebaseAction } from 'vuexfire'

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
