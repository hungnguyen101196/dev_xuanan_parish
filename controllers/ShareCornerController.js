module.exports = {
    index: async(req, res) => {
        res.render('shareCorner/index', { layout: 'shareCorner', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}