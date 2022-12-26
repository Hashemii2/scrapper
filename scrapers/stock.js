const axios = require('axios');
const cheerio = require('cheerio');

async function stockScrapper() {
  const { data } = await axios.get(
    'http://www.tsetmc.com/Loader.aspx?ParTree=15'
  );

  const $ = cheerio.load(data);
  let finalData = [];
  let arr = [];

  $('#TseTab1Elm > div.box1.white > div.content > table > tbody > tr').each(
    (_, p) => {
      let allData = [];

      $(p)
        .find('td')
        .each((_, c) => {
          allData.push($(c).text());
        });

      arr.push(allData);
    }
  );

  arr.forEach((elem) => {
    let dataObj = {};

    dataObj['نماد'] = elem[0];
    dataObj['قیمت پایانی'] = elem[1];
    dataObj['آخرین معامله'] = elem[3];

    finalData.push(dataObj);
  });

  return finalData;
}

module.exports = stockScrapper;
