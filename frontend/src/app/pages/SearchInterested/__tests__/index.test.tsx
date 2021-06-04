import * as React from 'react';
import { render } from '@testing-library/react';

import { SearchInterested } from '..';

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

describe('<SearchInterested  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SearchInterested />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
