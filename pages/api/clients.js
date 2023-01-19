import prisma from "../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { UserRole } from "@prisma/client";

//

export default withApiAuthRequired(
    async function handler(req, res) {
        const { user: { email, sub: auth0id } } = await getSession(req, res);
        console.log(req.body)

        //*Create Client
        if (req.method === 'POST') {
            try {
                //finding the user by id that is requesting to add a client
                const user = await prisma.user.findFirst({
                    where: {
                        auth0id
                    },
                    select: {
                        id: true,
                        roles: true
                    }
                })
                //checks to make sure that the user is a guardian and allowed to create a client
                const isGuardian = user.roles.filter((userRole) => userRole.role === UserRole.guardian).length > 0

                if (isGuardian) {
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


        }
        res.status(200).end()
    })