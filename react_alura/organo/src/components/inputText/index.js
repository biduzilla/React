import './InputText.css'

const InputText = (props) => {
    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;