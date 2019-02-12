'use strict'

import { middlewareRouter as jwtStandardAuthMiddleware } from './auth/jwt-standard'

const allMiddlewares = []

Array.prototype.push.apply(allMiddlewares, jwtStandardAuthMiddleware)

/**
 * sets up express routes for client application
 * @param {Express} app - node js express app
 */
export const setUpExpressMiddlewares = (app) => {
  allMiddlewares.forEach((elem) => {
    app.use(elem.mountOn, elem.middleware)
  })
}
