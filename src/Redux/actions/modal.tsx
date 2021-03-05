import { HIDE_REQUESTFORM_MODAL, SET_GALLERY_MODAL, SET_MODALSUCCESS, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes"

export const showRequestModal = () => ({
  type: SHOW_REQUESTFORM_MODAL,
})

export const hideRequestModal = () => ({
  type: HIDE_REQUESTFORM_MODAL,
})

export const setModalSuccess = (isActive: boolean) => ({
  type: SET_MODALSUCCESS,
  isActive,
})

export const setGalleryModal = (isActive: boolean, activeImg: string) => ({
  type: SET_GALLERY_MODAL,
  activeImg,
  isActive,
})