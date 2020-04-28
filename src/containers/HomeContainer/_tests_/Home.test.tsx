import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import renderer from "react-test-renderer";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeContainer from '../HomeContainer';
import reducers from '../../../redux/reducers';

describe('containers/Home', () => {
  it('renders', () => {
    const store = createStore(reducers);
    const homeContainer = renderer.create(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
    expect(homeContainer.toJSON()).toMatchSnapshot();
  })
})