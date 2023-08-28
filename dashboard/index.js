if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const { getSoilDataAPI } = require("./utils/getSoilData");
// const { getDHTDataDynamoDB } = require("./utils/getDHTData");
const AWS = require("aws-sdk");
const aws_config = require("./private/credentials");

const app = express();

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const soilData = await getSoilDataAPI();
  //console.log(`DHT Data is : ${DHTData}`);

  AWS.config.update(aws_config.aws_remote_config);
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: aws_config.aws_table_name,
  };
  docClient.scan(params, async (err, data) => {
    //console.log(data);
    const DHTData = await data.Items;
    console.log(soilData);
    console.log(DHTData);
    res.render("boilerplate", { DHTData: DHTData, soilData: soilData });
  });

  //console.log(feeds);
  //res.render("boilerplate", { DHTData: DHTData });
});

app.listen(8080, () => {
  console.log(`Serving on port 8080`);
});
