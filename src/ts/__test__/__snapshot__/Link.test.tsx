// Link.react.test.js
import React from "react";
import Link from "../../components/Link";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  /**
   * onMouseEnterを実行時のテストケース
   */
  if (tree == null) return;
  // onMouseEnterを実行させる。
  tree.props.onMouseEnter();
  // レンダリングしなおす
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  /**
   * onMouseLeave実行時のテストケース (onMouseEnterを実行後に)
   */
  if (tree == null) return;
  // onMouseLeaveを実行させる。
  tree.props.onMouseLeave();
  // レンダリングしなおす
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
