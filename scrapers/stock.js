const axios = require('axios');
const cheerio = require('cheerio');

async function stockScrapper() {
  let finalData = [];

  try {
    const { data } = await axios.get(
      'http://www.tsetmc.com/Loader.aspx?ParTree=15'
    );

    const $ = cheerio.load(data);

    $('#TseTab1Elm > div.box1.white > div.content > table > tbody > tr').each(
      (_, p) => {
        let allData = [];
        let dataObj = {};

        $(p)
          .find('td')
          .each((_, c) => {
            allData.push($(c).text());
          });

        dataObj['نماد'] = allData[0];
        dataObj['قیمت پایانی'] = allData[1];
        dataObj['آخرین معامله'] = allData[3];

        finalData.push(dataObj);
      }
    );
  } catch (err) {
    console.log(err);
  }
  console.log(finalData);
  return finalData;
}
// stockScrapper();
module.exports = stockScrapper;
