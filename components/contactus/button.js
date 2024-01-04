import React from "react";

const commonStyle = "rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

const button = ({ step, setStep, isValid, watch, submitForm }) => {
    const Data = JSON.stringify(watch(), null, 2);
    const onHandleNext = () => {
        setStep((cur) => cur + 1);
    };
    const onHandlePrevious = () => {
        setStep((cur) => cur - 1);
    };
    const onHandleSubmit = () => {
        submitForm();
    };

    const SubmitNextButton = () => {
        if (step < 3) {
            return (
                <button
                    onClick={onHandleNext}
                    className={commonStyle}
                >
                    Next
                </button>
            );
        } else {
            return (
                <button
                    onClick={onHandleSubmit}
                    className={commonStyle}
                >
                    Submit
                </button>
            );
        }
    };
    return (
        <React.Fragment>
            <div className="flex gap-4  justify-center mt-4 p-2 ">
                <div>
                    <button
                        disabled={step === 1}
                        onClick={onHandlePrevious}
                        className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Previous
                    </button>
                </div>

                <div>{SubmitNextButton()}</div>
            </div>
        </React.Fragment>
    );
};

export default button;
