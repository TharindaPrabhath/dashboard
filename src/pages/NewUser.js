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
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// formik
import { useFormik, Form, FormikProvider } from 'formik';

// yup
import { boolean, date, object, string } from 'yup';

// components
import Page from '../components/Page';

// constansts
import { USER_TYPES, SUBSCRIPTION_TYPES, GENDERS } from '../constants/constants';

// ----------------------------------------------------------------------

const validationSchema = object().shape({
  name: string().required('Required'),
  email: string().email().required('Required'),
  phoneNo: string().required('Required').min(10, 'Invalid Phone'),
  gender: string().required('Required'),
  DOB: date().optional(),
  address: string().optional(),
  userType: string().required('Required'),
  subscriptionType: string().required('Required'),
  eduQualification: string().optional(),
  isApproved: boolean().required('Required')
});

export default function NewUser() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNo: '',
      gender: '',
      DOB: '',
      address: '',
      userType: '',
      subscriptionType: '',
      eduQualification: '',
      isApproved: false
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
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            New User
          </Typography>
        </Stack>

        <Card>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3} padding={2}>
                <TextField
                  fullWidth
                  // autoComplete="username"
                  // type=""
                  label="Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  // autoComplete="username"
                  type="email"
                  label="Email"
                  {...getFieldProps('email')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  {...getFieldProps('phoneNo')}
                  error={Boolean(touched.phoneNo && errors.phoneNo)}
                  helperText={touched.phoneNo && errors.phoneNo}
                />
                <FormControl>
                  <InputLabel id="gender-type-label">Gender</InputLabel>
                  <Select
                    id="gender-type-label"
                    fullWidth
                    label="Gender"
                    value={values.gender}
                    {...getFieldProps('gender')}
                    error={Boolean(touched.gender && errors.gender)}
                    helperText={touched.gender && errors.gender}
                  >
                    {GENDERS.map((gender, i) => (
                      <MenuItem key={i} value={gender}>
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  type="date"
                  {...getFieldProps('DOB')}
                  error={Boolean(touched.DOB && errors.DOB)}
                  helperText={touched.DOB && errors.DOB}
                />

                <TextField
                  fullWidth
                  label="Address"
                  multiline
                  rows={5}
                  {...getFieldProps('address')}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />
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
                <FormControl>
                  <InputLabel id="subscription-type-label">Subscription Type</InputLabel>
                  <Select
                    id="subscription-type-label"
                    fullWidth
                    label="User Type"
                    value={values.subscriptionType}
                    {...getFieldProps('subscriptionType')}
                    error={Boolean(touched.subscriptionType && errors.subscriptionType)}
                    helperText={touched.subscriptionType && errors.subscriptionType}
                  >
                    {SUBSCRIPTION_TYPES.map((type, i) => (
                      <MenuItem key={i} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Education Qualifications"
                  multiline
                  rows={5}
                  {...getFieldProps('eduQualification')}
                  error={Boolean(touched.eduQualification && errors.eduQualification)}
                  helperText={touched.eduQualification && errors.eduQualification}
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
