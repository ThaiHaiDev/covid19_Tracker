import { Grid } from "@material-ui/core"
import CardComponent from "./CardComponent"
import React from "react"

// sm = 4: đối với kích thước màn hình là sm trở lên ta chia ra 3 column, hệ thống material chia ra dạng 12 cột, muốn có 3 cột trên 1 hàng thì mỗi column phải sm = 4 vì mỗi sm =4 thì nhân 3 cột lên thì ra 12
// xs: đối với kích thước màn hình rộng như trên điện thoại, ta để 3 column này hiển thị lun 12 cột, chiếm hết khoảng không gian theo chiều ngan của container trên điện thoại
function HighLight({ dataReport }) {
    // Dữ liệu hàng cuối cùng là tổng kết trong ngày
    const data = dataReport && dataReport.length ? dataReport[dataReport.length - 1] : []

    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        }

    ]

    return (
    <Grid container spacing={3}>
        {summary.map((sum,index) => (
            <CardComponent title={sum.title} count={sum.count} key={index} type={sum.type} />
        ))}
    </Grid>

    )  
}

export default HighLight