import { clerkMiddleware } from "@clerk/nextjs/server"
import { createRouteMatcher } from "@clerk/nextjs/server"

//const isAdminRoute = createRouteMatcher(["/admin(.*)"])
//(auth, req) => {
 //if (isAdminRoute(req)) auth().protect()
 // }
export default clerkMiddleware()

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}