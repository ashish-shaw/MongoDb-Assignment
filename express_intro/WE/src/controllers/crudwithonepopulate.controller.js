const getAll = (model, populateParams) => async (req, res) => {
  try {
    const items = await model.find().populate(populateParams).lean().exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const post = (model, populateParams) => async (req, res) => {
  try {
    const items = await model.create(req.body);
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOne = (model, populateParams) => async (req, res) => {
  try {
    const items = await model
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getOneWithOnePopulate = (model, populateParams) => async (req, res) => {
  try {
    const items = await model
      .findById(req.params.id)
      .populate(populateParams)
      .lean()
      .exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = (model, populateParams) => ({
  getOneWithOnePopulate: getOneWithOnePopulate(model, populateParams),
});
