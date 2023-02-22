import React, { useEffect } from "react";

function AddFormStep6({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError
}) {
  const marks = [1, 2, 3, 4, 5];
  const categories = {
    markEase: "Easy to use",
    markUx: "UX",
    markHelpful: "Helpful",
    markCommunity: "Community",
  };

  function handleClick(event) {
    if (event.target.dataset.mark) {
      setFormData({
        ...formData,
        [event.target.dataset.category]: event.target.dataset.mark,
      });

    }
  }

  useEffect(() => {
    if (
      formData.markEase === 0 ||
      formData.markUx === 0 ||
      formData.markCommunity === 0 ||
      formData.markHelpful === 0
    ) {
      setIsStepValidate(false);
      setFormValidation({
        ...formValidation,
        markEase: "Please rate everything",
      });
    } else {
      setIsStepValidate(true);
      setFormValidation({
        ...formValidation,
        markEase: "",
      });
    }
  }, [formData, setIsStepValidate]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, freeText: e.target.value });
  };

  return (
    <div className="add-form-step">
      <h2>Final</h2>
      <h3>Put your mark and publish (1 - the lowest, 5 - highest mark)</h3>
      <div className="rate-experience">
        {Object.entries(categories).map(([keys, values]) => {
          return (
            <div
              className="experience-category"
              onClick={handleClick}
              key={values}
            >
              {values}
              <div className="experience-rating">
                {marks.map((e, i) => {
                  return (
                    <div
                      data-category={keys}
                      data-mark={e}
                      key={i}
                      className={
                        parseInt(formData[keys]) === e
                          ? "experience-mark active-mark"
                          : "experience-mark"
                      }
                    >
                      {e}
                      <div className="percent-mark">{e * 20 + "%"}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="error_msg_step6">{showError && formValidation.markEase}</p>
      <label>
          <textarea
            style={{height:"30px"}}
            name="free-text"
            id="free-text"
            placeholder=" "
            title="Anything you want to add"
            // autoFocus
            rows="5"
            required
            value={formData.freeText}
            onChange={handleChange}
          />
          <span id="uses-label">Free text</span>
          <p className="error_msg_step2">{showError && formValidation.uses}</p>
        </label>
    </div>
  );
}

export default AddFormStep6;
