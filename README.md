# MERN-React-Redux

this is a stephen-course walkthrough with spicy topics i faced during this course.
for now this course will be organized by Coursera order list and under each lesson i am going to wrap final conclusion and my practises under each lesson topic for now let's **START**

---
# 1. Let's Dive In!

## what & why React?
- react is a js library which we use to show content(html) to users and handle user interactions

## why not using Redux?
- react can work by itself but it can also work with tremendous variety of other libraries, packages, servers, databases

## what is JSX?
- it looks like HTML and can be placed in js code. determines the content of our react app just like normal HTML

## How did the screen changes when we move the mouse?
- by event handler which is used to detect user interaction and respond to it. 
- also it is callStack is lifo which is last in first out ,suppose we have function that call another one inside it when we call a function we add it to callStack and when this function code is executed properly this function is removed from callStack thus if the second function is found inside first one then the first function added to call stack and then the second function added and removed then the first function removed.
- we have the same with event handler the last event is called and added to the callStack is the first one to be removed.

## why did we add react and react-dom libraries to our app?
- **React** knows what a component is and how to make components work together also it is where react engine is located.
- **react-dom** knows how to take a component and make it show up in the dom 

## why install many react packages?
- our new react app is based on dev server, webpack and Babel
 **Babel** is command line tool that convert any version of JS such as ES2015, ES2016 ...,ES2019 to **ES5** which is completely supported by all browsers which makes our life easier during development and code is also supported on user's browsers
 babel also consists of many packages to perform it's operations
 
    **devServer** is a light weight server to testify and validate our content in real testing enviroment


## what a React component is ?
- it is a function or a class that produces HTML to show the user and handles feedback from the user

## Note
- the component name's first letter should be capital letter. 

---
# 2. Building Content with JSX
## JSX 
- is converted to original js code with babel react command line tool thus we know that babel includes React within it's code  
- just for convension issue '' are used for js and "" used for JSX
- JSX can't show objects which is not valid as a react child(inside tag prenthesis or into innerHtml strgin)

# 3. Communicating with Props

## Component Nesting
- a component can be shown inside of another using (import & export)
## Component Reusability
- we want to make components that can be easily reused through out application
## Component Configuration
- we should be able to configure a component when it is created

## Creating a Reusable, Configurable Component
- identify the JSX that appears to be duplicated
- (for naming) what is the purpose of that block of JSX? think of a descriptive name for what it does 
- (file with name as component) create a new file to house this new component - it should have the same name as component
- create new component in the new file, paste the jsx into it 
- make the new component configurable by using react's 'props' system 


## Props
- System for passing data from a present component to a child one
- Goal is to customize or configure a child component

# 4. Structuring Apps with Class-Based Components

## Class base component vs Functional component 
- Functional component is good for simple content
- Class base component is good for just about everything else
  - benefits fo calss based components
    - Easier code organization 
    - can use 'state' to handle user input
    - understands lifecycle events (easier to do things when the app first starts)

## what happends to our application inside users' brownser (for this app)
- JS files loaded by browser
- App component gets created
- we call geolocation service
- app returns JSX, gets rendered to page as HTML
- we get result of geolocation
- we update our state object with a call to "this.setState"
- react sees that we updated the state of a component 
- react calls our render method a second time
- render method returns some (updated) JSX
- React takes that JSX and updates content on the screen

## Rules of class components
- must be a javascript Class
- must extend (subclass) React.Component
- must define a render method that returns some amount of jsx
  
# 5. State in React Components
## Rulse of state
- only usable with class components
- don's confuse states with props
- 'State' is a js object that containes data relevant to a component
- updating 'state' on a component causes the component to almost instantly rerender
- state must be initialized when a component is created
- state can only be updated using the function 'setState'

# 6. Understanding Lifecycle Methods
## Component LifeCycle
- constructor : **good place to do one time setup**
- render : **avoid doing anything besides returning JSX**
- **content visible on screen**
- componentDidMount : **good place to do data loading**
- **sit and wait for updates**
- componentDidUpdate : **good place to do more data-loading when state/props change**
- **sit and wait until this component is not longer shown**
- componetWillUnmount : **good place to do cleanup(especially for non-react stuff)**
  
