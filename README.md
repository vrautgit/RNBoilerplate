# React-Native Boilerplate
This is a boilerplate for react-native project

## Installation Steps
### For IOS and Android
1. Install all npm modules
```
npm install
```
2. Link all npm modules to native modules
```
react-native link
```
3. Run project
* For IOS
```
react-native run-ios
```
* For Android
```
react-native run-android
```
4. Run packager (Only if paackager didnt load automatickaly with command in step 3)
```
react-native start
```

## List of modules integrated in project
* native-base :
 It is a UI component library for React Native
* node-forge :
A native implementation of TLS and various other cryptographic tools 
* react-native-vector-icons :
Customizable Icons for React Native
* react-navigation :
Routing and navigation for React Native apps
* react-redux :
React-redux is used for managing application state
* redux-logger :
Redux is used for loging application state onto our console

## Project folder structure explained
### assets
Contains all generic stylesheets, images, fonts or static resources etc.
### components
Contain all application component of screens, navaigations, generic component
### libs
All applications api calls, global variables, helpers and all other generic javascript stuff goes here
### redux
Application reducers, actions defination goes here