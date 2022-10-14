import Button from '../button';
import InputText from '../inputText';
import ListaSuspensa from '../listaSuspensa';
import './Form.css';

const Form = () => {
    
    const times = [
        'Programação',
        'Front-end',
        'Data science',
        'Design',
        'Mobile',
        'Inovação',
    ];

    const aoSalvar = (event) =>{
        event.preventDefault();
        console.log('Form submit');
    };

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador!
                </h2>
                <InputText obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <InputText obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço de Imagem" />
                <ListaSuspensa obrigatorio={true} itens={times} label="Times"/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;