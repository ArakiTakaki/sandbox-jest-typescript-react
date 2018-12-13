import React from "react";
import TextArea from "../../components/atoms/TextArea";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const component = renderer.create(
    <TextArea value="sample value">test</TextArea>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
