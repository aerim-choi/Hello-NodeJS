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
    // 명시적인 오류 발생
    throw new Error('Intentional error for Jenkins check');

})
