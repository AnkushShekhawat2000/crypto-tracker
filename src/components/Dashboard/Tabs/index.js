import {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box, createTheme, ThemeProvider} from "@mui/material"
import Grid from "../Grid"
import List from "../List"

import "./style.css"
import { Grid3x3Rounded } from '@mui/icons-material';

const TabsComponent = ({coins}) => {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette:{
        primary:{
            main:"#3a80e9",
        },
    },
  })


  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
  }


  return (
   
      <ThemeProvider theme={theme}>
            <TabContext value={value}>
               <TabList 
                onChange={handleChange} 
                variant="fullWidth"
                >
                  <Tab label="Grid" value="grid" sx={style}/>
                  <Tab label="List" value="list" sx={style}/>
                </TabList>
                <TabPanel value="grid">
                   <div className='grid-flex'>
                      {
                        coins.map((item, i)=>{
                          return (
                            <Grid coin={item} key={i} />
                          )
                        })
                      }
                   </div>
                </TabPanel>
                <TabPanel value="list">
                <table className="list-table">
                {
                  coins.map((item, i)=>{
                    return (
                      <List coin={item} key={i} />
                    )
                  })
                }
             </table>
                </TabPanel>
            </TabContext>
      </ThemeProvider>
   
  );
}

export default TabsComponent








// import { useState } from 'react';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { Box, createTheme, ThemeProvider } from "@mui/material"
// import Grid from "../Grid"
// import List from "../List"

// import "./style.css"

// const TabsComponent = ({ coins }) => {
//   const [value, setValue] = useState("grid");  // Set default to "grid"

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#3a80e9",
//       },
//     },
//   });

//   const style = {
//     color: "var(--white)",
//     width: "50vw",
//     fontSize: "1.2rem",
//     fontWeight: 600,
//     fontFamily: "Inter",
//     textTransform: "capitalize"
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <TabContext value={value}>
//         <TabList
//           onChange={handleChange}
//           variant="fullWidth"
//         >
//           <Tab label="Grid" value="grid" sx={style} />   {/* Ensure value is lowercase "grid" */}
//           <Tab label="List" value="list" sx={style} />   {/* Ensure value is lowercase "list" */}
//         </TabList>
//         <TabPanel value="grid">    {/* Matches the initial state "grid" */}
//           <div className='grid-flex'>
//             {
//               coins.map((item, i) => {
//                 return (
//                   <Grid coin={item} key={i} />
//                 )
//               })
//             }
//           </div>
//         </TabPanel>
//         <TabPanel value="list">
//           <table className="list-table">
//             {
//               coins.map((item, i) => {
//                 return (
//                   <List coin={item} key={i} />
//                 )
//               })
//             }
//           </table>
//         </TabPanel>
//       </TabContext>
//     </ThemeProvider>
//   );
// }

// export default TabsComponent;



