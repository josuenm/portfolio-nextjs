import "jest-styled-components";
import renderer from "react-test-renderer";
import { Container } from "../../src/components/SafeArea/styles";

describe("SafeArea component", () => {
  it("has a maximum width of 1120px", () => {
    const element = renderer.create(<Container />).toJSON();
    expect(element).toHaveStyleRule("max-width", "1120px");
  });

  it("has a 100% width", () => {
    const element = renderer.create(<Container />).toJSON();
    expect(element).toHaveStyleRule("width", "100%");
  });

  it("has auto horizontal margin", () => {
    const element = renderer.create(<Container />).toJSON();
    expect(element).toHaveStyleRule("margin", "0 auto");
  });
});
