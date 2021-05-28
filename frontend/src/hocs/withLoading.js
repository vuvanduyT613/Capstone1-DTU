import React from 'react';

import { Loading } from 'app/components/Loading';

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Loading />;
  };
}

export default WithLoading;
