const Car = require('../services/carService');

const getAllCars = async (req, res) => {
  res.json('getAllCars')
}

const createCar = async (req, res) => {
  res.json('createCar')
}

const getCar = async (req, res) => {
  res.json('getCar')
}

const updateCar = async (req, res) => {
  res.json('updateCar')
}

const deleteCar = async (req, res) => {
  res.json('deleteCar')
}

module.exports = {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
};