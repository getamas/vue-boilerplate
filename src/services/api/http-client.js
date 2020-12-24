import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

const collectionResponseHandler = async response =>
  Promise.resolve({
    data: response.data,
    raw: response
  })

const singularResponseHandler = async response =>
  Promise.resolve({
    data: response.data,
    raw: response
  })

const generalErrorHandler = error => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    errStatus: error.response.status,
    errData: error.response.data,
    errRaw: error
  })
}

export default {
  request(method, resource, params, responseType) {
    return api
      .request({
        method,
        url: `${resource}`,
        params,
        responseType
      })
      .catch(generalErrorHandler)
  },
  get(resource, slug = '', params) {
    return api
      .request({
        method: 'get',
        url: slug ? `${resource}/${slug}` : `${resource}`,
        params
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  },
  query(resource, params) {
    return api
      .request({
        method: 'get',
        url: `${resource}`,
        params
      })
      .then(collectionResponseHandler)
      .catch(generalErrorHandler)
  },
  post(resource, data, params) {
    return api
      .request({
        method: 'post',
        url: `${resource}`,
        data,
        params
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  },
  put(resource, slug = '', data, params) {
    return api
      .request({
        method: 'put',
        url: `${resource}/${slug}`,
        data,
        params
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  },
  patch(resource, slug = '', data, params) {
    return api
      .request({
        method: 'patch',
        url: `${resource}/${slug}`,
        data,
        params
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  },
  delete(resource, slug = '') {
    return api
      .request({
        method: 'delete',
        url: `${resource}/${slug}`
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  },
  upload(resource, slug = '', file, type, params) {
    return api
      .request({
        method: 'post',
        url: `${resource}/${slug}`,
        data: file,
        headers: {
          'Content-Type': type
        },
        params
      })
      .then(singularResponseHandler)
      .catch(generalErrorHandler)
  }
}
