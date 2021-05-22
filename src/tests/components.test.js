import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

it('Check route quantities', () => {
  const wrapper = shallow(<App />);
  const value = wrapper.find(Route).length;
  expect(value).toBe(4);
});
