# A Ray of Care
Purpose: An app to help family and caregivers communicate and track a patients personal and home care needs. It will include the following

**Users**
- Admin - access to all
- Caregiver - access to multiple patients files, include basic profile
- Family/Guardians - access only to their family member, include basic profile

**Patient**
- Profile: basic data, diagnosis, summary of personality(how to work best with this patient)
- ADL’s (activites of daily living) a checklist or some other arrangement of things the carer needs to do each day with the patient
- Med Tracking
- Calendar
- HomeCare - things to do for the patient in the home. Include Cleaning, shopping. Shopping list function has list of the patients personal preferences, not just bread, but able to include an image of the label
- Message board for communication between carer and family.
- Contacts for Family, other Caregivers and Medical Professionals

### Approach Taken

Normally, using React, the front is easy enough to implement. I had to learn Next.js this time, so my start wasn't as speedy and quick as usual. Next.js has its own version of React-Router built in. 

### Technologies Used

* React
* Next.js
* Prisma
* Heroku
* Material UI

### Unsolved Problems



### Resource Links
* https://nextjs.org/docs/getting-started
* https://www.prisma.io/docs
* https://reactjs.org/

* [React Router Tutorial](https://www.youtube.com/watch?v=Ul3y1LXxzdU) I didnt end up using React Router, as Next.js has it built in
* https://mui.com/ 

### Notes:
To redeploy from Netlify, in the terminal run
```
npm i

npm run build

sudo netlify deploy --prod
```