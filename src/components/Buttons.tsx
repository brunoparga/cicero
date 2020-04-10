import React from 'react';

export default (
  { items }: { items: string[] },
) => <>{items.map((item) => <button type="button">{item}</button>)}</>;
