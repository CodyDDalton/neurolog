This document is a template you can duplicate for ongoing research. Delete this first paragraph and then update the information below where indicated. 


<br>

# Project & Portfolio 

* **Research Notes - Milestone #3**
* **Cody Dalton**
* **Due Jul 16**

<br>


## Topic

This document contains general notes related to...

<br>

## Design Theory
Brief overview of research. 

* 1 - I learned about the absolute design sin of confirmshaming. I didn't know what the practice was called until reading the article, but I had experienced it in the past and known how much I didn't like it. I don't plan on ever using such an underhanded and mean-spirited tactic in my design.

* 2 - I learned about the importance of spacing when it comes to touch controls. I believe this was related to Fitt's Law. I'm actually doing a bit of rethinking as it relates to my mobile design and whether or not the buttons and touch areas are large and spaced out enough. This might be something I have to adjust with the prototype.

* 3 - I learned about the aesthetic usability law and it certainly makes a lot of sense. This is something I try to prioritize in my design. How a site or app looks and 'feels' can really impact the way I engage with it and whether or not I'm likely to want to use it on a regular basis. With NeuroLog, a lot of my design choices had to do with making the design a bit minimalist and spacious - because those are qualities that I know make me feel like an app is well put-together and usable.

<br>

## Plans for Production
Brief overview of research. 

* 1- I learned a lot of good tips for creating your own RESTful API. A good few I understand and have utilized already, but I wanted to keep some notes here for things to remind myself of with NeuroLog. For instance, for the API url stick to nouns rather than verbs. Use '/entries' rather than '/getAllEntries'. And use parameters - '/entries?date='January 1st 2023' ratherthan '/getEntriesByData'. I always like to remind myself to use accurate HTTP status codes and helpful error messages. Something I had forgotten was to use versioning - so, perhaps a url prefix of '/v1' for the first version. And most importantly for the proper functioning of NeuroLog, I'm going to want to have some detail limits and offsets to only return a certain amount of entries to a time - and then using pagination to fetch new batches thereafter.

* 2 - I learned about atomic design and fell in love with the concept. It makes so much sense. So, to summarize it in a way that will make sense for me later, I'm going to start by saying that there are five levels of atomic design. Atoms, molecules, organisms, templates, and pages. An atom would be like one particular 'element', like a button or an input field or an image. A molecule would be a combination of these elements to make a larger but interconnected unit in the way that a button and a text input field could create the molecule of a search bar. You could then add this molecule to other parts, like a graphic, a title, a login link, etc to make a header organism. And that header organism is one of several others that populate the view of a page. I really love this idea and it has thus far made it a lot easier for me to see my designs from a macroscopic and microscopic perspective.

<br>
    
<br>

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

(1) Axbom, P. (2017, December 4). Confirmshaming – the art of insulting your target group. Medium. https://axbom.medium.com/confirmshaming-the-art-of-insulting-your-target-group-2de35833c966

*I learned about what confirmshaming is, although I'd seen the practice used in the past and not liked it. The article really articulated well the many ways that confirmshaming is offensive to users and also shoots the company that uses it in the foot.*

(2) Yablonski, J. (n.d.). Fitts’s Law. Laws of UX. https://lawsofux.com/fittss-law/

*I learned about Fitt's Law and it got me rethinking a few things related to my mobile designs for NeuroLog. I want the touch interactions to be as easy and effortless as possible, which may require more spacing and larger indicators.*

(3) Yablonski, J. (2022). Aesthetic-Usability Effect. Laws of UX. https://lawsofux.com/aesthetic-usability-effect/

*This is what I'd previously kind of called the feng shui of web design, and it's something that's really been important to me in my experience as both a user and a designer. Creating something that 'feels' cleaner and well-organized and aesthetically appealing really creates a sense of ease, usability, and elegant craftsmanship.*

(4) Deshp, T., & On, E. (n.d.). RESTful API Design — Step By Step Guide | Hacker Noon. Hackernoon.com. https://hackernoon.com/restful-api-design-step-by-step-guide-2f2c9f9fcdbf

*This article supplied a lot of really good tips for creating your own RESTful API. The bits that stuck out to me in particular were to make user of default limits and offsets to divide entries and logs up into pages to be fetched in small batches to a time. And, using smart parameters for detailed searches.*

(5) Wheeler, K. (2018, August 30). Thinking About React, Atomically ⚛. Medium. https://medium.com/@wheeler.katia/thinking-about-react-atomically-608c865d2262

*I've always liked the concept of components, because it makes sense to me. Thinking of it almost like hardware where there are parts you can add and remove... made plenty of sense. But, this article and its introduction to atomic design has really made me see design from a much clearer perspective. Seeing the way that everything forms little units and how all those units can be put together to form the bigger picture design.*
