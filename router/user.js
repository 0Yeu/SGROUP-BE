import { Router } from 'express'
const user_router = Router()
import { validate } from '../middleware/validate.js'
import { db } from '../database/connection.js'
export { user_router }

user_router.get('/', (req, res) => {
    db.query('SELECT * FROM user', (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(rows)
        }
    })
})

user_router.get('/:id', (req, res) => {
    db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(rows)
        }
    })
})

user_router.put('/:id', validate, (req, res) => {
    db.query('UPDATE user SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(rows)
        }
    })
})

user_router.post('/', validate, (req, res) => {
    db.query('INSERT INTO user SET ?', req.body, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.status(201).json(rows)
        }
    })
})

user_router.delete('/:id', (req, res) => {
    db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(rows)
        }
    })
})
