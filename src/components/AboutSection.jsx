import { BriefcaseBusiness, School } from "lucide-react"

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-5xl text-primary font-bold mb-12 text-center'>
          About Me
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 p-6 card-hover gradient-border rounded-2xl'>
            <h3 className='text-3xl font-semibold'>Software Engineer</h3>
            <p className='text-lg text-muted-foreground'>
              Passionate developer with expertise in building scalable web and mobile applications, 
              solving complex problems, enhancing system performance and delivering high-quality 
              software that drives business success. Committed to continuous learning and staying 
              up-to-date with emerging technologies.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>
              <a 
                href='MyoLinCV.pdf' 
                target='_blank'
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                Download CV
              </a>
            </div>
          </div>

          <div className='p-6 card-hover gradient-border text-left rounded-2xl'>
            <div className='flex gap-4'>
              <School size={40} />
              <h3 className='text-3xl font-bold mb-6'>Education</h3>
            </div>
            <ul className='list-disc list-inside text-lg text-muted-foreground space-y-2'>
              <li>DePaul University (2022-2025)</li>
              <li>M.S in Software Engineering</li>
              <li>Cumulative GPA: 4.0/4.0</li>
              <li>
                Relevant Coursework: Data Structures and Algorithms, Distributed System, Software Testing and Quality Assurance, DevOps,
                Android and iOS Development, Database System, Agile Software Development, Artificial Intelligence, Managing Global
                Software Development
              </li>
            </ul>
          </div>
        </div>  

        <div className='grid grid-cols-1 mt-6 text-left'>
          <div className='p-6 card-hover gradient-border rounded-2xl'>
            <div className='flex gap-4'>
              <BriefcaseBusiness size={40} />
              <h3 className='text-3xl font-bold mb-6'>Work Experience</h3>
            </div>
            <div className='space-y-4 text-lg text-muted-foreground'>
              <div>
                <h4 className='text-xl'>BORAAM INDUSTRIES (April 2023 - March 2025)</h4>
                <p>- Software Engineer | Frontend: React | Backend: Java Spring Boot | Technologies: Docker, Jenkins, AWS</p>
              </div>
              <div>
                <h4 className='text-xl'>MYANMAR LIQUIFIED PETROLEUM GAS GROUP (MLPG) (Oct 2019 - July 2022)</h4>
                <p>- Software Engineer | Backend: Java Spring Boot | Technologies: Docker, Jenkins, AWS</p>
              </div>
              <div>
                <h4 className='text-xl'>OPTIMISER (Aug 2018 - Aug 2019)</h4>
                <p>- Android Developer</p>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </section>
  );
}

export default AboutSection
