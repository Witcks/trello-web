import Container from '@mui/material/Container';
import ModeSelect from '../../components/ModeSelect/index';
import Box from '@mui/material/Box';

const Board = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}>
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}>
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%,',
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        }}>
        Board Content
      </Box>
    </Container>
  );
};

export default Board;
