import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workExperiences, educationItems, skills, certifications } from "@/components/resume/resumeData";
export default function Wikipedia() {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Wikipedia Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-serif">Johnson T</h1>
          <p className="text-muted-foreground mt-1">From Wikipedia, the free encyclopedia</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Opening Paragraph */}
            <div className="prose prose-sm max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>Johnson T</strong> is an Indian educator and software developer who transitioned from a successful teaching career in chemistry and science to the technology sector. With over 9 years of experience in education and emerging expertise in full-stack development, Johnson represents a growing trend of professionals adapting to the digital economy.
              </p>
            </div>

            {/* Table of Contents */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Contents</h3>
                <ol className="space-y-1 text-sm">
                  <li><a href="#early-life" className="text-primary hover:underline">1 Early life and education</a></li>
                  <li><a href="#teaching-career" className="text-primary hover:underline">2 Teaching career</a></li>
                  <li><a href="#transition-to-tech" className="text-primary hover:underline">3 Transition to technology</a></li>
                  <li><a href="#technical-skills" className="text-primary hover:underline">4 Technical skills and certifications</a></li>
                  <li><a href="#notable-projects" className="text-primary hover:underline">5 Notable projects</a></li>
                  <li><a href="#references" className="text-primary hover:underline">6 References</a></li>
                </ol>
              </CardContent>
            </Card>

            {/* Early Life and Education */}
            <section id="early-life">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">Early life and education</h2>
              <div className="prose prose-sm max-w-none space-y-4">
                <p>Johnson completed his foundational education at Government Higher Secondary School, Sadayampatti, where he demonstrated early academic excellence in science subjects. His educational journey progressed through a structured path focusing on chemistry and related sciences.</p>
                <p>
                  He pursued his undergraduate studies at H.H. The Rajah's College, Pudukkottai, earning a Bachelor of Science degree in Chemistry. Building on this foundation, he completed his Master of Science in Chemistry at Bishop Heber College, Trichy, one of the region's respected institutions for higher learning in sciences.
                </p>
                <p>Recognizing his passion for education, Johnson obtained his Bachelor of Education (B.Ed) from Mother Teresa College of Education, Illuppur, preparing him for a career in teaching and educational leadership.</p>
              </div>
            </section>

            {/* Teaching Career */}
            <section id="teaching-career">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">Teaching career</h2>
              <div className="prose prose-sm max-w-none space-y-4">
                <p>Johnson's teaching career spanned nearly a decade, during which he served at multiple educational institutions across Tamil Nadu, primarily in the Chennai and Pudukkottai regions.</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Early career (2015-2018)</h3>
                <p>
                  He began his professional teaching career simultaneously at two institutions in Pattabiram, Chennai. At Infant Jesus Matriculation Higher Secondary School, he taught Chemistry and Science to students in classes IX through XII, while concurrently serving at Good Shepherd Matriculation Higher Secondary School, where he expanded his expertise to include Biochemistry instruction across classes VIII to XII.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Advanced career and recognition (2018-2024)</h3>
                <p>From 2018 to 2024, Johnson served at Mount Zion Matriculation Higher Secondary School, with positions in both Pattabiram and Pudukkottai. During this period, he focused primarily on Chemistry education for classes VI to VIII, while also taking on additional responsibilities in curriculum development and extracurricular activities.</p>
                <p>
                  His innovative teaching methodologies and dedication to student development were recognized in 2019 when he received the Teacher of the Year honors. He successfully organized science fairs that enhanced practical learning experiences for students and fostered scientific curiosity among the student body.
                </p>
              </div>
            </section>

            {/* Transition to Technology */}
            <section id="transition-to-tech">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">Transition to technology</h2>
              <div className="prose prose-sm max-w-none space-y-4">
                <p>In 2024, Johnson made a strategic career transition from education to the technology sector, recognizing the growing opportunities in software development and digital solutions. This transition represents part of a broader trend of professionals from traditional fields entering the tech industry.</p>
                <p>
                  His approach to this career change involved systematic skill development through structured learning programs and practical project implementation. The analytical and problem-solving skills developed during his scientific education and teaching career provided a strong foundation for programming and software development concepts.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section id="technical-skills">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">Technical skills and certifications</h2>
              <div className="prose prose-sm max-w-none space-y-4">
                <p>Johnson has developed proficiency in multiple programming languages and frameworks essential for modern web development:</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Programming languages and frameworks</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                  {skills.map((skill, index) => <Badge key={index} variant="secondary" className="justify-center py-1">
                      {skill.name}
                    </Badge>)}
                </div>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Professional certifications</h3>
                <ul className="list-disc list-inside space-y-1">
                  {certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                </ul>
              </div>
            </section>

            {/* Notable Projects */}
            <section id="notable-projects">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">Notable projects</h2>
              <div className="prose prose-sm max-w-none space-y-4">
                <p>As part of his professional development in software engineering, Johnson has completed several significant projects that demonstrate his growing expertise in full-stack development:</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">E-Commerce Platform</h3>
                <p>
                  Developed a comprehensive e-commerce solution using React.js, demonstrating understanding of modern frontend frameworks, user interface design, and commercial web application development. This project showcased skills in component-based architecture and state management.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Educational Technology Integration</h3>
                <p>Leveraging his background in education, Johnson has worked on projects that bridge traditional teaching methodologies with modern technology solutions, contributing to the digital transformation of educational practices.</p>
              </div>
            </section>

            {/* References */}
            <section id="references">
              <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">References</h2>
              <div className="prose prose-sm max-w-none">
                <ol className="space-y-2 text-sm">
                  <li>Professional Resume and Career Documentation, Johnson</li>
                  <li>Educational Institution Records, Mount Zion Matriculation Higher Secondary School</li>
                  <li>Teacher of the Year Recognition, 2019</li>
                  <li>Technical Certification Records, Various Educational Platforms</li>
                </ol>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-4 space-y-4">
                {/* Professional Photo */}
                <div className="w-full aspect-[3/4] rounded border overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/dQ741Z2x/Firefly-20250216210550.png" 
                    alt="Professional photo of Johnson T"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info Box */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-center">Johnson T</h3>
                  
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      <tr>
                        <td className="font-medium text-muted-foreground">Occupation</td>
                        <td>Educator, Software Developer</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-muted-foreground">Education</td>
                        <td>M.Sc. Chemistry, B.Ed</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-muted-foreground">Years active</td>
                        <td>2015–present</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-muted-foreground">Known for</td>
                        <td>Educational innovation, Career transition to tech</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-muted-foreground">Awards</td>
                        <td>Teacher of the Year (2019)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Education Timeline */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Education</h4>
                  <div className="space-y-2 text-sm">
                    {educationItems.map((edu, index) => <div key={index} className="border-l-2 border-primary/20 pl-3">
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-muted-foreground text-xs">{edu.institution}</div>
                        <div className="text-muted-foreground text-xs">{edu.period}</div>
                      </div>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}