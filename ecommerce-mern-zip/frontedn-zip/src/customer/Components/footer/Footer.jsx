import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white text-center mt-10 ' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={3} md={3}  >
        <Typography className='pb-5  ' variant="h6" gutterBottom>enter
         <span > Company</span>
        </Typography>
        <Typography className='p-1' variant="body2" component="p" gutterBottom  >
          About
        </Typography>
        <Typography  className='p-1' variant="body2 " component="p" gutterBottom >
          Blog
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Partners
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Solutions
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Marketing
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Analytics
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Commerce
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Documentation
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Guides
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          API Status
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography  className='p-1'  variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Claim
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        <Typography  className='p-1' variant="body2" component="p" gutterBottom>
          Terms
        </Typography>
      </Grid>
      <Grid className='pt-12 ' item xs={12} >
        <Typography className='p-1' variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography className='p-1' variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography className='p-1' variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
