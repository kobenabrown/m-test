const assert = require('assert');
const {
  Given,
  When,
  Then,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const data = require('../../test-data/test-data.json');
const locators = require('../../locators/locators');
const Base = require('../../pages/base');
const Patient = require('../../pages/patient.page');
Given(
  'I am on the patient creation page',
  async function () {
    let url = 'http://localhost:3000';
    await Base.OPEN_PAGE(url);
  }
);
Given(
  'Window is maximized',
  async function () {
    await Base.MAX_WINDOW();
    await Base.WAIT_IMP(10000);
  }
);
When(
  'I input a valid first name data for the new patient',
  async function () {
    await Patient._ENTER__FIRST_NAME(
      locators.first_name,
      data.first_name
    );
  }
);
When(
  'I input a valid middle name data for the new patient',
  async function () {
    await Patient._ENTER__MIDDLE_NAME(
      locators.middle_name,
      data.middle_name
    );
  }
);

When(
  'I input a valid last name data for the new patient',
  async function () {
    await Patient._ENTER__LAST_NAME(
      locators.last_name,
      data.last_name
    );
  }
);
When(
  'I input a valid phone number data for the new patient',
  async function () {
    await Patient._ENTER__PHONE(
      locators.phone,
      data.phone
    );
  }
);
When(
  'I input a valid birth date data for the new patient',
  async function () {
    await Patient._ENTER__DOB(
      locators.dob,
      data.dob
    );
  }
);
When(
  'I input a valid address data for the new patient',
  async function () {
    await Patient._ENTER__ADDRESS(
      locators.address,
      data.address
    );
  }
);
When(
  'I click on the Add New User button',
  async function () {
    await Patient._CLICK__ADD_NEW_USER(
      locators.add_new_patient_btn
    );
  }
);
Then(
  'The new patient should be created successfully and displayed in the User List section',
  async function () {
    let newpatient =
      await Patient._CHECK_LIST(
        locators.check_new_patient
      );
    assert.strictEqual(
      newpatient,
      data.first_name +
        ' ' +
        data.middle_name +
        ' ' +
        data.last_name
    );
  }
);
Then(
  'The browser should close',
  async function () {
    await Base.CLOSE_BROWSER();
  }
);
