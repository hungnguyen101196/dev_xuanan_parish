module.exports = {
    index: async(req, res) => {
        res.render('user/index', { layout: 'user', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}