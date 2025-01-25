import { techStack } from "../constants";

const TechStack = () => {
  const githubIconUrl = "https://techstack-generator.vercel.app/github-icon.svg";
  // Divide the stack into chunks of 3 for each row
  const chunkedStack = techStack.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);

  return (
    <div className="space-y-8">
      {chunkedStack.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-12">
          {row.map((icon, iconIndex) => (
            <img
              key={iconIndex}
              src={icon}
              alt="icon"
              className={`w-16 h-16 ${icon === githubIconUrl ? "bg-white p-2 rounded-lg" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
