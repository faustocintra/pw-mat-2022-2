import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import api from '../lib/api'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmDialog from '../ui/ConfirmDialog'
import Notification from '../ui/Notification'

export default function KarangoList() {

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
    {
      field: 'editar',
      headerName: 'Editar',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params =>  (
        <IconButton aria-label='Editar'>
          <EditIcon />
        </IconButton>
      )
    },
    {
      field: 'excluir',
      headerName: 'Excluir',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params =>  (
        <IconButton aria-label='Excluir' onClick={() => handleDeleteClick(params.id)}>
          <DeleteForeverIcon color="error" />
        </IconButton>
      )
    },

  ];

  const [state, setState] = React.useState({
    karangos: [],       // Vetor vazio,
    deleteId: null,     // id do registro a ser excluído
    dialogOpen: false,  // se o diálogo de confirmação está aberto ou não,
    notifSeverity: '',  // Severidade da notificação
    notifMessage: ''    // Mensagem de notificação
  })
  const { karangos, deleteId, dialogOpen, notifSeverity, notifMessage } = state

  function handleDeleteClick(id) {
    setState({
      ...state,
      deleteId: id,
      dialogOpen: true
    })  
  }

  // useEffect() com vetor de dependências vazio para ser executado
  // apenas uma vez no momento da montagem do componente
  React.useEffect(() => {
    // Buscar os dados da API remota
    fetchData()
  }, [])

  async function fetchData(newState = state) {
    try {
      const response = await api.get('karangos')
      // Armazenar o response em um variável de estado
      setState({...newState, karangos: response.data})
    }
    catch (error) {
      setState({
        ...newState,
        notifSeverity: 'error',
        notifMessage: 'ERRO: ' + error.message
      })
    }
  }

  async function handleDialogClose(answer) {
    let newState = {...state, dialogOpen: false}
    if(answer) {
      try {
        await api.delete(`karangos/${deleteId}`)
        newState = {
          ...newState,
          notifSeverity: 'success',
          notifMessage: 'Item excluído com sucesso.'
        }
        // Recarrega os dados da grid
        fetchData(newState)
      }
      catch(error) {
        setState({
          ...newState,
          notifSeverity: 'error',
          notifMessage: 'ERRO: não foi possível excluir o item.\nMotivo: ' + error.message
        })
      }
    }
    else setState(newState)
  }

  function handleNotifClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setState({...state, notifMessage: ''})  // Fecha a notificação
  }

  return (
    <>
      <h1>Listagem de Karangos</h1>
      
      <ConfirmDialog
        title="Confirmação necessária"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        Deseja realmente excluir este item?
      </ConfirmDialog>

      <Notification 
        severity={notifSeverity}
        message={notifMessage}
        open={notifMessage}
        duration={5000}
        onClose={handleNotifClose}
      />

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          sx={{
            // Esconde os botões de editar excluir na visualização normal
            '& .MuiDataGrid-row button': {
              visibility: 'hidden'
            },
            // Retorna a visibilidade dos botões quando o mouse estiver
            // sobre a linha da grid
            '& .MuiDataGrid-row:hover button': {
              visibility: 'visible'
            }
          }}
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