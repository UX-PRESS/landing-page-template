import React from 'react';
import Container from '../components/layout/Container';
import Grid from '../components/layout/Grid';

export default function FeaturesSection() {
  return (
    <section>
      <Container>
        <h2>Features</h2>
        <Grid cols={3}>
          <div>Feature 1</div>
          <div>Feature 2</div>
          <div>Feature 3</div>
        </Grid>
      </Container>
    </section>
  );
}
