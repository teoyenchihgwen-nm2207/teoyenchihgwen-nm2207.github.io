
//General view of wages
//Source: U.S. Census Bureau, Current Population Survey, 1948 to 2022 Annual Social and Economic Supplements (CPS ASEC).
//People 15 years old and over beginning with March 1980, and people 14 years old and over as of March of the following year for previous years. Income in current and 2021 R-CPI-U-RS adjusted dollars						

const data = fetch("https://raw.githubusercontent.com/teoyenchihgwen-nm2207/teoyenchihgwen-nm2207.github.io/main/datasets/general.csv")
.then(function (response){
    return response.text();
})
.then(function(data){
    const table = [];
    const rows = data.split("\r\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });

    const year = []
    const women =[]
    const men = [];

    //add your for loop here
    for(j=0;j<table.length;j++)
      {
        year.push(table[j][0]);
            men.push(table[j][1]);
            women.push(table[j][2])
         
      }


    const data1 = {
        labels: year,
        datasets: [
            {
               label:"Women's Median Income",// uncomment this line and set this to "Words"
                data: women,// uncomment this line and set this to negData
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(255, 153, 153)",
                borderColor: "rgb(255, 153, 153)",
            },
            {
              label:"Men's Median Income",// uncomment this line and set this to "Words"
              data: men,// uncomment this line and set this to negData
               borderWidth: 2,
               fill: false,
               backgroundColor: "rgb(51, 173, 255)",
               borderColor: "rgb(51, 173, 255)",
           },

                ]
              }

    new Chart("generalchart",
    {
      type: "line",
      data: data1,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: true
          },
            title: {
                display: true,
                text: ['Median Income of Men and Women'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "Helvetica Neue",
                fontSize: 24,
                fontColor: 'rgb(64, 64, 64)',
            }
        }
    });

    });

    //Educational Attainment
    //Source: U.S. Census Bureau, Current Population Survey, 1992 to 2022 Annual Social and Economic Supplements (CPS ASEC).						
    //People 25 years old and over as of March of the following year. Income in current and 2021 R-CPI-U-RS adjusted dollars.
    const dataedu = fetch("https://raw.githubusercontent.com/teoyenchihgwen-nm2207/teoyenchihgwen-nm2207.github.io/main/datasets/educationwage.csv")
