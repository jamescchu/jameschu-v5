---
title: Critr
date: "2016-08-22T22:39:53.000Z"
type: project
tags: Research - Interaction Design - Art Direction
sections: overview, focus, research, wireframes, prototyping, early-design, user-scenario, intermission, framerjs, user-testing, final-design, prototype, outcome
role: Product Design
time: May 2016 – December 2016
client: ArtCenter College of Design
website: na
team: na
awards: ADAA 2017 Semifinalist — ArtCenter Student Gallery
draft: false
info: true
side: true
---


##Overview 
Critr is a conceptual social media platform primarily focused on creating a community of designers that are sharing their work-in-progress photos or screenshot for critiques by others.  
 
This can help relieve creative blocks or the hassle of having to send over broken screenshots and pictures of your work to others with a lengthy explanation of your intentions, only to get it misinterpreted. 
 
![Various Tab Layouts](/images/d-comment.png)

##Goals 
Improve the way how designers share and critique work-in-progress projects that: 
 
- Streamlines the way we ask and give feedback on works. 
- Fosters a rich design community that helps network and connect with others. 
 
##Focus 
**Ideation and Concepts**  
As we create our own concepts and ideas, it is important to validate them to ensure they are realistically viable and create a product strategy around both the design and the business model. I generated a list of 50 ideas, which were narrowed down via market research to have the best possible product.

**High Fidelity Prototyping**  
Building complete prototypes to test with the user allows for the most realistic scenarios and testing enviornment for people to feel and understand your product. FramerJS is now my tool of choice thanks to it's great customizability, ease of use, and potential of creating even deeper interactions.
 
**User Testing**  
Documenting how people interact with the product proved extremely valuable in helping me refine and develop interactions and experiences that would otherwise be impossible to discover, allowing me to push even further than ever before.

##Research 
 
###Competitor Landscape 
As this is a brand new concept, the first step was to research the competitive landscape to analyze the feasibility of such a platform. 
 
![Competitive Landscape Chart](/images/c-chart.png)
 
###User Interviews 
Interviews were conducted with fellow design students at ArtCenter to see what their main problems and concerns are. As they themselves go through the design process rigorously everyday, they fit my target audience nicely.  
 
![Interview with Kasey Chen](/images/c-interviews.png)

![Interview with Froilan Tam](/images/c-interviews2.png)
 
- **Analysis** 
  - They care about balance between coming up with solutions on their own, and asking others. 
  - Access to quick feedback sessions are considered valuable. 
 
<!-- ###Feature List 
In order to not bloat the product with excessive features, I drafted a basic chart of features that we need and don't need. 
 
`INSERT MUSCOW CHART`  -->
 
###User Flow 
An initial layout of my platform was developed based on anticipated features that I have decided on in the previous section, this flow will evolve over time as the project progresses. 
 
![Sticky Notes of User Flow](/images/d-navigation.png)
 
##Wireframes 
A rough pass of digital wireframes were created to further demonstrate a user's flow through the application, as well as exploring new interactions with the newly released "3D Touch" feature by Apple on the latest iPhone. 
 
![Wireframes Part 1](/images/d-wireframe.png)

![Wireframes Part 2](/images/d-wireframe2.png)
 
##Visual Design 
With the application focused on designers and their work, I wanted the design of the app to be more subtle in order to not compete with the work of others. The design originally featured a seafoam green as it's accent color due to it's soothing nature, however this was changed to a brighter red that gave a much more vibrant and refreshing appearance. 
 
![Early Design Styles](/images/d-early.png)
_Early Design Exploration Includes a Light Seafoam Green._
 
##Prototyping 
The first pass of prototyping was created using Pixate (now defunct). The primary decision to go with Pixate was simple, it was free and had a fairly easy learning curve, and when it was acquired by Google at the time, I thought it was something that would eventually reach wide adoption. 
 
![Working in Pixate](/images/p-pixate.png)

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-3dtouch.mp4" type="video/mp4">
</video>

The 3D Touch feature would later be ommited as I did not have a 3D Touch compatible device (iPhone 6), thus testing it's interactions would be inaccurate going forward. The above prototype was created in Pixate using Long Presses to simulate the interaction.

##User Scenario 
To better demonstrate how the app works and interacts, a short video was directed and filmed by myself to illustrate the various different devices and features that are used throughout a normal day. 
 
##Intermission 
Faster forward some time, it was time to bring this a step further. With the concept and visual design laid out, it's time to iterate and refine it further. 
 
