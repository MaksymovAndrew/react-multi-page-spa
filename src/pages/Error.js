import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return <>
  <MainNavigation />
  <main>
    <h1>An Error ocurred!</h1>
    <p>The page you requested could not be found.</p> 
  </main>
  </>
}