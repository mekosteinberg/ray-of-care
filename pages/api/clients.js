import getClientController from "../../controllers/get-client"

export default function handler(req, res) {
    if (req.method === 'GET') {
        return getClientController(req, res)
    } else {
        // be generic with things we aren't listening for
        res.status(404)
        res.send()
    }
}