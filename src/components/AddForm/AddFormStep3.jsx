import React, { useState, useEffect } from "react";

function AddFormStep3({
  formData,
  setFormData,
  setIsStepValidate,
  formValidation,
  setFormValidation,
  showError,
}) {
  const [selectedItem, setSelectedItem] = useState(formData.priceModel);
  const [isPriceValid, setIsPriceValid] = useState(true);

  const StepValidation = () => {
    //FIXED make step validate = true on first page load
    if (isPriceValid) {
      setIsStepValidate(true);
    } else {
      setIsStepValidate(false);
    }
  };

  function handleChange(event) {
    setSelectedItem(event.target.value);
    setFormData({ ...formData, priceModel: event.target.value });
    if (event.target.value === "paid" && !formData.price) {
      setIsPriceValid(false); //FIXED switches isPriceValid incorrectly
    } else {
      setIsPriceValid(true);
    }
  }

  const handlePriceChange = (e) => {
    if (e.target.value.length > 0) {
      //FIXED again wrong number of characters actually works
      setIsPriceValid(true);
      setFormValidation({ ...formValidation, price: "" });
    } else {
      setIsPriceValid(false);
      setFormValidation({
        ...formValidation,
        price: "Please enter price",
      });
    }
    setFormData({ ...formData, price: e.target.value });
  };

  useEffect(() => {
    StepValidation();
  }, [isPriceValid]);

  return (
    <div className="add-form-step">
      <h2>Step 3</h2>
      <h3>Is it free or paid?</h3>
      <div className="price-model">
        <form action="">
          <div className="add-step-3">
            <label>Price</label>
            <select name="price-model" id="price-model" onChange={handleChange}>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
              <option value="trial">Free Trial</option>
            </select>
          </div>
          {selectedItem === "paid" ? (
            <label>
              <input
                type="text"
                name="tool-price"
                id="tool-price"
                placeholder="$0"
                title="Tool price"
                required
                value={formData.price}
                onChange={handlePriceChange}
              />
              <div
                id="price-from-label"
                style={{ color: "black", fontWeight: 500 }}
              >
                From
              </div>
              <p className="error_msg">{showError && formValidation.price}</p>
            </label>
          ) : (
            <div className="" style={{ visibility: "hidden" }}>
              .
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddFormStep3;
