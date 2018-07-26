# Project Management


### 1. Record interactions with your client in a diary format
---

### 2. Plan information gathering activities to determine project requirements, constraints and risks
---
Our initial week of planning and completing appropriate documentation through part A of the assignment provided us with most of the information we would need for the next two weeks. 

We visited the workshop on the Tuesday of the first week, which allowed us to gain insight of how the application would be used by the store manager. 

Mike (our client) and his junior developer Matt met up with us a few times during the three weeks, which allowed us to focus in on the scope of the project. There were multiple google hangout calls and meetings which can be seen in the meeting minutes section.

Running our daily standups and allowing about 30-45 minutes for organising our day let us focus on what we needed to do, without much questioning involved. Whenever we were to implement something new, we would have a chat with another team member to see if it was a necessity, or if something else could be more important to work on first.

We found risks involving a broad scope early. Once our meetings began, we found there were many features that were 'nice-to-haves' rather than a necessity for the MVP. In the beginning of coding, we discussed not spending time on unimportant features, which lowered our risk of not completing the MVP on time. 


### 3. Develop project charter, including preliminary statement of project scope and obtain sign-off
---
### 4. Prepare project work breakdown and schedule
---
Our team didn't use an official work breakdown or schedule, but instead we actively used Trello and morning stand-ups to break down our work load between the group members. We did have a loose aim to start coding on the Monday of week 2, and be finished the MVP as soon as possible in the third week of the project, so we could work on our documentation and allow time for errors and fixing said errors.

The first week was dedicated to completing part A of the assignment, which was almost all the documentation needed to begin coding. We sat down together and divided the questions up to different team members and set up a git repository with our README.md file.

The next two weeks were dedicated to coding and followed a very similar pattern to the first week. We decided what had to be done in our morning stand-ups and then imported these ideas to our Trello board, then picked what we would like to work on from there.


### 5. Allocate roles and responsibilities to team members, based on project solution requirements
---
We initially thought that all members of the team would get some time in all environments of the code. Our plan was to each individually pick pieces of code to work on from the Trello board, work on them until completion, then perform a PR. This changed quickly as each member got comfortable working in their own sections of code. Each member became specialised in their section of code, rather than understanding everything going on at once. We were quick to realise that individual coding at all times wasn't as efficient as working either with a partner, or our "floating" member. We continued with this practise for the duration of the project.

The roles of each member was typically the same, each of us were to code as much as possible and help each other out when we could. Upon the first day of coding we found that Eryk would be a "floating" coder. He had put in a fair few hours understanding the meteor framework on the first weekened of the project. This allowed the rest of us to more easily understand the intricacies involved. The intimidation of playing around with an already established code base was eliminated quickly when we had someone who was fairly familiar with it.



### 6. Monitor each other’s assigned work
---
We used agile-styled stand-ups in the morning of each day, where we'd discuss what work we had done the day before, our progress on what we were working on, and how we would approach the day ahead. 

Trello was a useful tool when tracking the team's work. Each team member would assign themselves to a task and that would be visible on the team's Trello board. There was also a trello board that Back2Bikes could view, which we kept updated at the same time as our team's personal board. We used different lists to determine the progress each task was at.

Internal Team Trello Board: 
* Tasks filled on cards are required for planning phase.
* List down all tasks that needs to be completed.
* Use trello color labels to allocate task to each team member.
* Dedicated columns (swim lanes) for completed tasks.
* Summaries of Agile standups.

Back2Bikes (Client) Trello Board:
* Collaborative board with client.
* Consist of tasks of the development phase.
* Tasks include features that are inspired from user stories and user pains.
* Columns (swin lanes): Backlog, Ready, In-progress, Dev Done, QA, Done


### 7. Reassess ongoing project scope changes, risks and issues
---
Filtering through parts / the database and displaying markup prices were original MVP. Creating orders OOS
uploading xcel file, parsing to json, shop view on order screen

Our first discussion with Mike set the MVP for our project clearly.
At it's most basic, the app should:
* Mark prices up according to mike's specifications
* Be able to search the database by part numbers

These two simple goals provided a solid baseline for an MVP, and not a huge margin for failure. We hit these goals fairly early on in development, but not working absolutely perfectly, so we continued to work on some extra features.

After determining the MVP scope, we brainstormed ideas with Mike and Matt from B2b to assume some more features that would form a more developed app:
* Upload the wholesaler's database and updating ours so it can continue to be used once we have finished development
* Have an order cart where we can store parts in orders, and have a summary including a total price of the order that may be placed
* Print or save an order for later reference

With these goals in mind, we had a lot more work ahead of us. The risks involved with increasing our work load were not completing these newly set goals, but Mike was heavily invested in the completion of these features. 


### 8. Manage system testing and hand over activities. Prepare maintenance or support plans for client
---
Throughout the project we were consistent in using descriptive commit messages on github, and using readable code by following our clients coding standards to the best of our abilities.

We included one feature that would allow the shop manager or client himself to continue to update the database when a new catalog would come out. This was in the form of a file-uploading section on the part search page. Uploading the new .xlsx file will update the database without removing anything previously, so we don't have any erased data. This was important to our client, to ensure there's no missing information after an update. To make sure there's no repeats in the data, the uploading function cross-checks with the existing database and doesn't add an item if it already exists.


### 9. Obtain final project sign-off
---
### 10. As a team, conduct post project review
---
### 11. Create a questionnaire for the client to ascertain the satisfaction with your products and services
---




# Application Design

### 1. A 350 word summary of your application including problem definition and solution
---
### 2. Review the conceptual design with the client and edit based on their feedback
---
### 3. User stories for the whole application
---
### 4. A workflow diagram of the user journey/s
---
### 5. Wireframes for all main pages of your app
---
### 6. Entity Relationship Diagram (ERD)
---
### 7. Project plan and effort estimation
---


# Tools & Methodologies

### 1. Trello or similar project management tool to be used for Kanban process to track progress of build
---
### 2. GitHub Demonstrate use of frequent commits, feature branches (based on user stories), pull requests and merges

Git Commits 
![git commits](/assets/gitcommits1.png)

Git Stats
![git stats](/assets/gitstats.png)

---
### 3. Use Agile development methodologies
---
### 4. Code review. Demonstrate that you have had your code reviewed by other students and that you have provided a code review for others

As a lot of what we did was pair programming we were constantly reviewing and tweaking each others code. Originally the plan was to have to pairs coding with the 5th person (Eryk) working on his own but also jumping into each pair to help out when needed. As the team discovered their strenths we would sometimes code on our own but still often reviewed each others code. When something was particularly tricky or taking time we would pair program again until the problem was solved. 

Our code was also constantly overseen and reviewed by our client as we were pushing to the organisations Github. This means that often our pull requests would be rejected and more work required before the work was accepted by the client. 

### 5. Show evidence of client communication, e.g. meeting minutes, emails, or other communication tools