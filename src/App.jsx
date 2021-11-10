import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const emissionsData = [
  {
    type: "Facilities",
    emissions: 22.38,
  },
  { type: "Operations", emissions: 67.13 },
  { type: "Transport", emissions: 111.88 },
];

const state = {
  labels: ["Facilties", "Operations", "Transport"],

  datasets: [
    {
      label: "Emissions By Type",
      backgroundColor: ["#FFEE52", "#FFC251", "#FF6C52"],
      hoverBackgroundColor: ["#FFEE53", "#FFC252", "#FF9C53"],
      data: [22.38, 67.13, 111.88],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h2 className="chart-title">Emissions By Type</h2>
      <div className="emissions-type-container">
        {emissionsData.map((type) => {
          return (
            <div className="emission-type">
              <p className="emission-detail">{type.type}</p>
              <p className="emission-subdetail">{type.emissions}</p>
            </div>
          );
        })}
      </div>
      <div className="chart-container">
        <div className="chart">
          <Pie
            data={state}
            options={{
              plugins: {
                datalabels: {
                  display: true,
                  color: "black",
                  align: "end",
                  anchor: "end",
                  font: { size: "14" },
                },
                legend: {
                  display: true,
                  position: "top",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
