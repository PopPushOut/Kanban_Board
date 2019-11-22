# React + Redux

A simple Banban-Board React + Redux implementation.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Data

In order to load the default data do the following:

 1. Go to client/store.js
 2. Modify second parameter passed to store constructor createStore(rootReducer, *persistedState*->defaultState);
