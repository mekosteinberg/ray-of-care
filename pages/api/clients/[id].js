import prisma from "../../../lib/prisma";
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";
import { isAuthorized } from "../../../lib/isAuthorized";


export default withApiAuthRequired(
    async function handler(req, res) {

        //this is for the client id, it pulls it from the URL
        const { id } = req.query

        //*Get for Client Data
        if (req.method === 'GET') {
            const { user, authorized } = await isAuthorized(req, res, [UserRole.guardian, UserRole.caregiver])
            if (authorized) {

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
                if (client) {
                    //send data if the above is true
                    res.status(200).json(client)
                } else {
                    //if not a client of guardian or caregiver, or doesnt exist, send error
                    res.status(404).send()
                }
            } else {
                //not authorized as a caregiver or guardian
                res.send(403).send()
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