'use client';

import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./some-component'), {
  ssr: false,
});

export default function ClientWrapper() {
  return <DynamicComponent />;
}
