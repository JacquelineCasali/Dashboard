//  api dos dados
let cliente;
$.ajax({
  url: "https://randomuser.me/api/?results=500",
  dataType: "json",
  type: "GET",
  success: function (data) {
    cliente = data;
    console.log(data);
  },
});

// faz requisição fetch

function mostraGenero(dados) {
  const bodyEL = document.body;
  bodyEL.innerHTML = `<h1>${dados.gender}</h1>`;
}

fetch("https://randomuser.me/api/?results=500")
  // resposta
  // convertendo em json
  .then((resposta) => resposta.json())

  .then((resposta) => mostraGenero(resposta.gender))

  // error
  .catch((err) => {
    console.log(err);
  });

// grafico de area
var options = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  apexchartstoolbar: {
    show: false,
  },
  toolbar: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "",
  },
};
// grafico barra

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [
    {
      data: [18, 30, 25],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["South Korea", "Canada", "United Kingdom"],
  },
};

var chart = new ApexCharts(document.querySelector("#chartPais"), options);
chart.render();

var options = {
  series: [
    {
      data: [18, 30],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Feminino", "Masculino"],
  },
};

var idade = new ApexCharts(document.querySelector("#chartIdade"), options);
idade.render();

// grafico disco
var options = {
  series: [44, 20],
  chart: {
    width: 280,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#disc"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#disc2"), options);
chart.render();
