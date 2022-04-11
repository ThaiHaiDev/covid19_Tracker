import { useEffect, useState } from "react";
import { getCountries, getDataByCountry } from "./api";
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import React from "react";
import { sortBy } from "lodash";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import 'moment/locale/vi'
import '@fontsource/roboto';

moment.locale('vi')



function App() {
  const [countries, setCountries] = useState([])
  const [selectCountryId, setSelectCountryId] = useState('')
  const [dataReport, setDataReport] = useState([])

  useEffect(() => {
    getCountries()
      .then(res => {
        // Sắp xếp country theo bảng chữ cái
        const countriesSort = sortBy(res.data, 'Country')
        setCountries(countriesSort)
        setSelectCountryId('vn')
      })
  }, [])

  useEffect(() => {
    if(selectCountryId) {
      const CountrySelect = countries.find(country => country.ISO2.toLowerCase() === selectCountryId)
      getDataByCountry(CountrySelect.Slug)
        .then(res => {
          // Xóa đi item cuối cùng trong array res.data
          res.data.pop()
          setDataReport(res.data)
      })
    }
  }, [countries, selectCountryId])

  const handleOnChange = (e) => {
    setSelectCountryId(e.target.value)
    
  }

  return (
    <Container>
        <Typography variant="h2" component="h2" style={{ margin : 20 }}>Số liệu COVID-19</Typography>
        <Typography style={{ margin : 20 }}>{moment().format('LLL')}</Typography>
        <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectCountryId}/>
        <HighLight dataReport={dataReport} />
        <Summary dataReport={dataReport} selectCountryId={selectCountryId} /> 
    </Container>
  );
}

export default App;
