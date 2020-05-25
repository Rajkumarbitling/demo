$(document).ready(function(){
    // on click Sign In Button checks that username =='admin' and password == '123456'
    $("#login").click(function(){
    if( $("#loginusername").val()=='admin' && $("#loginpassword").val()=='123456') {
        $.session.set('username','admin');
        window.location = "./index.html";
            $( "#login-check" ).replaceWith( "<a href='#' id='logout'> Logout</a>" );
        }
    else {
        alert("Please try again");
    }

});

$("#logout").click(function() {
    $.session.clear();
    window.location = "./login.html";
$("form")[0].reset();
});

});

// Session handling start
(function($){$.session={_id:null,_cookieCache:undefined,_init:function(){if(!window.name){window.name=Math.random();}this._id=window.name;this._initCache();var matches=(new RegExp(this._generatePrefix()+"=([^;]+);")).exec(document.cookie);if(matches&&document.location.protocol!==matches[1]){this._clearSession();for(var key in this._cookieCache){try{window.sessionStorage.setItem(key,this._cookieCache[key]);}catch(e){};}}document.cookie=this._generatePrefix()+"="+document.location.protocol+';path=/;expires='+(new Date((new Date).getTime()+120000)).toUTCString();},_generatePrefix:function(){return'__session:'+this._id+':';},_initCache:function(){var cookies=document.cookie.split(';');this._cookieCache={};for(var i in cookies){var kv=cookies[i].split('=');if((new RegExp(this._generatePrefix()+'.+')).test(kv[0])&&kv[1]){this._cookieCache[kv[0].split(':',3)[2]]=kv[1];}}},_setFallback:function(key,value,onceOnly){var cookie=this._generatePrefix()+key+"="+value+"; path=/";if(onceOnly){cookie+="; expires="+(new Date(Date.now()+120000)).toUTCString();}document.cookie=cookie;this._cookieCache[key]=value;return this;},_getFallback:function(key){if(!this._cookieCache){this._initCache();}return this._cookieCache[key];},_clearFallback:function(){for(var i in this._cookieCache){document.cookie=this._generatePrefix()+i+'=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';}this._cookieCache={};},_deleteFallback:function(key){document.cookie=this._generatePrefix()+key+'=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';delete this._cookieCache[key];},get:function(key){return window.sessionStorage.getItem(key)||this._getFallback(key);},set:function(key,value,onceOnly){try{window.sessionStorage.setItem(key,value);}catch(e){}this._setFallback(key,value,onceOnly||false);return this;},'delete':function(key){return this.remove(key);},remove:function(key){try{window.sessionStorage.removeItem(key);}catch(e){};this._deleteFallback(key);return this;},_clearSession:function(){try{window.sessionStorage.clear();}catch(e){for(var i in window.sessionStorage){window.sessionStorage.removeItem(i);}}},clear:function(){this._clearSession();this._clearFallback();return this;}};$.session._init();})(jQuery);
// Session handling end

// Pie chart

Highcharts.chart('pie-chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Sales of hardware and softwares for year 2020'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Hardware',
        y: 61.00,
        sliced: true,
        selected: true
      }, {
        name: 'Software',
        y: 39.00
      }]
    }]
  });

//   Bar chart

Highcharts.chart('bar-chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Yearly Sales Data'
    },
    xAxis: {
      categories: ['Hard Drives', 'Monitors', 'Keyboards']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Sale'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: '2018',
      data: [5, 3, 4]
    }, {
      name: '2019',
      data: [2, 2, 3]
    }, {
      name: '2020',
      data: [3, 4, 4]
    }]
  });

//   TableData

var dataSet = [
    {"Device":"Sony Vaio Laptop", "Date":"21/02/2020", "Price":"34,500"},
    {"Device":"Hard drive", "Date":"13/01/2020", "Price":"4,700"},
    {"Device":"Microsoft Windows 10 Software", "Date":"05/05/2020", "Price":"1,050"},
    {"Device":"Adobe Photoshop Software", "Date":"18/02/2020", "Price":"1,500"},
    {"Device":"Sansdisk pendrive", "Date":"08/03/2020", "Price":"800"},
    {"Device":"Hp Compaq laptop", "Date":"26/04/2020", "Price":"48,250"},
    {"Device":"Microsoft Windows 10 Software", "Date":"07/01/2020", "Price":"1,050"},
]

    $('#datatable').DataTable( {
        data: dataSet,
        columns: [
            { data: 'Device' },
            { data: 'Date' },
            { data: 'Price' }
        ]
    } );