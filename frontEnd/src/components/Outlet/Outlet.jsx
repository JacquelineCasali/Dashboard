import React from 'react'
import "./Outler.css"
import TopBox from '../TopBox/TopBox'
import ChartBox from '../ChartBox/ChartBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarChartBox from '../BarChartBox/BarChartBox'
import PierChartBox from '../PierChartBox/PierChartBox'
import BigChartBox from '../BigChartBox/BigChartBox'

export default function Outlet() {
  return (
    <div className='home'>
 <div className='box box1'>
    <TopBox/>
 </div>
 <div className='box box2'><ChartBox {...chartBoxUser}/></div>
 <div className='box box3'><ChartBox {...chartBoxProduct}/></div>
 <div className='box box4'><PierChartBox/></div>
 <div className='box box5'><ChartBox {...chartBoxConversion}/></div>
 <div className='box box6'><ChartBox {...chartBoxRevenue}/></div>
 <div className='box box7'><BigChartBox/></div>
 <div className='box box9'><BarChartBox {...barChartBoxVisit}/></div>
 <div className='box box8'><BarChartBox {...barChartBoxRevenue}/></div>

    </div>
  )
}
