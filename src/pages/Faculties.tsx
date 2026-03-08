import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import { User } from 'lucide-react';
import mukutKalitaImg from '@/assets/mukut-kalita.webp';

const facultyData = [
  { name: 'Dr. Mukut Kalita', subject: 'Chemistry', qualification: 'M.Sc, Ph.D', experience: '19 Years', image: mukutKalitaImg, details: 'Worked at Shrimanta Shankar Academy, Dispur; CIPET, Changsari; Anundoram Borooah Academy, Pathsala etc.' },
  { name: 'Sahjahan Ali', subject: 'Chemistry', qualification: 'B. Pharm', experience: '3 Years' },
  { name: 'Imran Choudhury', subject: 'Physics', qualification: 'M.Sc', experience: '5 Years' },
  { name: 'Bhaskar Deep Kashyap', subject: 'Assamese', qualification: 'MA, D.El.Ed.', experience: '15 Years' },
  { name: 'Firoza Begum', subject: 'Assamese', qualification: 'MA', experience: '26 Years' },
  { name: 'Kangkana Kundinya', subject: 'English', qualification: 'MA, B. Ed', experience: '5 Years' },
  { name: 'Mahananda Barua', subject: 'English', qualification: 'MA, B. Ed', experience: '25 Years' },
  { name: 'Mehdi Alam Mustafee', subject: 'Mathematics', qualification: 'M.Sc', experience: '7 Years' },
  { name: 'Khanindra Kalita', subject: 'Mathematics', qualification: 'M.Sc, B. Ed', experience: '5 Years' },
  { name: 'Sajidul Islam', subject: 'Zoology', qualification: 'M.Sc, B. Ed', experience: '3 Years' },
  { name: 'Parag Sarma', subject: 'Assamese', qualification: 'MA', experience: '10 Years' },
  { name: 'Kamal Jyoti Deka', subject: 'Political Science', qualification: 'MA, D.El.Ed.', experience: '9 Years' },
  { name: 'Nishigandha Kashyap', subject: 'Geography', qualification: 'MA, D.El.Ed.', experience: '5 Years' },
  { name: 'Sweety Deka', subject: 'Geography', qualification: 'MA', experience: '6 Years' },
  { name: 'Archana Deka', subject: 'Logic & Philosophy', qualification: 'MA, D.El.Ed.', experience: '6 Years' },
  { name: 'Sonia Nath', subject: 'Anthropology', qualification: 'MA', experience: '2 Years' },
  { name: 'Mitu Rani Bora', subject: 'Education', qualification: 'MA, D.El.Ed, B.Ed', experience: '6 Years' },
  { name: 'Jit Bhuyan', subject: 'Accountancy', qualification: 'M.Com', experience: '6 Years' },
  { name: 'Rakesh Deka', subject: 'Finance', qualification: 'M.Com', experience: '8 Years' },
];

const Faculties = () => {
  useScrollReveal();
  return (
    <>
      <PageHero title="Our Faculties" subtitle="Meet Our Dedicated Team" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.map((f, i) => (
              <div key={i} className="scroll-reveal flex flex-col bg-card rounded-xl shadow-md overflow-hidden">
                <div className="aspect-[3/4] bg-secondary flex items-center justify-center overflow-hidden">
                  {f.image ? (
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={64} className="text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-heading text-base font-bold text-foreground">{f.name}</h3>
                  <p className="text-orange text-sm font-medium mt-1">{f.subject}</p>
                  <p className="text-muted-foreground text-sm mt-1">{f.qualification}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1">Teaching Experience: {f.experience}</p>
                  {f.details && (
                    <p className="text-muted-foreground/60 text-xs mt-2 italic">{f.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculties;
