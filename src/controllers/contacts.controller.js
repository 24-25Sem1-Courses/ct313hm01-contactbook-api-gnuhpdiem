const jsend = require('../jsend')

function createContact(req, res) {
    return res.status(201).json(jsend.success({contact: {}}))
}

function getContactsByFilter(req, res) {

    const filters = []

    const {favorite, name} = req.query

    if (favorite !== undefined) {
        filters.push(`favorite=${favorite}`)
    }

    if (name) {
        filters.push(`name=${name}`)
    }

    console.log(filters.join('&'))

    return res.json(jsend.success({contacts: []}))

}

function getContact(req, res) {
    return res.json(jsend.success({contact: {}}))
}

function updateContact(req, res) {
    return res.json(jsend.success({contact: {}}))
}

function deleteContact(req, res) {
    return res.json(jsend.success())
}

function deleteAllContacts(req, res) {
    return res.json(jsend.success())
}

module.exports = {getContact, deleteContact, updateContact, getContactsByFilter, deleteAllContacts, createContact}