import { authhMiddleware } from "@clerk/nextjs";

export default authhMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


