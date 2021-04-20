/**
 *
 * Asynchronously loads the component for Authentication
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Authentication = lazyLoad(
  () => import('./index'),
  module => module.Authentication,
);
