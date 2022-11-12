import { render } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { SafeArea } from "../../src/components/SafeArea";
import { Container } from "../../src/components/SafeArea/styles";

describe("SafeArea component", () => {
  it("has a maximum width of 1120px", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toHaveStyleRule("max-width", "1120px");
  });

  it("has a 100% width", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toHaveStyleRule("width", "100%");
  });

  it("has auto horizontal margin", () => {
    const element = render(<SafeArea />);
    expect(element).toHaveStyleRule("width", "100%");
  });
});
