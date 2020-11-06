async function getNameDraws(year) {
    let numOfPages = [];

    for (let i = 0; i < 11; i++) {
        let fetchResult = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${i}&team2goals=${i}`);

        if (fetchResult.status === 200) {
            let json = await fetchResult.json();
            console.log(json);
        }

        throw new Error(fetchResult.status);
    }

        
    // async function loadJson(url) { // (1)
    //     let response = await fetch(url); // (2)
    
    //     if (response.status == 200) {
    //     let json = await response.json(); // (3)
    //     return json;
    //     }
    
    //     throw new Error(response.status);
    // }
    
    // loadJson('no-such-user.json')
    //     .catch(alert); // Error: 404 (4)
}

getNameDraws(2011);