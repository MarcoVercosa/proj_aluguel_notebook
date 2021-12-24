//Usuando com tookit
import { createSlice } from "@reduxjs/toolkit";

interface IselectMenu {
    meusDados: boolean;
    cadastrarCliente: boolean;
    alugarDispositivo: boolean;
    receberDispositivo: boolean;
    pesquisarAluguel: boolean;
    cadastrarDispEstoque: boolean;
    pesquisarDispEstoque: boolean;
    relatorios: boolean
}

const selectMenu: IselectMenu = {
    meusDados: false,
    cadastrarCliente: true,
    alugarDispositivo: false,
    receberDispositivo: false,
    pesquisarAluguel: false,
    cadastrarDispEstoque: false,
    pesquisarDispEstoque: false,
    relatorios: false
}

const changeMenu = createSlice({
    name: "selectMenuAction",
    initialState: {
        selectMenu
    },
    reducers: {

        SelectMenuReducer: (state, { payload }): any => {
            console.log(payload)
            return { selectMenu: payload }
        }
    },

})


export const { SelectMenuReducer } = changeMenu.actions

export default changeMenu.reducer
//exortado para a store