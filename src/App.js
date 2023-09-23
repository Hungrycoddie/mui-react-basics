import { Button, Typography, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";



const Bluebutton = styled(Button) (({ theme}) => ({
  backgroundColor: "skyblue",
  color:'#888',
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}));



function App() {
  return (
    <div>
      <Button variant="text">Text</Button>

      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small">
        Settings
      </Button>

      <Button
        startIcon={<Add/>}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>

      <Button
        variant="outlined"
        disabled>
        Outlined
      </Button>

      <Typography variant="h1" component="p">
        This is a p tag in h1 style
      </Typography>

      <Bluebutton>bluebutton</Bluebutton>
      <Bluebutton>Hello </Bluebutton>
      <Bluebutton>Submit</Bluebutton>
      <Bluebutton>click me</Bluebutton>

    </div>
  );
}

export default App;
