import rawHeroConferenceImg from '@/src/assets/images/sit_hero_conference.png';
import rawCurriculumResearchImg from '@/src/assets/images/sit_curriculum_showcase.png';
import rawPublicationBookImg from '@/src/assets/images/sit_school_students.png';
import rawWebinarTrainingImg from '@/src/assets/images/sit_tilawat_competition.png';
import rawPubIslamicStudiesImg from '@/src/assets/publications/sit_pub_islamic_studies_series.png';
import rawPubElementaryBooksImg from '@/src/assets/publications/sit_pub_elementary_books.png';
import rawPubQuranicLanguageImg from '@/src/assets/publications/sit_pub_quranic_language.png';
import rawPubOLevelImg from '@/src/assets/publications/sit_pub_olevel.png';
import rawPubTeachersGuideImg from '@/src/assets/publications/sit_pub_teachers_guide.png';
import rawPubLittleLightsImg from '@/src/assets/publications/sit_pub_little_lights.png';
import rawPubFeaturedBannerImg from '@/src/assets/publications/sit_pub_featured_banner.png';

const getImgSrc = (img: any, fallback: string): string => {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object' && 'src' in img && typeof img.src === 'string') return img.src;
  return fallback;
};

export const heroConferenceImg = getImgSrc(rawHeroConferenceImg, '/assets/images/sit_hero_conference.png');
export const curriculumResearchImg = getImgSrc(rawCurriculumResearchImg, '/assets/images/sit_curriculum_showcase.png');
export const publicationBookImg = getImgSrc(rawPublicationBookImg, '/assets/images/sit_school_students.png');
export const webinarTrainingImg = getImgSrc(rawWebinarTrainingImg, '/assets/images/sit_tilawat_competition.png');
export const pubIslamicStudiesImg = getImgSrc(rawPubIslamicStudiesImg, '/assets/publications/sit_pub_islamic_studies_series.png');
export const pubElementaryBooksImg = getImgSrc(rawPubElementaryBooksImg, '/assets/publications/sit_pub_elementary_books.png');
export const pubQuranicLanguageImg = getImgSrc(rawPubQuranicLanguageImg, '/assets/publications/sit_pub_quranic_language.png');
export const pubOLevelImg = getImgSrc(rawPubOLevelImg, '/assets/publications/sit_pub_olevel.png');
export const pubTeachersGuideImg = getImgSrc(rawPubTeachersGuideImg, '/assets/publications/sit_pub_teachers_guide.png');
export const pubLittleLightsImg = getImgSrc(rawPubLittleLightsImg, '/assets/publications/sit_pub_little_lights.png');
export const pubFeaturedBannerImg = getImgSrc(rawPubFeaturedBannerImg, '/assets/publications/sit_pub_featured_banner.png');

export interface CoreArea {
  id: string;
  name: string;
  shortName: string;
  description: string;
  scope: string;
}

export const SIT_CORE_AREAS: CoreArea[] = [
  {
    id: 'curriculum-development',
    name: 'Curriculum Development',
    shortName: 'Curriculum Development',
    description: 'Design and improvement of the integrated curriculum, learning sequence and guidance that connects Islamic learning with strong contemporary education.',
    scope: 'Integrated curriculum design, learning sequences, subject integration blueprints, and classroom implementation guidance.',
  },
  {
    id: 'advanced-research',
    name: 'Advanced Research',
    shortName: 'Advanced Research',
    description: 'Research that informs educational content, curriculum development, and responsible work across disciplines through evidence and classroom experience.',
    scope: 'Educational inquiry, review of content with relevant expertise, classroom observations, and pedagogical studies.',
  },
  {
    id: 'publication',
    name: 'Publication',
    shortName: 'Publication',
    description: 'Development and publication of books, teacher guides, and related learning materials supporting learning from the early years through higher school levels.',
    scope: 'Islamic Studies Series (Books 1–7), Elementary Books (1–3), Qur’anic Language Book, O Level book, and Teacher’s Guide.',
  },
  {
    id: 'it-technology',
    name: 'IT and Technology',
    shortName: 'IT and Technology',
    description: 'Digital tools, technology infrastructure, and software applications that support education, learning management, and organizational work.',
    scope: 'Digital educational platforms, modern computational resources, and IT tools that empower teaching and learning.',
  },
  {
    id: 'skill-development-training',
    name: 'Skill Development and Training',
    shortName: 'Skill Development & Training',
    description: 'Teacher development, IT skills such as web development, and language programmes including English, Arabic, Spanish, Japanese and German.',
    scope: 'Teacher pedagogy, curriculum implementation training, hands-on IT courses, and multi-language learning programmes.',
  },
  {
    id: 'media-communication',
    name: 'Media and Communication',
    shortName: 'Media and Communication',
    description: 'Educational video, children’s media including the Little Lights animated series, and clear communication of SIT’s educational work.',
    scope: 'Little Lights cartoon series, educational animations, Hadith lessons, and media resources for classrooms and families.',
  },
  {
    id: 'branding-marketing',
    name: 'Branding and Marketing',
    shortName: 'Branding and Marketing',
    description: 'Presentation, outreach, and institutional representation for the curriculum, publications, educational programmes, and school services.',
    scope: 'Curriculum presentation, school outreach, educational communication, and institutional partnerships.',
  },
  {
    id: 'consultancy',
    name: 'Consultancy',
    shortName: 'Consultancy',
    description: 'Educational and advisory services, including school curriculum adoption support and assistance with student application files for universities abroad.',
    scope: 'Curriculum adoption for schools, teacher preparation, and assistance with student application files for universities in the US and other countries.',
  },
];

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorTitle: string;
  type: 'free' | 'paid';
  price: number;
  originalPrice?: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  studentsCount: number;
  image: string;
  category: string;
  description: string;
  syllabus: string[];
  features: string[];
  status?: string;
  schedule?: string;
  deliveryFormat?: string;
}

