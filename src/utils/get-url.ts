export type Params = "isUsers" | "isSearch" | "isUser";

class UrlBuilder {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  buildUsersUrl(): URL {
    return new URL("/users", this.baseUrl);
  }

  buildSearchUrl(value: string): URL  {
    if (value.length === 0) {
      return this.buildUsersUrl();
    }
    const url = new URL("/users/search", this.baseUrl);
    url.searchParams.set("q", encodeURIComponent(value));
    return url;
  }

  buildUserUrl(userId: string | number ): URL {
    return new URL(`/users/${userId}`, this.baseUrl);
  }
}

class UrlDirector {
  private urlBuilder: UrlBuilder;

  constructor(urlBuilder: UrlBuilder) {
    this.urlBuilder = urlBuilder;
  }

  constructUrl(params: Params, value?: string | number | null): URL {
    switch (params) {
      case "isUsers":
        return this.urlBuilder.buildUsersUrl();
      case "isSearch":
        if (value) {
          return this.urlBuilder.buildSearchUrl(value.toString());
        }
        break;
      case "isUser":
        if ( value ) {
          return this.urlBuilder.buildUserUrl(value);
        }
        break;
      default:
        throw new Error("Invalid parameter");
    }

    throw new Error("Value is required for isSearch and isUser parameters");
  }
}


const baseUrl = "https://dummyjson.com";
const urlBuilder = new UrlBuilder(baseUrl);
export const urlDirector = new UrlDirector(urlBuilder);
