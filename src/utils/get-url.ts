export type Params = "/users" | "/search";

export const urlParams = {
  users: "/users",
  search: "/users/search",
};

export const getUrl = (params: Params, value?: string) => {
  const baseUrl = 'https://dummyjson.com';
  const param = params === urlParams.users ? urlParams.users : urlParams.search;
  const url = new URL(param, baseUrl);

  if (params === urlParams.search && value) {
    url.searchParams.set('q', encodeURIComponent(value));
  }

  return url;
}
