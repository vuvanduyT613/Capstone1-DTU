/**
 *
 * Asynchronously loads the component for Hot
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Hot = lazyLoad(
  () => import('./index'),
  module => module.Hot,
);
