import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {
}

export default function PramsPage (props: ParamsPageProps) {
  const route = useRouter();
  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(route.query)}</p>
    </div>
  );
}
