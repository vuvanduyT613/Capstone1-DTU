import * as React from 'react';
import { render } from '@testing-library/react';

import { PopUp } from '..';

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

describe('<PopUp  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PopUp />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
