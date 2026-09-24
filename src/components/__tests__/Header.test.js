import { render } from "@testing-library/react";
import Headers from "../Headers";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load headers from the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>,
  );
});
