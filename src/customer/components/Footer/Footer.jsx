import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Contacts
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Insta
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              X
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Fb
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Slack
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Features
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              New Sales
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Affiliations
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Careers
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Job Posting
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Office Addr.
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from(' ')
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer