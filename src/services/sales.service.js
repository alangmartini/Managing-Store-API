const { salesModel } = require('../models');

const findAll = async () => {
  const result = salesModel.findAll();

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};

const findById = async (id) => {
  const result = salesModel.findById(id);

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};

const findByQuery = async (query) => {
  const result = salesModel.findByQuery(query);

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};

const create = async (data) => {
  const result = salesModel.create(data);

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};

const update = async (id) => {
  const result = salesModel.update(id);

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};

const remove = async (id) => {
  const result = salesModel.remove(id);

  if (!result) {
    return {
      type: ERRORS_TYPE.NOT_FOUND,
      message: ERRORS_MESSAGE.NOT_FOUND,
      error: new Error('Nenhum resultado retornado'),
    }
  }

  return result;
};


module.exports = {
  findAll,
  findById,
  findByQuery,
  create,
  update,
  remove,
};