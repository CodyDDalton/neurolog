# Project & Portfolio 

* **Research Notes - Milestone 8**
* **Cody Dalton**
* **Due 11/19/2023**

<br>


## Project and Portfolio Proposal Details

This document contains general notes related to...

<br>

## Clean Code vs. Dirty Code: React Best Practices
Brief overview of research. 

* 1 - I learned about some of the qualifiers in terms of clean code. This is a topic I'm highly interested in, as I like efficiency, organization, and for my work to look professional. Of course, I don't always quite get to where I want to be. Regardless, one of the qualifiers I have begun to take more into consideration is looking for patterns and ways to shorten or expedite my code for a cleaner and more efficient result. For example, in a recent pet project timer application I found myself writing out a lot of 'document.getElementById().value' reads and assignments, and I started to make it more efficient by placing the ids in an array and using a forEach method in order to go through the list of actions while only writing the 'document.getElementById().value' part once. That feels fairly in line with the DRY protocol.

* 2 - I learned a valuable lesson about only commenting what is necessary or is otherwise too complex to express in code alone. In conjunction with that is the obvious (but not often followed by me) advice of naming things in a concise description. Sometimes I get caught up with making my code work that I forget to create smart names for the functions and variables. The example in the article related to a function to change camel case to snake case was really evocative to the concept and helped me to realize I needed to improve in this area. Knowing my way of working, it may suit me best to comb through my code after a good bit of work is finished and then creating those smart naming conventions. I'll try to be more aware of it in the process, but not too much to slow down my thinking. I had also been over-commenting, so that's something I'll keep a watchful eye out for as well!

* 3 - I was given an important reminder of a principle that Eric Clarke has just about driven into my head about creating modules. Functions that do one thing, one thing well, and one thing only. I still struggle to utilize this principle on the first pass. With my timer application, for instance, I wrote almost everything in one or two files - both around 500 lines a piece. When all the functionality was taken care of, I went back and started to take things apart in components and function files. In terms of the latter, I created one file to handle all of the timer processes and one to handle all of the settings, and one to handle the login/logout/registration. Each function was fairly short or otherwise was dedicated to one task. And so, breaking it down in this way made everything much neater and easier to read. It also made it easier to test. 

<br>

## “GOOD CODE DOCUMENTS ITSELF” AND OTHER HILARIOUS JOKES YOU SHOULDN’T TELL YOURSELF
Brief overview of research. 

* 1 - Comicly, the title of this article and the first argument it makes seems at fist to contradict the self-commenting code advice of the previous article. However, of course, there is nuance here. Although this article says there is no such thing as self-commenting code, it pretty much proves that such a thing does exist in the form of descriptive code naming. Of course, it points out an important justification for its claim - which is that many people who would prefer not to comment their code will try to use the self-commenting code principle as an excuse. Not to mention, there will be many people who fail to see in what ways their code may not actually convey the meaning they intend. Even they themselves may return to their code and wonder what their function is supposed to do, even if they were once confident in the self-evident nature of their code.

* 2 - I learned more about what qualifies as redundant commentary. I mentioned before that I had been over-commenting in the past, and the example given in this article through the get_temperature example is a good comparison that what I was doing - stating the obvious. Seeing the alternative example, wherein much more detail is given related to the function, what it does, what it returns, and so forth, I can see how much more informative this commentary is compared to the obvious 'it gets the temperature' remark. I will aim to provide more informative commentary in the future.

* 3 - I learned how important it is for us to break the circle of bad documentation. Bad documentation includes non-existent comments, as well as redundant or incorrect comments. Inevitably, you will end up reading code that isn't immediately clear to understand. This could be the code of a coworker or someone that has since left the organization - or it could be your own code after a sufficiently long duration of time. Others will also have to read your code. And so whether it is you or these others who have to make sense of it, you're going to want to leave a good enough bread trail of comments for your code to become clear.

<br>

## How to write a good README for your GitHub project?
Brief overview of research. 

* 1 - I really liked the way this article described the ReadMe file as a kind of manual. That should probably be obvious to me by now, but thinking of it in that way really helped me to understand better why it is important. Not only that, but the article is right - it is highly frustrating to go scowering for a solution, only to think you've found one... and it's got no helpful documentation to speak of. Especially in terms of the ReadMe file, which is essentially like the cover letter for your code. 

