# mastering_pinia
Learning Pinia store managment for Vue.js

I'll be following [Net Ninjas Pinia tutorial playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD)

## WTF is a Store

A store is a like a big box to keep information stored and organised.
State managment stores are avliable everywhere within the app regardless of 
nested they are or what component tree they are part of. It tracks the global state.

This simplifies passing core data within the app and avoids things like bubbling up events or passing props.


A store is made up of

_state_ which is where all data properties are kept (e.g.: a counter)
_getters_ these can grab data out of the state/modify it and return it (compued properties)
_actions_ where store methods are kept that have read and write access to _state_ data

## Using a Store

When defining a Store you want to store the result of `defineStore` in a 
constant because the return value is a function.
And when we envoke that funtion we can access the function within a component.