export const SIT_COURSES: Course[] = [
  {
    id: 'course-teacher-training',
    title: 'Teacher Training: Integrated Curriculum & Pedagogy',
    instructor: 'SIT Curriculum & Teacher Development Team',
    instructorTitle: 'Spectrum EduCare Academic Specialists',
    type: 'paid',
    price: 65,
    originalPrice: 90,
    duration: '4-6 Weeks',
    level: 'Intermediate',
    rating: 4.95,
    studentsCount: 380,
    image: webinarTrainingImg,
    category: 'Teacher Training',
    description: 'Our teacher development work focuses on effective use of the integrated curriculum, lesson planning, age-appropriate explanations, pedagogy and classroom practice. Training helps teachers understand both the learning material and how to teach it well.',
    syllabus: [
      'Overview of the SIT Integrated Curriculum Framework',
      'Effective Lesson Planning with the Teacher’s Guide',
      'Making Meaningful Islamic Connections in Regular Academic Lessons',
      'Age-Appropriate Pedagogy and Classroom Management',
      'Classroom Feedback, Assessment, and Continuous Improvement',
    ],
    features: ['Curriculum Lesson Guides', 'Hands-on Lesson Planning Worksheets', 'Classroom Observation Rubrics', 'Certificate of Completion'],
    status: 'Enrolment Open',
    deliveryFormat: 'Blended (In-Person & Online)',
    schedule: 'Bi-weekly Evening Sessions',
  },
  {
    id: 'course-arabic-quranic',
    title: 'Arabic Language & Qur’anic Understanding',
    instructor: 'SIT Department of Language Learning',
    instructorTitle: 'Qur’anic Language & Arabic Faculty',
    type: 'free',
    price: 0,
    duration: '8 Weeks',
    level: 'Beginner',
    rating: 4.9,
    studentsCount: 840,
    image: curriculumResearchImg,
    category: 'Language Programmes',
    description: 'Introducing selected Qur’anic words and language patterns in an accessible, progressive way. Especially valuable for students pursuing Hifz: vocabulary and meaning grow alongside memorisation through repetition and structured explanations.',
    syllabus: [
      'Foundational Arabic Letters, Sounds and Writing',
      'High-Frequency Qur’anic Vocabulary & Word Patterns',
      'Accessible Grammar Rules in Real Qur’anic Context',
      'Sentence Structure and Meaning Recognition',
      'Connecting Daily Recitation with Active Understanding',
    ],
    features: ['Qur’anic Vocabulary Compendiums', 'Hifz Companion Exercises', 'Structured Self-Paced Quizzes', 'Certificate of Participation'],
    status: 'Register Interest',
    deliveryFormat: 'Online Interactive',
    schedule: 'Weekly Live Cohorts',
  },
  {
    id: 'course-english-communication',
    title: 'English Language & Academic Communication',
    instructor: 'SIT Language Faculty',
    instructorTitle: 'Spectrum EduCare Language Unit',
    type: 'paid',
    price: 45,
    originalPrice: 60,
    duration: '6 Weeks',
    level: 'Beginner',
    rating: 4.88,
    studentsCount: 520,
    image: heroConferenceImg,
    category: 'Language Programmes',
    description: 'Comprehensive English language learning designed to serve learners from foundational communication to more focused academic reading, writing, and presentation skills.',
    syllabus: [
      'Foundational Phonics, Grammar & Sentence Building',
      'Academic Reading Comprehension & Vocabulary Expansion',
      'Clear Written Communication: Paragraphs and Essays',
      'Spoken Fluency, Pronunciation & Confidence in Discussion',
      'Effective Presentation and Discourse Skills',
    ],
    features: ['Audio-Visual Pronunciation Guides', 'Interactive Speaking Breakouts', 'Writing Portfolio Reviews', 'Verified Level Certificate'],
    status: 'Enrolment Open',
    deliveryFormat: 'Hybrid Format',
    schedule: 'Weekend Sessions',
  },
  {
    id: 'course-it-webdev',
    title: 'IT & Digital Skills: Web Development & Practical Tech',
    instructor: 'SIT IT and Technology Unit',
    instructorTitle: 'Digital Skills & Technology Specialists',
    type: 'paid',
    price: 85,
    originalPrice: 120,
    duration: '8 Weeks',
    level: 'Intermediate',
    rating: 4.85,
    studentsCount: 310,
    image: curriculumResearchImg,
    category: 'IT and Digital Skills',
    description: 'Helping learners gain practical capabilities in web development and foundational IT fields. Combines clear learning goals with hands-on opportunities to build real-world digital solutions.',
    syllabus: [
      'Foundations of Web Technologies (HTML, CSS & Modern Standards)',
      'Core Programming Logic & JavaScript Interactivity',
      'Responsive Web Layouts and User Interface Principles',
      'Working with Modern Digital Tools & Project Repositories',
      'Building and Deploying a Functional Web Application',
    ],
    features: ['Project-Based Practical Learning', 'Hands-on Code Reviews', 'Dedicated Mentorship Hours', 'Capstone Project Portfolio'],
    status: 'Register Interest',
    deliveryFormat: 'Online Hands-on Lab',
    schedule: 'Flexible Evening Schedule',
  },
  {
    id: 'course-multilingual-studies',
    title: 'Language Programmes: Spanish, Japanese & German',
    instructor: 'SIT International Language Faculty',
    instructorTitle: 'Department of Modern Languages',
    type: 'free',
    price: 0,
    duration: '8 Weeks',
    level: 'Beginner',
    rating: 4.82,
    studentsCount: 640,
    image: publicationBookImg,
    category: 'Language Programmes',
    description: 'Developing language learning opportunities in Spanish, Japanese and German. Serving different levels and purposes, from foundational communication to structured language study.',
    syllabus: [
      'Phonetics, Alphabets and Basic Pronunciation Systems',
      'Everyday Vocabulary & Practical Greetings',
      'Essential Sentence Formation & Grammatical Basics',
      'Listening Comprehension and Cultural Nuances',
      'Interactive Dialogue and Conversation Practice',
    ],
    features: ['Structured Audio Lessons', 'Interactive Dialogue Worksheets', 'Beginner Vocabulary Packs', 'Certificate of Completion'],
    status: 'Register Interest',
    deliveryFormat: 'Online Interactive',
    schedule: 'Weekly Modules',
  },
  {
    id: 'course-school-curriculum-adoption',
    title: 'Professional Development: Integrated Curriculum Implementation',
    instructor: 'SIT Curriculum Development Directorate',
    instructorTitle: 'School Adoption & Implementation Advisory',
    type: 'free',
    price: 0,
    duration: '4 Weeks',
    level: 'Advanced',
    rating: 4.96,
    studentsCount: 290,
    image: webinarTrainingImg,
    category: 'Professional Development',
    description: 'Designed for headmasters, academic coordinators, and teachers preparing to introduce the SIT integrated curriculum into their schools, grades, and academic timetables.',
    syllabus: [
      'Assessing School Readiness for Integrated Education',
      'Aligning Academic Subjects with Islamic Values Purposefully',
      'Structuring Al Qur’an, Qur’anic Language and Islamic Studies in the Timetable',
      'Insights and Case Studies from Spectrum International School',
      'Teacher Support, Classroom Observations, and Long-Term Review',
    ],
    features: ['Implementation Readiness Checklist', 'Sample Weekly Timetable Models', 'Direct Consultation with SIT Developers', 'Adoption Guidance Dossier'],
    status: 'Register Interest',
    deliveryFormat: 'Executive Hybrid Seminar',
    schedule: 'Cohort-based Sessions',
  },
];

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  category: string;
  description: string;
  keynoteSpeaker: string;
  speakerRole: string;
  image: string;
  recordingUrl?: string;
  recapNotes?: string[];
}

