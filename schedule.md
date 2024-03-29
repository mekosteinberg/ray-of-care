## Daily Workflow

### Day 1: Mon, Jan 9, '23
- research new technologies to use in project
- decide on project theme, begin planning layout/wireframes

### Day 2: Tues, Jan 10, '23
- work on wireframes, this is proving to take a lot of thought and time, the scope of this project is larger than it initially seems
- Jotting down and planning for my schema/models
- start watching videos on React-Router, Next.js
- Debating between using Express/Mongoose/MongoDB and Django/Python/SQL

### Day 3: Wed, Jan 11, '23
- Ironing out schema, meeting with mentor regarding thoughtful database/schema design.
- install Next.js & Prisma
- edit package.json, change scripts and dependencies
- Scaffolding! Lots of time building the schema, got a good start on the user and relations.

### Day 4, Thurs, Jan 12, '23
- Still learning Next.js and Prisma stuff, really working to understand the router aspect of Next.js. 
- Started working on the routes a little bit and my landing page so I can hook up Auth0 by the end of tomorrow. 

### Day 5, Fri, Jan 13, '23
- Got quite a few landing pages set visually, though connection isnt complete. Registration views started though
- More learnings today, I wanted to get Auth0 set up but didnt get there. I think I have a good plan though for that

### Day 6, Sat, Jan 14, '23
- Somethings things go sideways. I had to nuke a lot of what I did yesterday because once I got the Auth set up, quite a few pages became superfluous. 
- Heroku setup
- Twice as many pages as I deleted were created, many are working or at least started now.

### Day 7, Sun, Jan 15, '23
- Navigation Bar, AppBar

### Day 8, Mon, Jan 16, '23
- Work done on the various entry and profile views. 
- Database and permissions running, lots of difficulty getting the initial user permissions and roles right.

### Day 9, Tues, Jan 17, '23
- Connect the submit/create profile page form to api
- Work on logout button: try to get user profile, if not a profile, direct to create profile

### Day 10, Wed, Jan 18, '23
- Editing for the user profile page is working
- Created and hooked up a create profile page, which is only able to be done if the user is a Guardian. Caregivers are not able to create Client Profiles

### Day 11, Thurs, Jan 19, '23
- Edit client details is working, including the security to ensure the only person who can edit the main details is the guardian user role. The security and permissions aspect has been a lot to work with
- Fixed Heroku issues and deploys, though many things still need a lot of work to function properly

### Day 12, Fri, Jan 20, '23
- Refactored security checks and authorizations to be reusable in an easier fashion. Got the 'edit client' portion working. 

### Day 13, Sat, Jan 21, '23
- Managed to get a fair amount done on connecting all the pages to each other. Worked out client mapping for guardian and caregiver pages, some allowances still need to be worked out for security purposes. Lots of little fixes. 

### Day 14, Sun, Jan 23, '23