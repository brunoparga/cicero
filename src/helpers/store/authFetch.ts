// eslint-disable-next-line no-undef
export const authFetch = (
  url: RequestInfo,
  options: RequestInit
): Promise<Response> =>
  fetch(url, {
    ...options,

    headers: {
      ...options.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
