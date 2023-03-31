import { PieChart as ChartNew } from "react-minimal-pie-chart";

const PieChart = ({ onAverage = 60, aboveAverage = 25, belowAverage = 15 }) => {
  return (
    <>
      <div className="h-full flex items-center justify-start">
        <div className="w-full h-full">
          <ChartNew
            animationDuration={2500}
            lineWidth={15}
            className="w-full"
            startAngle={-90}
            data={[
              { value: onAverage, color: "#0065FF" },
              { value: aboveAverage, color: "#ec4c47" },
              { value: belowAverage, color: "#f7d154" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col w-3/6 h-full items-start justify-center pl-10">
        <div className="font-inter font-bold text-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-bright-blue rounded-full mr-2" />
          <p>Na média</p>
          <p className="font-inter font-normal text-xs ml-2 text-light-gray">
            {onAverage}%
          </p>
        </div>
        <div className="font-inter font-bold text-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-blood-red rounded-full mr-2" />
          <p>Acima da média</p>
          <p className="font-inter font-normal text-xs ml-2 text-light-gray">
            {aboveAverage}%
          </p>
        </div>
        <div className="font-inter font-bold text-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-banana-yellow rounded-full mr-2" />
          <p>Abaixo da média</p>
          <p className="font-inter font-normal text-xs ml-2 text-light-gray">
            {belowAverage}%
          </p>
        </div>
      </div>
    </>
  );
};

export default PieChart;
