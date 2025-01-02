import baseURL from "./config/baseURL";
import { ApiResponse, Params } from "./type";

const apiClient = {
  get: async <T>(
    endpoint: string,
    params: Params = {}
  ): Promise<ApiResponse<T>> => {
    const url = new URL(baseURL + endpoint);
    console.log(url, endpoint, "api url");

    // Append query parameters to the URL
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key]))
    );

    try {
      const response = await fetch(baseURL + endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`GET request failed: ${response.status}`);
      }

      // Explicitly type the response
      return (await response.json()) as ApiResponse<T>;
    } catch (error) {
      console.error(`GET ${endpoint} failed:`, error);
      throw error;
    }
  },

  post: async <T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(baseURL + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`POST request failed: ${response.status}`);
      }

      return (await response.json()) as ApiResponse<T>;
    } catch (error) {
      console.error(`POST ${endpoint} failed:`, error);
      throw error;
    }
  },

  put: async <T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(baseURL + endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`PUT request failed: ${response.status}`);
      }

      return (await response.json()) as ApiResponse<T>;
    } catch (error) {
      console.error(`PUT ${endpoint} failed:`, error);
      throw error;
    }
  },
  delete: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(baseURL + endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`DELETE request failed: ${response.status}`);
      }

      return (await response.json()) as ApiResponse<T>;
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      throw error;
    }
  },
};

export default apiClient;
