module.exports = {
    index: async(req, res) => {
        res.render('notification/index', { layout: 'notification', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}