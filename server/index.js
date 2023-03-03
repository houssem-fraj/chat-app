const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try{ const r = await axios.put(

'https://api.chatengine.io/users/',
{username: username ,secret : username ,first_name:username},
{headers:{"private-key" :" b3fd9fc3-ae05-4a1f-978b-f345ac53b19e"}}

)
return res.status(r.status).json(r.data)

}catch (e){
    return res.status(e.response.status).json(e.response.data)

}


 
//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);