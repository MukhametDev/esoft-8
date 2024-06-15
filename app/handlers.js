const fs = require('fs');
const path = require('path');
const { saveDb } = require('./utils');
const dbPath = path.join(__dirname, './../db.json');
let db = require(dbPath);
/**
 * Получение всех юзеров
 * @param {Object} req 
 * @param {Object} res 
 */
function getAllUsers(req, res) {
    res.send(db.users);
}

/**
 * Получение юзера по ID
 * @param {Object} req 
 * @param {Object} res 
 */
function getUserByID(req, res) {
    const { id } = req.params;
    const user = db.users.find(item => item.id === +id);
    if (!user) res.status(404).send('User not found');
    res.send(user);
}

/**
 * Filters the users in the database based on the provided age parameter and returns the filtered users.
 *
 * @param {Object} req - The request object containing the age parameter.
 * @param {Object} res - The response object used to send the filtered users.
 * @return {void} The function does not return a value.
 */
function getUserByAge(req, res) {
    const { age } = req.params;
    db.users = db.users.filter((item) => {
        return item.age > +age
    })
    saveDb();
    res.send(db.users);
}

/**
 * Создание юзера
 * @param {Object} req 
 * @param {Object} res 
 */
function addUser(req, res) {
    const { name, email, age } = req.body;
    const newUser = {
        id: db.users.length + 1,
        name,
        email,
        age
    }
    db.users.push(newUser);
    saveDb();
    res.send(newUser);
}

/**
 * Обновление юзера
 * @param {Object} req 
 * @param {Object} res 
 */
function updateUserInfoByID(req, res) {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = db.users.find(item => item.id === +id);
    user.name = name;
    user.email = email;
    user.age = age;
    saveDb();
    res.send(user);
}

/**
 * Deletes a user from the database based on the provided ID.
 *
 * @param {Object} req - The request object containing the ID of the user to delete.
 * @param {Object} res - The response object used to send the updated user list.
 * @return {void} The function does not return a value.
 */
function deleteUserByID(req, res) {
    const { id } = req.params;
    db.users = db.users.filter((item) => {
        return item.id !== +id
    })
    saveDb();
    res.send(db.users);
}

/**
 * Sorts the users in db.users by name in ascending order and sends the sorted users in the response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
function sortedNameUsers(req, res) {
    users = db.users.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    res.send(users);
}

/**
 * Filters users by domain and sends the filtered users in the response.
 *
 * @param {Object} req - The request object containing the domain parameter.
 * @param {Object} res - The response object used to send the filtered users.
 * @return {void}
 */
function getUsersByDomain(req, res) {
    const { domain } = req.params;

    const users = db.users.filter((item) => {
        if (item.email.includes(domain)) {
            return item
        }
    })
    if (!users || users.length === 0) return res.status(404).send('User not found');
    res.send(users);
}

module.exports = {
    getAllUsers,
    getUserByID,
    addUser,
    updateUserInfoByID,
    deleteUserByID,
    getUserByAge,
    sortedNameUsers,
    getUsersByDomain
}