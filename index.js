const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.json({
    "hey" : "NodeJs",
    "multibranch-pipeline":"wow!!",
  })
})

app.listen(port, () => {
  console.log(`Example nodejs app listening on port ${port}`)

})
