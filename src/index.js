import Lazys from './core/lazys'

const lazyPlugin = {
  install (app, options) {
    const lazy = new Lazys(options)

    app.directive('lazy', {
      mounted: lazy.add.bind(lazy),
      // updated: lazy.update.bind(lazy),
      // unmounted: lazy.update.bind(lazy)
    })
  }
}

export default lazyPlugin
