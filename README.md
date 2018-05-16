### super-simple-csv module
```bash
npm i super-simple-csv
```

const m = require('./super-simple-csv');

m.read('./data.csv').then(data => console.log(data[0])); // ['1;2;3', '4;5;6'] each line as array item
m.write('./new.csv', ['1;2;3', '4;5;6']); // the reverse

