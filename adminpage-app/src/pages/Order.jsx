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
import { Badge, Divider, Stack } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
export const Order =()=>{
let days = ['Даваа', 'Мягмар','Лхагва','Пүрэв','Баасан', 'Бямба', 'Ням']

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
              <Box sx={{ display:'flex'}}>
                {days.map((element, index)=>(
                  <Box >
                    <Box sx={{display:'flex', gap:25, borderRight:'1px solid #DFE0EB', padding:1, justifyContent:'space-between'}}>
                      <Typography key={index}>{element}</Typography>
                      <ViewInArIcon/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', height:'500px', backgroundColor:'white.light', borderRight:'1px solid #DFE0EB'}}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                        <Accordion sx={{width:'80%'}}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>Accordion 1</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                    </Box>

                  </Box>
                  
                ))}
              
                <Stack direction='row' spacing={3}  justifyContent="space-between">
                  
                </Stack>
              </Box>
            </Box>

          </Box>
    </div>
    )
}


