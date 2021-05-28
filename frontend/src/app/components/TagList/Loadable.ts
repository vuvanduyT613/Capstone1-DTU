/**
 *
 * Asynchronously loads the component for TagList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TagList = lazyLoad(
  () => import('./index'),
  module => module.TagList,
);
