const CustomButton = ({label,onClick,type}) => {
    return (
        <button onClick={onClick} className={type==="cancel"?"cancel":"edit"}>
        {label}
        </button>
    );
    }

export default CustomButton;