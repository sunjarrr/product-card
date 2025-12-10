export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }
  getAllValueForm() {
    const dataObject = {};
    const formData = new FormData(this.form);
    formData.forEach((value,key) => {
      dataObject[key] = value;
    });
    return dataObject;
  }
  checkFormValid() {
    return this.form.checkValidity();
  }
  resetAllValues() {
    return this.form.reset();
  }
}