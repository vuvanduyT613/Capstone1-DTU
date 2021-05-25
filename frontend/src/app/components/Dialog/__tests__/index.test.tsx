import * as React from 'react';
import { render } from '@testing-library/react';

import { Dialog } from '..';

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

describe('<Dialog  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Dialog />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
