import { userSchema } from '../schemas/users.js';
import { postSchema } from '../schemas/posts.js';
import ErrorResponse from '../utils/errorResponse.js';

const middlewareFactory = (model) => (req, res, next) => {
  const { method } = req;
  let schema;
  if (model === 'users') {
    schema = userSchema[method];
  } else if (model === 'posts') {
    schema = postSchema[method];
  } else {
    return next(new ErrorResponse('Invalid model specified', 404));
  }

  const parseResult = schema.safeParse(req.body);
  console.log(parseResult);

  if (!parseResult.success) {
    return res
      .status(400)
      .json({ message: 'Validation failed', errors: parseResult.error.flatten().fieldErrors });
  }
  next();
};
export default middlewareFactory;
