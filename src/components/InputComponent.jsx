const InputComponent = ({ label, value, onChange }) => {
    return (
        <div className="input-group">
            <label htmlFor={label.replace(/\s+/g, '-').toLowerCase()}>{label}</label>
            <input type="number" value={value} onChange={onChange} />
        </div>
    )
}

export default InputComponent