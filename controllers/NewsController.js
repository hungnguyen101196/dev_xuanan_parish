module.exports = {
    index: async(req, res) => {
        res.render('news/index', { layout: 'news', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}