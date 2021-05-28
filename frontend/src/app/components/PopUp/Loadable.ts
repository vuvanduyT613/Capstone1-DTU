/**
 *
 * Asynchronously loads the component for PopUp
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopUp = lazyLoad(
  () => import('./index'),
  module => module.PopUp,
);
