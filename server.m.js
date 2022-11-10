import http from 'http'

const app = http.createServer((req, res) => {
  res.write('<h1>Hello kubernets</h1>')
  res.end()
})

app.listen(3333, undefined, undefined, () => {
  console.log('Server is running at port 3333!')
})
