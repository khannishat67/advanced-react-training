import React, { useState } from 'react'
import { Container, Paper, Box } from '@material-ui/core';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import './Dashboard.css';
const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand()],
      },

    ],
  });
  
const options = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 18
          }
  
        },
      },
    },
    scales: {
  
    },
    responsive: true,
    maintainAspectRatio: false,
  };
const Dashboard = () => {
    const [data, setData] = useState(genData());
    return (
        <Container className="container">
            <Box className="container-box">
                <Box className="column-1">
                    <Paper className="grid-box">
                        <Doughnut data={data} options={options} />
                    </Paper>
                    <Paper className="grid-box">
                        <Bar data={data} />
                    </Paper>
                </Box>
                <Box className="column-2">
                    <Paper className="grid-box">
                        <Doughnut data={data} options={options} />
                    </Paper>
                </Box>
            </Box>
            <Box className="container-box">
                <Paper className="grid-box">
                <Bar data={data} options={options} />
                </Paper>
            </Box>
        </Container>
    )
}
export default Dashboard;