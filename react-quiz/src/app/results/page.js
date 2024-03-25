'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { reset } from '@/redux/feature/questionSlice';

function createData(name, results) {
  return { name, results };
}

const Results = () => {
  const { score, amount_of_question, correct_answer, wrong_answer } =
    useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const route = useRouter();

  const onHandleRestart = () => {
    dispatch(reset());
    route.push('/settings');
  };

  const rows = [
    createData('Number of Questions', amount_of_question),
    createData('Score', score),
    createData('Correct Answers', correct_answer),
    createData('Wrong Answers', wrong_answer),
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          minHeight: '95vh',
          padding: 1,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: {
              xs: 600,
              sm: 600,
              lg: 600, // theme.breakpoints.up('lg')
              xl: 600,
            },
            bgcolor: '#eeeee4',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 26,
              fontWeight: 600,
              padding: 2,
            }}
          >
            Results
          </Typography>
          <Table aria-label='simple table'>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': {},
                  }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    {row.results}{' '}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              padding: 2,
              textAlign: 'end',
            }}
          >
            <Button
              variant='contained'
              sx={{
                bgcolor: '#30c5bb ',
                ':hover': {
                  bgcolor: '#298a8a',
                  color: 'white',
                },
              }}
              onClick={onHandleRestart}
            >
              Restart
            </Button>
          </Box>
        </TableContainer>
      </Box>
    </>
  );
};

export default Results;
