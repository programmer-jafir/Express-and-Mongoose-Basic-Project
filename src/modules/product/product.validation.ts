import Joi from 'joi';

// Joi schema for TVariant
const variantValidationSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required()
});

// Joi schema for TInventory
const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().min(0).required(),
  inStock: Joi.boolean().required()
});

// Joi schema for TProduct
const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string().required()).required(),
  variants: Joi.array().items(variantValidationSchema).required(),
  inventory: inventoryValidationSchema.required()
});

// Export the Joi schemas
export { productValidationSchema, variantValidationSchema, inventoryValidationSchema };
