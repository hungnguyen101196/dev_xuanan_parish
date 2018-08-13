module.exports = {
    index: async(req, res) => {
        res.render('Comment/index', { layout: 'comment', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}