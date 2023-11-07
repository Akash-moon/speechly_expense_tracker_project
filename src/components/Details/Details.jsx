import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
}

// Add prop type validation
DetailsCard.propTypes = {
  title: PropTypes.string.isRequired, // Validate title prop as a required string
  subheader: PropTypes.string.isRequired, // Validate subheader prop as a required string
};

export default DetailsCard;
