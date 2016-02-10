# Ionic ES2015 Boilerplate
This boilerplate aims to provide a lintable, testable Ionic application that utilises ES2015. 

- Testing - Karma, Jasmine
- Linting - ESLint
- Build Chain - Webpack with Babel, Sass and URL loaders
- Task Runner - Gulp

Configuration files for Webpack, ESLint and Karma are left deliberately thin. This should be considered
a starting point for a more complete and tailored boilerplate in line with personal preference.

## Why not use Ionic 2 or Angular 2 with Native Script?
The tooling around Angular 2 is still not mature, and this creates overhead and complexity when looking to create a
production ready application and build chain. As an example, there are some issues with Angular 2 using System JS 
internally that prevent Karma from running it easily, and this requires some workarounds. 

As the tooling around Ionic and Angular 2 matures this boilerplate will be adapted to support it, with an upgrade to 
a component structure with Angular 1.5 in the interim.

## Pre-requisites
- [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- Node and NPM (or NVM)
- Cordova (`npm install -g cordova`)
- Ionic (`npm install -g ionic`)
- [Android SDK](http://developer.android.com/sdk/installing/index.html?pkg=tools) to compile to and run on Android
- XCode and developer keys to compile to and run on iOS

## Installation
- `git clone https://github.com/matt-rhys-jones/angular-ionic-es2015 project-folder`
- `cd project-folder`
- `npm install`
- `ionic state restore` (restores required ionic/cordova plugins)

## Structure
```
| gulp-tasks 
| hooks
| node_modules 
| platforms - ionic platforms, no need to edit this directly
| resources - ionic resources, no need to edit this directly
| src - application specific code and resources
  \ resources
     \ fonts 
     \ img 
     \ scss 
  \ modules - application modules, services, controllers and specs live in module folders
  - entry.js - webpack entry point
  - entry.test.js - karma/webpack entry point
  - initialise-ionic.js - imports ionic and it's dependencies
| www
  \ app - distribution js and resources after bundling with webpack
  - index.html - loads webpack bundle
```

Note that, deliberately, there are no folders for 'controllers' or 'services'. This is to keep related functionality 
together and is generally considered best practice and also in line with the 'component' structure of Angular 1.5 and 
Angular 2.

ES2015 import syntax is used which would normally be expected to load only JS modules, however as 
we are bundling with webpack, we can also import sass and html.

## Gulp Tasks
- `gulp karma:once` - run all tests once
- `gulp karma:tdd` - watch spec and source files and run tests continually
- `gulp eslint` - run lint against `.js` and `.spec.js` files in `/src`
- `gulp build` - uses webpack to bundle js, html, sass and images into the `./www/app' folder

## Testing
Karma runs Jasmine and PhantomJS in order to test the app. 

## Running (Development Build)
- `ionic serve` - serves bundled app in a browser (remember to run `gulp build` first) and live reloads
- `ionic run [android/ios] --device` - compiles the app to native code and runs on device (iOS requires developer keys)
- `ionic run [android/ios]` - compiles the app to native code and runs in emulator (requires Android emulators to be set-up)

## Deploying (Production Build)
Todo...

## Note for Windows Users
Windows users will need to add JAVA_HOME and ANDROID_HOME environment variables to the relevant installation
paths:

- `JAVA_HOME` (e.g. C:\Program Files\Java\jdk7)
- `ANDROID_HOME` (e.g. C:\android\android-sdk)

The `PATH` variable should be appended `JAVA_HOME`, `ANDROID_HOME` and `JAVA_HOME/bin`. In addition
NVM/NPM paths should be listed *after* system paths in the `PATH` variable. This is to avoid hard to debug problems
with using Cordova.
