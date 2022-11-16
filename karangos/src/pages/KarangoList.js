import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import api from '../lib/api'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const columns = [
    { 
      field: 'id',        // Campo nos dados retornados pela API
      headerName: 'Cód.',
      type: 'number',     // Coluna fica alinhada à direita
      width: 90 
    },
    {
      field: 'marca',
      headerName: 'Marca/Modelo',
      width: 300,
      // Concatenando as informações de marca e modelo numa mesma coluna
      valueGetter: params => params.row?.marca + ' ' + params.row?.modelo
    },
    {
      field: 'ano_fabricacao',
      headerName: 'Ano Fabr.',
      type: 'number',
      width: 110
    },
    {
      field: 'cor',
      headerName: 'Cor',
      headerAlign: 'center',    // Alinhamento do cabeçalho
      align: 'center',          // Alinhamento da célula de dados
      width: 110
    },
    {
      field: 'placa',
      headerName: 'Placa',
      headerAlign: 'center',    // Alinhamento do cabeçalho
      align: 'center',          // Alinhamento da célula de dados
      width: 110
    },
    {
      field: 'importado',
      headerName: 'Importado',
      headerAlign: 'center',    // Alinhamento do cabeçalho
      align: 'center',          // Alinhamento da célula de dados
      width: 110,
      renderCell: params => (
        parseInt(params.row?.importado) ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />
      )
    },
    {
      field: 'preco',
      headerName: 'Preço Venda',
      type: 'number',
      width: 120,
      valueGetter: params => (
        // Formatando o preço para números conforme usados no Brasil (pt-BR)
        // e em moeda real brasilero (BRL)
        Number(params.row?.preco).toLocaleString('pt-BR', { 
          style: 'currency', 
          currency: 'BRL' 
        })
      )
    },
    
    

  ];
    
export default function KarangoList() {

    const [state, setState] = React.useState({
      karangos: []  // Vetor vazio
    })
    const { karangos } = state

    // useEffect() com vetor de dependências vazio para ser executado
    // apenas uma vez no momento da montagem do componente
    React.useEffect(() => {
      // Buscar os dados da API remota
      fetchData()
    }, [])

    async function fetchData() {
      try {
        const response = await api.get('karangos')
        // Armazenar o response em um variável de estado
        console.log({RESPONSE: response.data})
        setState({...state, karangos: response.data})
      }
      catch (error) {
        alert('ERRO: ' + error.message)
      }
    }

    return (
      <>
        <h1>Listagem de Karangos</h1>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={karangos}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            autoHeight
            disableSelectionOnClick
          />
        </Box>
      </>
    )
}