import {createCookieSessionStorage} from "@remix-run/node";
import {createThemeSessionResolver} from "remix-themes";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain: process.env.NODE_ENV !== "development" ? "fooURL" : undefined,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "development" ? false : true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
