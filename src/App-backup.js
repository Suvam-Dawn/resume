import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightGreen from '@material-ui/core/colors/lightGreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeType: 'dark',
    };
  }

  changeTheme() {
    if (this.state.themeType === 'dark') {
      this.setState({themeType: 'light'});
    } else {
      this.setState({themeType: 'dark'});
    }
  }
  render() {
    let theme = createMuiTheme({
      palette: {
        primary: {
          light: '#0a0100',
          main: '#0a0100',
          dark: '#0a0100',
        },
        secondary: {
          light: blueGrey[300],
          main: blueGrey[500],
          dark: blueGrey[700],
        },
        type: this.state.themeType,
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Typography>Hi there!</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.changeTheme();
          }}
        >
          Change
        </Button>
      </MuiThemeProvider>
    );
  }
}
export default App;
