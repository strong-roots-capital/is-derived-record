import test from 'ava'
import DerivedRecord from '@strong-roots-capital/derived-record'

/**
 * Library under test
 */

import isDerivedRecord from '../src/is-derived-record'

test('should recognize Records', t => {
    const record = {
        Time: 0,
        Close: 0
    }
    t.true(isDerivedRecord(record))
})

test('should recognize Records with extra members', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0,
        extra: 'member'
    }
    t.true(isDerivedRecord(record))
})

test('should not recognize Records without Time', t => {
    const record = {
        // Time: 0,
        Close: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records without Close', t => {
    const record = {
        Time: 0,
        // Close: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records with Time of improper type', t => {
    const record = {
        Time: '0',
        Close: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records with Close of improper type', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: '0',
        Volume: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize an empty object', t => {
    t.false(isDerivedRecord({}))
})

test('should function as a type-guard', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0,
        oldMacDonaldHadA: 'horse'
    }
    if (isDerivedRecord(record)) {
        let record2: DerivedRecord = record
        t.pass()
    } else {
        t.fail()
    }
})

test('should not recognize Records with null Time', t => {
    const record = {
        Time: null,
        Close: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records with null Close', t => {
    const record = {
        Time: 0,
        Close: null
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records with NaN Time', t => {
    const record = {
        Time: NaN,
        Close: 0
    }
    t.false(isDerivedRecord(record))
})

test('should not recognize Records with NaN Close', t => {
    const record = {
        Time: 0,
        Close: NaN
    }
    t.false(isDerivedRecord(record))
})
