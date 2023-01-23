# A Ray of Care
Purpose: An app to help family and caregivers communicate and track a patients personal and home care needs. It will include the following

[A Ray of Care](https://ray-of-care.herokuapp.com/)

**Users**
- Admin - access to all
- Caregiver - access to multiple patients files, include basic profile
- Family/Guardians - access only to their family member, include basic profile
- Clients should have a profile as well

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

Security is my main focus after the functionality portion. Client information needs to be secure, and only allowed caregivers will be able to view the client details. That will be set up by the Guardian, and guardians additionally should only be able to add and edit their own clients. 

### Technologies Used

* React
* Next.js
* Axios
* Prisma
* Postgres
* Heroku
* Auth0
* Material UI


### creating a user for local database

```
psql
create user postgres with CREATEDB;
alter user postgres with LOGIN;
\password postgres
postgres
postgres
\du
\q
```
### Unsolved Problems
- when fetch gets a 404, the console always logs an error even though i have a catch handler for it


### Resource Links & Notes
* https://nextjs.org/docs/getting-started
* https://www.prisma.io/docs
* https://reactjs.org/
* https://mui.com/material-ui/getting-started/overview/
* https://github.com/auth0/nextjs-auth0
* https://www.digitalocean.com/community/tutorials/
* [Roles and Grant Permissions](https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps-2)
* [Multiple .env](https://www.prisma.io/docs/guides/development-environment/environment-variables/using-multiple-env-files)
* [client side data protection](https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#protecting-a-client-side-rendered-csr-page)

* [React Router Tutorial](https://www.youtube.com/watch?v=Ul3y1LXxzdU) I didnt end up using React Router, as Next.js has it built in

- Added 'postinstall' script because the prisma needed to regenerate the client on every deploy.