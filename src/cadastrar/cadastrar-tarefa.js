import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';
import '../gerenciador-tarefas.css';
import Tarefa from '../models/tarefa.model';

function CadastrarTarefa(){

    const [tarefa, setTarefa ] = useState('');
    const [formValidado, setFormValidado ] = useState(false);
    const [exibirModal, setExibirModal ] = useState(false);

    function cadastrar(event) {
      event.preventDefault();
      setFormValidado(true);
      if(event.currentTarget.checkValidity() === true){
          //obter tarefas
          const tarefasDb = localStorage['tarefas'];
          const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
          // persiste tarefas
          tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
          localStorage['tarefas'] = JSON.stringify(tarefas);
          setExibirModal(true);

      }
    }

    function handleTxtTarefa(event) {
        setTarefa(event.target.value);
    }

    function handleFecharModal(){
        navigate('./');
    }

    
    return (
        <div class="jumbotron">
            <h3 className="text-center">Cadastar</h3>
            <Form
                validated={formValidado}
                noValidate
                onSubmit={cadastrar}>
                <Form.Group>
                    <Form.Label>Tarefa</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Digite a tarefa"
                    minLenght="5"
                    maxLenght="100"
                    required 
                    value={tarefa} 
                    onChange={handleTxtTarefa}/>
                    <Form.Control.Feedback type="invalid">
                        A tarefa deve conter ao menos 5 caracteres.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="text-center">
                    <Button
                        variant="success"
                        type="submit">
                        Cadastrar
                    </Button>
                    &nbsp;
                    <A href="/" className="btn btn-light">Voltar</A>
                </Form.Group>
            </Form>
            <Modal show={exibirModal} onHide={handleFecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sucesso</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                Tarefa adicionada com sucesso!
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="success"
                    onClick={handleFecharModal}>
                    Continuar
                    </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CadastrarTarefa