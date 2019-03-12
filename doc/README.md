
is-derived-record [![Build status](https://travis-ci.org/strong-roots-capital/is-derived-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-derived-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-derived-record.svg)](https://npmjs.org/package/@strong-roots-capital/is-derived-record) [![codecov](https://codecov.io/gh/strong-roots-capital/is-derived-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-derived-record)
======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Type-guard for DerivedRecord

Install
-------

```shell
npm install @strong-roots-capital/is-derived-record
```

Use
---

```typescript
import isDerivedRecord from '@strong-roots-capital/is-derived-record'

const object = fetchMysteryObject()
if (isDerivedRecord(object)) {
    console.log(object.Close) // ok
} else {
    console.log(object.Close) // potential error!
}
```

Related
-------

*   [derived-record](https://github.com/strong-roots-capital/is-derived-record)

## Index

### Functions

* [isDerivedRecord](#isderivedrecord)

---

## Functions

<a id="isderivedrecord"></a>

###  isDerivedRecord

▸ **isDerivedRecord**(object: *`any`*): `boolean`

*Defined in [is-derived-record.ts:13](https://github.com/strong-roots-capital/is-derived-record/blob/dc4734e/src/is-derived-record.ts#L13)*

Type-guard for `DerivedRecord`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `any` |

**Returns:** `boolean`

___

