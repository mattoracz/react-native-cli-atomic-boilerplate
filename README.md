![ReactNativeBoilerplate](/.github/images/header.png)
# React Native CLI - Atomic Boilerplate

# Getting started

This boilerplate is based on React Native CLI please follow the instructions from [React Native Documentation](https://reactnative.dev/docs/environment-setup#installing-dependencies) set up your environment. Just remember to skip section [Creating-A-New-Application](https://reactnative.dev/docs/environment-setup#creating-a-new-application)

**If you have set the environment to boot react native application:**

### Step 1: Install dependencies
```
$ yarn install 
```

### Step 2: Start metro
```
$ yarn start 
```

### Step 3: Start platform
### IOS
```
$ yarn ios 
```

### ANDROID
```
$ yarn android
```

# How to change project name
Download [react-native-rename](https://www.npmjs.com/package/react-native-rename)
```
$ npm install react-native-rename -g
```
Run command react-native-rename with new app name and new bundle name
Example new name: "ReactNativeDappStarter"
```
$ react-native-rename "ReactNativeDappStarter" -b com.reactnativedappstarter
```
Search & Replace in project
```
"ReactNativeCliAtomicBoilerplate" -> "ReactNativeDappStarter"
"reactnativecliatomicboilerplate" -> "reactnativedappstarter"
```
```
$ cd ios && pod install
```
```
$ yarn ios
```

## Good read

* [Atomic Design for Developers: Project Structure - Part 1](https://betterprogramming.pub/atomic-design-for-developers-part-1-b41e547a555c)
* [Atomic Design for Developers: Atomic Engineering - Part 2](https://medium.com/swlh/atomic-design-for-developers-atomic-engineering-3591af676ef4)


## Starter Preview

![ReactNativeBoilerplate](/.github/images/mock.png)
