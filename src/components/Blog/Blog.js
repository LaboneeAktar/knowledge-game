import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl m-10 text-cyan-600">Welcome to My Blog!!</h1>
      <div className="lg:mx-32 mx-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-cyan-300 bg-cyan-100 rounded-t-lg"
        >
          <div className="collapse-title text-[22px] font-medium">
            1. What is the purpose of React Router?
          </div>
          <div className="collapse-content pt-4 text-lg">
            <p>
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application.
            </p>
            <p>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-32 mx-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-cyan-300 bg-cyan-100"
        >
          <div className="collapse-title text-[22px] font-medium">
            2. How does Context API work?
          </div>
          <div className="collapse-content pt-4 text-lg">
            <p>
              <strong>Context API : </strong>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
            <p>
              <strong>Steps of Context API work:</strong> <br />
              <span>
                1. Initialize the Context (declare a Context using
                createContext). <br />
              </span>
              <span>2. Create provider and set provider with value.</span>
              <br />
              <span>
                3. useContext in that place where we want to get the
                context/data.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-32 mx-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-cyan-300 bg-cyan-100 rounded-b-lg"
        >
          <div className="collapse-title text-[22px] font-medium">
            3. Write something about React useRef Hook.
          </div>
          <div className="collapse-content pt-4 text-lg">
            <p>
              The useRef Hook allows to persist values between renders. It can
              be used to store a mutable value that does not cause a re-render
              when updated. It can be used to access a DOM element directly.
              <br /> If we tried to count how many times our application renders
              using the useState Hook, we would be caught in an infinite loop
              since this Hook itself causes a re-render. To avoid this, we can
              use the useRef Hook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
