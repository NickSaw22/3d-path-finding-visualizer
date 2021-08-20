import React,  { useState, useRef } from 'react'
import {  AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { Button, Select, MenuItem, Slider, TextField } from '@material-ui/core'
import { makeStyles, withStyles,} from '@material-ui/core/styles';
import { ReactComponent as SettingsLogo } from '../assets/settings.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';



function Settings(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            background: '#1E88E5',
            border: 0,
            borderRadius: 3,
            color: 'white',
            width: '150px',
            height: '44px',
            'margin-left': '10px',
            'font-family': 'inherit',
            'font-weight': 600,
            'font-style': 'normal',
            
          },
        },
        slider: {
            marginTop: '15px',
            marginBottom: '10px',
            width: '150px',
            
        },
    }));
    const classes = useStyles();

    const muiTheme = createMuiTheme({
        overrides:{
          MuiSlider: {
            thumb:{
            color: "black",
            },
            track: {
              color: 'green'
            },
            rail: {
              color: 'black',
              
            }
          }
      },
      breakpoints:{

      }
    });

    const textBoxTheme = createMuiTheme({
        palette: {
          primary: green,
        },
    });
    return (
        <div className = "settings_container">
            <h1 id = "settings_title">Visualizer Settings</h1>
            <div id="divider"></div>
            <table>
                <tbody>
                    
                    <tr>
                        <td></td>
                        <td>
                            <SettingsLogo id = "settings_icon"/>  
                        </td>
                    </tr>
                </tbody>
        </table>
        </div>
    )
}

export default Settings
