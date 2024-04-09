import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchRepositories } from '../../redux/GridSlice/gridSlice';
import { fetchRepositoriesFromAPI } from '../../Service/gridService';

function InputSearch() {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    
    const handleInputChange = (e) =>{
        setSearchInput(e.target.value);
    }

    const searchConfirmation = async (e) => {
        e.preventDefault();
        try {
            const repositories = await fetchRepositoriesFromAPI();
            dispatch(fetchRepositories(repositories));
        } catch (error) {
        }
    };

    return (
      <form onSubmit={searchConfirmation}>
        <input
          type="text"
          placeholder="Digite para pesquisar"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit">
          <FaSearch /> Pesquisar
        </button>
      </form>
    );
  }
  
  export default InputSearch;