* 2 - I learned that another reason why a ReadMe file can be important is similar to why commenting in your code can be so important. Often, we work on a project for a while and then have to move onto something else. When we return to the previous project, you ideally want to spend as little time reevaluating and getting to know the project all over again. That just takes too much time, and you may have to move onto the next thing before you know it. With an effective ReadMe file, you can present what your work is all about, what it's meant to do, who it's for, and so on, in a way that is really easy to reacquaint with some time down the road.

* 3 - Reading about the different potential elements of a ReadMe page, I can see that so far I've got the basics taken care of. Title, Intro, Technologies, etc. What I'd really love to add to this ReadMe, and other ReadMes is a table of contents, some illustrations, and even some examples of use. That would not only assist with organization but also with 'selling' the app/software and its usefulness. Of course, it would also grant the ReadMe file more personality and character, which I think is an important x-factor that should be included.
    
<br>

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...


**Resource 1: Clean Code vs. Dirty Code: React Best Practices**
Clean Code vs. Dirty Code: React Best Practices
https://americanexpress.io/clean-code-dirty-code/

I learned, or was otherwise reminded of, a lot of clean coding principles that I'm really taking to heart as I go forward in this project and in my overall coding education and career. Among these, I particularly focused upon:

 1. the DRY principle or not repeating your code. It's important to find ways to streamline the process and decrease the amount of repetition. 
 
 2. the principle of self-commenting code. In other words, code that is written clearly enough that comments are not necessary. Comments should be reserved for complex code that isn't easily described by the code itself. This principle includes smart naming conventions, such as naming variables and functions concisely and distinctly in terms of what they do or are meant to be used for. Rather than writing a generic name for the function, describe what the function does with its name - and that way, when you call that function in the code, it will be self-explanatory.

 3. the principle of modularity. Which is to break code up into smaller, more manageable and more organized groups. In React, that means components. If there's a nav bar on every page, why recode that nav bar each time when you can create one single Nav component that can then be imported and placed with one line of code? Also, each function or module should do one thing, and one thing well. It shouldn't house tons of different functions in one place. By compartmentalizing these disparate functions, you can keep the code far more organized and far easier to test. 


**Resource 2: “GOOD CODE DOCUMENTS ITSELF” AND OTHER HILARIOUS JOKES YOU SHOULDN’T TELL YOURSELF**
“GOOD CODE DOCUMENTS ITSELF” AND OTHER HILARIOUS JOKES YOU SHOULDN’T TELL YOURSELF
https://hackaday.com/2019/03/05/good-code-documents-itself-and-other-hilarious-jokes-you-shouldnt-tell-yourself/

I learned a lot more of specifics regarding writing good comments for my code. One of my flaws in the past was over-commenting, which I now know was specifically redundant commenting. Stating the obvious. I also often had a lack of depth to my description of more complex functions, simply stating the end result rather than explaining the process. If you don't understand the process and an error is thrown, all you know is that the end result was not what you were expecting. You don't have any key leads as to what happened or why. But, if you describe the process as well, then there are potential trouble areas to test in order to come to a helpful solution.

By providing good commentary, we help to break the cycle. Guaranteed, we will have to read someone's jumbled code and ineffective commentary, but we can most certainly do our best to make sure that others don't have the same experience with our own work. To me, it seems like a point of pride. Is it more impressive to leave behind some ancient program no one can understand? Or to leave behind a well-oiled machine that keeps working like clockwork long after you're gone? Personally, I prefer the latter.

**Resource 3: How to write a good README for your GitHub project?**
How to write a good README for your GitHub project?
https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project

I learned, firstly, a lot more about the importance and usefulness of the ReadMe file. For one reason or another, it never really clicked to me that it's a kind of user manual. Now that I'm nearing the end of my education and I'm getting ready to enter the industry, I'm thinking a lot more in terms of the user than I did when I was first learning to code. I want my repository to be inviting and informative. I've had made bad experiences in line with what this article describes - finding a solution, only to find nothing to interface with to understand how to use it. I certainly don't want that to be the experience others have when they come across my code.

I also want my ReadMes to have personality. The use of illustrations can be really helpful with that, and even some descriptive and character-filled writing where appropriate. This article gave me some new ideas about features I want my ReadMe files to have in the future, including those illustrations, as well as use examples and well-organized tables of contents.

<br>

**Note:**  

* It is acceptable to provide multiple links for a single sub-topic.  

