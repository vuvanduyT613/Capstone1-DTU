import moment from 'moment';
export const formatDate = date => moment(date).format('DD/MM/YYYY');
export const formatTime = time => moment(time).format('HH:mm');

export const formatMoney = value =>
  Number.isNaN(Number(value)) ? '0' : Number(value).toLocaleString('en-US');
