

var ctx = document.getElementById('myChart').getContext('2d');




function generate_date(){
    var chart_date = [];
    for (let index = 0; index < 30; index++) {
        chart_date.push(index);
        // chart_data.push(Math.floor(Math.random(1, 100) * 100))
    }

    return chart_date;
}

function generate_data(){
    var chart_data = [];
    for (let index = 0; index < 30; index++) {
        chart_data.push(Math.floor(Math.random(1, 100) * 100))
    }

    return chart_data;
}


var barChartData = {
    labels: generate_date(),
    datasets: [{
        label: 'Trayek 1',
        backgroundColor:"#444444",
        data:generate_data()
    }, {
        label: 'Trayek 2',
        backgroundColor: "#f30067",
        data: generate_data()
    }, {
        label: 'Trayek 3',
        backgroundColor: "#00d1cd",
        data: generate_data()
    }]

};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        offsetGridLines : true,
        legend : false,
        animation : {
            easing : "easeInExpo",
            duration : 1000
        },
        title: {
            display: true,
            text: 'total impression on july - campgin : sarden abc event rekormuri',
            fontFamily : " 'Questrial', sans-serif",
            fontSize : 15,
            fontStyle : "400",
            position : "bottom"
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
                stacked: true
            }]
        }
    }
});






var ctx = document.getElementById('my_doughnut').getContext("2d");

var gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
    gradient1.addColorStop(0.0, '#7acfdf');
    gradient1.addColorStop(1.0, '#00d1cd');


var gradient2 = ctx.createLinearGradient(0, 0, 0, 500);
    gradient2.addColorStop(0.0, '#fd0054');
    gradient2.addColorStop(1.0, '#a80038');

var gradient3 = ctx.createLinearGradient(0, 0, 0, 500);
    gradient3.addColorStop(0.0, '#115173');
    gradient3.addColorStop(1.0, '#022c43');


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
// And for a doughnut chart
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