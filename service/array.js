const ArrayService = {
    sum: (req, res) => {
        const arr = req.body.arr;
        try {
            const result = arr.reduce((total, current) => total + current, 0);
            res.status(200).json({sum: result})
        } catch (e) {
            res.status(500).json({Error: e})
        }
    }
}

module.exports = ArrayService;