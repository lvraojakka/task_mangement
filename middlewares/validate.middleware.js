export const validate = (schema) => (req, res, next) => {
  // console.log('Incoming request body:', req.body);
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};