export const SIT_EVENTS: EventItem[] = [
  {
    id: 'event-curriculum-adoption-orientation',
    title: 'Integrated Curriculum Adoption & Orientation for School Leaders',
    date: 'November 18, 2026',
    time: '10:00 AM - 01:00 PM (GMT+6)',
    location: 'SIT Academic Centre & Hybrid Online Stream',
    type: 'upcoming',
    category: 'School Adoption',
    description: 'An orientation briefing for school administrators, principals, and coordinators on introducing SIT’s integrated curriculum, grade coverage, teacher preparation, and practical implementation.',
    keynoteSpeaker: 'SIT Curriculum Development Directorate',
    speakerRole: 'Spectrum EduCare Limited',
    image: heroConferenceImg,
  },
  {
    id: 'event-teacher-pedagogy-workshop',
    title: 'Teacher Training Workshop: Lesson Connections & Classroom Pedagogy',
    date: 'December 05, 2026',
    time: '02:00 PM - 05:30 PM (GMT+6)',
    location: 'Spectrum EduCare Training Hall & Online Webinar',
    type: 'upcoming',
    category: 'Teacher Training',
    description: 'Hands-on training session helping educators recognise suitable Islamic connections in regular academic topics, using the SIT Teacher’s Guide to foster reflection without altering academic objectives.',
    keynoteSpeaker: 'SIT Teacher Training Specialists',
    speakerRole: 'Academic Pedagogy Division',
    image: webinarTrainingImg,
  },
  {
    id: 'event-little-lights-screening',
    title: 'Little Lights: Character Education & Hadith Through Animation',
    date: 'January 14, 2027',
    time: '03:30 PM - 05:30 PM (GMT+6)',
    location: 'Virtual Broadcast & Media Webinar',
    type: 'upcoming',
    category: 'Learning Media',
    description: 'Demonstrating how Little Lights animated stories explore authentic Hadith, good actions, and awareness themes in familiar situations, complementing classroom discussion and family learning.',
    keynoteSpeaker: 'SIT Media & Communication Team',
    speakerRole: 'Children’s Media Developers',
    image: publicationBookImg,
  },
  {
    id: 'event-spectrum-implementation-review',
    title: 'Classroom Implementation & Review Session at Spectrum International School',
    date: 'September 12, 2025',
    time: '09:30 AM - 03:00 PM',
    location: 'Spectrum International School Campus, Dhaka',
    type: 'past',
    category: 'Classroom Review',
    description: 'Reviewing classroom experience, student reception, and teacher feedback under the ongoing implementation of the SIT integrated curriculum at Spectrum International School.',
    keynoteSpeaker: 'Spectrum International School Faculty & SIT Team',
    speakerRole: 'Implementing Educators & Curriculum Specialists',
    image: curriculumResearchImg,
    recordingUrl: '#',
    recapNotes: [
      'Assessed learning outcomes across Islamic Studies, Al Qur’an, and academic subjects.',
      'Gathered teacher feedback on lesson planning and connections in elementary classrooms.',
      'Incorporated practical classroom feedback into the third edition of the Islamic Studies series.',
      'Reviewed early student engagement with Qur’anic vocabulary and language materials.',
    ],
  },
  {
    id: 'event-curriculum-foundations-session',
    title: 'Institutional Overview: One Learning Journey Connected by Purpose',
    date: 'May 15, 2025',
    time: '10:00 AM - 02:30 PM',
    location: 'Spectrum EduCare Academic Hall',
    type: 'past',
    category: 'Curriculum Development',
    description: 'An institutional assembly outlining the SIT philosophy: bringing Islamic learning together with contemporary education, designing for teachers, and improving through practical use.',
    keynoteSpeaker: 'SIT Academic Research & Publication Council',
    speakerRole: 'Spectrum EduCare Limited',
    image: heroConferenceImg,
    recordingUrl: '#',
    recapNotes: [
      'Presented the 8 areas of SIT institutional scope and services.',
      'Formulated development roadmaps for the Qur’anic Language book and O Level Islamic Studies book.',
      'Established working groups for teacher development and school adoption support.',
    ],
  },
];

