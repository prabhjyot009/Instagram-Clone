import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//When the state of an object changes, virtual DOM changes ________________ options are 1.updates all the objects. 2.only that object in the real DOM, rather than updating all the objects. 3.only object in virtual DOM 4.None
//What are props in React? options are: A.Props are inputs to components. B.They are single values or objects containing a set of values passed to components on creation using a naming convention similar to HTML tag attributes.  C.They are data passed down from a parent component to a child component. D.All of the above
//What is the difference between HTML and React event handling? options are: A.In HTML, the event name usually represents in lowercase as a convention. B.Whereas React follows the camelCase convention .C.Both .D.None of the above
//<h1>Hello!</h1>;{  messages.length > 0 && !isLogin ? (    <h2>You have {messages.length} unread messages.</h2>  ) : (    <h2>You don't have unread messages.</h2>  );} options are: A.inline conditional expressions B.The output will be based on the result of the expression C.Both D.None of the above
//Which is not a benefit of using React Router? options are:Offers a simple, declarative API that makes it easy to specify routes and map them to components,React Router is designed to work with React’s component-based architecture, making it a natural fit for React applications,It makes application faster due to Virtual DOM implementation,React Router is highly configurable and can be extended to meet the needs of any application
//NavLink: This is used when you want to highlight the current or active link. This is used with the activeClassName attribute, which enables it. true or false
//