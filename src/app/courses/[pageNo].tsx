// src/app/courses/[slug].tsx

import { useRouter } from 'next/router';

const CoursePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Course Details for {slug}</h1>
      {/* Fetch and render course details based on slug */}
    </div>
  );
};

export default CoursePage;
