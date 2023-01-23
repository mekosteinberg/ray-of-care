import prisma from "../../../../lib/prisma";
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";
import { isAuthorized } from "../../../../lib/isAuthorized";
import { mergeSlotProps } from "@mui/base";

export default withApiAuthRequired(
    async function handler(req, res) {
        //for the client id
        const { id } = req.query

        //*Create Message
        if (req.method === 'POST') {
            try {
                //finding the user by id that is requesting to add a client
                const { user, authorized } = await isAuthorized(req, res, [UserRole.guardian, UserRole.caregiver])
                if (authorized) {
                    const { message } = req.body
                    const dbResult = await prisma.client.findFirst({
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
                    if (dbResult) {
                        const messageResult = await prisma.message.create({
                            data: {
                                userId: user.id,
                                clientId: id,
                                message
                            }
                        })
                        res.status(200).json(messageResult)
                    } else {
                        res.status(403).send()
                    }

                } else {
                    res.status(403).send()
                }
            } catch (err) {
                console.log(err)
                res.status(500).send()
            }
        } else if (req.method === 'GET') {
            //finding the user by id that is requesting to add a client
            const { user, authorized } = await isAuthorized(req, res, [UserRole.guardian, UserRole.caregiver])
            if (authorized) {
                const clientResult = await prisma.client.findFirst({
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
                if (clientResult) {
                    const messageResult = await prisma.message.findMany({
                        where: {
                            clientId: id,
                        },
                        orderBy: {
                            timestamp: 'desc'
                        },
                        select: {
                            message: true,
                            timestamp: true,
                            id: true,

                            user: {
                                select: {
                                    roles: {
                                        select: {
                                            role: true
                                        }
                                    },
                                    caregiverProfile: {
                                        select: {
                                            firstName: true,
                                            lastName: true
                                        }
                                    },
                                    guardianProfile: {
                                        select: {
                                            firstName: true,
                                            lastName: true
                                        }
                                    },
                                }
                            }
                        }
                    })
                    const result = messageResult.map((message) => {
                        const { user, ...msg } = message
                        const { caregiverProfile, guardianProfile, roles } = user
                        return {
                            ...msg,
                            ...caregiverProfile,
                            ...guardianProfile,
                            roles
                        }
                    })
                    res.status(200).json(result)
                } else {
                    res.status(403).send()
                }
            } else {
                res.status(403).send()
            }
        } else {
            res.status(404).send()
        }
    })