$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            ahorro: 2666,
        }, {
            period: '2010 Q2',
            ahorro: 2778,
        }, {
            period: '2010 Q3',
            ahorro: 4912,
        }, {
            period: '2010 Q4',
            ahorro: 3767,
        }, {
            period: '2011 Q1',
            ahorro: 6810,
        }, {
            period: '2011 Q2',
            ahorro: 5670,
        }, {
            period: '2011 Q3',
            ahorro: 4820,
        }, {
            period: '2011 Q4',
            ahorro: 15073,
        }, {
            period: '2012 Q1',
            ahorro: 10687,
        }, {
            period: '2012 Q2',
            ahorro: 12000,
        }],
        xkey: 'period',
        ykeys: ['ahorro'],
        labels: ['ahorro'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Prestamos",
            value: 1230
        }, {
            label: "Cesta de Compra",
            value: 765
        }, {
            label: "Coche",
            value: 155
        }, {
            label: "Caprichos",
            value: 600
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
