
export type Params = "isUsers" | "isSearch" | "isUser";
/**
 * Класс для построения URL.
 */
class UrlBuilder {
  private baseUrl: string;

  /**
   * Конструктор класса UrlBuilder.
   * @param {string} baseUrl - Базовый URL.
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Метод для построения URL для списка пользователей.
   * @returns {URL} - Построенный URL.
   */
  buildUsersUrl(): URL {
    return new URL("/users", this.baseUrl);
  }

  /**
   * Метод для построения URL для поиска пользователей.
   * @param {string} value - Значение для поиска.
   * @returns {URL} - Построенный URL.
   */
  buildSearchUrl(value: string): URL  {
    if (value.length === 0) {
      return this.buildUsersUrl();
    }
    const url = new URL("/users/search", this.baseUrl);
    url.searchParams.set("q", encodeURIComponent(value));
    return url;
  }

  /**
   * Метод для построения URL для конкретного пользователя.
   * @param {string | number} userId - Идентификатор пользователя.
   * @returns {URL} - Построенный URL.
   */
  buildUserUrl(userId: string | number ): URL {
    return new URL(`/users/${userId}`, this.baseUrl);
  }
}

/**
 * Класс для управления построением URL на основе параметров.
 */

class UrlDirector {
  private urlBuilder: UrlBuilder;

  /**
   * Конструктор класса UrlDirector.
   * @param {UrlBuilder} urlBuilder - Экземпляр класса UrlBuilder.
   */
  constructor(urlBuilder: UrlBuilder) {
    this.urlBuilder = urlBuilder;
  }

  /**
   * Метод для построения URL на основе параметров и значения.
   * @param {Params} params - Параметр для построения URL.
   * @param {string | number | null | undefined} value - Значение для построения URL.
   * @returns {URL} - Построенный URL.
   * @throws {Error} - Выбрасывает ошибку, если передан неверный параметр или отсутствует значение.
   */

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
