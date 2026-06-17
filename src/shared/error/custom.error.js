const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
  constructor(message, statusCode, details = "") {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = "AppError";
  }
}

class NotFoundError extends AppError {
  constructor(message = "Resource not found", details = "") {
    super(message, StatusCodes.NOT_FOUND, details);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized", details = "") {
    super(message, StatusCodes.UNAUTHORIZED, details);
  }
}

class ValidationError extends AppError {
  constructor(message = "Validation failed", details = "") {
    super(message, StatusCodes.BAD_REQUEST, details);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden", details = "") {
    super(message, StatusCodes.FORBIDDEN, details);
  }
}

class ConflictError extends AppError {
  constructor(message = "Conflict", details = "") {
    super(message, StatusCodes.CONFLICT, details);
  }
}

module.exports = {
  AppError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
  ForbiddenError,
  ConflictError,
};