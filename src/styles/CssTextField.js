import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const CssTextField = styled(TextField)(({  }) => ({
    '& .MuiOutlinedInput-root': {
        '&:hover, & .MuiOutlinedInput-input,': {
            color: 'white'
        },
        '& fieldset': {
        borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
            borderWidth: 4
        },
        '&.Mui-focused fieldset': {
        borderColor: 'white',
        },
    },
    '& .MuiFilledInput-input':{
        color:'white'
    }
}));

export default CssTextField;