// import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";

import "moment/dist/locale/ar-dz";
moment.locale("ar");
const avilableCities =[
  {
    displayName : "الاسـكـــندريـة",
    apiName:"Alexandria",
  },

 { 
  displayName : "الـقـــاهـرة",
  apiName:"Cairo",
 },
 {
    displayName :"مـطــــروح",
    apiName:"Matrouh",
  },
 

];
const MainContent = () => {

  const [today,setToday]=useState("");

  const [selectedCity,setSelectedCity] =useState({

    displayName : "ألاسـكـــندريـة",
      apiName:"Alexandria",
  });


  

  const [timings,setTimings] =useState({
  "Fajr": "04:55",
  "Sunrise": "06:29",
  "Dhuhr": "13:04",
  "Asr": "16:42",
  "Sunset": "19:37",
  "Maghrib": "19:37",
  "Isha": "21:07",
  "Imsak": "04:45",
  "Midnight": "01:03",
  "Firstthird": "23:15",
  "Lastthird": "02:52"
});

const getTimings = async () =>{
  const response = await  axios.get(
  ` https://api.aladhan.com/v1/timingsByCity?city=${selectedCity.apiName}&country=Egypt&method=8 `

			// `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${selectedCity.apiName}`


  );

  setTimings(response.data.data.timings)

};
  useEffect(()=>{
getTimings();


const t = moment();
setToday(t.format("MMM Do YYYY | h:mm"));

  });


  const handleCityChange = (event) => {
		const cityObject = avilableCities.find((city) => {
			return city.apiName == event.target.value;
		});
		console.log("the new value is ", event.target.value);
		setSelectedCity(cityObject);
	};



    return (
      <>
      <Grid container>
      <Grid xs={6}>
        <div>
          <h2>{today}</h2>
          <h1>{selectedCity.displayName}</h1>
        </div>
      </Grid>

      <Grid xs={6}>
        <div>
          <h2>
            متبقي حتى صلاة{" "}
            {/* {prayersArray[nextPrayerIndex].displayName} */}
          </h2>
          {/* <h1>{remainingTime}</h1> */}
        </div>
      </Grid>
    </Grid>


       
          <Divider style={{borderColor:"white" ,opacity:"0.1"}}></Divider>

{/* -------START PRAYERS CARDS ----------*/}
       <Stack direction="row" justifyContent={"space-evenly"} style={{'marginTop':'45px'}}>
          
          <Prayer name="الفجر" time={timings.Fajr} image = "https://cdn.alweb.com/thumbs/awkatalsalah/article/fit727x545/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%B9%D9%84%D9%89-%D9%82%D9%8A%D8%A7%D9%85-%D8%A7%D9%84%D9%84%D9%8A%D9%84.jpg"></Prayer>
          <Prayer name="الظهر" time={timings.Dhuhr} image = "https://www.elbalad.news/UploadCache/libfiles/984/4/600x338o/260.jpeg"></Prayer>
          <Prayer name="العصر" time={timings.Asr} image = "https://gate.bald-news.com/wp-content/uploads/2024/05/EmJV6CFXYAEcnAX-1-800x500.jpg?v=1715771979"></Prayer>
          <Prayer name="المغرب"time={timings.Maghrib} image = "https://www.gomhuriaonline.com/Upload/News/22-10-2020_01_57_48_GomhuriaOnline_1603324668.jpeg"></Prayer>
          <Prayer name="العشاء"time={timings.Isha} image = "https://modo3.com/thumbs/fit630x300/217667/1553166474/%D8%A2%D8%AE%D8%B1_%D9%85%D9%8A%D8%B9%D8%A7%D8%AF_%D9%84%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D8%B9%D8%B4%D8%A7%D8%A1.jpg"></Prayer>
       </Stack> 

{/* -------END PRAYERS CARDS ----------*/}

  
         {/* -------START SELECT CITY ----------*/}
         <Stack
				direction="row"
				justifyContent={"center"}
				style={{ marginTop: "40px" }}
			>
				<FormControl style={{ width: "20%" }}>
					<InputLabel id="demo-simple-select-label">
						<span style={{ color: "white" }}>المــدينـة</span>
					</InputLabel>
					<Select
						style={{ color: "white" }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Age"
						onChange={handleCityChange}
					>
						{avilableCities.map((city) => {
							return (
								<MenuItem
									value={city.apiName}
									key={city.apiName}
								>
									{city.displayName}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Stack>

        
     </>   
    );
}

export default MainContent;
