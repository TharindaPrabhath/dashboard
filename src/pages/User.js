import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const handleApproveStatusChange = (row) => {
  row.isApproved = !row.isApproved;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: false
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: false
  },
  {
    field: 'isApproved',
    headerName: 'Status',
    width: 110,
    editable: false,
    renderCell: (params) =>
      params.row.isApproved ? (
        <Typography color="green">approved</Typography>
      ) : (
        <Typography color="red">not approved</Typography>
      )
  },
  {
    field: 'userType',
    headerName: 'User Type',
    width: 170,
    editable: false
  },
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   width: 110,
  //   editable: false,
  //   renderCell: (params) =>
  //     !params.row.isApproved ? (
  //       <Button variant="outlined" onClick={() => handleApprove(params.row)}>
  //         Approve
  //       </Button>
  //     ) : (
  //       <Button variant="outlined" color="error" onClick={() => handleDisApprove(params.row)}>
  //         Reject
  //       </Button>
  //     )
  // }
  {
    field: 'action',
    headerName: 'Action',
    width: 110,
    editable: false,
    renderCell: (params) => (
      <Button variant="outlined" onClick={() => handleApproveStatusChange(params.row)}>
        Change
      </Button>
    )
  }
];

const rows = [
  {
    id: 1,
    name: 'Snow',
    email: 'Jon',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 2,
    name: 'Lannister',
    email: 'Cersei',
    gender: 'Male',
    isApproved: false,
    userType: 'School Leaver'
  },
  {
    id: 3,
    name: 'Lannister',
    email: 'Jaime',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 4,
    name: 'Stark',
    email: 'Arya',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 5,
    name: 'Targaryen',
    email: 'Daenerys',
    gender: 'Male',
    isApproved: false,
    userType: 'School Leaver'
  },
  {
    id: 6,
    name: 'Melisandre',
    email: 'sample',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 7,
    name: 'Clifford',
    email: 'Ferrara',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 8,
    name: 'Frances',
    email: 'Rossini',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  },
  {
    id: 9,
    name: 'Roxie',
    email: 'Harvey',
    gender: 'Male',
    isApproved: true,
    userType: 'School Leaver'
  }
];

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>

          <Button
            variant="contained"
            to="new"
            component={RouterLink}
            startIcon={<Icon icon={plusFill} />}
          >
            New User
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
