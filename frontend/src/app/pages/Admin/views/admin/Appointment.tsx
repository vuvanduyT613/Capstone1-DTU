import React from 'react';
// components
import CardPatient from '../../components/Cards/CardMain ';

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardPatient
            button={'ADD APPOINTMENT'}
            column={[
              'Appointment ID',
              'Patient Name',
              'Age',
              'DoctorName',
              'Department',
              'Appointment Date',
              'Appointment Time',
              'Status',
              'Action',
            ]}
            index={5}
          />
        </div>
      </div>
    </>
  );
}
