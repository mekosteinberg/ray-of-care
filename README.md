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

We decided to make a small wiki page of the How I Met Your Mother show, a classic fan favorite. The search for an existing 3rd party API was long and hard but we managed to find one that had all the episodes and cast members, as well as the roles each played. We knew that we wanted a page for episodes and cast for sure and then expanded onto adding a blog like forum with comments since we didn't want the cast list or episode list to be editted or deleted. 

### Technologies Used

* React
* PSQL
* Heroku
* Netlify
* Python
* Material UI

### Unsolved Problems



### Resource Links
* https://reactjs.org/
* https://mui.com/ 

### Notes:
To redeploy from Netlify, in the terminal run
```
npm i

npm run build

sudo netlify deploy --prod
```