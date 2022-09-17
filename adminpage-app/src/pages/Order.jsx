import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Sidebar } from '../component/Sidebar';
import { Box } from '@mui/system';
import { NavBar } from '../component/NavBar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Stack } from '@mui/material';
export const Order =()=>{
const days = [{day:'Даваа', day:'Мягмар', day:'Лхагва', day:'Пүрэв', day:'Баасан', day:'Бямба', day:'Ням'}]

    return(
        <div>
          <Box sx={{width:'100vw', display:'flex'}}>
            <Sidebar/>
            <Box  p={1} sx={{display:{xs:"block", sm:"none"}, backgroundColor:'adminColor.main', color:'#FFF'}}>
              <DehazeIcon/>
            </Box>
            <Box sx={{
              width:'100%',
            }}>
              <NavBar/>
              {days?.map((element, index)=>{
                    // console.log('aa');
                    console.log(element.day);
                  })}
              <Box>
              
                <Stack direction='row' spacing={3}  justifyContent="space-between">
                  
                </Stack>
              </Box>
            </Box>

          </Box>
    </div>
    )
}


