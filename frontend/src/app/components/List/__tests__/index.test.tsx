import * as React from 'react';
import { render } from '@testing-library/react';

import { List } from '..';

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

describe('<List  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<List />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
