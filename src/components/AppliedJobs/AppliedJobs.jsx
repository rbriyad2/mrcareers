import React from 'react';
import ApplyedJobsonly from '../ApplyedJobsonly/ApplyedJobsonly';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
  const alljobs = useLoaderData();

  // Get the IDs from local storage.
  const storedArray = JSON.parse(localStorage.getItem('applyedjobid'));

  let matchedJobs = []; // Initialize an empty array

  if (storedArray && storedArray.length > 0) {
    // Fetch the jobs data from your JSON file (jobs.json).

    // Filter the jobs based on the stored IDs.
    matchedJobs = alljobs.filter(job => storedArray.includes(job.id));
  }

  return (
    <div>
      {/* Pass the matchedJobs data as a prop to ApplyedJobsonly */}
      <ApplyedJobsonly matchedJobs={matchedJobs} />
      <Footer />
    </div>
  );
};

export default AppliedJobs;
