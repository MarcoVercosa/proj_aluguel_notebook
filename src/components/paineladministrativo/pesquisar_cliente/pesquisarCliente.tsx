import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import "./pesquisarCliente.css"


function pesquisacliente() {

    let habilitaCampoPesquisarCliente = true

    return (
        <>
            <article className="pesquisacliente_article">
                <div className="pesquisacliente_article_div_titulo">
                    PESQUISAR CLIENTE
                </div>

                <div className="pesquisacliente_article_div">
                    <div className="pesquisacliente_div_porcpf pesquisacliente_article_campos_pesquisa" >
                        <TextField id="input-with-sx" size="small" label="CPF/CNPJ" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_poremail pesquisacliente_article_campos_pesquisa">
                        <TextField id="input-with-sx" size="small" label="Email" type="email" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_funcional pesquisacliente_article_campos_pesquisa">
                        <TextField id="input-with-sx" size="small" label="Funcional" type="number" value={""} style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="pesquisacliente_div_buscar_botao">
                    <Button size="large" style={{ backgroundColor: "rgb(65, 65, 65)", color: "white", }}>
                        BUSCAR
                    </Button>
                </div>
            </article>
            <article className="pesquisacliente_article_alterar">
                <div className="pesquisacliente_article_alterar_div">
                    <div className="pesquisacliente_div_nome_completo pesquisacliente_article_campos_altera" >
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Nome completo" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_email pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Email" type="email" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_cpf pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="CPF" type="number" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_cpf pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Data nascimento" type="date" InputLabelProps={{ shrink: true }} value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_cep pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="CEP/CNPJ" type="" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_endereco pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Endereço" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_enderecocomplemento pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Número" type="number" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_enderecocomplemento pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Complemento" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_celularum pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Celular 1" type="tel" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="pesquisacliente_div_celulardois pesquisacliente_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Celular 2" type="tel" value={""} style={{ width: "100%" }} />
                    </div>
                    <div>
                        <FormGroup >
                            <FormControlLabel disabled={false} control={<Checkbox size="medium" checked={true} onChange={() => { alert("Clicou") }} />} label="Possui equipamento alugado ?" />
                        </FormGroup>
                    </div>
                </div>
                <div className="pesquisacliente_div_alterar_botao">
                    <Button size="large" style={{ backgroundColor: "rgb(65, 65, 65)", color: "white" }}>
                        ALTERAR
                    </Button>
                </div>
            </article>
        </>

    )
}

export default pesquisacliente