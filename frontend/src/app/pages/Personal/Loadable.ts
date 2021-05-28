/**
 *
 * Asynchronously loads the component for Personal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Personal = lazyLoad(
  () => import('./index'),
  module => module.Personal,
);
