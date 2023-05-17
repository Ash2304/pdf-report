const chartData = {
    
    charts: [
      {
        id: "Chart1",
        data: [
          {
            x: ["2023-05-15T07:14:29", "2023-05-15T07:17:00"],
            y: [116666334.14, 101213516.53],
            value_params: [
              {
                "Flows created": "238",
                "Total number of users": "21145",
                "% Users engage with each flow": "66",
                "% Users who visited landing page (monthly)": "77",
                "% Users who initiated flow from landing page": "75",
                "% Users completed flows (monthly)": "67",
                "% Instances when call is deflected ": 89,
              },
              {
                "Flows created": "700",
                "Total number of users": "31765",
                "% Users engage with each flow": "53",
                "% Users who visited landing page (monthly)": "41",
                "% Users who initiated flow from landing page": 65,
                "% Users completed flows (monthly)": "71",
                "% Instances when call is deflected ": 89,
              },
            ],
            type: "bar",
            marker: { color: "#ab63fa" },
            marker_name: "Value Hypothesized",
          },
        ],
        layout: {
          title: "Value Hypothesis - Total Savings",
          xaxis: { text: "Month", font: { size: 16 } },
          yaxis: { text: "Value Hypothesized", font: { size: 16 } },
        },
      },
      {
        data: [
          {
            x: ["2023-05-15T07:14:29", "2023-05-15T07:17:00"],
            y: [3836282.38, 3140653.2],
            value_params: [
              {
                "Flows created": "238",
                "Total number of users": "21145",
                "% Users engage with each flow": "66",
                "% Users who visited landing page (monthly)": "77",
                "% Users who initiated flow from landing page": "75",
                "% Users completed flows (monthly)": "67",
                "% Instances when call is deflected ": 89,
              },
              {
                "Flows created": "700",
                "Total number of users": "31765",
                "% Users engage with each flow": "53",
                "% Users who visited landing page (monthly)": "41",
                "% Users who initiated flow from landing page": 65,
                "% Users completed flows (monthly)": "71",
                "% Instances when call is deflected ": 89,
              },
            ],
            type: "bar",
            marker: { color: "#ab63fa" },
            marker_name: "Value Hypothesized",
          },
        ],
        layout: {
          title: "Value Hypothesis - Monthly Engaged Users",
          xaxis: { text: "Month", font: { size: 16 } },
          yaxis: { text: "Value Hypothesized", font: { size: 16 } },
        },
      },
      {
        data: [
            {
              x: ["2023-05-15T07:14:29", "2023-05-15T07:17:00"],
              y: [642577.3, 557465.94],
              value_params: [
                {
                  "Flows created": "238",
                  "Total number of users":"21145",
                  "% Users engage with each flow":"66",
                  "% Users who visited landing page (monthly)": "77",
                  "% Users who initiated flow from landing page": "75",
                  "% Users completed flows (monthly)": "67",
                  "% Instances when call is deflected ": 89,
                },
                {
                    "Flows created": "700",
                    "Total number of users": "31765",
                    "% Users engage with each flow": "53",
                    "% Users who visited landing page (monthly)": "41",
                    "% Users who initiated flow from landing page": 65,
                    "% Users completed flows (monthly)": "71",
                    "% Instances when call is deflected ": 89,
                },
            ],
            type: "bar",
            marker: { color: "#ab63fa" },
            marker_name: "Value Hypothesized",
          },
        ],
    
    layout: {
      title: "Value Hypothesis - Monthly Time Saved",
      xaxis: { text: "Month", font: { size: 16 } },
      yaxis: { text: "Value Hypothesized", font: { size: 16 } },
    }, 
  },  
    {
        data: [
            {
              x: ["2023-05-15T07:14:29", "2023-05-15T07:17:00"],
              y: [2287575.18,1984578.76],
              value_params: [
                {
                  "Flows created": "238",
                  "Total number of users":"21145",
                  "% Users engage with each flow":"66",
                  "% Users who visited landing page (monthly)": "77",
                  "% Users who initiated flow from landing page": "75",
                  "% Users completed flows (monthly)": "67",
                  "% Instances when call is deflected ": 89,
                },
                {
                    "Flows created": "700",
                    "Total number of users": "31765",
                    "% Users engage with each flow": "53",
                    "% Users who visited landing page (monthly)": "41",
                    "% Users who initiated flow from landing page": 65,
                    "% Users completed flows (monthly)": "71",
                    "% Instances when call is deflected ": 89,
                },
            ],
            type: "bar",
            marker: { color: "#ab63fa" },
            marker_name: "Value Hypothesized",
          },
        ], 
    layout: {
      title: "Value Hypothesis - Monthly Calls Deflected",
      xaxis: { text: "Month", font: { size: 16 } },
      yaxis: { text: "Value Hypothesized", font: { size: 16 } },
    }, 
    }
]
}
   


  const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  //let myChart = null;
  
  function createCharts(cCharts, data, layout) {
    const ctx = document.getElementById(cCharts);
    

    // if (myChart) {
    //     myChart.destroy();
    //     myChart = null;
    //     ctx.clearRect(0, 0, ctx.width, ctx.height);
    // }    

    // const { data, layout } = chartData.charts[0];

       new Chart(ctx, {
        type: 'bar',
        plugins: [plugin],
        data: data,
        options: layout
      });
  
    console.log(Chart1);
    
  }
  
  createCharts("Chart1", chartData[0]);
  createCharts("Chart2", chartData[1]);
  createCharts("Chart3", chartData[2]);
  



  function downloadPDF(){
          
    const pdf = new jsPDF()

    const canvas1 = document.getElementById("Chart1");
    const canvasData1 = canvas1.toDataURL("image/jpeg", 1.0);
    pdf.addImage(canvasData1, "JPEG", 10, 10, 180, 120);

    const canvas2 = document.getElementById("Chart2");
    const canvasData2 = canvas2.toDataURL("image/jpeg", 1.0);
    pdf.addImage(canvasData2, "JPEG", 10, 140, 180, 120);

    const canvas3 = document.getElementById("Chart3");
    const canvasData3 = canvas3.toDataURL("image/jpeg", 1.0);
    pdf.addImage(canvasData3, "JPEG", 10, 270, 180, 120);

    pdf.save('hypothesis.pdf');
 }
       