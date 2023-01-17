import prisma from "../../lib/prisma";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#protect-an-api-route
//* user must be logged in to access
//*purpose1: get users own profile to view and edit 
//*purpose2: check that user has profile, if not completed, then force to create it
//TODO Build useEffect Guard in layout to see if user has a profile (can't just use a link someone sent)

export default withApiAuthRequired(
    async function handler(req, res) {
        const { user } = await getSession(req, res);

        if (req.method === 'POST') {
            res.status(201).json({ success: true })
        } else if (req.method === 'PUT') {
            res.status(201).json({ success: true })
        } else if (req.method === 'GET') {
            //* search by user.sub because this is the ID on auth0
            // https://auth0.com/docs/secure/tokens/id-tokens/id-token-structure
            //* using find first because there's a unique constrain on the auth0id field, so this is just to limit to 1 record
            const result = await prisma.user.findFirst({
                where: {
                    auth0id: user.sub
                }
            }, {
                include: {
                    // join to these two tables and try to return their results
                    // names come from the schema.prisma file
                    caregiverProfile: true,
                    guardianProfile: true,
                }
            })
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).end();
            }
        } else {
            res.status(501);
        }
        // TODO do we need a delete here? maybe? probably?
    }
) 