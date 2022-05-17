# CryptoWebsocket

A live crypto coin rate tracker simple web app. Data is retrieved via rxjs websocketsubject from coincap.io. After a successful connection to the mentioned websocket service the data shown on a line chart. User can select one of the seven different coins to see its live changes on the line chart. 

- Angular
- rxjs webSocketSubject
- Chart.js
- ng2-charts 


How to run:
- clone the repository
- npm install
- ng serve
- go to localhost:4200

With this small app, I practiced usage of the websockets, rxjs webSocketSubject and Chart.js.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
