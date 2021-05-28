/**
 *
 * Asynchronously loads the component for Loading
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Loading = lazyLoad(
  () => import('./index'),
  module => module.Loading,
);
