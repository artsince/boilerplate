'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Hello from '../../src/components/hello.jsx';

describe('Hello Component', () => {
  it('should have the right text', () => {
    const content = "hi";

    var component = TestUtils.renderIntoDocument(<Hello name={content}/>);

    var helloNode = ReactDOM.findDOMNode(component);

    expect(helloNode.textContent).toEqual(content);
  });
});
