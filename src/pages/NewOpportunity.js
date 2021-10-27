/* eslint-disable prettier/prettier */

// material
import {
  Card,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  Container,
  Typography,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// formik
import { useFormik, Form, FormikProvider } from 'formik';

// yup
import { boolean, date, object, string } from 'yup';

// components
import Page from '../components/Page';

// constansts
import { USER_TYPES, OPP_TYPES, SUBSCRIPTION_TYPES, GENDERS } from '../constants/constants';

// ----------------------------------------------------------------------

const validationSchema = object().shape({
  name: string().required('Required'),
  desc: string().required('Required'),
  image: string().required('Required'),
  applyLink: string().required('Required'),
  eligibility: string().required('Required'),
  deadline_date: date().when('hasDeadline', {
    is: true,
    then: date().required('Required')
  }),
  app_process: string().optional(),
  userType: string().required('Required'),
  oppType: string().required('Required'),
  location: string().optional(),
  isApproved: boolean().required('Required'),
  hasDeadline: boolean().required('Required')
});

export default function NewOpportunity() {
  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      image: '',
      applyLink: '',
      eligibility: '',
      app_process: '',
      userType: '',
      oppType: '',
      location: '',
      deadline_date: '',
      isApproved: false,
      hasDeadline: false
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setSubmitting(false);
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setSubmitting } =
    formik;

  return (
    <Page title="New Opportunity">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            New Opportunity
          </Typography>
        </Stack>

        <Card>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3} padding={2}>
                <TextField
                  fullWidth
                  label="Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  label="image"
                  {...getFieldProps('image')}
                  error={Boolean(touched.image && errors.image)}
                  helperText={touched.image && errors.image}
                />
                <TextField
                  fullWidth
                  label="Location"
                  {...getFieldProps('location')}
                  error={Boolean(touched.location && errors.location)}
                  helperText={touched.location && errors.location}
                />
                <TextField
                  fullWidth
                  label="Apply Link"
                  {...getFieldProps('applyLink')}
                  error={Boolean(touched.applyLink && errors.applyLink)}
                  helperText={touched.applyLink && errors.applyLink}
                />
                <TextField
                  fullWidth
                  label="App Process"
                  {...getFieldProps('app_process')}
                  error={Boolean(touched.app_process && errors.app_process)}
                  helperText={touched.app_process && errors.app_process}
                />
                <TextField
                  fullWidth
                  label="Eligibility"
                  {...getFieldProps('eligibility')}
                  error={Boolean(touched.eligibility && errors.eligibility)}
                  helperText={touched.eligibility && errors.eligibility}
                />
                <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox {...getFieldProps('hasDeadline')} checked={values.hasDeadline} />
                    }
                    label="Has deadline"
                  />

                  {values.hasDeadline && (
                    <TextField
                      fullWidth
                      type="date"
                      {...getFieldProps('deadline_date')}
                      error={Boolean(touched.deadline_date && errors.deadline_date)}
                      helperText={touched.deadline_date && errors.deadline_date}
                    />
                  )}
                </Stack>
                <FormControl>
                  <InputLabel id="opp-type-label">Opportunity Type</InputLabel>
                  <Select
                    id="opp-type-label"
                    fullWidth
                    label="Opportunity Type"
                    value={values.oppType}
                    {...getFieldProps('oppType')}
                    error={Boolean(touched.oppType && errors.oppType)}
                    helperText={touched.oppType && errors.oppType}
                  >
                    {OPP_TYPES.map((type, i) => (
                      <MenuItem key={i} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="user-type-label">User Type</InputLabel>
                  <Select
                    id="user-type-label"
                    fullWidth
                    label="User Type"
                    value={values.userType}
                    {...getFieldProps('userType')}
                    error={Boolean(touched.userType && errors.userType)}
                    helperText={touched.userType && errors.userType}
                  >
                    {USER_TYPES.map((type, i) => (
                      <MenuItem key={i} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Benefits"
                  multiline
                  rows={5}
                  {...getFieldProps('benefits')}
                  error={Boolean(touched.benefits && errors.benefits)}
                  helperText={touched.benefits && errors.benefits}
                />
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={5}
                  {...getFieldProps('desc')}
                  error={Boolean(touched.desc && errors.desc)}
                  helperText={touched.desc && errors.desc}
                />
              </Stack>

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Create
              </LoadingButton>
            </Form>
          </FormikProvider>
        </Card>
      </Container>
    </Page>
  );
}
