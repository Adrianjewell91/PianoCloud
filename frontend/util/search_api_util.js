export const doSearch = (query) => {
  return $.ajax({
    method: "GET",
    url: "/search",
    data: {query: query}
  })
};
