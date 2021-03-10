import { SET_APP_ERROR, SET_APP_FORMDATA, SET_APP_LOADING, SET_APP_TARIFF } from '../constants/ActionTypes'
import { AppActionType } from '../interfaces/app'
import { AppState } from '../interfaces/interfaces'

const initialState: AppState = {
  error: '',
  loading: false,
  tariff: '',
  formData: {
    phone: '',
    date: new Date(),
  },
}

const app = (state: AppState = initialState, action: AppActionType) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_APP_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case SET_APP_TARIFF:
      return {
        ...state,
        tariff: action.tariff,
      }
    case SET_APP_FORMDATA:
      return {
        ...state,
        formData: action.formData,
      }
    default:
      return state
  }
}

export default app
