import { clerkMiddleware } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs";

export default clerkMiddleware();

export default authMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

