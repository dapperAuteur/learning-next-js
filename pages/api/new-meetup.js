function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data;
        console.log(`data`, data)
    }
}

export default handler