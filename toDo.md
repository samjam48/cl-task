# To Do

- [x] implement global DB for data

- [x] load all projects
    - [x] tags
    - [x] Popular ideas

- [x] Implement search functionality of DB data
    - [x] Search Bar
    - [x] Handle Input
        - [x] Keypress enter
    - [x] Load correct Project
        - [x] Basic (find exact project by title)
        - [x] Advanced
            - [x] update with any project containing supplied text so far in title
            - [x] update with any project containing supplied text so far in description


- [ ] Single Page
    - [x] logo and welcome text of the city
    - [x] Search box at the top (functional)
        - [x] find idea's by title
        - [?] Show similar related idea's
    - [ ] Second area (whereever/however I like)
        - [ ] Most popular tags
        - [x] 5 most popular idea's trending from all projects
    - [x] 3rd area (header/nav) - [Non funcitonal]
        - [x] log-in/out
        - [x] edit profile
        - [x] choose language should be visible


- [x] For each project. Show:
    - [x] Title
    - [x] Number of ideas
    - [x] Number of engaged users
    - [x] Load image for each project
    - [x] Use extendable material-ui cards:
        - [x] image inside card loading nicely
        - [x] nicely sized and positioned
        - [x] Extend to show more/less about a project
    - [x] Working link to project page (page not important)


- [ ] Design
    - [ ] Mobile First!
    - [x] Intuitive navigation
    - [x] Nice loading of projects
    - [ ] Brand feel
        - [ ] improve brand colour options and set uses for different mesagging environments
        - [ ] improve fonts and assign fonts for dif use cases
        - [ ] colours and images to suit background environment whilst keeping a clean UI
    - [ ] Transitions:
        - [ ] central nav icon change over:
            - [ ] arrows slide up, logo icon slide's in and then spins into place (reverse process when going back)
        - [ ] banner image rise and dissapear as navbar goes from bottom to top
        - [ ] projects slide in from side when search clicked
        - [ ] trending ideas
        - [ ] tags and trending idea's shown centrally initially and then move to side


- [x] Finishing
    - [x] Create README instructions
    - [x] Purge unused components
    - [x] Clean up files: un-needed imports, logical naming, check comments still valid
    - [x] Beautify
    - [x] Test repo installs and runs on mac and windows



- [ ] Nice To Haves
    - [ ] limit banner stretch to max screen size
    - [ ] Add colour options as a dataset to DB
    - [ ] Modularise DB.js
    - [ ] Footer = make up your own if you like
    - [ ] Add firebase and pwa functionality
    - [ ] Jasmine tests
    - [ ] Implement autocomplete of DB search data
    - [x] Correct React state manipulation for search input
    - [ ] Prune modules



### Design (60%)
How does the result look and feel? Is it attractive? Easy to use and understand? Fun to use? Is it clear? Original? What message does it convey? Bonus points for creating your own graphical assets. Be creative!

### Engineering (40%)
Are you respecting all aspects of a good engineered project, including abstractions, modularity, all aspects related to maintainability, testability and coding style. Are you making good use of the capabilities of the libraries/frameworks you chose?



# Issues to fix

## Material-ui dropdown menu
Would be intuitive / nicer to have an elegant dropdown for user log-in actions and language selection.

## landing page logic
Currently tracks user events to display landing page or not. If user was directed to site from a link it would show the landing banner image (correct content below so not end of the world). but would be intuitive to use url to drive the logic