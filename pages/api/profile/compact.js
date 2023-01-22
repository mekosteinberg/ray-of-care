import prisma from "../../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
    async function handler(req, res) {
        if (req.method === 'GET') {
            const { user: { email, sub: auth0id } } = await getSession(req, res);

            const dbResult = await prisma.user.findFirst({
                where: {
                    auth0id // this already has a unique constraint so shouldn't need to findUnique
                },
                select: {
                    id: true,
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
                        }
                    },
                    caregiverProfile: {
                        select: {
                            userId: false,
                            firstName: true,
                        }
                    },
                }
            })
            if (dbResult) {
                //flatten array of objects into array of strings
                const roles = dbResult.roles.map((role) => {
                    return role.role
                })
                const response = {
                    id: dbResult.id,
                    roles,
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

    })