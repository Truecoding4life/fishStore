const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });