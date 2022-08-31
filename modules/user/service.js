const User = require("./model");

exports.create = async (data) => {
  return User.create(data);
};

exports.getAll = async () => {
  return User.findAll();
};

exports.get = async (id) => {
  return User.findOne({
    where: { id },
  });
};

exports.update = async (id, data) => {
  return User.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return User.destroy({ where: { id } });
};
