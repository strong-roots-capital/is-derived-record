/**
 * is-derived-record
 * Type-guard for DerivedRecord
 */

import is from '@sindresorhus/is'
import DerivedRecord from '@strong-roots-capital/derived-record'


/**
 * Type-guard for `DerivedRecord`.
 */
export default function isDerivedRecord(object: any): object is DerivedRecord {
    return !is.nullOrUndefined(object.Time) && is.number(object.Time) && !is.nan(object.Time)
        && !is.nullOrUndefined(object.Close) && is.number(object.Close) && !is.nan(object.Close)
}
