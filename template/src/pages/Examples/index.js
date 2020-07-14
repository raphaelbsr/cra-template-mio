import React, { useState } from 'react';

import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  Tooltip,
  Container,
} from '@material-ui/core';

import { ActionDialog, FullDialog } from 'mio-library-ui';

import MUIDataTable from 'mui-datatables';

const columns = ['Nome', 'Empresa', 'Cidade', 'Estado'];

const data = [
  ['Alexandre', 'Data C', 'Ubá', 'MG'],
  ['Amarildo', 'Data C', 'Ubá', 'MG'],
  ['Edmundo', 'Data C', 'Ubá', 'MG'],
  ['Eduardo', 'Data C', 'Ubá', 'MG'],
  ['Leandro', 'Data C', 'Ubá', 'MG'],
  ['Octávio', 'Data C', 'Ubá', 'MG'],
  ['Raphael', 'Data C', 'Ubá', 'MG'],
  ['Rodrigo', 'Data C', 'Ubá', 'MG'],
  ['Thiago', 'Data C', 'Ubá', 'MG'],
];

const options = {
  filterType: 'checkbox',
};

const Examples = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <Container>
      <Box>
        <TextField
          id="outlined-basic"
          label="Nome"
          margin="normal"
          variant="outlined"
          type="number"
        />
      </Box>

      <Box>
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">
            Documento
          </InputLabel>
          <Select
            native
            value={10}
            // onChange={handleChange}
            label="Documento"
            inputProps={{
              name: 'documento',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>CPF</option>
            <option value={2}>CNPJ</option>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <br />
        <br />
        <Button variant="contained">Padrão</Button>
        <br />
        <br />
        <Tooltip title="BTN PRIMARIO" aria-label="add">
          <Button variant="contained" color="primary">
            Primário
          </Button>
        </Tooltip>
        <br />
        <br />
        <Button variant="contained" color="secondary">
          Secundário
        </Button>
      </Box>

      <Box>
        <br />
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Abrir Diálogo
        </Button>
        <ActionDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onOkClick={() => setIsOpen(false)}
          onCancelClick={() => setIsOpen(false)}
          title="Diálogo de exemplo"
        >
          Esté é um diálogo de exemplo!!!
        </ActionDialog>
      </Box>

      <Box>
        <br />
        <Button variant="contained" onClick={() => setIsOpen2(true)}>
          Abrir Diálogo Inteiro
        </Button>
        <FullDialog
          isOpen={isOpen2}
          onClose={() => setIsOpen2(false)}
          onOkClick={() => setIsOpen2(false)}
          onCancelClick={() => setIsOpen2(false)}
          title="Diálogo de exemplo"
        >
          <MUIDataTable
            title={'Datoons List'}
            data={data}
            columns={columns}
            options={options}
          />
        </FullDialog>
      </Box>

      <Box>
        <br />
        <MUIDataTable
          title={'Datoons List'}
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
    </Container>
  );
};

export default Examples;
