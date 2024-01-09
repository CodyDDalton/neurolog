This document is a template you can duplicate for ongoing research. Delete this first paragraph and then update the information below where indicated. 


<br>

# Project & Portfolio 

* **Research Notes - Milestone #7**
* **Cody Dalton**
* **Assignment 11/12/23**

<br>


## Topic

This document contains general notes related to...

<br>

## OWASP Top Ten
Brief overview of research. 

* 1 -  I learned more about broken access control, and it's certainly something that is relevant to NeuroLog this week. In working with Bcrypt, I've been trying to solve an issue I'm having where users registered using Postman can be logged into but users registered through the frontend interface cannot. It'll be important to fix this issue, but once it is fixed I can be happily a big step closer to maintaining good access control.

* 2 - Injection is the security attack I've probably heard about the most in the past. Everything from websites to applications to video games can be affected by some sort of injection attack. One common method - especially years ago - was SQL injection, wherein SQL commands could be entered into seemingly innocuous places and have a tangible - and sometimes drastic - effect on the underlying code.

* 3 - Server-Side Request Forgery is something we learned about in some detail last month with Orcun Tagtekin. It was honestly pretty dazzling to see how this kind of weakness could be exploited - including resetting or changing another person's password from afar. That could be not only a way to mess with people, but also to potentially get into their accounts and use them to wreck havoc on someone's life!

<br>

## Creativity & Innovation: Access to Law Should Be Fully Open: Tell Congress Not to Be Fooled by the Pro Codes Act
Brief overview of research. 

* 1 - I learned about the Public Resources Org (PRO) and the service it provides to us all for free online. It's super important in a free society that we all have free access to governmental information and information regarding the laws that we are meant to follow. How can we be presumed to know the law if the law is in any way obscured from us? 

* 2 - I subsequently learned about Standards Development Organizations (SDOs), which are essentially the writers/creators of the codes and regulations we are meant to live by. This work is reviewed by policymakers and if agreed upon, they are adopted into law. Different SDOs have tried to copyright these provisions and essentially tried to gatekeep access to them. This is not something that the law has historically permitted.

* 3 - The problem is that there is currently a bill called the Pro Codes Act which threatens to upend this precendence and thus make it so that these groups will have the right to hold onto, obscure, or otherwise gatekeep access to these written provisions - and thus prevent the governed from reading, copying, and spreading around access to these provisions - which is a big violation of our rights.

<br>

## About code scanning with CodeQL
Brief overview of research. 

* 1 - I learned that GitHub has developed a code analysis tool that will actually auto-check for security issues with your code. It's something that anyone with a GitHub account can access and make use of quite easily. In fact, I followed a tutorial and practice scanning some sample JS code.

* 2 - To use it with your own code, you just need to go into the security tab of your repository and select to set up code scanning under the code scanning alerts subsection. You can do a default or an advanced CodeQL setup. I did the default method myself.

* 3 -  You can scan everything after a project is done, or you can set up the code scanning so that each push to a certain branch of your repository will result in a code scan. In the future, I'd like to use the latter method - as it seems like a good way to discover security faults along the way instead of waiting until the end and essentially building a house on shaky foundations.
    
<br>

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Resource 1: OWASP Top Ten**
OWASP Top Ten
https://owasp.org/www-project-top-ten/

From this resource I learned a lot about the most dangerous and most common web security exploits as of 2021. I spent the most time learning about Broken Access Control, as that's one of the most prevalent issues and also an issue I have personally seen exploited to devastating effect. I also learned more about the injection method of security attack, wherein code and commands are injected in exploitable regions of the web architecture in order to cause havoc on the target in question. Lastly, I learned more about server side request forgery, and while it's an issue that's started to get weeded out more, the devastating effect it can still have when not prevented or prepared for is astounding.


**Resource 2: Creativity & Innovation: Access to Law Should Be Fully Open: Tell Congress Not to Be Fooled by the Pro Codes Act**
Access to Law Should Be Fully Open: Tell Congress Not to Be Fooled by the Pro Codes Act
https://www.eff.org/deeplinks/2023/10/access-law-should-be-fully-open-tell-congress-not-be-fooled-pro-codes-act

From this article I learned about a lot of things that I wasn't previously aware of, including PRO, SDOs and the Pro Code Act. I learned that experts in various relevant groups come together to help write codes and provisions to be followed, especially regarding law and safety. These kinds of provisions are then often adopted by the authorities. Rightly, organizations like the Public Resource Org help to make these codes and provisions available to people in a free and accessible manner. SDOs, the groups that represent the writers of the provisions and codes, have tried to enforce copyright and limit access to these details - and this has not been historically supported. Yet, the article highlights that there is a current bill called the Pro Codes Act which threatens this standard - and therefore threatens to obscure the public's acces to this information. And this is a violation of our rights as citizens.

**Resource 3: About code scanning with CodeQL**
About code scanning with CodeQL
https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql


Reading this article and following some tutorials, I experimented with a code scanning tool that GitHub has created called CodeQL. It's really simple to enable for any of your project repositories, and it basically scans your code for any potential security issues. You can wait until the end, but it would be a better idea to set up the code scanning so that it takes place as you push your work up to GitHub - thus finding the flaws early and fixing them before building a bunch of architecture on top of them. The scanning process can take a little while, but once it's finished you can dig in to a highly detailed summary of the scanning process and any issues found along the way. 

<br>

**Note:**  

* It is acceptable to provide multiple links for a single sub-topic.  
* Be sure to explain what resource(s) you found most helpful for the current milestone. 



