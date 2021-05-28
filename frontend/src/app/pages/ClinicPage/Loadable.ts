/**
 *
 * Asynchronously loads the component for ClinicPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ClinicPage = lazyLoad(
  () => import('./index'),
  module => module.ClinicPage,
);
