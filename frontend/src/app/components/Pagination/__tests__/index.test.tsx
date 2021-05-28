import * as React from 'react';
import { render } from '@testing-library/react';

import { Pagination } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Pagination  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Pagination />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