.then(function (response){
    return response.text();
})
.then(function(dataedu){
    const tableedu = [];
    const rowsedu = dataedu.split("\r\n");

    rowsedu.forEach((r,index) => {
        const itemedu = r.split(",");
        tableedu.push(itemedu);
    });

    const yearedu = []
    const womenedu =[]
    const menedu = [];

    //add your for loop here
    for(i=0;i<tableedu.length;i++)
      {
        yearedu.push(tableedu[i][0]);
            menedu.push(tableedu[i][1]);
            womenedu.push(tableedu[i][2])
         
      }


    const data2 = {
        labels: yearedu,
        datasets: [
            {
               label:"Women's Median Income",
                data: womenedu,
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(255, 153, 153)",
                borderColor: "rgb(255, 153, 153)",
            },
            {
              label:"Men's Median Income",
              data: menedu,
               borderWidth: 2,
               fill: false,
               backgroundColor: "rgb(51, 173, 255)",
               borderColor: "rgb(51, 173, 255)",
           },

                ]
              }

    new Chart("educhart",
    {
      type: "line",
      data: data2,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: true
          },
            title: {
                display: true,
                text: ['Median Income of Men and Women with','Bachelor Degrees or higher'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "Helvetica Neue",
                fontSize: 24,
                fontColor: 'rgb(64, 64, 64)',
            }
        }
    });

    });

    //Race
    //Source: U.S. Census Bureau, Current Population Survey, 1961 to 2022 Annual Social and Economic Supplements (CPS ASEC).												
    //Based on median earnings of full-time, year-round workers 15 years old and over as of March of the following year. Before 1989 earnings are for civilian workers only.
  /* const datarace = fetch("https://raw.githubusercontent.com/teoyenchihgwen-nm2207/teoyenchihgwen-nm2207.github.io/main/datasets/racepercentage.csv")
.then(function (response){
    return response.text();
})
.then(function(datarace){
    const tabler = [];
    const rowsr = datarace.split("\r\n");

    rowsr.forEach((r,index) => {
        const itemr = r.split(",");
        tabler.push(itemr);
    });

    const yearr = []
    const white =[]
    const black = []
    const asian = []
    const hispanic = [];

    //add your for loop here
    for(a=0;a<tabler.length;a++)
      {
        yearr.push(tabler[a][0]);
            white.push(tabler[a][1]);
            black.push(tabler[a][2]);
            asian.push(tabler[a][3]);
            hispanic.push(tabler[a][4]);
         
      }


    const data3 = {
        labels: yearr,
        datasets: [
            {
               label:"White women's % of earnings",// uncomment this line and set this to "Words"
                data: white,// uncomment this line and set this to negData
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(46, 184, 46)",
                borderColor: "rgb(46, 184, 46)",
            },
            {
              label:"Black women's % of earnings",// uncomment this line and set this to "Words"
              data: black,// uncomment this line and set this to negData
               borderWidth: 2,
               fill: false,
               backgroundColor: "rgb(46, 149, 184)",
               borderColor: "rgb(46, 149, 184)",
           },
           {
            label:"Asian women's % of earnings",// uncomment this line and set this to "Words"
            data: asian,// uncomment this line and set this to negData
             borderWidth: 2,
             fill: false,
             backgroundColor: "rgb(184, 46, 115)",
             borderColor: "rgb(184, 46, 115)",
         },
         {
          label:"Hispanic women's % of earnings",// uncomment this line and set this to "Words"
          data: hispanic,// uncomment this line and set this to negData
           borderWidth: 2,
           fill: false,
           backgroundColor: "	rgb(184, 115, 46)",
           borderColor: "	rgb(184, 115, 46)",
       },

                ]
              }

    new Chart("racechart",
    {
      type: "bar",
      data: data3,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: false
          },
            title: {
                display: true,
                text: ["Percentage of women's earnings to white men's earnings"],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "Helvetica Neue",
                fontSize: 24,
                fontColor: 'rgb(64, 64, 64)',
            }
        }
    });

    });	*/	
    
    const race = ["White","Black", "Asian", "Hispanic"]
    const dataObj = {
      labels: race,           //we want the x axis to be the years
      datasets: [
          {
              label: "Female earnings as a % of White male earnings",
              data: [79.9,	92.7,	78.1,	86.2],
              borderWidth: 2,
              backgroundColor: "rgb(75, 19, 210)",
              borderColor: "rgb(75, 19, 210)"
          },
        ],
      }
      new Chart("racechart",
      {
          type: "horizontalBar",
          data: dataObj,
          options: { 
              maintainAspectRatio: false,
              legend: {
                  display: true
              },
              scales:{
                xAxes: [{ 
                    display: true,
                  
                    ticks:{
                      beginAtZero: true,
                      min: 0,
                      
                      stepSize: 10
                    }
                    
                }]
              },
              title: {
                  display: true,
                  text: ['Female earnings as a % of White male earnings','in 2021'],//set this to 'Number of female graduates','per Course'
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(64, 64, 64)',
                  
              }
          }
      }); 
      // make bars different color, change axis names/details, add source
      
      //buttons

  //occupational segregation
  const industry = ["Management, business, and financial operations occupations", 
                    "Professional and related occupations",
                    "Computer and mathematical occupations",
                    "Education, training, and library occupations",
                    "Healthcare practitioners and technical occupations",
                    "Service occupations",
                    "Sales and office occupations",
                    "Office and administrative support occupations",
                    "Natural resources, construction, and maintenance occupations",
                    "Production, transportation, and material moving occupations"]
    const data4 = {
      labels: industry, 
      datasets: [
          {
              label: "Female employement rate (%)",
              data: [47, 55, 25, 73, 74, 51, 60, 72, 5, 22],
              borderWidth: 2,
              backgroundColor: "rgb(255, 153, 153)",
              borderColor: "rgb(255, 153, 153)"
          },
          {
            label: "Male employment rate (%)",
            data: [53, 45, 76, 27, 26, 49, 40, 28, 95, 78],
            borderWidth: 2,
            backgroundColor: "rgb(51, 173, 255)",
            borderColor: "rgb(51, 173, 255)"
        },

        ],
      }
      new Chart("occuseg",
      {
          type: "bar",
          data: data4,
          options: { 
              maintainAspectRatio: false,
              legend: {
                  display: true
              },
              scales:{
                yAxes: [{ 
                    display: true,
                    ticks:{
                      beginAtZero: true,
                      min: 0,
                      stepSize: 10
                    }
                }],
                xAxes:[{
                  ticks:{
                    autoSkip: false}
                }]
              },
              title: {
                  display: true,
                  text: ['Percentage of employment by gender'],//set this to 'Number of female graduates','per Course'
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(64, 64, 64)',
                  
              }
          }
      }); 
