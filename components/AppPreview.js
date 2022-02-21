import Link from "next/link";
import { DiPostgresql, DiReact, DiPython } from "react-icons/di";

export const AppPreview = ({ app }) => {
  const icons = {
    react: <DiReact />,
    postgress: <DiPostgresql />,
    python: <DiPython />,
  };
  function render(type) {
    if (!icons[type]) return false;
    const icon = icons[type];
    return icon;
  }
  return (
    <div className="flex flex-col bg-white rounded-lg shadow ">
      {/* top header  */}
      <Link href={`/apps/${app.filePath.replace(/\.mdx?$/, "")}`}>
        <a className="group relative py-4 px-2 space-y-2 bg-blue-500  text-white font-extrabold text-center text-2xl rounded-t-lg hover:bg-blue-400">
          <span className=" group-hover:bg-blue-400 absolute -bottom-3 inset-x-0  bg-blue-500 h-5  transform skew-y-2"></span>

          {/* icons  */}

          {app.data.technologies && (
            <div className="absolute -top-7  right-0 flex justify-center space-x-1 ">
              {app.data.technologies.map((technologie, index) => (
                <div key={index} className="bg-blue-700 p-2 rounded-lg">
                  {render(technologie.name)}
                </div>
              ))}
            </div>
          )}
          {/* title  */}

          <h3 className="transform translate-y-1 group-hover:-translate-y-0  transition duration-200">
            {app.data.title}
          </h3>
        </a>
      </Link>
      {/* content  */}
      <div className="h-full flex flex-col p-6 space-y-8">
        <p className="flex-grow">{app.data.description}</p>
        <a className="block">Learn More</a>
      </div>
    </div>
  );
};
