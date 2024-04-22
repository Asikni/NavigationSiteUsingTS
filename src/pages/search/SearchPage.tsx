import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
  const data = useLoaderData(); //whatever we get from loader can be used here

  console.log(data);

  return <div>Search Page</div>;
}
