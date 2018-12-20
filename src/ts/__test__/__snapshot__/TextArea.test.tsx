import React from 'react';
import TextArea from '../../components/atoms/TextArea';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import '../../setupTests';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// snapshot test
test('renders correctly', () => {
  const component = renderer.create(<TextArea value='sample value'>test</TextArea>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// enzyme test

test('enzyme test', () => {
  const wrapper = shallow(<TextArea value='sample'>test</TextArea>);
  // レンダリングされたテキストを比較する。
  expect(wrapper.text()).toBe('InputType:test');
});
