# processor-tag

> **Add custom tags to all metrics in a task.**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/telemetry-js/processor-tag.svg)](https://www.npmjs.org/package/@telemetry-js/processor-tag)
[![node](https://img.shields.io/node/v/@telemetry-js/processor-tag.svg)](https://www.npmjs.org/package/@telemetry-js/processor-tag)
[![Test](https://github.com/telemetry-js/processor-tag/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/processor-tag/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

```js
const telemetry = require('@telemetry-js/telemetry')()
const tag = require('@telemetry-js/processor-tag')

telemetry.task()
  .process(tag, { foo: 'bar', baz: 'bee' })
```

This will add the `foo` and `baz` tags to metrics.

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/processor-tag
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Inc](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
