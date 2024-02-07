export class Validators {
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static get colombianPhoneNumber() {
    return /^\+57[0-9]{10}$/;
  }

  static get internationalPhoneNumber() {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/;
  }

  static get numericOnly() {
    return /^[0-9]+$/;
  }

  static get alphanumeric() {
    return /^[a-zA-Z0-9]+$/;
  }

  static get password() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  }
}