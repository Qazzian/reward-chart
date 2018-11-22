import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

// If you eject: https://facebook.github.io/create-react-app/docs/running-tests#initializing-test-environment

configure({ adapter: new Adapter() });