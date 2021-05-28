/**
 *
 * Asynchronously loads the component for Pagination
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Pagination = lazyLoad(
  () => import('./index'),
  module => module.Pagination,
);
