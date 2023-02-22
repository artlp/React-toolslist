import React, { useState, useEffect } from "react";

function AddFormStep2({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError
}) {
  const [isUsesValid, setIsUsesValid] = useState(formData.uses);
  const StepValidation = () => {
    if (isUsesValid) {
      setIsStepValidate(true);
    } else {
      setIsStepValidate(false);
    }
  };
  const handleUsesChange = (e) => {
    if (e.target.value.length >= 15) {
      setIsUsesValid(true);
      setFormValidation({ ...formValidation, uses: "" });
    } else {
      setIsUsesValid(false);
      setFormValidation({
        ...formValidation,
        uses: "Please add at least 15 character description",
      });
    }
    setFormData({ ...formData, uses: e.target.value });
  };
  useEffect(() => {
    StepValidation();
  }, [isUsesValid]);
  return (
    <div className="add-form-step">
      <h2>Step 2</h2>
      <h3>Answer the question</h3>
      <form action="">
        <label>
          <textarea
            name="tool-uses"
            id="tool-uses"
            placeholder=" "
            title="Tool uses"
            // autoFocus
            rows="5"
            required
            value={formData.uses}
            onChange={handleUsesChange}
          />
          <span id="uses-label">For what this tool is good for?</span>
          <p className="error_msg_step2">{showError && formValidation.uses}</p>
        </label>
      </form>
    </div>
  );
}

export default AddFormStep2;
