import { SET_APP_ERROR, SET_APP_FORMDATA, SET_APP_LOADING, SET_APP_TARIFF } from "../constants/ActionTypes";
import { FormData } from "./interfaces";

interface setAppLoading {
  type: typeof SET_APP_LOADING
  loading: boolean
}

interface setAppError {
  type: typeof SET_APP_ERROR
  error: string
}

interface setAppTariff {
  type: typeof SET_APP_TARIFF
  tariff: string
}

interface setAppFormData {
  type: typeof SET_APP_FORMDATA,
  formData: FormData
}

export type AppActionType =
  | setAppLoading
  | setAppError
  | setAppTariff
  | setAppFormData