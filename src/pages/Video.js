/* eslint-disable prettier/prettier */
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'videoID',
    headerName: 'Video ID',
    width: 180,
    editable: false
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    editable: false
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: false
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 220,
    editable: false,
    renderCell: (params) => <a href={params.row.link}>{params.row.link}</a>
  }
];

const rows = [
  {
    id: 1,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 2,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 3,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 4,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 5,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 6,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 7,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 8,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  },
  {
    id: 9,
    videoID: 100,
    name: 'Snow',
    type: 'Jon',
    link: 'Male'
  }
];

// ----------------------------------------------------------------------

export default function Video() {
  return (
    <Page title="Video">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Video
          </Typography>

          <Button
            variant="contained"
            to="new"
            component={RouterLink}
            startIcon={<Icon icon={plusFill} />}
          >
            New Video
          </Button>
        </Stack>

        <Card>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
          />
        </Card>
      </Container>
    </Page>
  );
}
