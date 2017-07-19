import {
  FETCH_ADD_INTERFACE_INPUT,
  FETCH_ADD_INTERFACE_TAG_VALUE,
  FETCH_ADD_INTERFACE_HEADER_VALUE,
  ADD_INTERFACE_SEQ_HEADER,
  DELETE_INTERFACE_SEQ_HEADER,
  ADD_INTERFACE_REQ_PARAMS,
  DELETE_INTERFACE_REQ_PARAMS,
  ADD_INTERFACE_RES_PARAMS,
  DELETE_INTERFACE_RES_PARAMS
} from '../constants/action-types.js'

export function pushInputValue (value) {
  return {
    type: FETCH_ADD_INTERFACE_INPUT,
    payload: value
  };
}

export function reqTagValue (value) {
  return {
    type: FETCH_ADD_INTERFACE_TAG_VALUE,
    payload: value
  };
}

export function reqHeaderValue (value) {
  return {
    type: FETCH_ADD_INTERFACE_HEADER_VALUE,
    payload: value
  };
}

export function addReqHeader (value) {
  return {
    type: ADD_INTERFACE_SEQ_HEADER,
    payload: value
  };
}

export function deleteReqHeader (value) {
  return {
    type: DELETE_INTERFACE_SEQ_HEADER,
    payload: value
  };
}

export function addReqParams (value) {
  return {
    type: ADD_INTERFACE_REQ_PARAMS,
    payload: value
  };
}

export function deleteReqParams (value) {
  return {
    type: DELETE_INTERFACE_REQ_PARAMS,
    payload: value
  };
}

export function addResParams (value) {
  return {
    type: ADD_INTERFACE_RES_PARAMS,
    payload: value
  };
}

export function deleteResParams (value) {
  return {
    type: DELETE_INTERFACE_RES_PARAMS,
    payload: value
  };
}
