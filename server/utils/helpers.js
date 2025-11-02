// Utility helper functions

// Example: Generate random string
export const generateRandomString = (length = 10) => {
  return Math.random().toString(36).substring(2, length + 2);
};

// Example: Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// Example: Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Example: Async handler wrapper
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

