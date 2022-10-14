import './InputText.css'

const InputText = (props) => {
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;