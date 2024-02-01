import puppeteer from 'puppeteer';

const url = 'https://fulltime.thefa.com/table.html;jsessionid=7508EBB8892817F4D82932068F94EC65?selectedSeason=535874718&selectedDivision=833306684&ftsTablePageContent.fixtureAnalysisForm.standingsTableDay=23&ftsTablePageContent.fixtureAnalysisForm.standingsTableMonth=0&ftsTablePageContent.fixtureAnalysisForm.standingsTableYear=2024&activeTab=1'



const scraper = async (team) => {
  console.log('The team requested is: ', team)
  if (team == undefined) {
    return 'Undefined Team Requested'
  } else {

  

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);
  
  // Find the Sheldon Athletic Male link tag
  const teamLink = await page.$$eval('table > tbody > tr > td > a', (atags, team) => {
    const tags = atags.map((tag) => tag.innerText === team ? tag.href : null
    )
    const href = tags.find((tag) => tag !== null)
    return href
  }, team)
    
  // Click on the Sheldon Athletic Male Text
  await page.goto(teamLink + '#tab-4')
 
  // Create a new Array of player names.
  const players = await page.$$eval('.player-grid > div > p', players => {
    return players.map((player) => player.textContent);
});

  await browser.close();

  return players

}
  
};

export default scraper