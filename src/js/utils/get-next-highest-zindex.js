import { DOC } from '../settings';

/**
 * @summary Gets highest z-index and adds 10 or adds number specified in parameter.
 * Use this method sparingly as it can be a slow operation, potentially locking up the UI.
 * Map over ALL elements to find the z-indexes.
 * Filter out the elements where z-index is 'auto'.
 * Reduce remaining elements down to the highest value, then add 10.
 * WARNING: elements must have a position style property set in order to get accurate z-index.
 * @param {number} incrementBy - how much should be added to the z-index?
 * @param {object} collection - Array like list of HTMLElements. This help reduce scope of query.
 * @returns {number} the new highest number to be used for the z-index.
 */

/* global getComputedStyle */

function getNextHighestZindex(incrementBy = 10, collection = DOC.querySelectorAll('*')) {
  return Array.from(collection)
    .map(item => getComputedStyle(item, null).getPropertyValue('z-index'))
    .filter(item => item !== 'auto')
    .reduce((pre, cur) => Math.max(pre, cur), 0) + incrementBy;
}

export default getNextHighestZindex;
