import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import "./alugarDispositivo.css"


function AlugarDispositivo() {

    let habilitaCampoPesquisarCliente = true

    function DateNow() {
        let dateNow = new Date()
        let day = dateNow.getDate()
        let month = dateNow.getMonth() + 1
        let year = dateNow.getFullYear()
        let data = `${year}-${month}-${day}`
        return data
    }

    return (
        <>
            <article className="alugardispositivo_article">
                <div className="alugardispositivo_article_div_titulo">
                    ALUGAR DISPOSITIVO
                </div>

                <div className="alugardispositivo_article_div_busca">
                    <div className="alugardispositivo_article_div_busca_div">
                        <TextField id="input-with-sx" size="small" label="CPF/CNPJ" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_buscar_botao">
                        <Button size="large" style={{ backgroundColor: "rgb(65, 65, 65)", color: "white", }}>
                            BUSCAR
                        </Button>
                    </div>
                </div>
            </article>
            <article className="alugardispositivo_article_dados">
                <div className="alugardispositivo_article_alterar_div">
                    <div className="alugardispositivo_div_nome_completo alugardispositivo_article_campos_altera" >
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Nome completo" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_email alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Email" type="email" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_cpf alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="CPF" type="number" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_cpf alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Data nascimento" type="date" InputLabelProps={{ shrink: true }} value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_cep alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="CEP/CNPJ" type="" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_endereco alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Endereço" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_enderecocomplemento alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Número" type="number" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_enderecocomplemento alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Complemento" type="text" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_celularum alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Celular 1" type="tel" value={""} style={{ width: "100%" }} />
                    </div>
                    <div className="alugardispositivo_div_celulardois alugardispositivo_article_campos_altera">
                        <TextField disabled={habilitaCampoPesquisarCliente} id="input-with-sx" size="small" label="Celular 2" type="tel" value={""} style={{ width: "100%" }} />
                    </div>



                    <div className="alugardispositivo_div_dispositivo alugardispositivo_article_campos_altera">
                        <InputLabel id="demo-simple-select-label">Dispositivo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={"age"}
                            label="Age"
                        // onChange={"handleChange"}
                        >
                            <MenuItem value={"DESKTOP"}>DESKTOP</MenuItem>
                            <MenuItem value={"NOTEBOOK"}>NOTEBOOK</MenuItem>
                            <MenuItem value={"MONITOR"}>MONITOR</MenuItem>
                            <MenuItem value={"MOUSE"}>MOUSE</MenuItem>
                            <MenuItem value={"TECLADO"}>TECLADO</MenuItem>
                        </Select>
                    </div>
                    <div className="alugardispositivo_div_modelo alugardispositivo_article_campos_altera">
                        <InputLabel id="demo-simple-select-label">Dispositivo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={"age"}
                            label="Age"
                        // onChange={"handleChange"}
                        >
                            <MenuItem value={"DESKTOP"}>HP</MenuItem>
                            <MenuItem value={"NOTEBOOK"}>LENOVO</MenuItem>
                            <MenuItem value={"MONITOR"}>DELL</MenuItem>
                            <MenuItem value={"MOUSE"}>IBM</MenuItem>
                            <MenuItem value={"TECLADO"}>POSITIVO</MenuItem>
                        </Select>
                    </div>
                    <div className="alugardispositivo_div_datanicio alugardispositivo_article_campos_altera">
                        <label >Selecione a data do inicio do aluguel:</label>
                        <input type="date" id="inicio" name="iniciodate" min={DateNow()} />
                    </div>
                    <div className="alugardispositivo_div_datafim alugardispositivo_article_campos_altera">
                        <label >Selecione a data do fim do aluguel</label>
                        <input type="date" id="fim" name="fimdate" min={DateNow()} />
                    </div>

                </div>

            </article>
        </>
    )
}

export default AlugarDispositivo