import React, { useEffect, useState } from "react";
import "../../Assets/Styles/AddForm.scss";
import AddFormStep1 from "../AddForm/AddFormStep1";
import AddFormStep2 from "../AddForm/AddFormStep2";
import AddFormStep3 from "../AddForm/AddFormStep3";
import AddFormStep4 from "../AddForm/AddFormStep4";
import AddFormStep5 from "../AddForm/AddFormStep5";
import AddFormStep6 from "../AddForm/AddFormStep6";
import ProgressIndicator from "../../components/AddForm/ProgressIndicator";
import PublishConfirmation from "../../components/AddForm/PublishConfirmation";
import { StyledEngineProvider } from "@mui/material/styles";

function AddForm() {
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [isStepValidate, setIsStepValidate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    uses: "",
    priceModel: "",
    price: "",
    categories: [],
    platforms: [],
    markEase: 0,
    markUx: 0,
    markHelpful: 0,
    markCommunity: 0,
  });
  const [formValidation, setFormValidation] = useState({
    name: "Name is required",
    link: "Link is required",
    uses: "Please add at least 15 character description",
    priceModel: "empty",
    price: "Please enter price",
    categories: "Choose at least one category",
    platforms: "Choose at least one platform",
    markEase: "empty",
    markUx: "empty",
    markHelpful: "empty",
    markCommunity: "empty",
  });
  const [open, setOpen] = React.useState(false);

  //!debug
  useEffect(() => {
    console.log(isStepValidate);
  }, [isStepValidate]);

  useEffect(() => {
    setShowError(false);
  }, [step]);

  function StepNavigation() {
    switch (step) {
      case 0:
        return (
          <AddFormStep1
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            setFormValidation={setFormValidation}
            showError={showError}
          />
        );

      case 1:
        return (
          <AddFormStep2
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            setFormValidation={setFormValidation}
            showError={showError}
          />
        );

      case 2:
        return (
          <AddFormStep3
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            setFormValidation={setFormValidation}
            showError={showError}
          />
        );

      case 3:
        return (
          <AddFormStep4
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            setFormValidation={setFormValidation}
            showError={showError}
          />
        );

      case 4:
        return (
          <AddFormStep5
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            setFormValidation={setFormValidation}
            showError={showError}
          />
        );

      case 5:
        return (
          <AddFormStep6
            formData={formData}
            setFormData={setFormData}
            setIsStepValidate={setIsStepValidate}
            formValidation={formValidation}
            showError={showError}
            setFormValidation={setFormValidation}
          />
        );

      default:
        alert("error");
        break;
    }
  }
  const backButton = () => {
    if (step > 0) {
      return (
        <div
          className="form_back"
          onClick={() => {
            setStep((currStep) => currStep - 1); //TODO fix stepvalidate being false after going back
          }}
        >
          Back
        </div>
      );
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const StepButton = () => {
    switch (isStepValidate) {
      case false:
        return (
          <button
            onClick={() => {
              setShowError(true);
            }}
          >
            {step !== 5 ? "Continue" : "Publish"}
          </button>
        );

      case true:
        return (
          <button
            onClick={() => {
              if (step !== 5) {
                setStep((currStep) => currStep + 1);
                setIsStepValidate(false);
                setShowError(false);
              } else {
                handleClickOpen();
              }
            }}
          >
            {step !== 5 ? "Continue" : "Publish"}
          </button>
        );

      default:
        alert("error");
        break;
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="component-wrapper">
        {StepNavigation()}
        {StepButton()}
        {backButton()}
        <PublishConfirmation open={open} handleClose={handleClose} />
        <div className="addform-progressbar">
          {Array(6)
            .fill(true)
            .map((arr, i) => (
              <ProgressIndicator key={i} step={step} index={i} />
            ))}
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default AddForm;
