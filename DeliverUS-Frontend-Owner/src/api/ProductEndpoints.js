import { get, post, destroy, put } from './helpers/ApiRequestsHelper'

function getDetail (id) {
  return get(`products/${id}`)
}

function getProductCategories () {
  return get('productCategories')
}

function create (data) {
  return post('/products/', data)
}

function remove (id) {
  return destroy(`products/${id}`)
}

function update (id, data) {
  return put(`products/${id}`, data)
}

export { getDetail, getProductCategories, create, remove, update }
