import prisma from "../../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";

export default withApiAuthRequired(
    async function handler(req, res) {

        const { user: { email, sub: auth0id } } = await getSession(req, res);

        //this is for the client id, it pulls it from the URL
        const { id } = req.query

        //*Get for Client Data
        if (req.method === 'GET') {
            const user = await prisma.user.findFirst({
                where: { auth0id },
                select: {
                    id: true,
                    roles: true
                }
            })
            //! user role is an array of objects, filter finds out if user has a specific role (Array.filter) length >0 means they have a role
            const isGuardian = user.roles.filter((userRole) => userRole.role === UserRole.guardian).length > 0
            const isCaregiver = user.roles.filter((userRole) => userRole.role === UserRole.caregiver).length > 0

            if (isGuardian || isCaregiver) {
                const client = await prisma.client.findFirst({
                    where: {
                        id,
                        //Check if the user is a caregiver or guardian for the above client
                        OR: [
                            {
                                clientCaregivers: {
                                    some: {
                                        userId: user.id
                                    }
                                }
                            }, {
                                clientGuardians: {
                                    some: {
                                        userId: user.id
                                    }
                                }
                            }
                        ]

                    }
                })
            }

            //*Edit
        } else if (req.method === 'PUT') {


            //*Delete 
        } else if (req.method === 'DELETE') {

        } else {
            res.status(501)
        }

        // be generic with things we aren't listening for
        res.status(404)
        res.send()

    })