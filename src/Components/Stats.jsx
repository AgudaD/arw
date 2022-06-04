import './Stats.css'

const Stats = () => {
  return (
    <div>
        <div className="container-top">
            <div className='left'>
                <p className='balance'>My balance</p>
                <p className='price'>$921.48</p>
            </div>
            <div id="circle1">
                <div id="circle2"></div>
            </div>
        </div>
        <div className="container-bottom">
            <p className='chart-period'>Spending - Last 7 days</p>

            <div className="charts">
                <div className="chart">
                    <div className='chart1'></div>
                    <p className='day'>mon</p>
                </div>
                <div className="chart">
                    <div className='chart2'></div>
                    <p className='day'>tue</p>
                </div>
                <div className="chart">
                    <div className='chart3'></div>
                    <p className='day'>wed</p> 
                </div>
                <div className="chart">
                    <div className='chart4'></div>
                    <p className='day'>thur</p> 
                </div>
                <div className="chart">
                    <div className='chart5'></div>
                    <p className='day'>fri</p> 
                </div>
                <div className="chart">
                    <div className='chart6'></div>
                    <p className='day'>sat</p>
                </div>
                <div className="chart">
                    <div className='chart7'></div>
                    <p className='day'>sun</p>
                </div>        
            </div>
            <hr />
            <div className="bottom">
                    <p className='total'>Total this month</p>  
                <div className="bottom-inner">
                    <p className='total-price'> $478.33</p>
                    <div className="bottom-inner-left">
                        <p className='percentage'>+2.4%</p>
                        <p className='month'>from last month</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats