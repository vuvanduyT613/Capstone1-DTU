import * as React from 'react';
import { render } from '@testing-library/react';

import { Hot } from '..';

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

describe('<Hot  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Hot />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
