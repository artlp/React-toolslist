import React, { useState, useEffect } from "react";

function AddFormStep1({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError,
}) {
  const [isNameValid, setIsNameValid] = useState(formData.name);
  const [isLinkValid, setIsLinkValid] = useState(formData.link);

  const StepValidation = () => {
    console.table({ name: isNameValid, link: isLinkValid });
    if (isNameValid && isLinkValid) {
      setIsStepValidate(true);
    } else {
      setIsStepValidate(false);
    }
  };
  const handleNameChange = (e) => {
    if (e.target.value.length) {
      setIsNameValid(true);
      setFormValidation({ ...formValidation, name: "" });
    } else {
      setIsNameValid(false);
      setFormValidation({ ...formValidation, name: "Empty name" });
    }
    setFormData({ ...formData, name: e.target.value });
  };

  const handleLinkChange = (e) => {
    if (
      e.target.value
        .toLowerCase()
        .match(
          /^(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i //made https optional
        )
    ) {
      setIsLinkValid(true);
      setFormValidation({ ...formValidation, link: "" });
    } else {
      setIsLinkValid(false);
      setFormValidation({ ...formValidation, link: "Incorrect link" });
    }
    setFormData({ ...formData, link: e.target.value });
  };
  useEffect(() => {
    StepValidation();
  }, [isNameValid, isLinkValid]);

  return (
    <div className="add-form-step">
      <h2>Step 1</h2>
      <h3>Write tool name and add its link</h3>
      <form action="">
        <label>
          <input
            type="text"
            name="tool-name"
            id="tool-name"
            placeholder=" "
            title="Tool Name"
            required
            value={formData.name}
            onChange={handleNameChange}
          />
          <span>Name</span>
          <p className="error_msg">{showError && formValidation.name}</p>
        </label>
        <label>
          <input
            type="text"
            name="tool-link"
            id="tool-link"
            placeholder=" "
            title="Tool Link"
            required
            value={formData.link}
            onChange={handleLinkChange}
            onPaste={handleLinkChange}
          />
          <span>Link</span>
          <p className="error_msg">{showError && formValidation.link}</p>
        </label>
      </form>
    </div>
  );
}

export default AddFormStep1;
