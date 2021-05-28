/**
 *
 * Asynchronously loads the component for Delivery
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Delivery = lazyLoad(
  () => import('./index'),
  module => module.Delivery,
);
