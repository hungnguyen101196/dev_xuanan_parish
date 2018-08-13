module.exports = {
    index: async(req, res) => {
        res.render('login/index', { layout: 'login', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}