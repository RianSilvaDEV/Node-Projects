const _carService = require('../services/carService');
const _asyncWrapper = require('../middleware/async')
const { _createCustomError } = require('../errors/custom-error');

const getAllCars = _asyncWrapper(async (req, res) => {
  const cars = await _carService.GetAll();
  res.status(201).json(cars)
})

const createCar = _asyncWrapper(async (req, res) => {
  const car = await _carService.Insert(req.body);
  res.status(200).json({ car })
})

const getCar = _asyncWrapper(async (req, res) => {
  const { cod: cod } = req.params
  const car = await _carService.GetById(cod);
  if (!car) {
    return next(_createCustomError(`No Car with id : ${cod}`, 404))
  }
  res.status(200).json(car)
})

const updateCar = _asyncWrapper(async (req, res, next) => {
  const car = await _carService.Update(req.body)
  if (!car) {
    return next(createCustomError(`No Code with id : ${req.params.cod}`, 404))
  }
  res.status(200).json({ car })
})

const deleteCar = _asyncWrapper(async (req, res) => {
  const cars = await _carService.GetAll();
  res.status(200).json(cars)
})

module.exports = {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
};