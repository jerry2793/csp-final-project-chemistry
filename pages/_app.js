import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import reducers from "../reducers";
import reduxThunk from "redux-thunk";
import "../styles/globals.css";

const store = createStore(reducers, applyMiddleware(reduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
