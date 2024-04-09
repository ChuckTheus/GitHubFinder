import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    SearchString: '',
    grid: [
        {
            Name: 'GitHubFinder',
            Owner: 'Matheus Freire',
            Description: 'Buscador de repositórios'
        },
        {
            Name: 'repoDaRebeca',
            Owner: 'Rebeca Veras',
            Description: 'Teste TecnoRise'
        },
        {
            Name: 'ASDASDASD',
            Owner: 'ASD ASD',
            Description: 'ADASD de ASDASD'
        },
    ],
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        fetchRepositories: (state, action) => {
            state.grid = action.payload;
        }
    },
});

export const { fetchRepositories } = gridSlice.actions;

export default gridSlice.reducer;