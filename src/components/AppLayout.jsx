import Headers from "./Headers";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Headers />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export default AppLayout;
