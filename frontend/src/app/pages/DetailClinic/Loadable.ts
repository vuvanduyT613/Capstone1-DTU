/**
 *
 * Asynchronously loads the component for DetailClinic
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DetailClinic = lazyLoad(
  () => import('./index'),
  module => module.DetailClinic,
);
