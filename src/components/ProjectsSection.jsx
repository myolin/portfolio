import { useState } from 'react';
import { iOSProjects, androidProjects, webProjects } from '@/data/ProjectsData';
import { cn } from '@/lib/utils'
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const categories = ["Web", "Android", "iOS"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web");
  const [projects, setProjects] = useState(webProjects);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'iOS') {
      setProjects(iOSProjects);
    } else if (category === 'Android') {
      setProjects(androidProjects);
    } else {
      setProjects(webProjects);
    }
    
  };

  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center text-primary'>
          Featured Projects
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my projects on different platform. Each project was carefully developed
          with attention to detail, performance and user experience.
        </p>

        <div className='flex flex-wrap justify-center gap-6 mb-12'>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => handleCategoryClick(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bd-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        { activeCategory === 'Web' && (
          <div className='mb-8'>
            <p className='text-xl text-red-500'>
              Please be patient while the demo URL loads — it's hosted on Render, so it might take a few minutes to start up the server.
            </p>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div
              key={key}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6 flex flex-col flex-grow'>
              <div className='mb-4'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                </div>

                <div className='mt-auto flex justify-between items-center pt-4'>
                  <div className='flex space-x-3'>
                    {project.demoUrl.length > 1 && 
                       ( <a
                            href={project.demoUrl}
                            target='_blank'
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                          >
                            <ExternalLink size={20} />
                          </a>
                        )                      
                    }
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))};
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://github.com/myolin' 
            target='_blank'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection
