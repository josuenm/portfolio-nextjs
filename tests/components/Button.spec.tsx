import "@testing-library/react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Button } from "../../src/components/Button";
import { theme } from "../../src/styles/theme";

describe("Button component", () => {
  it("has title", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button title="Olá mundo" />
      </ThemeProvider>
    );

    expect(getByText("Olá mundo")).toBeTruthy();
  });

  it("has outline class", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button title="Olá mundo" outline={true} />
      </ThemeProvider>
    );

    expect(getByText("Olá mundo").classList.contains("outline")).toBeTruthy();
  });

  it("has the button type", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button title="Olá mundo" type="button" />
      </ThemeProvider>
    );

    expect(getByText("Olá mundo").getAttribute("type")).toBeTruthy();
  });
});
