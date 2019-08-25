export default ({ app, store, redirect }) => {
  app.$redirect = redirect
  store.$redirect = redirect
}