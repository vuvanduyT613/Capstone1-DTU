import * as React from 'react';
import { render } from '@testing-library/react';

import { Personal } from '..';

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

describe('<Personal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Personal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
