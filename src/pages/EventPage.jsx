import Footer from "../components/Footer";
import useLenis from "../hooks/useLenis";
import { BackgroundOverlayCard } from "../components/BackgroundOverlayCard";

const events = [
  {
    title: "CodeClash 2024",
    href: "#",
    description:
      "Intense coding showdown as teams battled head-to-head, showcasing skill and innovation. A thrilling clash of minds in the ultimate coding contest! ",
    imageUrl:
      "https://codechefabesec.netlify.app/img/coc/1.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
  {
    title: "Rust - Ed",
    href: "#",
    description:
      "Rust-Ed was an event that brought together the Rust community to share knowledge, best practices, and innovations in building reliable, efficient software.",
    imageUrl:
      "https://codechefabesec.netlify.app/img/works/4/Rusted.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
  {
    title: "Once Upon A Crime",
    href: "#",
    description:
      "A 2-day murder mystery where participants used logic and code to crack puzzles, solve quizzes, and sharpen teamwork.",
    imageUrl:
      "https://codechefabesec.netlify.app/img/converted/crime.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
   {
    title: "T-Error 3.0",
    href: "#",
    description:
      "Debug with Style, Code with Flair – It's T-Error 3.0 That Takes You There!",
    imageUrl:
      "https://codechefabesec.netlify.app/img/t_error/1.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
   {
    title: "Byond Code",
    href: "#",
    description:
      "This session not only enhanced their understanding of technology but also fostered a sense of community among peers.",
    imageUrl:
      "https://codechefabesec.netlify.app/img/beyond_code/1.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
   {
    title: "Head Node",
    href: "#",
    description:
      "Dynamic exchange of knowledge and experience as seasoned seniors shared insights, answered queries, and guided juniors for a collaborative learning experience.",
    imageUrl:
      "https://codechefabesec.netlify.app/img/converted/headnode.webp",
    hoverImageUrl:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJjb3NqY21sYjY2aG1zZ3c3aGZ6Z3Z1c3NldWJrbjZ2eW54c3JqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
  },
];



export default function EventsPage() {
  useLenis();

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white text-black">
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <h1 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-orange-600">Events</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
          {events.map((event, index) => (
            <BackgroundOverlayCard key={index} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}