import axios from "axios"
import { mapParams, apiUrl } from "../utils/functions";
import { authorizedHeaders } from '../utils/constants';

export const fetchFoundCollectibles = (params = {}) =>
  axios.get(apiUrl(`/api/v1/found_collectibles${mapParams(params)}`), {
    headers: authorizedHeaders
  })

export const createFoundCollectible = (found_collectible) =>
  axios.post(apiUrl('/api/v1/found_collectibles'),
    { found_collectible },
    { headers: authorizedHeaders }
  )

export const updateFoundCollectible = (found_collectible) =>
  axios.patch(apiUrl(`/api/v1/found_collectibles/${found_collectible.id}`),
    { found_collectible },
    { headers: authorizedHeaders }
  )

export const deleteFoundCollectible = (id) =>
  axios.delete(apiUrl(`/api/v1/found_collectibles/${id}`),
    { headers: authorizedHeaders }
  )
