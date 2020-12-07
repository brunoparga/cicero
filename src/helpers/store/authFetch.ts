// eslint-disable-next-line no-undef
export const authFetch = (url: RequestInfo, opts: RequestInit): Promise<Response> => fetch(url, {
  ...opts,
  headers: {
    ...opts.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
