# is-derived-record [![Build status](https://travis-ci.org/strong-roots-capital/is-derived-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-derived-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-derived-record.svg)](https://npmjs.org/package/@strong-roots-capital/is-derived-record) [![codecov](https://codecov.io/gh/strong-roots-capital/is-derived-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-derived-record)

> Type-guard for DerivedRecord

## Install

``` shell
npm install @strong-roots-capital/is-derived-record
```

## Use

``` typescript
import isDerivedRecord from '@strong-roots-capital/is-derived-record'

const object = fetchMysteryObject()
if (isDerivedRecord(object)) {
    console.log(object.Close) // ok
} else {
    console.log(object.Close) // potential error!
}
```

## Related

- [derived-record](https://github.com/strong-roots-capital/is-derived-record)
