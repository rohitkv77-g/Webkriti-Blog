# CURIOUS CAT
Curious Cat is a Blog Web Site. It is made using Node JS and Express as the Framework. The Database used in this project is MySQL. 

# FEATURES
#### Sessions
  - This website uses sessions for logged users.
  - The package used for maintaining session is express-session.
#### Blog Creation
  - A registered user can create a Blog and post it.
  - If an unregistered user tries to post it is redirected to signup page.
### Different Categories of Blog
  - At the time of creating blog user can choose a category from a specified list.
#### Blog Deletion
  - Only Owner of the user can delete the blog.
  - A proper message is displayed when a user tries to delete someone else's blog followed by a redirection.
#### Blog Edit
  - Only Owner of the blog can edit it.
  - User can edit the title as well as change the category of the Blog.
  - Edit Buttons appears only to the Owner of the Blog.

#### Dynamic Quotes
  - Every Time home page loads a random quotes appers.
### Dynamic Pages
  - Home page is dynamic. Every Time new blog is added home page changes.
  - Home Page Contains many Blogs each with Title, author and maximum word of 500 and a read more button.
  - Clicking on read more button opens full article, and edit button also appears if current user is the owner.
  - Articles section under user menu changes whenever user writes, deletes or edits a article.
#### Dynamic Url
  - When a user creates a blog a dynamic url is alloted for that particular blog.
  - Anyone can view any blog through blogID using url.
#### Articles
  - A registered user can see all its posts sorted by date from oldest to newest.
#### Security
  - User's password is hashed using bcrypt and added saltrounds.
  - Cookies stored in browser is encrypted.
  - Anyone other than owner of a particular blog cannot edit or delete it.
  - During Signup Strict checking is done.
### Navigation
  - Navigation bar changes as per the user logged in status.
### Responsive
  - All the pages are responsive.
### Worked with Multimedia
  - During signup a user can upload a profile picture.
  - During Blog Creation user can post pictures with the Blog.
### Database
  - MySQL Database is used.
  - Three tables are used
    - Users
    - Blogs
    - Quotes


# SCREENSHOTS
  - https://drive.google.com/open?id=1BR7ZhArHnaV9A1Zy8EMHVxktRQ3Hgdzd
# VIDEO LINK
# HOSTED WEBSITE LINK
  - https://stormy-anchorage-99035.herokuapp.com/
