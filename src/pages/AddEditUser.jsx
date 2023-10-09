import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button,FormHelperText} from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/actions/usersAction';
import { toast} from 'react-toastify';

const Container = styled(FormGroup)`
    width:50%;
    margin:10% auto 0 auto; 
    & > div {
      margin-top: 25px;
    }
`

const defaultValue = {
  name: '',
  id:'',
  username: '',
  email: '',
  phone: ''
}

const initialErrors = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

function AddEditUser() {
  const [user, setUser] = useState(defaultValue);
  const [errors, setErrors] = useState(initialErrors);
  const [editMode,setEditMode] = useState(false);
  const {name,username,email,phone} = user;
  const dispatch = useDispatch();
  const {id} = useParams();
  const users = useSelector(state=>state.data.users);

  useEffect(()=>{
    if(id){
      setEditMode(true);
      const singleUser = users.find((item)=>item.id===Number(id));
      setUser({...singleUser});
    }else{
      setEditMode(false);
      setUser(defaultValue);
    }
  },[id])

  const validateForm = () => {
    const newErrors = { ...initialErrors };
    let isValid = true;

    if (!user.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!user.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!user.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!user.phone) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const addUserDetails = () => {
    if (validateForm()) {
      if(!editMode){
        dispatch(createUserStart(user));
        toast.success("User Added Successfully");
        navigate('/');
      }else{
        dispatch(updateUserStart({id,user}));
        setEditMode(false);
        toast.success("User Updated Successfully");
        navigate('/');
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4">{editMode ? 'Update User Details' : 'Add User'} </Typography>
      <FormControl error={!!errors.name}>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          id="my-input"
          value={name || ''}
        />
        <FormHelperText>{errors.name}</FormHelperText>
      </FormControl>

      <FormControl error={!!errors.username}>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          id="my-input"
          value={username||''}
        />
        <FormHelperText>{errors.username}</FormHelperText>
      </FormControl>

      <FormControl error={!!errors.email}>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          id="my-input"
          value={email||''}
        />
        <FormHelperText>{errors.email}</FormHelperText>
      </FormControl>

      <FormControl error={!!errors.phone}>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          id="my-input"
          value={phone||''}
        />
        <FormHelperText>{errors.phone}</FormHelperText>
      </FormControl>
      <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>{editMode ? 'Edit User' : 'Add User'} </Button>
            </FormControl>
    </Container>
  )
}

export default AddEditUser