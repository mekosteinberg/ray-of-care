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

                console.log(dbResult)
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
        } else if (req.method === 'POST') {
            const { authorized } = await isAuthorized(req, res, [UserRole.guardian])
            if (authorized) {
                const { caregiverId } = req.body;
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
                    res.status(400).statusMessage('invalid caregiver id').send()
                } else {
                    await prisma.clientCaregivers.create({
                        data: {
                            userId: caregiverId,
                            clientId: id
                        }
                    })
                    res.status(200).send(caregiver);
                }
            } else {
                res.status(403).send()
            }

        } else {
            res.status(404).send();
        }
    })
