import Router from 'vue-router'

export async function createRouter (ssrContext, createDefaultRouter) {
  const defaultRouter = createDefaultRouter(ssrContext)
  // const customRoutes = [
  //   {
  //     path: `/custompage`,
  //     component: customPage,
  //     meta: {},
  //   },
  // ]

  return new Router({
    ...defaultRouter.options,
    ...defaultRouter.options,
    routes: [
      ...defaultRouter.options.routes,
      // ...customRoutes,
    ],
  })
}
