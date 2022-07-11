import React from 'react'
import Driver from './Driver'
import { useState, useEffect } from 'react';

const drivers = [
    { name: "VER", photo: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png"},
    { name: "PER",photo: "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png"},
    { name: "LEC", photo: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png"},
    { name: "SAI", photo: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png"},
    { name: "RUS", photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png"},
    { name: "HAM", photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png"},
    { name: "NOR", photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png"},
    { name: "BOT", photo: "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png"},
    { name: "OCO", photo: "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png"},
    { name: "ALO", photo: "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png"},
    { name: "GAS", photo: "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png"},
    { name: "MAG", photo: "https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png"},
    { name: "VET", photo: "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png"},
    { name: "RIC", photo: "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png"},
    { name: "TSU", photo: "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png"},
    { name: "ZHO", photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png"},
    { name: "MSC", photo: "https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png"},
    { name: "ALB", photo: "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png"},
    { name: "STR", photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png"},
    { name: "LAT", photo: "https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png"}
]


function DriverGrid() {
  const mainButton = window.Telegram.WebApp.MainButton;
  const haptic = window.Telegram.WebApp.HapticFeedback;
  console.log(haptic)
  //mainButton.isActive = false;
  const [selected, setSelected] = useState(-1);
  const selectDriver = (i) => {
    haptic.impactOccurred('light');
    if(selected === i) {
        setSelected(-1);
    } else {
        setSelected(i);
    }
  }

  useEffect(() => {
    mainButton.setText("Pick")
    mainButton.show();
    mainButton.isActive = false;
    mainButton.onClick(() => {
        console.log("Clicked")
    })
  }, []);

  useEffect(() => {
    console.log(mainButton.isActive)
    if(selected === -1) {
        mainButton.isActive = false;
        mainButton.color = "#cccccc";
    } else {
        mainButton.isActive = true;
        mainButton.color = "#2481cc";
    }
  }, [selected])

  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 justify-center">
        {
            drivers.map((elem, i) => {
                return (
                    <Driver pressed={selected == i} onClick={() => selectDriver(i)} key={i} driverName={elem.name} imgSrc={elem.photo}/>
                )            
            })
        }
    </div>
  )
}

export default DriverGrid