export interface PublicationItem {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  year: number | string;
  category: 'Textbook' | 'Monograph' | 'Curriculum' | 'Research Journal';
  pages: number;
  isbn: string;
  description: string;
  image: string;
  price: number;
  featured?: boolean;
  statusBadge?: string;
}

export const SIT_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-islamic-studies-series',
    title: 'Islamic Studies Series (Books 1–7)',
    subtitle: 'Progressive Islamic Studies Content Across School Levels',
    author: 'School of Integrated Thoughts',
    year: 'Existing Series',
    category: 'Textbook',
    pages: 180,
    isbn: 'Third edition in development',
    description: 'SIT’s Islamic Studies resources cover belief, worship, character, the life of Prophet Muhammad ﷺ, Hadith, Islamic history and the contributions of notable Muslims. Content is organised for different stages of learning and refined through updated editions.',
    image: pubIslamicStudiesImg,
    price: 15.0,
    featured: true,
    statusBadge: 'Existing Series (3rd Edition in Dev)',
  },
  {
    id: 'pub-elementary-books',
    title: 'Elementary Books (Books 1–3)',
    subtitle: 'Foundational Content for Younger Learners',
    author: 'School of Integrated Thoughts',
    year: 'Existing Resource Family',
    category: 'Curriculum',
    pages: 96,
    isbn: 'Available for Schools',
    description: 'Introduces foundational literacy, alphabet writing, good habits, Islamic manners, and age-appropriate learning from the Qur’an for early learners starting from the Playgroup years.',
    image: pubElementaryBooksImg,
    price: 10.0,
    featured: true,
    statusBadge: 'Existing Resource Family',
  },
  {
    id: 'pub-quranic-language',
    title: 'Qur’anic Language Book',
    subtitle: 'Early, Accessible Learning of Qur’anic Words and Language',
    author: 'SIT Curriculum Development Team',
    year: 'In Development',
    category: 'Curriculum',
    pages: 130,
    isbn: 'In Development',
    description: 'Introduces selected words and language patterns in an accessible, progressive way. Especially valuable for students pursuing Hifz: vocabulary and meaning grow alongside memorisation through repetition and explanations suited to age.',
    image: pubQuranicLanguageImg,
    price: 12.0,
    featured: true,
    statusBadge: 'In Development',
  },
  {
    id: 'pub-islamic-studies-olevel',
    title: 'Islamic Studies for O Level',
    subtitle: 'A Dedicated Islamic Studies Book for O Level Students',
    author: 'SIT Academic Research Board',
    year: 'In Development',
    category: 'Textbook',
    pages: 240,
    isbn: 'In Development',
    description: 'Age-appropriate provision for O Level students, covering belief, worship, Hadith, Seerah, Islamic history, and contemporary reflective thinking needed for secondary school students.',
    image: pubOLevelImg,
    price: 18.0,
    featured: false,
    statusBadge: 'In Development',
  },
  {
    id: 'pub-teachers-guide',
    title: 'Teacher’s Guide: Connecting Academic Lessons with Islamic Values',
    subtitle: 'Lesson-Level Links and Instructional Guidance for Teachers',
    author: 'SIT Curriculum Development Directorate',
    year: 'In Development',
    category: 'Monograph',
    pages: 160,
    isbn: 'In Development',
    description: 'Helps teachers recognise suitable Islamic connections in regular academic topics. For example, connecting the number one to Allah is One while preserving the primary mathematics learning objective. Supports sound teacher judgment without forced connections.',
    image: pubTeachersGuideImg,
    price: 14.0,
    featured: true,
    statusBadge: 'In Development',
  },
  {
    id: 'pub-little-lights-companion',
    title: 'Little Lights: Story & Activity Companion',
    subtitle: 'Lessons from Authentic Hadith, Good Actions & Everyday Awareness',
    author: 'SIT Media & Communication Team',
    year: 'Learning Media Companion',
    category: 'Research Journal',
    pages: 72,
    isbn: 'Supports Animated Series',
    description: 'Complements Little Lights, SIT’s animated learning series for children. Familiar everyday stories and guided discussions help teachers and families talk about what a lesson means and how children can put it into practice.',
    image: pubLittleLightsImg,
    price: 8.0,
    featured: false,
    statusBadge: 'Media Companion',
  },
];
