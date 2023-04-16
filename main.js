
//General view of wages
//Source: U.S. Census Bureau, Current Population Survey, 1948 to 2022 Annual Social and Economic Supplements (CPS ASEC).
//People 15 years old and over beginning with March 1980, and people 14 years old and over as of March of the following year for previous years. Income in current and 2021 R-CPI-U-RS adjusted dollars						

const datagen = fetch("https://raw.githubusercontent.com/teoyenchihgwen-nm2207/teoyenchihgwen-nm2207.github.io/main/datasets/general.csv")
.then(function (response){
    return response.text();
})
.then(function(datagen){
    const table = [];
    const rows = datagen.split("\r\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });

    const yearg = []
    const women =[]
    const men = [];

    //add your for loop here
    for(j=0;j<table.length;j++)
      {
        yearg.push(table[j][0]);
            men.push(table[j][1]);
            women.push(table[j][2])
         
      }


    const data1 = {
        labels: yearg,
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
                text: ['Median Income of Men and Women'],
                fontFamily: "Helvetica Neue",
                fontSize: 24,
                fontColor: 'rgb(64, 64, 64)',
            },
        }
    });

    });

    var gen = document.getElementById("general")

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
                text: ['Median Income of Men and Women with Bachelor Degrees or higher'],
                fontSize: 24,
                fontColor: 'rgb(64, 64, 64)',
            }
        }
    });

    });

    //Race
    //Source: U.S. Census Bureau, Current Population Survey, 1961 to 2022 Annual Social and Economic Supplements (CPS ASEC).												
    //Based on median earnings of full-time, year-round workers 15 years old and over as of March of the following year. Before 1989 earnings are for civilian workers only.
      d3.csv("https://raw.githubusercontent.com/teoyenchihgwen-nm2207/teoyenchihgwen-nm2207.github.io/main/datasets/racepercentage.csv", function (err, rows) { 
      // Helper function to filter data by year
        function getDataByYear(year) {
      //filter rows here and return them
       return rows.filter(row => row.Year === year.toString());
        }
      // Define the years for which we want to create frames
        const years = d3.range(2010, 2022, 1);

  
  // Create frames for each year using the filtered data
      const frames = [];

      for (let i = 0; i < years.length; i++) {
        const year = years[i];
        const data = getDataByYear(year);

        const frame = {
          name: year.toString(),
          data:[
            {

              x: ['White', 'Black', 'Asian', 'Hispanic'],
              y: [data[0].White, data[0].Black, data[0].Asian, data[0].Hispanic],
              type: 'bar'
             
            },
          ],


        };

        frames.push(frame);
      }
      

      const data = [{

        x: ['White', 'Black', 'Asian', 'Hispanic'],
        y: [rows[0].White, rows[0].Black, rows[0].Asian, rows[0].Hispanic],
        type: 'bar',
        marker:{
          color: ['#ffccb3','#b33c00','#ff9966','#ec5b13']
        }
        
        
      }];
      

      const layout = {
        title: {

          text: "Women's Earnings as a Percentage of Men's Earnings by Race and Hispanic Origin",
          font: {
            size: 20,
            color: 'rgb(64, 64, 64)',
            family: 'Helvetica Neue',
            weight: 'bold'
          },
          xref: 'paper',
          x: 0.5},
        
         yaxis: {
        
          range: [60, 100]
        },
        paper_bgcolor: "#fff5e6",

        updatemenus: [{
          x: 1.15,
          y: 0.5,
          showactive: false,
          direction: "left",
          type: "buttons",
          buttons: [{
            method: "animate",
            args: [null, {
              fromcurrent: true,
              transition: {
                duration: 200,
              },
              frame: {
                duration: 500
              }
            }],
            label: "Start"
          },
          { method:"animate",
            args: [
              [null],
              { mode: "immediate",
                transition: {
                  duration: 0 },
                frame:{
                  duration:0
                }
              }
            ],
            label: "Stop"
          }]
        }],
        sliders: [{
          steps: years.map(year => ({
            label: year.toString(),
            method: "animate",
            args: [[year.toString()], { mode: "immediate" }]
          })),
          currentvalue: { prefix: "Year:", font: { size: 20, color: "#666" } },
        }]
      };
      // Create the plot with the initial data and layout, then add the frames
      Plotly.newPlot('raceChart', data, layout).then(function () {
        Plotly.addFrames('raceChart', frames);
      });
    });

  //occupational segregation
  //professional occupations
    const dataprof ={
      labels: ["Female", "Male"],
      datasets: [{
        label: 'Professional Occupations',
        data: [55,45],
        backgroundColor: ["rgb(255, 153, 153)","rgb(51, 173, 255)"]

    }]
  };
  new Chart("prof",
  {
    type: 'pie',
    data: dataprof,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: ['Professional Occupations'],
        fontFamily: "TrebuchetMS",
        fontSize: 20,
        fontColor: 'rgb(64, 64, 64)'},
        plugins: {
          legend: {
            position: 'left'
          }
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        radius: '90%'
      
      }
       
      
  });

