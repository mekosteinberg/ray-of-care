import prisma from "../../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";
import { isAuthorized } from "../../../lib/isAuthorized";

//

export default withApiAuthRequired(
    async function handler(req, res) {


        //*Create Client
        if (req.method === 'POST') {
            try {
                //finding the user by id that is requesting to add a client
                const { user, authorized } = isAuthorized(req, res, [UserRole.guardian])
                if (authorized) {
                    const client = await prisma.client.create({
                        data: {
                            ...req.body,
                            //adds user/guardian to the client profile
                            clientGuardians: {
                                create: [{ userId: user.id }]
                            }
                        }
                    })

                    res.status(200).json({ id: client.id })

                } else {
                    //if not a guardian, error
                    res.status(403).end()
                }


            } catch (err) {
                console.error(err)
                res.status(500).json({ message: err.message })
            }


        } else if (req.method === 'GET') {

            try {
                //finding the user by id that is requesting to add a client
                const { user, authorized } = await isAuthorized(req, res, [UserRole.guardian, UserRole.caregiver])
                if (authorized) {
                    const clients = await prisma.client.findMany({
                        where: {
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

                    res.status(200).json(clients)

                } else {
                    //if not a authorized, error
                    res.status(403).end()
                }


            } catch (err) {
                console.error(err)
                res.status(500).json({ message: err.message })
            }
        }
        res.status(404).send()
    })