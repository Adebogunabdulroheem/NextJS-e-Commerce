import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
    Link,
  } from '@material-ui/core'; 
  import { useRouter } from 'next/router';
  import NextLink from 'next/link';
  import React, { useContext, useEffect } from 'react';
  import Layout from '../components/Layout';
  import { Store } from '../utils/Store';
  import useStyles from '../utils/styles';
  import Cookies from 'js-cookie';
  import { Controller, useForm } from 'react-hook-form';
  import CheckoutWizard from '../components/checkoutWizard';
  
//   import { getError } from '../utils/error';
  
  export default function Shipping() {
    const {
      handleSubmit,
      control,
      formState: { errors },
      setValue
    } = useForm();
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(Store);
    const { userInfo, cart:{ shippingAddress }, } = state;
    useEffect(() => {
      if (!userInfo) {
        router.push('/login?redirect=/shipping');
      }
      setValue('fullName', shippingAddress.fullName);
      setValue('address', shippingAddress.address);
      setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);
      setValue('counrty', shippingAddress.counrty);
    }, []);
  
    const classes = useStyles();
    const submitHandler = ({ fullName, address, city, postalCode, counrty }) => {
      
        dispatch({ 
            type: 'SAVE_SHIPPING_ADDRESS', 
            payload: { fullName,  address, city, postalCode, counrty } 
        });
        Cookies.set('shippingAddress', { 
            fullName,  
            address, 
            city, 
            postalCode, 
            counrty 
        });
        router.push('/payment');
     
    };
    return (
      <Layout title="Shipping">
        <CheckoutWizard ativeStep={1} />
        <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
          <Typography component="h1" variant="h1">
            Shipping Address
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    error={Boolean(errors.fullName)}
                    helperText={
                      errors.fullName
                        ? errors.fullName.type === 'minLength'
                          ? 'Full Name should not be less than 3'
                          : 'Full Name is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="address"
                    label="Address"
                    error={Boolean(errors.address)}
                    helperText={
                      errors.address
                        ? errors.address.type === 'minLength'
                          ? 'Address should not be less than 2'
                          : 'Address is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="city"
                    label="City"
                    error={Boolean(errors.city)}
                    helperText={
                      errors.city
                        ? errors.city.type === 'minLength'
                          ? 'City should not be less than 3'
                          : 'City is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    error={Boolean(errors.postalCode)}
                    helperText={
                      errors.postalCode
                        ? errors.postalCode.type === 'minLength'
                          ? 'Postal Code should not be less than 3'
                          : 'Postal Code is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="counrty"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="counrty"
                    label="Counrty"
                    error={Boolean(errors.counrty)}
                    helperText={
                      errors.counrty
                        ? errors.counrty.type === 'minLength'
                          ? 'Counrty should not be less than 3'
                          : 'Counrty is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth color="primary">
                Continue
              </Button>
            </ListItem>
           
          </List>
        </form>
      </Layout>
    );
  }