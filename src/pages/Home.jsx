import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const FeatureCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Smart Investment Solutions
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Grow your wealth with our expert investment strategies
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Get Started
          </Button>
          <Button variant="outlined" color="inherit" size="large">
            Learn More
          </Button>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[
            {
              title: 'Expert Analysis',
              description: 'Access to professional market analysis and insights',
              image: 'https://source.unsplash.com/random/400x300?analysis'
            },
            {
              title: 'Diversified Portfolio',
              description: 'Spread your investments across multiple assets',
              image: 'https://source.unsplash.com/random/400x300?portfolio'
            },
            {
              title: 'Secure Platform',
              description: 'Bank-grade security for your investments',
              image: 'https://source.unsplash.com/random/400x300?security'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Investment Options Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Investment Options
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Stocks',
                description: 'Invest in leading companies worldwide',
                minInvestment: '$100'
              },
              {
                title: 'Bonds',
                description: 'Fixed income securities for stable returns',
                minInvestment: '$1,000'
              },
              {
                title: 'Mutual Funds',
                description: 'Diversified investment portfolios managed by experts',
                minInvestment: '$500'
              }
            ].map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {option.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {option.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Minimum Investment: {option.minInvestment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Start Your Investment Journey?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Join thousands of successful investors who trust our platform
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Create Account
        </Button>
      </Container>
    </Box>
  );
};

export default Home; 