// Motherhood Penalty 
const indiv = ["With children under 18years", "With children under 6 years"]
    const data5 = {
      labels: indiv, 
      datasets: [
          {
              label: "Women",
              data: [1007,1010],
              borderWidth: 2,
              backgroundColor: "rgb(255, 153, 153)",
              borderColor: "rgb(255, 153, 153)"
          },
          {
            label: "Male",
            data: [1283,1236],
            borderWidth: 2,
            backgroundColor: "rgb(51, 173, 255)",
            borderColor: "rgb(51, 173, 255)"
        },

        ],
      }
      new Chart("penalty",
      {
          type: "bar",
          data: data5,
          options: { 
              maintainAspectRatio: false,
              legend: {
                  display: true
              },
              scales:{
                yAxes: [{ 
                    display: true,
                    ticks:{
                      beginAtZero: true,
                      min: 0,
                      stepSize: 100
                    }
                }],
                xAxes:[{
                  ticks:{
                    autoSkip: false}
                }]
              },
              /*plugins: {
                subtitle: {
                    display: true,
                    text: ['Median weekly earnings of full-time wage and salary workers, who are married with their spouses present, by age of own childer under 18 years old, 2020 annual averages',
                    'Source: US Bureau of Labor Statistics, Current Population Survey (2020)'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 16,
                    fontColor: 'rgb(64, 64, 64)'
                  }},*/
              title: {
                  display: true,
                  text: ['Median Weekly Earnings of Married Men and Women'],//set this to 'Number of female graduates','per Course'
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(64, 64, 64)',
                  
              }
          }
      }); 


     //generate buttons to toggle display
      var charts = []; // array to store chart elements
      var currentChart = 0; // index of currently displayed chart

       // populate the charts array with the chart elements
        var chartElems = document.querySelectorAll("#generalchart, #educhart, #racechart");
        chartElems.forEach(function(elem) {
            charts.push(elem);
        });

        //clicks
        document.getElementById("generalButton").addEventListener("click", function() {
            showChart(0);
          });
          document.getElementById("eduButton").addEventListener("click", function() {
            showChart(1);
          });
          document.getElementById("raceButton").addEventListener("click", function() {
            showChart(2);
          });

          // show the generalChart by default when the page loads
            charts[currentChart].style.display = "block";

        //hide & show certain charts only
        function showChart(index) {
            // hide the currently displayed chart
            charts[currentChart].style.display = "none";
            
            // update the currentChart index to point to the new chart
            currentChart = index;
            
            // show the new currently displayed chart
            charts[currentChart].style.display = "block";
          }

