# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library to allow developers to build faster and cleaner UI interfaces. The main goal is to do one thing well and show data in the "view" layer of MVC model. React is a much better way to build apps rather than vanilla JS becasue it's build on top and allows us to use JSX to write better code. From class, I can build UI with similar HTML markup and not have to build all the elements, text content, and less errors.

1. What does it mean to think in react?

Thinking in react means thinking in components and building small components to stich together to make one larger app.

1. Describe state.

State is data that flows from the top down, meaning from the parent to child relationship. You set your state or data you want to display in your UI. State updates as you provide actions or re-renders once that single piece of state changes.

1. Describe props.

Props allow developers to pass state around from component to component. You can assign state to props, and then export that data to a new component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects can be left over and do things like create infinite loops, or a term like garbage collection. You can sync side effects in react by using an empty array dependency in the useEffect hook.
