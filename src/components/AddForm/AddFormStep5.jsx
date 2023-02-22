import ListOfPlatforms from "../AddForm/ListOfPlatforms";

function AddFormStep5({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError
}) {
  return (
    <div className="add-form-step">
      <h2>Step 5</h2>
      <h3>Choose platform to which this tool belongs</h3>
      <div className="tool-category">
        <label>Platforms</label>
        <ListOfPlatforms
          formData={formData}
          setFormData={setFormData}
          setIsStepValidate={setIsStepValidate}
          formValidation={formValidation}
          setFormValidation={setFormValidation}
        />
      </div>
      <p className="error_msg_step4">{showError && formValidation.platforms}</p>
    </div>
  );
}

export default AddFormStep5;
