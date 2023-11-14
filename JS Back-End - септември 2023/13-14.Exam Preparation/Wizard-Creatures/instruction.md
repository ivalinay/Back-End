1. Init project and structure
   - add .gitignore
2. Setup developer environment
3. Install express and nodemons
   - configure static middleware
   - configure bodyparser
   - configure routes
4. Add images and css in public directory
5. Add html files in views directory
6. Install express-handlebars
   - configure view engine
   - add main layout
   - fix public styles hyperlinks
   - rener home page in hbs
7. Convert all html views to handlebars view
   - Group views by meaning
8. Add controller folder with home controller
9. Add database
   - install mongose
   - connect to db
10. Prepare user functionallity

- user controller
- add controller to routes
- fix navigations in the nav bar(login, register, logout)
  - render login page
  - render register page

11. Add User model
    - simple validation in Schema
    - add method for register
    - create first User record in the db
    - validate password missmatch
    - validate email already exists
12. Hash password
    - install bcrypt
    - hash password
13. Login
    - find user by email
    - validate password with hash
14. Generate jsonwebtoken
    - install jsonwebtoken
    - promisify jsonwebtoken
    - generate secret
    - generate token in service
15. Return token in cookie
    - install cookie-parser
    - configure cookie-parser
    - set cookie with token
16. Implement logout
17. Authentication middleware
    - create middleware directory
    - and auth middleware and import it in express configuration below cookieParser
    - decode the token
    - handle invalid token
    - provide authorization
18. Dynamic navigation
    - conditional options in navigation
    - add data to res.locals for hbs templates
19. Error handling
    - add 404 page
    - redirect missing rout to 404
    - add global error handled(option)
    - add error message util
20. Show error notification
    - show in the main layout
    - pass error to render in login and register pages
21. Automatically login after register

#####################################################################################################################################

## TODO's

1.  Map pages to navigation in both LoggedIn and LoggedOut state
2.  Add Creature model to mongoose
3.  Implement - All posts

- show each creature with image, name, species, description
- add details but to every creature
- If no creatures "There are no posts yet..."

4.  Add details page (for Creatures)

- If the user is the owner of the post
  should have "Edit" and "Delete" button
- If the user hasn't logged in => no buttons
- If the user is not the owner => vote button

5.  Vote button
    - when clicked -> "Vote"
    - redirect to the details page for the current creature
    - show the email of the people voted
      if the already has voted -> 'Thanks for Voting' and add the email of the vote people
6.  Add creature

- on success redirect to all posts page

7. Delete Creature

- on success redirect to all posts page

8.  Edit Creature

- on success redirect to current creature page

9. Routes Guards - check
10. Validations

- Login
- Register
- Animals

11. Bonus -> Profile
    -> show my posts
    -> if there are no posts - msg
