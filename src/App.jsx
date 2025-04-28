import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './View'
import FormContent from './FormContent'
import { Route, Routes } from 'react-router-dom'
import data from './services/data'

function App() {

  const [dataList, setDataList] = useState(data);

  const addData = (newEntry) => {
    setDataList([...dataList, newEntry]);
  };
  return (
    <>
     <Routes>
        <Route path="/" element={<FormContent onAddData={addData} data={dataList} />} />
        <Route path="/view" element={<View data={dataList} />} />
     </Routes>
    </>
  )
}

export default App
