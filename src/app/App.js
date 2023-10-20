import '../styles/main.scss'
import withAppProviders from './withAppProviders';
import BrowserRouter from './setup/core/browserRouter';
import Layout from '../app/components/Layout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
}

export default withAppProviders(App)();
