import ListOfCategories from "../AddForm/ListOfCategories";

function AddFormStep4({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError
}) {
  return (
    <div className="add-form-step">
      <h2>Step 4</h2>
      <h3>Choose category to which this tool belongs</h3>
      <div className="tool-category">
        <label>Categories</label>
        <ListOfCategories
          formData={formData}
          setFormData={setFormData}
          setIsStepValidate={setIsStepValidate}
          formValidation={formValidation}
          setFormValidation={setFormValidation}
        />
      </div>
      <p className="error_msg_step4">{showError && formValidation.categories}</p>
    </div>
  );
}

export default AddFormStep4;
