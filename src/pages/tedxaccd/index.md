---
title: TEDxACCD 2017
date: "2017-05-22T22:39:53.000Z"
type: project
tags: Management - Interaction Design - Development
sections: section1, section2
role: Product Management, Product Design, Development
time: May 2017 – November 2017
client: ArtCenter College of Design
website: 2017.tedxaccd.com
team: Josephine Law, Yuma Naito
awards: na
---

##Overview
TEDxACCD is a bi-annual event uniquely led by students to create passionate conversations within the community by sharing and spreading ideas intersecting in technology, entertainment, and design.

I joined the student team as the primary designer and engineer for the event website. As part of a 20 person team, I worked with individuals from various backgrounds to deliver the best TEDx experience at ArtCenter.

`CONSIDER INSERT DESIGN HERE`

##Goals
- Create a centralized hub of information for users to access.
- Promote the event and sell tickets to visitors that are on the fence.

##Challenge
**We needed a site up and running in 5 weeks.**

Being the only Interaction Designer on the team, time and resources were scarce. With the inclusion of Graphic Designers [Yuma Naito](https://www.linkedin.com/in/yuma-naito-76729b76) and [Josephine Law](http://josephinelaw.info/), a sub-team dedicated to just the event page was formed.

##Focus
**Leadership and Management**  
From previous experience, organization and direction is a must to keep things moving. Referencing various methodologies such as Scrum and Kanban, I created an accelerated timeline of key milestones we needed to hit per week.

**Defending Principles**  
Being in a team of Graphic Designers working on a website caused constant conflicts between the visual and user experience. Compromise was necessary to move forward, but I had to ensure the user wasn't getting the short end of the stick. I would work through every design decision both ways to ultimately show how important that some standards, while not visually unique, are critical to a smoother experience.

**Growing the Team**  
Working with my 2 Graphic Designers, I trusted their design senses. However, with their limited experience in digital products, I wanted to ensure that little to no compromises were made to the user experience. Thus, I took my time to educate and inform them of key principles in creating user-centered designs. Incorporating this into my feedback of any work they present as well.

**Development using Modern Tools**  
After scoping out the scale and requirements of the site with organization leaders, I decided to develop using a static [JAMstack](https://jamstack.org/). Allowing for fast iterations and high performance for the end-user.

##Approach  
With an extremely tight deadline, we had no choice but to accelerate parts of the process. After some discussion with the team and organization leaders, I created a timeline of key milestones we should hit each week. Acessing the situation, I decided to set a soft deadline 1 week earlier than the launch date to help ensure we had at least a minimum viable product to deliver.

`INSERT TIMELINE HERE`

##Value Proposition  
As a TEDx event, we were excited to bringing in speakers from various fields and were proud to deliver an experience created exclusively by students. It was critical for my team to consider the wider audience that such an event attracts, but also provide a unique experience from our perspective as students of design.

##Research  
No thanks to the accelerated timeline that I created, it was impossible to craft the usual full course research material normally expected. However, basing entirely on assumptions and hypothetical users was too much of a stab in the dark, thus I needed a fast yet reliable source of information.

I reached out to [Elliot Davis](http://elliottrdavis.com/) who had designed/developed the previous TEDxACCD event page, [2015.tedxaccd.com](http://2015.tedxaccd.com/). We discussed the various challenges that he had and what/who we were designing for. Based on site analytics and ticket sales in 2015, we set our primary target audience to be approximately 50% students/alumni, and 50% the local community in Pasadena. Building on his past experiences proved extremely valuable as it allowed me to be more confident in certain decisions which served as the foundation of the product.

`INSERT DIAGRAM HERE`

##Decisions - Single-page vs Multi-page
While the previous event site and multiple other TEDx events using a single page structure, I didn't think it was suitable for us this time around.

###Pros and Cons
- **Single-Page**  
  - [+] Tells a better linear story.
  - [+] Requires less loading between pages.
  - [-] Too much content can worsen experience.
  - [-] Less search optimized.
  - [-] Slower loading with lots of media.

- **Multi-Page**  
  - [+] Scales with large amounts of content.
  - [+] Better search optimization.
  - [+] Breaks up information for easier digestion.
  - [-] Too much content can also worsen experience.
  - [-] Abrupt transitions between pages.

###Verdict
After doing some research on user behaviors in the 2015 site and web technologies, on top of briefing the project leaders on what kind of content and usage we're anticipating, I decided on having a multi-page site alongside some newer web technologies to enhance it further.

- **Multi-Page**  
  - We have large amounts of information to display they previously had to reduce a lot of to keep things concise, however for such an event, the user should have all the information they need to make the best decision.
  - Many users will want to have the schedule accessible on their phone when they're at the event, this allows them to bookmark the page and have it always ready.
  - We will put some more emphasis on the homepage to deliver a quick linear story to the user while branching out information.
  - Utilizing PJAX (PushState + AJAX) we can create seamless transitions between pages, removing sudden breaks in the experience, and have the site feeling more responsive.

##Wireframe
Learning from my past experiences, I approached wireframes differently this time around. Instead of creating high fidelity digital wireframes, I stuck with the good old pen and paper. This can be attributed to 2 reasons:

- **Refining over Remaking**  
  With the deadline of just a week, it was difficult to justify the additional time in what amounts to re-creating the paper versions when it can be better spent refining the layout and experience.
  
- **Overdesigning UX**  
  Wireframes that ultimately resemble a final product leaves little room for the visual design to grow. Perhaps I don't get it yet, but this [article on Medium](https://medium.muz.li/wireframes-are-dead-why-i-havent-used-wires-in-over-a-year-8027fcce1b3f) resonated my past frustrations.
  
`INSERT WIREFRAMES HERE`

##Visual Design
In order to follow a unified language, the Graphics team has created a brand style guide for us to use as reference. An important part of our brand was to tailor the design to each medium, and thus me and my team took some liberties to craft a unique experience that was still inline with the values and key aspects of the identity.

`INSERT DESIGNS HERE`

###Adaptability
While the design may seem overly dependent on text, this was a decision made in order to allow for maximum adaptability in the future. With the Graphics team heavily focused on production of other assets for the event, imagery and graphical resources for the website is lacking. By replying mostly on text, we allow room for the design to grow and incorporate images in certain areas, as well as account for any sudden need for additional sections or features.

###Modularity
In addition to keeping the design light weight and adaptable, the design is made up of smaller components that make up the greater whole. From text links to templates of how user profiles come together, the design utilizes reusable components to further enhance our adaptability in addition to keeping the development time low by reducing the need for creating dedicated layouts throughout the website.

##Development
Thanks to preparation I had done beforehand, I was able to develop and launch the site in the 3 weeks left. While I won't dive too deep on this process for now, however I did my best to keep with common industry best practices and standards when developing the product, to be as close to experiencing a "real" developer's workflow when possible.

The entire source code for the website can be found here:  
https://github.com/jamescchu/tedxaccd-2017

##User Testing
With the preliminary designs and development work finished, we reached out to 19 users and had them go through the website with minimal instructions with the objective of finding all the information they may want to know and any other feedback/opinions.

###Key Insights
- [+] Navigation is simple and understandable
- [+] Liked the dropping "L" micro-interaction
- [-] Arrangement of "Beauty of the Fall" is unclear
- [-] "Red Dot" to buy tickets on the right side feels out of place
- [-] Font sizes feel large when viewing
- [-] Floating "Beauty of the Fall" is distracting

###Assessments
The feedback helped temendously as it was a relief to know there weren't major usability issues, I was rather shocked that there were a lot of comments towards the typography on the page. After taking account of the multiple responses, I assessed them carefully.

- As I work on a large display, I failed to notice that people viewing on smaller 13" and 15" macbooks did not scale the text properly, leading to extremely oversized typography.
- Redesigning the "Red Dot" interaction, I expanded it further with a clear ticket icon alongside scrolling indicators as I noticed some people were confused if they could scroll on the first page.
- To better reiterate our theme, I decided to use it directly as the main headline on our index page.
- The distracting floating text was something that needed more attention and is expanded in the next section.

##Decision - To Float or Not to Float
Mentioned by a lot of our users, the floating "Beauty of the Fall" was actually distracting from the experience. The following were the options I had considered.

- **Add a background**
  - [+] Makes text overlap feel less like an issue.
  - [-] Floating boxes emphasize the problem more.
- **Removed the text entirely**
  - [+] Get rid of the problem enirely.
  - [-] As an integral part of the brand, we lose our identity.
- **Hide the floating text while scrolling**
  - [+] A more dynamic solution removes the text when you scroll.
  - [-] Implementation is difficult.
  - [-] Falling "L" will appear out of nowhere.
- **Hide the navigation bar while scrolling**
  - [+] Moves the floating text further up the screen so it's not a focus point.
  - [+] Keeps the entire text interaction and identity intact.
  - [-] Hides nav bar when scrolling down.

###Verdict
- **Hide the navigation bar while scrolling**
  - While not a direct solution, by moving the text up as the nav bar hides, it removes it from being close to the center of the screen, and thus out of immediate focus for the user.
  - This allows us to keep the entire design and interaction intact, while reducing the amount of complaints we have.
  - Although the navigation bar is hidden, it is immediately accessible when scrolling up, combined with a "back to top" arrow on the right side of the screen.

##Maintainance and Updates
With the design and launch completed, we switch to the second phase of the product. Thanks for the modularity of the design, 

##Final Timeline
Very rarely, for us students, do the plans we set at the start of a project is accurately carried out till the end. I did my best to stick to the pre-made schedule, but we had to accomodate for sudden changes in scheduling from other teams as well as delays in both design and development.

`INSERT FINAL TIMELINE HERE`

##Final
With such a large amount of 
