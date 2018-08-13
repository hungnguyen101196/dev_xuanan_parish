module.exports = {
    index: async(req, res) => {
        res.render('ParishInformation/index', { layout: 'ParishInformation', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    }
}