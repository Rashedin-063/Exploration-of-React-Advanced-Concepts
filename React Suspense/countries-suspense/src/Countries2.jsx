import { Suspense } from "react";
import Time from "./Time";
import { ErrorBoundary } from "react-error-boundary";
import CountryList from "./CountryList";

const Countries2 = () => {
  return (
    <div>
      <h2>Countries with Time - Suspense & Error Boundaries</h2>

      <Suspense fallback={<p>Loading time...</p>}>
        <Time/>
      </Suspense>

      <ErrorBoundary fallback={<p>Something went wrong: fetching data</p>}>
        <Suspense fallback={<p>Loading countries...</p>}>
          <CountryList/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
export default Countries2