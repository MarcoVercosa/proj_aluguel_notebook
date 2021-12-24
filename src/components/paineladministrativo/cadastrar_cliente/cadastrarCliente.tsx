import TextField from '@mui/material/TextField';
import * as React from 'react';
import "./cadastrarCliente.css"


function CadastrarCliente() {

    return (
        <article className="cadastrarcliente_article">
            <h1>Cadastrar cliente</h1>
            <div className="cadastrarcliente_article_div">
                <div className="cadastrarcliente_div_nome_completo cadastrarcliente_article_campos" >
                    <TextField id="input-with-sx" size="small" label="Nome completo" type="text" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_email cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Email" type="email" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_cpf cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="CPF" type="number" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_cpf cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Data nascimento" type="date" InputLabelProps={{ shrink: true }} value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_cep cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="CEP/CNPJ" type="" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_endereco cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Endereço" type="text" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_enderecocomplemento cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Número" type="number" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_enderecocomplemento cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Complemento" type="text" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_celularum cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Celular 1" type="tel" value={""} style={{ width: "100%" }} />
                </div>
                <div className="cadastrarcliente_div_celulardois cadastrarcliente_article_campos">
                    <TextField id="input-with-sx" size="small" label="Celular 2" type="tel" value={""} style={{ width: "100%" }} />
                </div>

            </div>
        </article>

    )
}

export default CadastrarCliente
