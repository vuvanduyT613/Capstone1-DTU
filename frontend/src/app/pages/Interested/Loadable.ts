/**
 *
 * Asynchronously loads the component for Interested
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Interested = lazyLoad(
  () => import('./index'),
  module => module.Interested,
);
