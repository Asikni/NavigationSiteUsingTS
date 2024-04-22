import { searchPackages } from "../../api/queries/searchPackages";

export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await searchPackages(term);

  return {
    searchResults: results,  //this is if we have more than one loader request that is returning something that is other than results
    //so we return as objects.
  };
}
