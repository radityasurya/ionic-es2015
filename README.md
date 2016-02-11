# Ionic ES2015 Boilerplate
This boilerplate aims to provide a lintable, testable Ionic application that utilises ES2015. 

- Testing - Karma, Webpack, Jasmine, PhantomJS
- Linting - ESLint
- Build Chain - Webpack with Babel, Sass and URL loaders
- Task Runner - Gulp

Configuration files for Webpack, ESLint and Karma are left deliberately thin. This should be considered
a starting point for a more complete and tailored boilerplate in line with personal preference.

## Why not use Ionic 2 or Angular 2 with Native Script?
The tooling around Angular 2 is not yet mature, and this creates overhead and complexity when looking to create a
production ready application and build chain. As an example, there are some issues with Angular 2 using System JS 
internally that prevent Karma from running it easily, and this requires some workarounds. 

As the tooling around Ionic and Angular 2 matures this boilerplate will be adapted to support it. In the interim 
Angular 1.5 may be integrated as this provides a few performance enhancements (e.g. one way binding) as well as 
the option to create components. Upgrading to Angular 1.5 will provide an easier upgrade to Angular 2.0 when the
tooling is more stable.

## Pre-requisites
- [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- Node and NPM (or NVM)
- Cordova (`npm install -g cordova`)
- Ionic (`npm install -g ionic`)
- [Android SDK](http://developer.android.com/sdk/installing/index.html?pkg=tools) to compile to and run on Android
- XCode and developer keys to compile to and run on iOS

## Installation
- `git clone https://github.com/matt-rhys-jones/ionic-es2015 project-folder`
- `cd project-folder`
- `npm install`
- `ionic state restore` (restores required ionic/cordova plugins as these aren't versioned)

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

Note that, deliberately, there are no folders for 'controllers', 'services' or 'templates'. Instead, each module folder 
should be self contained, this is considered best practice and is more in line with the component 
architeture that Angular 1.5 leans towards.

ES2015 module syntax is used to load JS modules, as well as import scss and html templates. While this is an 
unusual use of ES2015 imports, it allows webpack to load and bundle everything together, without having to mix 
two different module conventions.

## Linting
ESLint is used to lint source (`.js`) and spec (`.spec.js`) files, `.eslintrc` contains a minimal configuration 
and extends ESLint recommended defaults. 

- `gulp eslint` - run lint against `.js` and `.spec.js` files in `/src`

## Testing
Karma is currently configured to utilise Jasmine and PhantomJS, to run the tests:

- `gulp karma:once` - run all tests once
- `gulp karma:tdd` - watch spec and source files and run tests continually

## Running (Development Build)
- `gulp build` - uses webpack to bundle js, html, sass and images into the `./www/app' folder
- `ionic serve` - serves bundled app in a browser (remember to run `gulp build` first)
- `ionic run [android/ios] --device` - compiles the app to native code and runs on device (iOS requires developer keys)
- `ionic run [android/ios]` - compiles the app to native code and runs in emulator (requires Android emulators)

Starting `ionic serve` will also trigger `gulp watch`, the application will be rebuilt and live reloaded when source files change.

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
