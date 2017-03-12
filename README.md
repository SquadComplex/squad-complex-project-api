
# Random Bytes

    We were tasked with creating an app that build websites.  Random Bytes is for non-technical users to write blog posts and pages for the site. When the visitor visits Random Bytes    , they can see public content. When a user logs in, they should see a dashboard that lets them create and edit new posts or pages and decide on if they want them to be public or private.

    This is the link to our Front-end repo: https://github.com/SquadComplex/team-project-frontend
This is a link to our deployed Back-end: https://guarded-mountain-32914.herokuapp.com


## Routes

Verb	URI Pattern	Controller#Action
POST	/sign-up	users#signup
POST	/sign-in	users#signin
PATCH	/change-password/:id	users#changepw
DELETE	/sign-out/:id	users#signout
POST	/blogs	blog-create#create
GET	/blogs	blog-egt-index#index
GET	/blogs	blog-get-show#show
PATCH	/blogs	blog-update#update
DELETE	/blogs	blog-delete#destroy
POST	/pages	page-create#create
GET	/pages	page-get-index#index
GET	/pages	page-get-show#show
PATCH	/pages	page-update#update
DELETE	/pages	page-delete#destroy