##FramerJS 
In order to further refine the concept and design, I needed to create a prototype of higher fidelity to better simulate real world uses and interactions. Framer was chosen as a tool of choice after Pixate's sudden shutdown. 
 
###Apple Watch 
While learning Framer, I created a version of my app for the Apple Watch, which I then created a simple prototype in Framer. To further benchmark myself on the concept of "rapid prototyping", I set a limit of 3 hours to design and create a prototype of a single use case. Which was easily achievable. 
 
<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-watch-notify.mp4" type="video/mp4">
</video>

###High Fidelity Prototypes 
To better test the usability and design of the app, I recreated the entire prototype from Pixate to Framer and flushed out even more interactive screens along the way. 
 
![Working in FramerJS](/images/p-framer.png)

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-zoom.mp4" type="video/mp4">
</video>

##User Testing 
I conducted testing with approximately 6 individuals per round. To avoid any bias, the users were different between sessions with a few overlap to test the overall progressions. 
 
###Round 1 
This was tested with a slightly modified version of the layout and design since the Pixate prototype, now redone in Framer with more interactions. 
 
- **Key Insights** 
  - [+] Flow feels good. 
  - [-] Suggest using a Single Tap to comment, instead of Double Tap. 
  - [-] Sections on Home feel confusing with same layout. 
  - [-] Audio comments are confusing. 
 
- **Assessment** 
  - Tweaked and enhanced transitions between pages. 
  - Refined gestures for comments and zooming. 
  - Removal of Audio comments due to feature unable to be completed in time. 
  - Created different layouts for each section on Home based on context. 
 
###Round 2 
- **Key Insights** 
  - [+] Layout 
  - [-] Wants a dedicated alert/inbox for messages and notifications. 
  - [-] Project uploads are hidden and inconvenient. 
  - [-] Navigating to Zoom is a little deep. 
  - [-] "Undiscovered" and "Newest" section on Home feels too similar. 
 
- **Assessment** 
  - Added 2 extra tab sections, Upload and Notifications. 
  - Merged Zoom and Comments into a single view. 
  - Added Zoom animation instead of switching to another page. 
  - Simplified sections on Home and tweaked the layouts even more. 
 
###Round 3 
- **Key Insights** 
  - [+] No outstanding complaints. 
  - [-] Typography can be slightly more dynamic. 
  - [-] Pin reveal can feel repetitive. 
 
- **Assessment** 
  - Refined animation timings to be faster. 
  - Adjusted typographic hierarchy to have a little more clarity. 
 
##Final Design 
The final iteration of my design combines the goals I have set from the start, and the result of the entire product development process. 

A Prototype is at the end if you'd like to just jump in.

**Home Screen**  
The home screen is split into 3 seperate views that are curated to deliver relavent content, as well as allowing discoverability for new users.

![Home Screen Layouts](/images/d-home.png)

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-home-scroll.mp4" type="video/mp4">
</video>

**Tab Navigation**
Navigating between tabs are straight forward and simple. A quick fade transition indicates that they are navigating on the same visual "plane".

![Various Tab Layouts](/images/d-pages.png)

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-tab-nav.mp4" type="video/mp4">
</video>

**Project Navigation**  
Projects transitions through a seperate "layer" to indicate the user is moving the project into view. This allows the user to visually comprehend where they are in the heigharchy without distracting their experience.

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-project-comment.mp4" type="video/mp4">
</video>

<video width="100%" height="100%" loop="" autoplay="" playsinline="" class="fullView">
  <source src="/videos/critr-zoom.mp4" type="video/mp4">
</video>

##Prototype
To see the detailed project flow, just look for the "In the tumult." project on the "Following" home screen.
<iframe src="https://framer.cloud/oedBu/" url="https://framer.cloud/oedBu/" width="100" height="100"></iframe>

##Outcome
Having developed this over the course of approximately 8 months, I have learned a great deal, and can say I'm satisfied with the result.

###Key Learnings
Being one of the first products I have developed from the ground up, I have learned a great deal from this experience, which helped me further improve my workflow and product thinking. While there's too many to list, here's some of my key take-aways.

- **Designing for the User From the Start**  
Looking back at my process, I noticed I was initially focused on the business potential and visual experience more so than the user experience. Thankfully, I was able to correct that thinking once I got into producing prototypes and interviewing users. 

- **Moving Beyond Style Guides**  
Being a strong follower of rules and guidelines, I followed Apple's Design Style Guide to the tee. Ultimately, my design lacked uniqueness and personality. As I was developing my own product from the ground up, I feel as if I missed an opportunity to build on top of the style guide, and push it even further.
