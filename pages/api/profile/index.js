import prisma from "../../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";

// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#protect-an-api-route
//* user must be logged in to access
//*purpose1: get users own profile to view and edit 
//*purpose2: check that user has profile, if not completed, then force to create it
//TODO Build useEffect Guard in layout to see if user has a profile (can't just use a link someone sent)

export default withApiAuthRequired(
    async function handler(req, res) {

        const { user: { email, sub: auth0id } } = await getSession(req, res);

        //*Create
        if (req.method === 'POST') {
            const {
                role,
                //* need role to choose which profile type to create
                //* the rest of the fields submitted can be lumped into the profile create object
                ...profile
            } = req.body

            const userProfile = {};
            switch (req.body.role) {
                case 'guardian':
                    userProfile.guardianProfile = {
                        create: profile
                    }
                    break;
                case 'caregiver':
                    userProfile.caregiverProfile = {
                        create: profile
                    }
                    break;
            }

            await prisma.user.create({
                data: {
                    email,
                    auth0id,
                    roles: {
                        create: [{ role }]
                    },
                    ...userProfile
                }

            })
            res.status(201).json({ success: true })

            //*Edit
        } else if (req.method === 'PUT') {
            // finding the user by id that is requesting to edit
            try {
                const user = await prisma.user.findFirst({
                    where: {
                        auth0id
                    },
                    select: {
                        id: true,
                        roles: true
                    }
                })

                console.log(user)

                //! user role is an array of objects, filter finds out if user has a specific role (Array.filter) length >0 means they have a role
                const isGuardian = user.roles.filter((userRole) => userRole.role === UserRole.guardian).length > 0
                const isCaregiver = user.roles.filter((userRole) => userRole.role === UserRole.caregiver).length > 0

                //* Don't need the email, so lets be lazy and pull the form data out without email
                const { email, ...formData } = req.body
                if (isGuardian) {
                    await prisma.guardianProfile.update({
                        where: {
                            userId: user.id
                        },
                        data: formData
                    })
                } else if (isCaregiver) {
                    await prisma.caregiverProfile.update({
                        where: {
                            userId: user.id
                        },
                        data: formData
                    })
                }

                res.status(201).json({ success: true })
            } catch (err) {
                console.error(err)
                res.status(500).json({ message: err.message })
            }

            //*Get
        } else if (req.method === 'GET') {

            //* search by user.sub because this is the ID on auth0
            // https://auth0.com/docs/secure/tokens/id-tokens/id-token-structure
            //* using find first because there's a unique constrain on the auth0id field, so this is just to limit to 1 record

            const dbResult = await prisma.user.findFirst({
                where: {
                    auth0id // this already has a unique constraint so shouldn't need to findUnique
                },
                select: {
                    id: true,
                    email: true,
                    roles: {
                        select: {
                            role: true,
                            userId: false
                        }
                    },
                    // join to these two tables and try to return their results
                    // names come from the schema.prisma file
                    // caregiverProfile: true,
                    guardianProfile: {
                        select: {
                            userId: false,
                            firstName: true,
                            lastName: true,
                            line1: true,
                            line2: true,
                            city: true,
                            state: true,
                            zipcode: true,
                            homePhone: true,
                            cellPhone: true
                        }
                    },
                    caregiverProfile: {
                        select: {
                            userId: false,
                            firstName: true,
                            lastName: true,
                            line1: true,
                            line2: true,
                            city: true,
                            state: true,
                            zipcode: true,
                            homePhone: true,
                            cellPhone: true
                        }
                    },
                }
            })
            if (dbResult) {
                const roles = dbResult.roles.map((role) => {
                    return role.role
                })
                const response = {
                    id: dbResult.id,
                    email: dbResult.email, roles,
                    // doing this to flatten the response
                    // so that the react app doesn't need to know
                    // about guardianProfile vs caregiverProfile
                    ...dbResult.guardianProfile,
                    ...dbResult.caregiverProfile,
                }
                res.status(200).json(response)
            } else {
                res.status(404).send();
            }
        } else { res.status(404).send(); }

        // TODO do we need a delete here? maybe? probably?
    }
) 