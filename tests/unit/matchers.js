const _ = require('lodash')

const customMatchers = {}

customMatchers.toBeAComponent = options => {
  function isAComponent() {
    return _.isPlainObject(options) && typeof options.render === 'function'
  }

  if (isAComponent()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vue component`,
      pass: true
    }
  }

  return {
    message: () =>
      `expected ${this.utils.printReceived(options)} to be a valid Vue component, exported from a .vue file`,
    pass: false
  }
}

customMatchers.toBeAViewComponent = (options, mockInstance = {}) => {
  function usesALayout() {
    return options.components && options.components.Layout
  }

  function definesAPageTitleAndDescription() {
    if (!options.page) return false
    const pageObject = typeof options.page === 'function' ? options.page.apply(mockInstance) : options.page
    if (!Object.prototype.hasOwnProperty.call(pageObject, 'title')) return false
    if (!pageObject.meta) return false
    const hasMetaDescription = pageObject.meta.some(
      metaObject => metaObject.name === 'description' && Object.prototype.hasOwnProperty.call(metaObject, 'content')
    )
    if (!hasMetaDescription) return false
    return true
  }

  if (usesALayout() && definesAPageTitleAndDescription()) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          options
        )} not to register a local Layout component nor define a page title and meta description`,
      pass: true
    }
  }
  return {
    message: () =>
      `expected ${this.utils.printReceived(
        options
      )} to register a local Layout component and define a page title and meta description`,
    pass: false
  }
}

customMatchers.toBeAViewComponentUsing = (options, mockInstance) => {
  return customMatchers.toBeAViewComponent.apply(this, [options, mockInstance])
}

customMatchers.toBeAVuexModule = options => {
  function isAVuexModule() {
    return (
      _.isPlainObject(options) &&
      _.isPlainObject(options.state) &&
      _.isPlainObject(options.getters) &&
      _.isPlainObject(options.mutations) &&
      _.isPlainObject(options.actions)
    )
  }

  if (isAVuexModule()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vuex module`,
      pass: true
    }
  }
  return {
    message: () =>
      `expected ${this.utils.printReceived(
        options
      )} to be a valid Vuex module, include state, getters, mutations, and actions`,
    pass: false
  }
}

global.expect.extend(customMatchers)
