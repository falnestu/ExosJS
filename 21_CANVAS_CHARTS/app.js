/**
    UTILITAIRES
*/
/** Make Ajax Calls */
function ajax(config){
    var request = new XMLHttpRequest();
    request.open(config.method || "GET" , config.url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        config.success( JSON.parse(request.responseText), request );
      } else {
        // We reached our target server, but it returned an error
        config.error("We reached our target server, but it returned an error", request);
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
       config.error("We reached our target server, but it returned an error", request);
    };
    if(config.data){
         request.send( JSON.stringify(config.data) );
    } else {
         request.send( );
    }
}

function randomInt(int){
    return Math.round(Math.random() * int);
}

function randomColor(){
    var r = randomInt(255);
    var g = randomInt(255);
    var b = randomInt(255);
    return "rgb("+r+","+g+","+b+")";
}

function drawLine(ctx, obj){
    ctx.beginPath();
    ctx.moveTo(obj.start.x,obj.start.y);
    ctx.lineTo(obj.end.x, obj.end.y )
    ctx.closePath();
    ctx.stroke();
}

function drawText(ctx, obj){
    ctx.font = obj.font || '14px Arial';
    ctx.textAlign = obj.textAlign || "left";
    ctx.textBaseline = obj.textBaseline || "bottom";
    ctx.fillText(obj.text, obj.x,  obj.y);
}

function drawReact(ctx, obj){
    ctx.beginPath();
    ctx.rect(obj.x, obj.y, obj.width, obj.height);
    ctx.closePath();
    ctx.fillStyle = obj.fillStyle;
    ctx.fill();
}

function drawSlice(ctx,obj) {
    ctx.beginPath();
    ctx.arc(obj.center.x, obj.center.y, obj.radius, obj.startAngle, obj.endAngle);
    ctx.lineTo(obj.center.x, obj.center.y);
    ctx.closePath();
    ctx.fillStyle = obj.color;
    ctx.fill();
}


/* when the DOM is ready*/
function documentReady(e){

    var players = [];

    var playerWorst = {};
    var playerBest = {};
    var mexicans = [];

    var maxScore = 1000;
   
    var categoryAplha = [];
    var categoryBeta = [];
    var categoryCharlie = [];
    var categoryDelta = [];
    var categoryEcho = [];

    var categories = [categoryAplha, categoryBeta, categoryCharlie, categoryDelta, categoryEcho];
    var categoriesNames = ["Alpha","Beta","Charlie","Delta","Echo"];

    /* format the data */
    var formatData = function(data){

        /* add the score property */
        players = data.map(function(el, key){
            var newEl = Object.create(el);
            newEl.score = Math.floor(Math.random() * maxScore);
            return newEl;
        })

        /* sort them by score */
        players.sort(function(objA,objB){
            return objA.score - objB.score;
        })
       
        playerWorst = players[0];
        playerBest = players[players.length-1];

        mexicans = players.filter(function(el, key){
            return el.country == "Mexico";
        })

        players.forEach(function(player){
            if(player.score >= 800 ){
                categoryAplha.push(player);
            } else if( player.score >= 600) {
                categoryBeta.push(player);
            } else if( player.score >= 400) {
                categoryCharlie.push(player);
            } else if( player.score >= 200) {
                categoryDelta.push(player);
            } else {
               categoryEcho.push(player);
            } 
        })
        // start to draw the chart when all the data are formated
        //drawChart();
        drawPieChart();
    }

    var monCanvas = document.getElementById("monCanvas");
        monCanvas.width = 800; //window.innerWidth;
        monCanvas.height = 600; //window.innerHeight;

    var context = monCanvas.getContext("2d");

    var offsetChart = 50;
/*      var chartWidth = monCanvas.width - offsetChart;
    var chartHeight = monCanvas.height - offsetChart;


    var drawChart = function(){

        // LINES CHART
        drawLine(context, {
            start : { x :offsetChart, y : offsetChart },
            end : { x :offsetChart, y : chartHeight },
        })

        drawLine(context, {
            start : { x :offsetChart, y : chartHeight },
            end : { x :chartWidth, y : chartHeight },
        })

        // GRADUATION 
        var numberGraduationY = 10;
        var garuationSteps = chartHeight / ( numberGraduationY + 1);
        var lineWidth = 10;

        for (var i = 0; i < numberGraduationY + 1; i++) {
            // lines of the graduation
            drawLine(context, {
                start : { x :offsetChart - lineWidth, y : (offsetChart+1) + i * garuationSteps },
                end : { x :offsetChart, y :  (offsetChart+1) + i * garuationSteps },
            })
            // text of the graduation
            drawText(context, {
                font : '14px Arial',
                textAlign : "right",
                textBaseline : "middle",
                text : (numberGraduationY - i) * numberGraduationY,
                x : offsetChart - (lineWidth*2),
                y : (offsetChart+1) + i * garuationSteps
            })
        }

        // RECTAGLES

        categories.forEach(function(category, key){

            var gutter = 20;
            var stepWidth = (chartWidth-offsetChart) / categories.length;
            var width = stepWidth - gutter;
            var height = (chartHeight/players.length) * category.length;

            drawReact(context, {
                x : offsetChart + (gutter/2) + stepWidth * key,
                y : chartHeight - height,
                width : width,
                height : height,
                fillStyle : randomColor()
            })
            // text of the graduation
            drawText(context, {
                font : '14px Arial',
                textAlign : "center",
                textBaseline : "middle",
                text : categoriesNames[key],
                x : offsetChart + (gutter/2) +( stepWidth * key) + (width / 2),
                y : chartHeight - height - gutter,
            })


        })
    }
*/
    var legendWidth = monCanvas.width * 0.2;
    var pieHeight = monCanvas.height - (2 * offsetChart);
    var pieWidth = monCanvas.width - legendWidth - (2 * offsetChart);

    drawLine(context, {
        start : { x : pieWidth + offsetChart, y : offsetChart},
        end : { x : pieWidth + offsetChart, y : monCanvas.height - offsetChart}
    });

    var drawPieChart = function() {

        var PI = Math.PI;
        var center = {
            x : pieWidth / 2,
            y : pieHeight / 2 + offsetChart
        }
        var radius = (pieWidth < pieHeight) ? pieWidth / 2 : pieHeight / 2;

        var nbTotalPlayers = players.length;
        var startAngle = 0;
        var endAngle = 0;
        categories.sort().forEach(function(category, key) {
            var color = randomColor();
            startAngle = endAngle;
            endAngle = startAngle + (2 * PI) * (category.length / nbTotalPlayers);
            drawSlice(context, {
                center : center,
                radius : radius,
                startAngle : startAngle,
                endAngle : endAngle,
                color : color
            });

            /* legende */
            var sizeSquare = 10;
            var heightCell = monCanvas.height / (categories.length + 1);
            var offsetLegend = 50;
            var offsetTextLegend = 30;
            var positionSquare = {
                x : pieWidth + offsetChart + offsetLegend,
                y : heightCell * (key + 1)
            }
            drawReact(context,{
                x : positionSquare.x,
                y : positionSquare.y,
                width : sizeSquare,
                height : sizeSquare,
                fillStyle : color
            })
            drawText(context, {
                text : categoriesNames[key],
                x : positionSquare.x + offsetTextLegend,
                y : positionSquare.y + sizeSquare
            })

        })
    }

    /* Get the data */
    ajax({
        url : "data.json",
        success : function(data, request) {
            formatData(data);
        },
        error : function(msg, request){
            console.log(data)
            console.log(request)
        }
    })

}

window.addEventListener("DOMContentLoaded", documentReady);