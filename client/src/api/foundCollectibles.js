import axios from "axios"
import { mapParams } from "../utils/functions"

export const fetchFoundCollectibles = (params = {}) =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/v1/found_collectibles${mapParams(params)}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
