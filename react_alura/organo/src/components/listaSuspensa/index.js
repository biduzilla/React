import './style.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
                <select>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </label>
        </div>
    );
}

export default ListaSuspensa;