# 7. Handling User Input with Forms and Events
## Controlled VS unControlled
- controlled component is where we store data inside state
- uncontrolled component is where we store data inside Dom
- **notice** here that **this** is refer to call position not to defined position
  - to force **this** to refer to fixed position no matter where it is called we can do 2 things
    - for a class based component we can do a binding of this to the function scope in order to fix **this** for this method or function
    - we can use arrow function which fixes this for it's code no matter where it is called

# 8. Making API Requests with React
## for organizing our code
- we need to create an api folder which holds a pre-configured instance with our base url and headers with access key or any other related data
- axios returns a promise which we can use to do tasks after data received in sync way
- we also can use async and await to do tasks in an async way but this holds all application
  
# 9. Building Lists of Records
- keys has a performance issue for updating dom so we need to define it for the parent component list
- key property helps react-dom to identify changed elements to be updated in a list
- keys should be set in a unique id list to be rendered

# 10. Using Ref's for DOM Access

## React REFs
a system to give you direct access to a single dom element that is rendered by a component

- gives access to a single DOM element
- we create refs in the constructor then we call it inside the constructor , assign them to instance variables on our class(**we can in theory asign references to state of our componentbut it is really not required to do so because these refs are not going to change over time and we never gona call setstate with the ref so no need to link it up to state in general we only put data in state if we expect it to change over time**), then pass to a particular JSX element as props

# 11. Let's Test Your React Mastery!
- an awesome app with awesome styling technique

# 12. On We Go...To Redux!
Redux is a state management library used with many languages to handle user data in a form or data stored methodology.
redux is consisting of these steps
- ## actions 
  - used to identify data object to be inserted or updated or deleted from the store repository or vessel
  - pass data from user to redux vessle as a function that returns an object of data to be passed into redux vessle(reducer) function to be informed about action type to be stored properly into vessle
- ## dispatch
  - used to send actions to the store vessel to be reduced into data object at reducer calls
  - connects actions and reducer into our redux state it is implemented in redux library
- ## reducer
  - used to process inserted/updated/deleted/read or other action to be stored into the vessel which can be used in other components to be updated or readed 
  - a function that returns an object to be passed to our redux vessle on creation and modification to be stored on each action 

# 13. Integrating React with Redux
## code file structure with React-Redux app
- **src**
  - **actions** -> contains files related to action creators for redux 
  - **components** -> files related to components
  - **reducers** -> files related to reducers
  - **index.js** -> sets up both the react and redux sides of the app

# 14. Async Actions with Redux Thunk
## general data loading with redux
  - Component gets rendered onto screen
  - component's 'componentDidMount' gets called
  - we call action creator from 'componentDidMount'
  - action creator runs code to make an api request
  - api responds with data
  - action creator returns an 'action object' with the fetched data on the payload property
  - some reducer sees the action returns the data off the 'payload'
  - because we generated some new state object, redux/react-redux cause our react app to be rerendered

## notice 
- component are generally responsible for fetching data they need by calling an action creator
- action creators are responsible for making API requests (this is where we use redux-thunk)
- we get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps
- action creator must return action object and must have a type property and optionally can have a payload

# 15. Redux Store Design
## Rules of reducers
- must return any value (int ,str,obj,arr,null) except undefined
- produces 'state', or data to be used inside of your app using only previous state and the action
- must not return reach 'out of itself' to decide what value to return (reducers are pure) for for example shouldn't make api call or select data from dom element just work with actions and state or payload
- must not mutate its input 'state' argument such as **.pop**, **.push** and **state[0]** inside our reducer that rule is misleading becasue actually you can change the state but it is not identified as a cahnge that forces our app to run so that change is happened but you can't force the app to rerender because in **combineReduceres** method it has a **hascahnged** flag that identifies the state cahnge by it's state reference & type not by it's content so no matter how you change the state **Redux's** reducer can't feel that you really did it and you can't see that change really happening  

### need more practice on redux(async) hah ! you can find it here

