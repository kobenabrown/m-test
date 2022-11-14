const Base = require('./base');
class Patient {
  async _ENTER__FIRST_NAME(
    _locator,
    _keys
  ) {
    return await Base.ENTER__FIRST_NAME(
      _locator,
      _keys
    );
  }
  async _ENTER__MIDDLE_NAME(
    _locator,
    _keys
  ) {
    return await Base.ENTER__MIDDLE_NAME(
      _locator,
      _keys
    );
  }
  async _ENTER__LAST_NAME(
    _locator,
    _keys
  ) {
    return await Base.ENTER__LAST_NAME(
      _locator,
      _keys
    );
  }
  async _ENTER__PHONE(_locator, _keys) {
    return await Base.ENTER__PHONE(
      _locator,
      _keys
    );
  }
  async _ENTER__DOB(_locator, _keys) {
    return await Base.ENTER__DOB(
      _locator,
      _keys
    );
  }
  async _ENTER__ADDRESS(
    _locator,
    _keys
  ) {
    return await Base.ENTER__ADDRESS(
      _locator,
      _keys
    );
  }
  async _CLICK__ADD_NEW_USER(
    _locator,
    _keys
  ) {
    return await Base.CLICK__ADD_NEW_USER(
      _locator,
      _keys
    );
  }
  async _CHECK_LIST(_locator) {
    return await Base.CHECK_LIST(
      _locator
    );
  }
}
module.exports = new Patient();
