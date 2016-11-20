# To Do

- [x] implement global DB for data

- [x] load all projects
    - [x] tags
    - [x] Popular ideas



- [ ] Implement search functionality of DB data
    - [x] Search Bar
    - [x] Handle Input
        - [x] Keypress enter
        - [x] Button???
    - [x] Load correct Project
        - [x] Basic (find exact project by title)
        - [ ] Advanced
            - [ ] update with any project containing supplied text so far in title
            - [ ] update with any project containing supplied text so far in description

- [ ] Single Page
    - [ ] logo and welcome text of the city
    - [ ] Search box at the top (functional)
        - [ ] find idea's by title
        - [ ] Show similar related idea's
    - [ ] Second area (whereever/however I like)
        - [ ] Most popular tags
        - [ ] 5 most popular idea's trending from all projects
    - [ ] 3rd area (header/nav) - [Non funcitonal]
        - [ ] log-in/out
        - [ ] edit profile
        - [ ] choose language should be visiible


- [ ] For each project. Show:
    - [ ] Title
    - [x] Number of ideas
    - [x] Number of engaged users
    - [ ] Have a nice design asset or icon for each project
    - [ ] Use google cards to show more/less about a project
    - [x] Working link to project page (page not important)


- [ ] Design
    - [ ] Mobile First!
    - [ ] Nice loading of projects
    - [ ] tags and idea's show initially and then move to side

    

- [ ] Finishing
    - [ ] Create README instructions
    - [ ] Purge unused components
    - [ ] Clean up files: un-needed imports, logical naming, check comments still valid
    - [ ] Beautify
    - [ ] Test repo installs and runs on mac and windows



- [ ] Nice To Haves
    - [ ] Modularise DB.js
    - [ ] Footer = make up your own if you like
    - [ ] Add firebase and pwa functionality
    - [ ] testing ???
    - [ ] Implement autocomplete of DB search data
    - [ ] Correct React state manipulation for search input
    - [ ] use base64 encoding to display labbersville png instaead of converted jpeg




### Design (60%)
How does the result look and feel? Is it attractive? Easy to use and understand? Fun to use? Is it clear? Original? What message does it convey? Bonus points for creating your own graphical assets. Be creative!

### Engineering (40%)
Are you respecting all aspects of a good engineered project, including abstractions, modularity, all aspects related to maintainability, testability and coding style. Are you making good use of the capabilities of the libraries/frameworks you chose?



# Issues

## Search issues
### Searched Items
Using setstate of search items such as search input and page load of search items everything happens on a delay of 1

e.g.
input. ‘a' => [  ]

input ‘ab' => [a]
input ‘abc' => [ab]

If a user clicks the search button or hits enter I load the url with searched for projects.  need ot implement a correct callback functionality of this I think.

#### Current workaround
 update the searchInput var directly from the search input ignoring the change state rules of React.


### Page loading of searched term

Using correct updating of state each time leads to this issue: 
first click loads nothing.
2nd click loads desired page with correct searched for projects
I think this is related to the callback issue from above perhaps but have no idea where it is occuring as the route is correct at time of loading and i dont understand why it isn't accpeting it.

#### Current Workaround
Ive hard-coded to re-render everytime for now without checking search is different.
The search var is updated directly from the parameter input instead of updating the state of the component.

#### Note
Some links/searches still fail on first load, needs sorting



## Image loading
Main logo image works at start but usually fails at somepoint if youvigate for a while

All other images fail to load from inside components


## Materialise-ui card extension
Cards fail to extend and reveal project stats that should normally be hidden.
