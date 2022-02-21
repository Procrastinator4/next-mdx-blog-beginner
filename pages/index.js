import matter from "gray-matter";
import path from "path";
import fs from "fs";
import Hero from "../components/Hero";
import { AppPreview } from "../components/AppPreview";

const Home = ({ apps }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <Hero />
        {/* show sample apps in grid  */}
      </div>

      {/* show sample apps in grid  */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">Sample Apps</h2>
          <div className="grid grid-cols-3 gap-8">
            {apps.map((apps, index) => (
              <AppPreview app={apps} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
export function getStaticProps() {
  const appPath = path.join(process.cwd(), "apps");
  const postFilePaths = fs
    .readdirSync(appPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
  const apps = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(appPath, filePath));
    const { content, data } = matter(source);
    // console.log(content, data);
    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { apps } };
}
