import InputText from '../inputText';
import './Form.css';

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>
                    Preencha os dados para criar o card do colaborador!
                </h2>
                <InputText label="Nome" placeholder="Digite seu Nome" />
                <InputText label="Cargo" placeholder="Digite seu Cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço de Imagem" />
            </form>
        </section>
    );
}

export default Form;