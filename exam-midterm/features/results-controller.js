const { db } = require('../_services/firebase-admin-initialized')

const resultLists = async (req, res) => {
  const query = db.collection('results')
    .orderBy('rank')
    .get()
  const resultList = (await query).docs.map(doc => doc.data())

  res.render('results-list', { resultList })
}
const resultDetails = async (req, res) => {
  const slug = req.params.slug
  const query = db.collection('results')
    .doc(slug)
    .collection('attempts')
    .orderBy('distance')
    .get()
  const resultDetails = (await query).data()

  res.render('results-details', { resultDetails })
}
const worldRecord = async (req, res) => {
  const slug = req.params.slug
  const query = db.collection('world-records')
    .doc(slug)
    .get()

  const worldRecord = (await query).docs.map(doc => doc.data())
  res.render('world-record', { worldRecord })
}

const resultCreateForm = async (req, res) => {
  res.render('result-create-form')
}

const resultCreate = async (req, res) => {
// 1. Inputs
  const { slug, name, rank, order, distance, record } = req.body
  const data = { slug, name, rank, order, distance, record }
  const query = db.collection('results')
    .doc(slug)
    .set(data)

  await query
  res.redirect(`/results/${slug}`)
}

module.exports = {
  resultLists,
  resultDetails,
  worldRecord,
  resultCreateForm,
  resultCreate
}
