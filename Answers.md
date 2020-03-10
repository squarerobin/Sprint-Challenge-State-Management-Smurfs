1. What problem does the context API help solve?
 We don't have to pass props down from component to component (prop drilling)
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions have a type and a payload, so it's just a representation of the action, in the reducers is where the actions are where the functions will run. The store keeps the state of the whole app so it can be accessed from anywhere in the app.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state goes all the way down from the initial state down to the components thru props, component state is inherited by its children but not its parent. This is why we use state management (redux and contextAPI)

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows async logic like AJAX
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Maybe Context API, although I have only worked on one project which uses it. The reason being the code looks less cluttered.
