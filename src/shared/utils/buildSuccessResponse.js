const { StatusCodes } = require("http-status-codes");

const buildSuccessResponse = (res, message, statusCode, data) => {
  const response = {
    success: true,
  };
  if (message) response.message = message;
  if (data) response.data = data;
  
  res.status(statusCode || StatusCodes.OK).json(response);
};

module.exports = {buildSuccessResponse}