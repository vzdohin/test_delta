import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';

function App() {
  const [chartOptions, setChartOptions] = useState({});

  const calculateChange = (current, previous) => {
    return Math.round((current - previous) / previous * 100);
  };

  const tableData = [
    {
      category: 'Выручка, руб',
      current: 500521,
      previous: 480521,
      week: 4805121,
      change: calculateChange(500521, 480521),
    },
    {
      category: 'Наличные',
      current: 300000,
      previous: 300000,
      week: 300000,
      change: calculateChange(300000, 300000),
    },
    {
      category: 'Безналичный расчет',
      current: 100000,
      previous: 100000,
      week: 100000,
      change: calculateChange(100000, 100000),
    },
    {
      category: 'Кредитные карты',
      current: 100521,
      previous: 100521,
      week: 100521,
      change: calculateChange(100521, 100521),
    },
    {
      category: 'Средний чек, руб',
      current: 1300,
      previous: 900,
      week: 900,
      change: calculateChange(1300, 900),
    },
    {
      category: 'Средний гость, руб',
      current: 1200,
      previous: 800,
      week: 800,
      change: calculateChange(1200, 800),
    },
    {
      category: 'Удаления из чека (после оплаты), руб',
      current: 1000,
      previous: 1100,
      week: 900,
      change: calculateChange(1000, 1100),
    },
    {
      category: 'Удаления из чека (до оплаты), руб',
      current: 1300,
      previous: 1300,
      week: 900,
      change: calculateChange(1300, 1300),
    },
    {
      category: 'Количество чеков',
      current: 34,
      previous: 36,
      week: 34,
      change: calculateChange(34, 36),
    },
    {
      category: 'Количество гостей',
      current: 34,
      previous: 36,
      week: 32,
      change: calculateChange(34, 36),
    }
  ];


  const selectRow = (data) => {

    setChartOptions({
      title: {
        text: data.category
      },
      series: [
        {
          name: 'Данные',
          data: [data.current, data.previous, data.week]
        }
      ]
    });
  };



  return (
    <div className="App">
      <table className="data-table">
        <thead>
          <tr>
            <th>Показатель</th>
            <th>Текущий день</th>
            <th>Вчера</th>
            <th>Этот день недели</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} onClick={() => selectRow(row)}>
              <td>{row.category}</td>
              <td className="current-day">{row.current}</td>
              <td className='today'>
                {row.previous} <span className={`change ${row.change >= 0 ? 'change-positive' : 'change-negative'} `}>
                  {row.change}%
                </span>
              </td>
              <td>{row.week}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {chartOptions.series && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
}

export default App;
