import { store } from 'store';
import { Provider } from 'react-redux';

import Page from 'containers/Page';
import Theme from 'containers/Theme';

const  App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Page />
      </Theme>
    </Provider>
  );
}

export default App;
