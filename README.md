# Workspace Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

The workspace utilizes a single configuration for multiple applications and libraries.
It is configured to utilize a shared folder `projects/shared-styles` for global styles across all applications.

Also contains:

- `elements-app` : a light module for generating angular elements
- `ui-library` : currently a single library, will be updated to contain an angular library for each custom component
- 2 example applications for testing Ui Library imports and global theme
- base level index.html file for testing angular element exports (work-in-progress)

### Running the projects

update angular.json `defaultProject` to the app or library you want to work with and then use ng commands as usual
(ng serve, ng g c <comp-name>)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
