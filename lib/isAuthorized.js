import prisma from "./prisma";
import { getSession } from '@auth0/nextjs-auth0';

export const isAuthorized = async (req, res, roles) => {
    const { user: { sub: auth0id } } = await getSession(req, res);

    const user = await prisma.user.findFirst({
        where: { auth0id },
        select: {
            id: true,
            roles: true
        }
    })
    const result = {
        user,
        authorized: false
    }
    roles.forEach(role => {
        if (user.roles.filter((userRole) => userRole.role === role).length > 0) {
            result.authorized = true
        }
    });
    return result
}