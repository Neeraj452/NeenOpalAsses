const CustomInput = ({ label, value,onChange,error }) => {
    return (
        <div className="form-list">
        <label htmlFor="name" className="label">
            <span className="requied">*</span>
            {label}:
        </label>
        <input type="text" id="name" name="name" className="inputfield" onChange={onChange} value={value} />
        {!error && <p className="error">This field is required</p>}
        </div>
    );
    };

export default CustomInput;
