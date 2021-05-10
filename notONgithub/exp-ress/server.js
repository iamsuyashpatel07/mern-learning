const express = require('express')
const app = express()
const port = 3000
for (var i = 0; i < 10; i++) {
    alert('tmkoc');
}
app.get('/', (req, res) => {
    res.send('tmkoc!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})