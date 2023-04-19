import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import CustomNavbar from "@/src/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/src/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CustomNavbar />
      <Component {...pageProps} />
    </Provider>
  );
}
