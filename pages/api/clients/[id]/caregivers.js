import prisma from "../../../../lib/prisma";
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";
import { isAuthorized } from "../../../../lib/isAuthorized";


export default withApiAuthRequired(
    async function handler(req, res) {

        //this is for the client id, it pulls it from the URL
        const { id } = req.query

        //*Get for Caregiver Data
        if (req.method === 'GET') {
            //both guardians and caregivers can see a list of caregivers
            const { authorized } = await isAuthorized(req, res, [UserRole.guardian, UserRole.caregiver])
            if (authorized) {
                //TODO Make sure user is on client list of caregivers or guardians
                const dbResult = await prisma.clientCaregivers.findMany({
                    where: {
                        clientId: id
                    },
                    select: {
                        user: {
                            select: {
                                email: true,
                                caregiverProfile: true
                            }
                        }
                    }
                })

                const result = dbResult.map((item) => {
                    return {
                        ...item.user.caregiverProfile,
                        email: item.user.email,
                    }
                })
                res.status(200).json(result)
            } else {
                res.status(403).send()
            }

            //*Create Caregiver
        } else if (req.method === 'POST') {
            const { authorized } = await isAuthorized(req, res, [UserRole.guardian])
            if (authorized) {
                const { caregiverId } = req.body;
                try {
                    const caregiver = await prisma.user.findFirst({
                        where: {
                            id: caregiverId,
                            roles: {
                                some: {
                                    role: UserRole.caregiver
                                }
                            }
                        },
                        select: {
                            auth0id: false,
                            caregiverProfile: true
                        }
                    })
                    // if they passed in a guardian role or invalid id, return 400
                    if (!caregiver) {
                        res.status(400).json({ message: 'Invalid caregiver ID, try again.' })
                    } else {
                        await prisma.clientCaregivers.create({
                            data: {
                                userId: caregiverId,
                                clientId: id
                            }
                        })
                        res.status(200).json(caregiver);
                    }
                } catch (error) {
                    console.log(error)
                    res.status(400).json({ message: 'Invalid caregiver ID, try again.' })
                }

            } else {
                res.status(403).send()
            }

        } else {
            res.status(404).send();
        }
    })
