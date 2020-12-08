'use strict'

const test = require('tape')
const plugin = require('.')

test('no tags', function (t) {
  const processor = plugin()
  const metric = { tags: {} }

  processor.process(metric)

  t.same(metric.tags, {})
  t.end()
})

test('overwrites tags', function (t) {
  const processor = plugin({ beep: 'new' })
  const metric = { tags: { beep: 'existing' } }

  processor.process(metric)

  t.same(metric.tags, { beep: 'new' })
  t.end()
})

test('sets nullish values to undefined', function (t) {
  const processor = plugin({ a: null, b: undefined })
  const metric = { tags: { a: 'existing' } }

  processor.process(metric)

  t.same(metric.tags, { a: undefined, b: undefined })
  t.end()
})

test('coerces values to strings', function (t) {
  const processor = plugin({ a: 123, b: false })
  const metric = { tags: {} }

  processor.process(metric)

  t.same(metric.tags, { a: '123', b: 'false' })
  t.end()
})
