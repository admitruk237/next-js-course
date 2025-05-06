import course from './course.json';

export default function Home() {
  return (
    <main>
      <ul className="text-center mt-20">
        {course.lessons.map((lesson) => {
          return (
            <li className="mb-10" key={lesson.name}>
              <h2 className="font-bold">{lesson.title}</h2>
              <p>{lesson.shortSummary}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
