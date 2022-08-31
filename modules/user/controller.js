const service = require("./service");

exports.create = async (req, res, next) => {
  try {
    const data = await service.create(req.body);

    res.status(201).json({
      status: 201,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await service.get(id);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await service.update(id, req.body);

    res.status(203).send({
      status: 203,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await service.remove(id);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};
