import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import styled from 'styled-components';      

const HomeStyled = styled.div`
    width: 50vw;
    /* height: 40vh; */
    border-radius: 15px;
    background-color: #ffffff;
    
    `
const ColumnStyled = styled(Column)`
    margin: 3vw;
`

const HomeAdmin = () => {
  const data = [
    {
      name: 'London',
      month: 'Jan.',
      AveragreMonthlyRainfall: 18.9,
    },
    {
      name: 'London',
      month: 'Feb.',
      AveragreMonthlyRainfall: 28.8,
    },
    {
      name: 'London',
      month: 'Mar.',
      AveragreMonthlyRainfall: 39.3,
    },
    {
      name: 'London',
      month: 'Apr.',
      AveragreMonthlyRainfall: 81.4,
    },
    {
      name: 'London',
      month: 'May',
      AveragreMonthlyRainfall: 47,
    },
    {
      name: 'London',
      month: 'Jun.',
      AveragreMonthlyRainfall: 20.3,
    },
    {
      name: 'London',
      month: 'Jul.',
      AveragreMonthlyRainfall: 24,
    },
    {
      name: 'London',
      month: 'Aug.',
      AveragreMonthlyRainfall: 35.6,
    },
    {
      name: 'Berlin',
      month: 'Jan.',
      AveragreMonthlyRainfall: 12.4,
    },
    {
      name: 'Berlin',
      month: 'Feb.',
      AveragreMonthlyRainfall: 23.2,
    },
    {
      name: 'Berlin',
      month: 'Mar.',
      AveragreMonthlyRainfall: 34.5,
    },
    {
      name: 'Berlin',
      month: 'Apr.',
      AveragreMonthlyRainfall: 99.7,
    },
    {
      name: 'Berlin',
      month: 'May',
      AveragreMonthlyRainfall: 52.6,
    },
    {
      name: 'Berlin',
      month: 'Jun.',
      AveragreMonthlyRainfall: 35.5,
    },
    {
      name: 'Berlin',
      month: 'Jul.',
      AveragreMonthlyRainfall: 37.4,
    },
    {
      name: 'Berlin',
      month: 'Aug.',
      AveragreMonthlyRainfall: 42.4,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'month',
    yField: 'AveragreMonthlyRainfall',
    seriesField: 'name',
    color: ['#AEAEAE', '#FF6F61'],
    
    
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (
  <HomeStyled>

  <ColumnStyled {...config} />
  </HomeStyled>
)}

export { HomeAdmin};