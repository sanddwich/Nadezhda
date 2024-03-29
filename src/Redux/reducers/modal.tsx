import { HIDE_REQUESTFORM_MODAL, SET_GALLERY_MODAL, SET_MODALSUCCESS, SHOW_REQUESTFORM_MODAL } from '../constants/ActionTypes'
import { ModalState } from '../interfaces/interfaces'
import { ModalActionType } from '../interfaces/modal'

const initialState: ModalState = {
  modalRequestForm: {
    isActive: false,
  },
  modalSuccessMessage: {
    isActive: false,
  },
  galleryModal: {
    activeImg: '1.jpg',
    isActive: false,
  },
}

const modal = (state: ModalState = initialState, action: ModalActionType) => {
  switch (action.type) {
    case SHOW_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: true,
        },
      }
    case HIDE_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: false,
        },
      }
    case SET_MODALSUCCESS:
      return {
        ...state,
        modalSuccessMessage: {
          isActive: action.isActive,
        },
      }
    case SET_GALLERY_MODAL:
      return {
        ...state,
        galleryModal: {
          activeImg: action.activeImg,
          isActive: action.isActive,
        },
      }
    default:
      return state
  }
}

export default modal
