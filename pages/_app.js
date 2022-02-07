import { Provider } from 'react-redux';
import store from '../redux/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { LanguageProvider } from '../contexts/Language.Context';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <Provider store={store}>
          <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </>
        </Provider>
      </LanguageProvider>
    </>
  );
}
