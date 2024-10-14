import "./fetchProjects";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <div className='projects-center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className='projects'>
      <div className='projects-title'>
        <h2 className='title'>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map(({ image, url, title, alt }) => {
          return (
            <article className='project'>
              <a href={url}>
                <img src={image} alt={alt} className='img' />
                <h5>{title}</h5>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
