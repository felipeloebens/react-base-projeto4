import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';


describe('teste do componente de atualização de tarefas', () => {

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefa id={id} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});