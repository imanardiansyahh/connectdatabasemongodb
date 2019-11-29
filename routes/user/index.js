var express = require('express');
var router = express.Router();


const { addUser, getUser, deleteUser, updateUser, getUserbyId } = require('./controllers')
    /* GET users listing. */
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
router.get('/', getUser)
router.get('/:id', getUserbyId)
router.post('/', addUser)


module.exports = router;