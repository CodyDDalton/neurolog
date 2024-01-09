<p align="center">
  <img src="neuroLog-frontend/neurolog/src/images/astrid_default.png" alt="Astrid"/>
</p>

<h2 align="center">Neurolog</h2>
<h3 align="center">Cody Dalton</h3> 

<h2 align="center">Neurolog - Mental Health Journaling App</h2>

Welcome to Neurolog! This is Astrid, our mascot - and the friendly little bot that’s going to accompany you along your mental health journey to come. As a Neurolog user, it will be your job to log in daily and keep an accurate record of your moods, and a regular check-in with the status of your mental health. On our end, we’ll be running the numbers to formulate ideas about the positive and negative impacts your daily life is having on your mental health.

Version 1 of Neurolog comes with the ability to post and edit journal entries, as well as mood logs. On your dashboard, you will find a display of your most recent posts and logs. On the Archive page, you can find a full listing of both - from as recent as moments ago to as distant as your very first posts made on your Neurolog journey.

Version 2 (Coming Soon) will introduce journaling prompts, accessed randomly at the press of a button. It will also introduce interactions with Astrid, as well as a guided view of your personal statistics on a dedicated Stats page. Statistics which will include a graphing of your moods across time, and how your moods relate to recent events journaled and analyzed for special keywords.

<h2 align="center">Getting Started</h2>

To begin, you will want to click on the green code box on the upper portion of this repository’s screen. You will have three options on how to clone the repository down to your machine - HTTPS, SSH, and Github CLI. 

The easiest method is to open up a terminal window on your machine. CD into a directory you want to copy Neurolog onto, and then type into your command line:

> git clone https://github.com/ePortfolios/wdv349-DaltonCody-FS.git

Once the repository is clone to your machine, open it with the code editor of your choice. Before entering any commands into your code editor’s terminal, make sure you are in the root directory of this project. Once you are, enter the command:

> npm install

You may also need to cd into neuroLog-frontend/neurolog, and then into neurolog-node/api. In each, npm install. This will install the necessary packages that will make Neurolog run smoothly. In the neurolog-node/api section, if there isn't already a .env file you're going to want to use the command:

> npm install .dotenv

Once installed, create a file in neurolog-node/api called .env. In this file, you will need to type and save the following:

> DATABASE_URL = mongodb://localhost:27017

> jwtSecret = ddrtetherehsfgest35636353453453te4hhgfxfrjrtyryrt

> PORT = 80000

Once you’re done, make sure you’re back in the root directory and enter the command: 

> npm run dev

This will start both the front-end and back-end parts of the project, and a new tab or window should appear in your browser. If not, enter the url:

> localhost:3000

<h2 align="center">Registration and Logging In</h2>

To register an account with Neurolog, click the register button. A form should appear. Enter your details, including an original username, an unused email, and a secure password. If your username of choice is already in use, a red X should appear beside the input field. Otherwise, you should see a green checkmark.

Once you confirm your registration, you will be redirected to the login once again. Enter your new credentials - username and password - into the input fields and click the login button. If all goes well, you should be redirected to your personal Dashboard.

<h2 align="center">Posting Entries and Logs</h2>

When first getting started, you will notice your entries and logs sections are yet to be filled with logs and entries. That’s where you come in! To post a new journal entry, click on the Post Entry button below the welcome message. Your screen should divide to reveal an input field. Enter a title and then the content of your post. When it’s ready, click Post. You may need to refresh your page to see the new post appear in your entry inventory.

To log your mood, click on the Post Log. A display should appear directly below the welcome message, showing 7 custom emojis and a small input field. Click on the emoji that most closely expresses how you’re feeling, and enter a bit of additional context in the input field if you feel like it. When you’re done, click Post. Again, you may need to refresh your page to see your new log appear in the log inventory.
