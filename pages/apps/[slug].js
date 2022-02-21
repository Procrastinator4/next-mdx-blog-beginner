import matter from "gray-matter";
import path from "path";
import fs from "fs";

export default function App({ app }) {
  console.log(app);
  const { data, content } = app;
  return (
    <div className="bg-slate-600">
      <div className="max-w-7xl  text-white">
        <span>Content:</span>
        <p>{content}</p>
        <span>Data:</span>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

// STEP: 1   i want you this many pages to generate
export async function getStaticPaths() {
  // get all the markdown files with mdx extenstion
  const appPath = path.join(process.cwd(), "apps");
  const appFilePaths = fs
    .readdirSync(appPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
  const paths = appFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  // pass it to the paths varaiable
  return {
    paths,
    fallback: false,
  };
}
// STEP: 2   for each individual page get this data
export async function getStaticProps({ params }) {
  const appPath = path.join(process.cwd(), "apps");
  const appFilePath = path.join(appPath, `${params.slug}.mdx`);

  // get a single page
  const source = fs.readFileSync(appFilePath);
  const { content, data } = matter(source);
  return { props: { app: { content, data } } };
}

// export const getStaticPaths = async () => {

//   const paths = postFilePaths
//     // Remove file extensions for page paths
//     .map((path) => path.replace(/\.mdx?$/, ""))
//     // Map the path into the static paths object required by Next.js
//     .map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
