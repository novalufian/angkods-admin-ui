function generate_date(){
    var chart_date = [];
    for (let index = 0; index < 30; index++) {
        chart_date.push(index);
    }
    return chart_date;
}

function generate_data(){
    var chart_data = [];
    for (let index = 0; index < 30; index++) {
        chart_data.push(Math.floor(Math.random(1, 50) * 100) + 5)
    }
    
    return chart_data;
}

var ctx = document.getElementById('myChart');
if(ctx){
    ctx = ctx.getContext('2d');
    
    
    var barChartData = {
        labels: generate_date(),
        datasets: [{
            label: 'Trayek 1',
            backgroundColor:"#444444",
            data:generate_data(),
            borderColor: "#ffffff",
            borderDash: [5, 2],
        }, {
            label: 'Trayek 2',
            backgroundColor: "#f30067",
            data: generate_data(),
        }, {
            label: 'Trayek 3',
            backgroundColor: "#00d1cd",
            data: generate_data(),
        }]
        
    };
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: barChartData,
        options: {
            offsetGridLines : true,
            legend : false,
            animation : {
                easing : "easeInExpo",
                duration : 1000
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display:false
                    },
                    categoryPercentage: 1.0,
                    barPercentage: 0.9
                }],
                yAxes: [{
                    display : false,
                    stacked: true,
                    gridLines: {
                        display:false
                    },
                }]
            }
        }
    });
}

var ctx = document.getElementById('my_doughnut');
if(ctx){
    ctx = ctx.getContext("2d");
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
    gradient1.addColorStop(0.0, '#444444');
    gradient1.addColorStop(1.0, '#444444');
    
    
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 500);
    gradient2.addColorStop(0.0, '#f30067');
    gradient2.addColorStop(1.0, '#f30067');
    
    var gradient3 = ctx.createLinearGradient(0, 0, 0, 500);
    gradient3.addColorStop(0.0, '#00d1cd');
    gradient3.addColorStop(1.0, '#00d1cd');
    
    
    var data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                gradient1 ,
                gradient2,
                gradient3,
            ],
        }],
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };
    
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            legend: {
                display : false
            },
            title: {
                display: true,
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            cutoutPercentage: 85
        }
    });
}

var ctx = document.getElementById('chart-progress-imp');
if(ctx){
    
    ctx = ctx.getContext('2d');
    var config = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                fill: "#614ad3",
                backgroundColor: "#614ad3",
                borderColor: "#614ad350",
                borderDash: [5, 1],
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 5,
                    bottom: 5
                }
            },
            responsive: true,
            legend: {
                display : false
            },
            tooltips: {
                mode: 'index',
                intersect: true,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,
                    
                }]
            }
        }
    };
    
    var myctx = new Chart(ctx,config);
    
}

var ctx = document.getElementById('chart-detail-campaign-overflow').getContext('2d');
if(ctx){
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'satur'],
            datasets: [{
                label: 'impression',
                data: generate_data(),
                backgroundColor: '#3975F6',
                borderColor:'#ffffff',
                borderWidth: 2
            },
            {
                label: 'distance',
                data: generate_data(),
                backgroundColor: '#3975F680',
                borderColor:'#3975F690',
                borderWidth: 2
            }]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
            legend: {
                display : false
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    display : false,
                    gridLines: {
                        display:false
                    },
                    categoryPercentage: 1.0,
                    barPercentage: 0.9
                }],
                yAxes: [{
                    display : false,
                    stacked: true,
                    gridLines: {
                        display:false
                    },
                }]
            }
        }
    });
}