/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const handleisApprove = (row) => {
  row.isApproved = !row.isApproved;
};

const columns = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'image',
    headerName: 'Image',
    width: 180,
    editable: false,
    renderCell: (params) =>
      params.row.image && (
        <img style={{ width: '150px', height: '150px' }} src={params.row.image} alt="opportunity" />
      )
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    editable: false
  },
  {
    field: 'oppType',
    headerName: 'Opportunity Type',
    width: 180,
    editable: false
  },
  {
    field: 'userType',
    headerName: 'User Type',
    width: 150,
    editable: false
  },
  {
    field: 'deadline',
    headerName: 'deadline',
    width: 170,
    editable: false
  },
  // {
  //   field: 'provName',
  //   headerName: 'Provider Name',
  //   width: 180,
  //   editable: false
  // },
  {
    field: 'isApproved',
    headerName: 'Status',
    width: 110,
    editable: false,
    renderCell: (params) =>
      params.row.isApproved ? (
        <Typography color="green">Posted</Typography>
      ) : (
        <Typography color="red">Hiden</Typography>
      )
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 110,
    editable: false,
    renderCell: (params) =>
      !params.row.isApproved ? (
        <Button variant="outlined" onClick={() => handleisApprove(params.row)}>
          Approve
        </Button>
      ) : (
        <Button variant="outlined" color="error" onClick={() => handleisApprove(params.row)}>
          Hide
        </Button>
      )
  }
  //   {
  //     field: 'action',
  //     headerName: 'Action',
  //     width: 110,
  //     editable: false,
  //     renderCell: (params) => (
  //       <Button variant="outlined" onClick={() => handleApproveStatusChange(params.row)}>
  //         Approve
  //       </Button>
  //     )
  //   }
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

export default function Opportunity() {
  const [opps, setOpps] = useState([]);

  const getOpp = (data) => ({
    id: data._id,
    name: data.name,
    image: data.image,
    oppType: data.oppType,
    userType: data.userType,
    deadline: data.deadline_date,
    isApproved: data.isApproved
  });

  const toOpps = (dataArr) => {
    const arr = [];

    dataArr.map((i) => {
      arr.push(getOpp(i));
      return false;
    });
    return arr;
  };

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8000/api/admin/opportunities`)
        .then((response) => {
          setOpps(toOpps(response.data));
        })
        .catch((e) => console.error(e));
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } // };
  }, []);

  console.log(opps);

  return (
    <Page title="Opportunity">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Opportunity
          </Typography>

          <Button
            variant="contained"
            to="new"
            component={RouterLink}
            startIcon={<Icon icon={plusFill} />}
          >
            New Opportunity
          </Button>
        </Stack>

        <Card>
          <DataGrid
            rows={opps}
            columns={columns}
            rowHeight={160}
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
