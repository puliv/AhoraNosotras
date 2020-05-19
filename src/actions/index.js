import {
  SUBSCRIBE_GET_DATA,
  // SUBSCRIBE_SEND_DATA
} from "./actionTypes"

export const getSubscribeData = (dispatch) => (subsName, subsEmail, subsCity, subsComment) => {
  console.log('subsName, subsEmail, subsCity, subsComment', subsName, subsEmail, subsCity, subsComment)
  dispatch({
    type: SUBSCRIBE_GET_DATA
  })
}

// export const getSubscribeData = (dispatch, subcribeData) => {
//   dispatch ({
//     type: SUBSCRIBE_SEND_DATA,
//     payload: subcribeData
//   })
// }
