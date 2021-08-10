const { db } = require('../_services/firebase-admin-initialized')

const resultCreateForm = async (req, res) => {
  res.render('result-create-form')
}

module.exports = {
  resultCreateForm,
}
