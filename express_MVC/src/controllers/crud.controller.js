const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(201).send(items);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getOneWithTwoPopulate =
  (model, populate1, populate2) => async (req, res) => {
    try {
      const item = await model
        .findById(req.params.id)
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();
      return res.status(201).send(item);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

const getAllWithTwoPopulateEvalId =
  (model1, model2, populate1, populate2) => async (req, res) => {
    try {
      const items = await model1.findById(req.params.id).lean().exec();
      const getitems = await model2
        .find({ evaluation_id: items._id })
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();
      return res.status(201).send(getitems);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

const getAllWithTwoPopulate =
  (model, populate1, populate2) => async (req, res) => {
    try {
      const items = await model
        .find()
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();
      return res.status(201).send(items);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

const GetTopper =
  (model1, model2, populate1, populate2) => async (req, res) => {
    try {
      const items = await model1.findById(req.params.id).lean().exec();
      const getitems = await model2
        .find({ evaluation_id: items._id })
        .sort({ marks: -1 })
        .limit(1)
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();
      return res.status(201).send(getitems);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  post,
  getAll,
  getOne,
  getOneWithTwoPopulate,
  getAllWithTwoPopulate,
  getAllWithTwoPopulateEvalId,
  GetTopper,
  updateOne,
  deleteOne,
};
