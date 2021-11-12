import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';
import '../gerenciador-tarefas.css';

function CadastrarTarefa(){
    return (
        <div class="jumbotron">
            <h3 className="text-center">Cadastar</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Tarefa</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Digite a tarefa"
                    minLenght="5"
                    maxLenght="100"
                    required />
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
        </div>
    );
}

export default CadastrarTarefa