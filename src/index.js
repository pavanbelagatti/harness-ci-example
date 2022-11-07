const app =  require( "./app");
const port = process.env.PORT || 3007;

app.listen(port, () =>
  console.log('Example app listening on port 3007!'),
);