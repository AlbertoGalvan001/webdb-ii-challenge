const express = require('express');
const router = express.Router();
const db = require('./dbConfig');

router.get('/', (req, res) => {
    knex
        .select('*')
        .from('router')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => res.status(500).json({ error: "Error getting cars from database" }));
});

router.get('/:id', (req, res) => {
    knex
        .select('*')
        .from('router')
        .where({ id: req.params.id })
        .first()
        .then(find => {
            console.log(error);
            res.status(500).json({ error: "Error getting info" });
        });
});

router.post('/', (req, res) => {
    const carData = req.body;
    knex('router')
        .insert(carsData, "id")
        .then(info => {
            const id = info[0];

            return knex('router')
                .select("make", "model", "year")
                .where({ id })
                .first()
                .then(vehicle => {
                    res.status(200).json(vehicle);
                });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                errorMessage: "Error adding a vehicle."
            });
        });
});