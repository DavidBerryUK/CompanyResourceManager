import { Validator } from 'vee-validate';

Validator.extend('caps', {
    validate(value) {
      return /^[A-Z]$/.test(value);
    },
    getMessage(field) {
      return `The ${field} must only contain capitalized characters`;
    },
  });
