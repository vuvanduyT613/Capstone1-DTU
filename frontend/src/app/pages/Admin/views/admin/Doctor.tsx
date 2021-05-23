import React from 'react';
// components
import CardDoctor from '../../components/Cards/CardMain ';

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardDoctor
            button={'ADD DOCTOR'}
            column={['Name', 'Age', 'Address', 'Phone', 'Email', '']}
            index={5}
          />
        </div>
      </div>
    </>
  );
}
