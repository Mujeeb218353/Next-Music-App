import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import './styles/WhyChooseUs.scss';

const musicSchoolContent = [
  {
    title: "Personalized Instruction",
    description:
      "Embark on a musical journey tailored to your individual needs. Our experienced instructors provide personalized guidance, allowing you to explore your unique talents and reach your full potential. With our music academy, your passion for music meets expert mentorship.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Personalized Instruction
      </div>
    ),
  },
  {
    title: "Interactive Learning Experience",
    description:
      "Immerse yourself in an interactive learning environment that fosters creativity and engagement. Our music academy offers hands-on activities, collaborative projects, and live performances, allowing you to learn by doing and connect with fellow musicians.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white absolute">
        <Image
          src="https://www.eschoolnews.com/files/2021/03/online-music-education-tools.jpg"
          alt="Interactive Learning Experience"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Stay ahead of the curve with our cutting-edge curriculum designed to meet the demands of today's music industry. From music theory to performance techniques, our comprehensive program covers all aspects of music education, ensuring you have the skills and knowledge to succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Cutting-Edge Curriculum
      </div>
    ),
  },
  {
    title: "Expansive Resource Library",
    description:
      "Access a wealth of resources to support your musical journey. Our music academy provides a vast library of sheet music, recordings, tutorials, and more, giving you the tools you need to explore new genres, refine your skills, and broaden your musical horizons.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white absolute">
        <Image
          src="https://www.dublincity.ie/sites/default/files/styles/inline_image/public/2020-10/central-library-music-1024px.jpg.webp?itok=QJJMQUSV"
          alt="Expansive Resource Library"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    ),
  },
  {
    title: "Live Performances",
    description:
      "Experience the thrill of live music performances and showcase your talents on stage. Our music academy provides numerous opportunities for students to perform in concerts, recitals, and festivals, allowing you to share your passion for music with others.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--red-500))] flex items-center justify-center text-white">
        Live Performances
      </div>
    ),
  },
  {
    title: "Community Engagement",
    description:
      "Join a vibrant community of musicians and music enthusiasts. Our music academy fosters connections through workshops, masterclasses, and networking events, providing you with a supportive environment to grow and thrive as an artist.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] flex items-center justify-center text-white absolute">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/58609cf9bebafb6533a3d8be/1482757304032-6OVUMTKTHJV0GQUJ5K1A/image-asset.jpeg"
          alt="Community Engagement"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
