import Counter from "./CreateCounter";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                      transition-all duration-300
                      hover:border-indigo-500/40
                      hover:-translate-y-2
                      hover:shadow-lg hover:shadow-indigo-500/10">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
          <Counter target={95} suffix="%" />
        </h3>
        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Average Productivity Gain
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                      transition-all duration-300
                      hover:border-indigo-500/40
                      hover:-translate-y-2
                      hover:shadow-lg hover:shadow-indigo-500/10">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
          <Counter target={200} suffix="+" />
        </h3>
        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Solutions Deployed
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                      transition-all duration-300
                      hover:border-indigo-500/40
                      hover:-translate-y-2
                      hover:shadow-lg hover:shadow-indigo-500/10">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
          <Counter target={100} suffix="%" />
        </h3>
        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Happy Clients
        </p>
      </div>

    </div>
  );
};

export default Stats;
