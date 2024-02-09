const CustomInput = ({ label, value,onChange,error, type="text" }) => {
    return (
        <div className="form-list">
        <label htmlFor="name" className="label">
            <span className="requied">*</span>
            {label}:
        </label>
        <input type={type}  className={`inputfield ${!error && 'inputerror'}`} onChange={onChange} value={value} />
        {!error && <p className="error">This field is required</p>}
        </div>
    );
    };

export default CustomInput;
