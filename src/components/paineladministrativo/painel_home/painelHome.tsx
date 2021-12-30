import React, { useState } from 'react';
import "./painelHome.css"

import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import GridViewIcon from '@mui/icons-material/GridView';

import MeusDados from "../pesquisar_cliente/pesquisarCliente"
import CadastrarCliente from "../cadastrar_cliente/cadastrarCliente"
import AlugarDispositivo from "../alugar_dispositivo/alugarDispositivo"
import ReceberDispositivo from "../receber_dispositivo/receberDispositivo"
import PesquisarAluguel from "../pesquisar_aluguel/pesquisarAluguel"
import CadastrarDispEstoque from "../cadastrar disp_estoque/cadastrarDispEstoque"
import PesquisarDispEstoque from "../pesquisar_disp_estoque/pesquisarDispEstoque"
import Relatorios from "../relatorios/relatorios"

//redux

import { useDispatch, useSelector } from "react-redux"
import { SelectMenuReducer } from "../../../store/reducers/redux_changeMenu.reducers"
import { increment, decrement } from "../../../store/reducers/redux_counter.reducers"

function PainelAdministrativo() {

    const dispatch = useDispatch()

    const selectMenu: any = useSelector((state: any) => state.SelectMenuReducer.selectMenu)

    function AtivaComponenteMenu(dados: string) {
        let armazena: object = {}

        //faz um loop no objeto selectMenu e altera primeiramente todos para false
        for (let temp in selectMenu) {
            armazena = { ...armazena, [temp]: false }
        }
        //em seguida, altera para true somente o campo q veio no parâmetro da função
        armazena = { ...armazena, [dados]: true }

        //solicita  ao reducer a alteração 
        dispatch(SelectMenuReducer(armazena))
    }

    return (
        <menu className="menu_painel_adm" >
            <div className="menu_painel_adm_div">
                <div className="menu_painel_adm_div_select"

                    onClick={(dados) => AtivaComponenteMenu("meusDados")}
                >
                    <span><PersonSearchIcon style={{ fontSize: "50px", color: selectMenu.meusDados ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.meusDados ? "rgb(247, 142, 5)" : "white" }}>PESQUISAR CLIENTE</p>

                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("cadastrarCliente")}
                >
                    <span><HowToRegIcon style={{ fontSize: "50px", color: selectMenu.cadastrarCliente ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.cadastrarCliente ? "rgb(247, 142, 5)" : "white" }}>CADASTRAR CLIENTE</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("alugarDispositivo")}
                >
                    <span><ChangeCircleIcon style={{ fontSize: "50px", color: selectMenu.alugarDispositivo ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.alugarDispositivo ? "rgb(247, 142, 5)" : "white" }}>ALUGAR DISPOSITIVO</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("receberDispositivo")}
                >
                    <span><CallReceivedIcon style={{ fontSize: "50px", color: selectMenu.receberDispositivo ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.receberDispositivo ? "rgb(247, 142, 5)" : "white" }} >RECEBER DISPOSITIVO</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("pesquisarAluguel")}
                >
                    <span><YoutubeSearchedForIcon style={{ fontSize: "50px", color: selectMenu.pesquisarAluguel ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.pesquisarAluguel ? "rgb(247, 142, 5)" : "white" }}>PESQUISAR ALUGUEL</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("cadastrarDispEstoque")}
                >
                    <span><AppRegistrationIcon style={{ fontSize: "50px", color: selectMenu.cadastrarDispEstoque ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.cadastrarDispEstoque ? "rgb(247, 142, 5)" : "white" }}>CADASTRAR DISP. ESTOQUE</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("pesquisarDispEstoque")}
                >
                    <span><ScreenSearchDesktopIcon style={{ fontSize: "50px", color: selectMenu.pesquisarDispEstoque ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.pesquisarDispEstoque ? "rgb(247, 142, 5)" : "white" }}>PESQUISAR DISP. ESTOQUE</p>
                </div>
                <div className="menu_painel_adm_div_select"
                    onClick={(dados) => AtivaComponenteMenu("relatorios")}
                >
                    <span><GridViewIcon style={{ fontSize: "50px", color: selectMenu.relatorios ? "rgb(247, 142, 5)" : "white" }} /></span>
                    <p style={{ color: selectMenu.relatorios ? "rgb(247, 142, 5)" : "white" }}>RELATÓRIOS</p>
                </div>
            </div>

            {selectMenu.meusDados &&
                <div className="painel_lateral_div">
                    <MeusDados />
                </div>
            }
            {selectMenu.cadastrarCliente &&
                <div className="painel_lateral_div">
                    <CadastrarCliente />
                </div>
            }
            {selectMenu.alugarDispositivo &&
                <div className="painel_lateral_div">
                    <AlugarDispositivo />
                </div>
            }
            {selectMenu.receberDispositivo &&
                <div className="painel_lateral_div">
                    <ReceberDispositivo />
                </div>
            }
            {selectMenu.pesquisarAluguel &&
                <div className="painel_lateral_div">
                    <PesquisarAluguel />
                </div>
            }
            {selectMenu.cadastrarDispEstoque &&
                <div className="painel_lateral_div">
                    <CadastrarDispEstoque />
                </div>
            }
            {selectMenu.pesquisarDispEstoque &&
                <div className="painel_lateral_div">
                    <PesquisarDispEstoque />
                </div>
            }
            {selectMenu.relatorios &&
                <div className="painel_lateral_div">
                    <Relatorios />
                </div>
            }


        </menu>
    );
}

export default PainelAdministrativo;
