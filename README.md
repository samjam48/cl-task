# Labbersville Demo

## Install and run
* Clone/download repo

* Use ```$ npm install``` to download and install required packages

* then ```$ npm start``` to start the server

* App will run on http://localhost:3001


## About
* This App is built using the React framework for Node.js. Modular principles are followed and in nearly every case any functionality that can be a seperate component is implemented as one.

* Data for the app is in the ```/public/api``` folder.

* The handler function for providing this data to the app is ```/config/db.js``` which turns all the JSON data into a single object available across the app.

* ```index.js``` sets the how url routes load different views and how components relate to each other (parent / children tree)

* App components held in ```/modules``` folder.

* ES6 syntax used and babel packeage implemented to transpile this for use on most modern browsers.


## Use Instructions
* The UX should be fairly obvious so the user can quickly find the current projects or search for their desired project.

* They can find out more information or navigate to the projects holding page.

* Users can also change the apparent log-in status and language option


## Please note

### Layout
* The website app is laid out with use of transitions in mind.
    * As transitions are not implemented it might look a bit stupid with jerky changes to the entire view that wouldn't happen in the final design

### Brand Feel
* Font's and design pallete were not considered beyond quickly making it not look shit.

* It would do well with some thought put into this

### Mobile unfriendly
* Site is dyanamic for screen size but screens smaller than ipad ruins the view. 
    * This is a big limitation but by no means insurmountable to change.

### Tags
* I have not implemented a view for tags.
    * A tag cloud could be nice the words were odd and i didn't understand what it related to at all and there was plenty of other things to do...

### Time-frame & experience
* This app was built over three days using a framework I have never used before along with associated set-backs.
    * I enjoyed the challenge and solving the problems I encountered.
    * I am deeply unhappy with the lack of transitions and brand feel BUT I am happy that this accurately demonstrates what I'm capable of in three days doing something I haven't done before.

* I'd like to think one more day would be enough to fix the issues above but it could well be another three days as I am still unexperienced in implementing these things in React.

* ```toDo.md``` shows a list of current tasks completed to make the app and other tasks I would complete with more time.
