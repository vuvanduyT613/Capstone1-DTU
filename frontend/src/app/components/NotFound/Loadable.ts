/**
 *
 * Asynchronously loads the component for NotFound
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NotFound = lazyLoad(
  () => import('./index'),
  module => module.NotFound,
);
