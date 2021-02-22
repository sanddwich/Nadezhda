import { HIDE_REQUESTFORM_MODAL, SET_MODALSUCCESS, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes";

interface showRequestModal {
  type: typeof SHOW_REQUESTFORM_MODAL
}

interface hideRequestModal {
  type: typeof HIDE_REQUESTFORM_MODAL
}

interface setModalSuccess {
  type: typeof SET_MODALSUCCESS
  isActive: boolean
}

export type ModalActionType = 
  | showRequestModal
  | hideRequestModal
  | setModalSuccess