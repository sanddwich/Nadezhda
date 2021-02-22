export interface AppState {
  loading: boolean
  error: string
  tariff: string
  formData: FormData
}

export interface ToastState {
  isActive: boolean
  message: string
  error: boolean
}

export interface ModalState {
  modalRequestForm: {
    isActive: boolean
  }
  modalSuccessMessage: {
    isActive: boolean
  }
}

export interface FormData {
  phone: string
  date: Date
}