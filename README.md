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

