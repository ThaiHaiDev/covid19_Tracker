import { Grid } from "@material-ui/core"
import { useEffect, useState } from "react"

import LineChart from "../Charts/LineChart"
import React from "react"
import HighMaps from "../Charts/HighMaps"

function Summary({ dataReport, selectCountryId }) {
    const [mapData, setMapData] = useState({})

    // Lấy dữ liệu country tương ứng để vẽ map
    useEffect(() => {
        //import là 1 promise nên có then
        if (selectCountryId) {
            const mapData = import(`@highcharts/map-collection/countries/${selectCountryId}/${selectCountryId}-all.geo.json`).then(res => setMapData(res))
            console.log({mapData})
        }
    }, [selectCountryId])
    
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart dataReport={dataReport} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMaps mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Summary