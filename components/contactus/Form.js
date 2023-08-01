import React from 'react'

const Form = () => {
    return (
        <div className='min-h-[600px] bg-slate-600 text-white min-w-[400px]'>
            <form>
                <p>Which of our Legal Solutions do you want to inquire about?</p>
                <select name="" id="" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                    <option value="CONTRACT MANAGEMENT">CONTRACT MANAGEMENT</option>
                    <option value="MEDICO LEGAL">MEDICO LEGAL</option>
                    <option value="ESTATE PLANNING">ESTATE PLANNING</option>
                    <option value="IMMIGRATION SUPPORT">IMMIGRATION SUPPORT</option>
                    <option value="DEPOSITION SUMMARY">DEPOSITION SUMMARY</option>
                    <option value="LEGAL TRANSCRIPTION">LEGAL TRANSCRIPTION</option>
                    <option value="LEGAL RESEARCH">LEGAL RESEARCH</option>
                    <option value="LITIGATION SUPPORT">LITIGATION SUPPORT</option>
                    <option value="CASE INTAKE">CASE INTAKE</option>
                    <option value="DOCUMENT REVIEW">DOCUMENT REVIEW</option>
                    <option value="PARALEGAL SUPPORT">PARALEGAL SUPPORT</option>
                    <option value="BESPOKE LEGAL IT">BESPOKE LEGAL IT</option>
                    <option value="OTHERS">OTHERS</option>
                </select>
            </form>
        </div>
    )
}

export default Form
