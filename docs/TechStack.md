# Tech Stack

## Application Design

For the overall design, I plan to make use of Figma with detailed wireframes. Icons and other graphics might be either procured from free icon files on websites such as flaticon.com or otherwise myself or my more artistic fiancee may be able to create these visuals ourselves. For a more robust demo of the eventual application, I may be able to use codepen or otherwise might be able to create highly simplified proofs of concept to run on my local machine.

## Front End Framework

I am going to be utilizing React for my front-end development, as it is the framework I have the most familiarity with and feel the most competent with. I will also be using VsCode extensions to help for guidance tools, such as ESLint and Tabnine starter.

## State Management

I plan to make full use of MongoDB for data management. I initially went in search of other choices, thinking that MongoDB would perhaps not be suited to larger objects and files. But upon further investigation, I've found that Mongo would be perfectly suitable for the kinds of data storage I would need.


## Node

I will be using Node in conjunction with Express for my back-end services, including validation and encryption along with CRUD utilities like making posts, fetching posts, editing and deleting posts. It will provide the back-end server to communicate with the Mongo database, allowing for signup/login services, data encryption, and storing/fetching post data. As with my other choices for languages/tech, I am choosing something I have a greater degree of comfort with and understanding of how to effectively use. I would rather show that I can create a great MERN application rather than to show that I can create a mediocre application using tech I'm less adept with.

## Express

I will use Express to create validation middleware for login and signup, and also for encryption middleware to safely secure passwords as well as private/personal user data as provided by the user to the app. I will also use it to create routes for the signup/login process, as well as for accessing the posting features and user metrics information I intend the application to provide. JSON data will be sent, especially for posting purposes - and that data will also be elsewhere received for the user to digest at their convenience.


## SQL/Postgres/Sequelize

I plan to make use of models, as it's the system I best understand. For instance, a user model with a name or username, an email, a password, and so forth. There will also be a short post model and a long post model, featuring properties such as the data/time, title, and content. I know the basics of how to use Sequelize for testing and SQL for databases, but I have little experience with Postgres - and overall not a lot of experience with any of these three as of yet.
