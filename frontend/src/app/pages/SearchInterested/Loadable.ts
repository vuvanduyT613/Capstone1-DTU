/**
 *
 * Asynchronously loads the component for SearchInterested
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SearchInterested = lazyLoad(
  () => import('./index'),
  module => module.SearchInterested,
);
