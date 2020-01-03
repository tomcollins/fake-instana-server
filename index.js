const express = require('express')
const app = express()
const port = 42699

const logHeaders = (req) => {
  for (var i in req.headers) {
    console.log(i, ':', req.headers[i])
  }
}

app.post('/com.instana.plugin.ruby.', (req, res) => { 
  console.log('POST /com.instana.plugin.ruby.');
  logHeaders(req) 
  res.status(200).end()
})
app.post('/com.instana.plugin.ruby/traces.', (req, res) => { 
  console.log('POST /com.instana.plugin.ruby/traces.');
  logHeaders(req) 
  res.status(200).end()
})

app.post('/com.instana.plugin.ruby.discovery', (req, res) => { 
  console.log('GET /com.instana.plugin.ruby.discovery');
  logHeaders(req) 
  res.status(200).end()
})

app.get('/', (req, res) => { 
  console.log('GET /');
  logHeaders(req)
  // console.log(req);
  // console.log(res);
  res.status(200).end("")
})

app.listen(port, () => console.log(`Fake Instana server listening on port ${port}!`))