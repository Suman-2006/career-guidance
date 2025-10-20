// utils/validateEmail.js

/**
 * Validates an email address
 * @param {string} email
 * @returns {boolean} true if valid, false otherwise
 */
function validateEmail(email) {
  if (typeof email !== 'string') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

module.exports = validateEmail;
