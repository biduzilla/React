import { useState } from 'react';
import Button from '../button';
import InputText from '../inputText';
import ListaSuspensa from '../listaSuspensa';
import './Form.css';

const Form = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data science',
        'Design',
        'Mobile',
        'Inovação',
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    };

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador!
                </h2>
                <InputText
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    aoAlterado={value => setNome(value)}
                />

                <InputText
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    aoAlterado={value => setCargo(value)}
                />

                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço de Imagem"
                    aoAlterado={value => setImagem(value)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;