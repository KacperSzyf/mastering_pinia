# mastering_pinia
Learning Pinia store managment for Vue.js

## WTF is a Store

A store is a like a big box to keep information stored and organised.
State managment stores are avliable everywhere within the app regardless of 
nested they are or what component tree they are part of.

This simplifies passing core data within the app and avoids things like bubbling up events or passing props.


A store is made up of

_state_ which is where all data properties are kept (e.g.: a counter)
_getters_ these can grab data out of the state/modify it and return it (compued properties)
_actions_ where store methods are kept that have read and write access to _state_ data