// Education
  const dataeducation ={
    labels: ["Female", "Male"],
    datasets: [{
      label: 'Educational Occupations',
      data: [73,27],
      backgroundColor: ["rgb(255, 153, 153)","rgb(51, 173, 255)"]

  }]
};
new Chart("educational",
{
  type: 'pie',
  data: dataeducation,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: ['Education Occupations'],
      fontFamily: "TrebuchetMS",
      fontSize: 20,
      fontColor: 'rgb(64, 64, 64)'},
      plugins: {
        legend: {
          position: 'left'
        }
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      radius: '90%'
    
    }
});


//Healthcare 
const datahealth ={
  labels: ["Female", "Male"],
  datasets: [{
    label: 'Healthcare Occupations',
    data: [74,26],
    backgroundColor: ["rgb(255, 153, 153)","rgb(51, 173, 255)"]

}]
};
new Chart("healthcare",
{
type: 'pie',
data: datahealth,
options: {
  responsive: false,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: ['Healthcare Occupations'],
    fontFamily: "TrebuchetMS",
    fontSize: 20,
    fontColor: 'rgb(64, 64, 64)'},
    plugins: {
      legend: {
        position: 'left'
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    radius: '90%'
  
  
  }
});

//office
const dataoffice ={
  labels: ["Female", "Male"],
  datasets: [{
    label: 'Office Occupations',
    data: [72,28],
    backgroundColor: ["rgb(255, 153, 153)","rgb(51, 173, 255)"]

}]
};
new Chart("office",
{
type: 'pie',
data: dataoffice,
options: {
  responsive: false,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: ['Office & Admin Occupations'],
    fontFamily: "TrebuchetMS",
    fontSize: 20,
    fontColor: 'rgb(64, 64, 64)'},
    plugins: {
      legend: {
        position: 'left'
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    radius: '90%'
  
  }
});

//construction
const dataconstruction ={
  labels: ["Female", "Male"],
  datasets: [{
    label: 'Manual Labour Occupations',
    data: [5,95],
    backgroundColor: ["rgb(255, 153, 153)","rgb(51, 173, 255)"]

}]
};
new Chart("construction",
{
type: 'pie',
data: dataconstruction,
options: {
  responsive: false,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: ['Manual Labour Occupations'],
    fontFamily: "TrebuchetMS",
    fontSize: 20,
    fontColor: 'rgb(64, 64, 64)'},
    plugins: {
      legend: {
        position: 'left'
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    radius: '90%'
  
  }
});

// Motherhood Penalty 
// Source: Pew Research Center analysis of the Current Population Survey outgoing rotation group files (IPUMS)
const indiv = ["Women with children at home", "Women with no children at home","Men with no children at home"]
    const data5 = {
      labels: indiv, 
      datasets: [
          {
              label: "25-34 years old",
              data: [85,97,97],
              borderWidth: 2,
              backgroundColor: "#ff9966",
              borderColor: "#ff9966"
          },
          {
            label: "35-44 years old",
            data: [80,78,84],
            borderWidth: 2,
            backgroundColor: "#ec5b13",
            borderColor: "#ec5b13"
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
                      min: 60,
                      stepSize: 5
                    }
                }],
                xAxes:[{
                  ticks:{
                    autoSkip: false}
                }]
              },
              title: {
                  display: true,
                  text: ['Median Hourly Earnings of Men and Women in the US as a % of the Median Hourly Earnings of Fathers'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(64, 64, 64)',
                  
              }
          }
      }); 


     //generate buttons to toggle display
      var charts = []; // array to store chart elements
      var texts = []; // array to store text elements
      var currentChart = 0; // index of currently displayed chart

       // populate the charts array with the chart elements
        var chartElems = document.querySelectorAll("#generalchart, #educhart");
        chartElems.forEach(function(elem) {
            charts.push(elem);
        });

        //texts 
        // populate the texts array with the text elements
        var textElems = document.querySelectorAll("#generaltext, #edutext");
        textElems.forEach(function(elem) {
            texts.push(elem);
        });

        //clicks
        document.getElementById("generalButton").addEventListener("click", function() {
            showChart(0);
          });
          document.getElementById("eduButton").addEventListener("click", function() {
            showChart(1);
          });

        

          // show the generalChart by default when the page loads
            charts[currentChart].style.display = "block";
            texts[currentChart].style.display="block";

        //hide & show certain charts only
        function showChart(index) {
            // hide the currently displayed chart and its text
            charts[currentChart].style.display = "none";
            texts[currentChart].style.display = "none";
            
            // update the currentChart index to point to the new chart
            currentChart = index;
            
            // show the new currently displayed chart
            charts[currentChart].style.display = "block";
            texts[currentChart].style.display = "block";

          // hide the general text if the educhart is being displayed
          if (currentChart == 0) {
            texts[1].style.display = "none";}

            if (currentChart == 1) {
              texts[0].style.display = "none";


          }
        }

