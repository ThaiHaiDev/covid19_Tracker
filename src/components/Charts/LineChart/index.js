import HighchartsReact from "highcharts-react-official"
import Hignchart from 'highcharts'
import { useEffect, useState } from "react"
import moment from "moment"
import { Button, ButtonGroup } from "@material-ui/core"
import React from "react"

const generateOptions = (data) => {
    const categories = data.map(item => moment(item.Date).format('DD/MM/YYYY'))

    return {
        chart: {
            height: 500
        },
        title: {
            text: 'Tổng ca nhiễm'
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color}; padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Tổng Ca Nhiễm',
                data: data.map(item => item.Confirmed)
            }
        ]
    }
}

function LineChart({ dataReport }) {
    const [options, setOptions] = useState({})
    const [reportType, setReportType] = useState('all')

    useEffect(() => {
        let customData = []
        console.log(dataReport[798])
        switch(reportType) {
            case 'all':
                customData = dataReport
                break
            case '30':
                customData = dataReport.slice(dataReport.length - 30)
                break
            case '7':
                customData = dataReport.slice(dataReport.length - 7)
                break
            default:
                customData = dataReport
                break
        }
        setOptions(generateOptions(customData))
    }, [dataReport, reportType])

    return (
        <div>
            <ButtonGroup size="small" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button color={reportType === 'all' ? 'secondary' : '' } onClick={() => {setReportType('all')}}>Tất Cả</Button>
                <Button color={reportType === '30' ? 'secondary' : '' } onClick={() => {setReportType('30')}}>30 Ngày</Button>
                <Button color={reportType === '7' ? 'secondary' : '' } onClick={() => {setReportType('7')}}>7 Ngày</Button>
            </ButtonGroup>
            {/* <HighchartsReact highCharts = {Hignchart} options={options} /> */}
            <HighchartsReact highcharts={Hignchart} options={options} />
        </div>

    )
}

export default LineChart