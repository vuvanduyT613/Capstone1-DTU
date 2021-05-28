import * as React from 'react';
import { render } from '@testing-library/react';

import { ClinicPage } from '..';

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

describe('<ClinicPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ClinicPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
