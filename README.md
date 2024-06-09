# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

This is from the excellent O'Reilly course ["Angular: Zero to Full-Stack"](https://learning.oreilly.com/course/angular-zero-to/9780137891023/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## My comments

0. Pre-requisites is to install `Node.js`, once you've done that you can install Angular CLI using the Node's package manager `npm` i.e. `npm install -g @angular/cli`. Everything in Angular can be managed via this CLI!
1. There are a few shortcuts you can use e.g. for starting the application simply run `ng s`, and if you want to open up a browser automatically run `ng s -o`
Same goes for generating component, you can replace `ng generate component name` with `ng g c name`
2. The version of Angular I used is newer than the one used in the video (v18 _vs_ 11!) so there are a few diffs e.g. creating the app did not generate the `app.module.ts` file automatically. I did not use this `NgModule` and therefore all the components are "standalone". It is still possible to generate it by running the following when creating the App:
`ng new --no-standalone` 
**That said**, it seems that `NgModules` are not the recommended way to write Angular apps anymore (see [this](https://blog.angular.dev/introducing-angular-v17-4d7033312e4b#586d) for instance). The "new" approach is preferred so that each component is self-sufficient.
3. The app uses the `angular-fontawesome` npm package to make things a bit prettier. Install like this: `ng add @fortawesome/angular-fontawesome@0.15.x` (**make sure you double check a version compatible with the version of Angular installed** - see [here](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) for a table showing compatibility and usage)
4. Material-UI is another 3rd party lib used that allow us to create nice looking button and icons. Add it to the project like so: `ng add @angular/material`