const express = require('express');
const router = new express.Router();
const {
    getAllUsers,
    getUserByID,
    addUser,
    updateUserInfoByID,
    deleteUserByID,
    getUserByAge,
    sortedNameUsers,
    getUsersByDomain
} = require('./handlers');
const { validateUser, validateTypeUser } = require('./middleware');
const { isValidDomain } = require('./utils');

// GET requests
router.get('/sorted', (req, res) => {
    sortedNameUsers(req, res)
})
router.get('/', (req, res) => {
    getAllUsers(req, res)
})

router.get('/:id', (req, res) => {
    getUserByID(req, res)
})

router.get('/age/:age', (req, res) => {
    getUserByAge(req, res)
})

router.get('/domain/:domain', (req, res, next) => {
    const { domain } = req.params
    if (isValidDomain(domain)) {
        next()
    }
    res.status(400).send("Incorrect domain")
})
router.get('/domain/:domain', (req, res) => {
    getUsersByDomain(req, res)
})

// POST requests
router.post('/', validateUser)
router.post('/', validateTypeUser)
router.post('/', (req, res) => {
    addUser(req, res)
})

// PUT requests
router.put('/:id', validateUser)
router.put('/:id', validateTypeUser)
router.put('/:id', (req, res) => {
    updateUserInfoByID(req, res)
})

// DELETE requests
router.delete('/:id', (req, res) => {
    deleteUserByID(req, res)
})


module.exports = router;