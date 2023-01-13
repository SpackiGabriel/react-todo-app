import './Input.css';


function Input({label, name, value, placeholder, handler}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value || ""} placeholder={placeholder} onChange={(e) => handler(e)} required />
        </div>
    );
}

export default Input;