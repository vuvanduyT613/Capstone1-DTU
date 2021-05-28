import * as React from 'react';
import { render } from '@testing-library/react';

import { Delivery } from '..';

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

describe('<Delivery  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Delivery />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
