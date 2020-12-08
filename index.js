'use strict'

const EventEmitter = require('events').EventEmitter
const hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = function plugin (options) {
  return new TagProcessor(options)
}

class TagProcessor extends EventEmitter {
  constructor (options) {
    if (!options) options = {}

    super()
    this._tags = {}

    for (const k in options) {
      if (!hasOwnProperty.call(options, k)) continue
      this._tags[k] = options[k] == null ? undefined : String(options[k])
    }
  }

  process (metric) {
    for (const k in this._tags) {
      metric.tags[k] = this._tags[k]
    }

    this.emit('metric', metric)
  }
}
