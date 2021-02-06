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
