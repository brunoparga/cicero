import { signin } from "./signin";

// setup
const url = "api.foo.com";
const email = "bar@baz.com";
const password = "quuxcorge";
const formData = { email, password, confirmPassword: password };
const responseData = { email, token: "someJSONWebToken" };
const dispatch = jest.fn();

beforeEach(() => {
  const json = (jest
    .fn()
    .mockResolvedValue(responseData) as unknown) as Response;

  jest.spyOn(global, "fetch").mockResolvedValue({ json });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("calls the API", async () => {
  await signin(url, formData, dispatch);

  const expectedFetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  expect(fetch.mock.calls[0]).toEqual([url, expectedFetchOptions]);
});

it("stores user information in local storage", async () => {
  await signin(url, formData, dispatch);

  expect(localStorage.getItem("email")).toEqual(email);
  expect(localStorage.getItem("token")).toEqual("someJSONWebToken");
});

it("calls the correct action to sign the user up", async () => {
  await signin(url, formData, dispatch);

  expect(dispatch).toHaveBeenCalledWith({
    type: "SIGN_IN",
    payload: { email },
  });
});
