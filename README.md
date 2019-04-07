# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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




# CSIS2450Website
The website project for the tasklist manager program

# SETUP: NPM CLI
You will need to have the Nuget Package Manager CLI (command line interface) tool, as well as Node.js.  Luckily, Node.js is packaged with NPM already, so we only need to install Node.js (version 8.9.3 or higher).
Follow this URL `https://nodejs.org/en/`, and download xx.xx.xx LTS (Recommended For Most Users), and install this onto your machine.

Once this is finished installing, open up a command prompt / terminal, and type `node -v`.  You should see the version you just installed.  If this is the case, you have done everything correctly and can move onto the next step.

# SETUP: Angular CLI
Open up a command prompt / terminal, and enter the following command: `npm install -g @angular/cli`.  As of writing this, the version of Angular that this will install will be 7.3.8 (Angular 7).  To verify the install, inside of this command prompt / termial, type `ng v`.  You should see "Angular CLI: 7.3.8 (or greater)".  If this is the case, you did everything correct, and can move on.

# SETUP: Downloading the Website
Now that you have the required softwares to build the website, download this project from github, and save it somewhere on your PC where you can easily access it.  Once you have the solution downloaded, you should be able to run the solution VIA command line by opening up the "website" folder, then holding shift + right-click, and select the option "open powershell here".  This will open a powershell window that's root location is the website folder.  In this powershell window, type `ng serve --o`, you should see some green text saying that the website is up and running on port: localhost:4200.  Open up your favorite browswer, and type "localhost:4200" into the website/url field of your browser, and hit enter.  You should see the login page of our application.  If you can see the login page, you have done everything correctly.

# SETUP: Downloading the REST API
Now that the website part of our application is running, you can see that you cannot log-in, or access any kind of data.  This is because our server is not running, and since were not being hosted publicly, we need to run our server locally (IE: on your machine).  To get this setup, please head over to the other repository page listed here: `https://github.com/Onebadmuthajama/CSIS2450RESTAPI`, and follow those steps.  Once you have done that, you have completed the setup, and are ready to begin additonal development, testing, and discussion.  Thanks guys! :D

# TODO: Add Documentation, and Conventions (currently working on it).
