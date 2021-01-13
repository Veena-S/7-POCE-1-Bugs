import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import Bugs from './bugs.js';

console.log('hello');

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const bugsList = Bugs.bugs.map((bug, index) => (
  <li>
    <p>
      id:
      {bug.id}
    </p>
    <p>
      problem:
      {bug.problem}
    </p>
    <p>
      error text:
      {bug.errorText}
    </p>
    <p>
      created:
      {moment(bug.createdAt).fromNow()}
    </p>
    <p>
      updated:
      {moment(bug.updatedAt).fromNow()}
    </p>
    <p>
      user email:
      {bug.User.email}
    </p>
    <p>
      feature:
      {bug.Feature.name}
    </p>
  </li>
));

const myEl = (
  <div>
    <ul>{bugsList}</ul>
  </div>
);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
