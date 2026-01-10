import Counter from "./CreateCounter";

const Stats = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-8 justify-center">
      <div>
        <Counter target={95} suffix="%" />
        <p className="text-sm text-gray-400">Average Productivity Gain</p>
      </div>

      <div>
        <Counter target={200} suffix="+"/>
        <p className="text-sm text-gray-400">Solutions Deployed</p>
      </div>

      <div>
        <Counter target={100} suffix="%"/>
        <p className="text-sm text-gray-400">Happy Clients</p>
      </div>
    </div>
  );
};

export default Stats;
