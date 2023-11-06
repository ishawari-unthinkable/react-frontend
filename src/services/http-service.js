import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export default class Http {
  static async get(_url, handleDiscard = () => {}) {
    const url = `${baseUrl}${_url}`
    try {
      const cancelGetRequest = axios.CancelToken.source()
      handleDiscard(cancelGetRequest)
      const response = await axios.get(url, {
        cancelToken: cancelGetRequest.token
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async post(_url, data, handleDiscard = () => {}) {
    const url = `${baseUrl}${_url}`
    try {
      const cancelPostRequest = axios.CancelToken.source()
      handleDiscard(cancelPostRequest)
      const response = await axios.post(url, data, {
        cancelToken: cancelPostRequest.token
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async put(_url, data) {
    const url = `${baseUrl}${_url}`
    try {
      const response = await axios.put(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }
  static async delete(_url) {
    const url = `${baseUrl}${_url}`
    try {
      const response = await axios.delete(url)
      return response.data
    } catch (error) {
      throw error
    }
  }
}
