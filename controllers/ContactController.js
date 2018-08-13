module.exports = {
    index: async(req, res) => {
        res.render('contact/index', { layout: 'contact', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}