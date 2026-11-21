// ADD, EDIT OR REMOVE PROJECTS HERE. No other file needs to change.
// "sample: true" shows a "Sample entry" badge; delete that line for real projects.
// Leave liveUrl / githubUrl empty ("") and the button is shown as unavailable.
const projects = [
  {
    id: 2,
    title: 'TaskFlow Dashboard',
    description: 'A modern task management dashboard with project analytics, task tracking and a responsive UI.',
    image: '/images/projects/taskflow.png',
    technologies: ['React', 'Tailwind CSS', 'Context API', 'Recharts'],
    category: 'Dashboard',
    liveUrl: 'https://taskflow-dashboard-virid.vercel.app/',
    githubUrl: 'https://github.com/SajjadAliMirjat/taskflow-dashboard',
    featured: true,
    sample: true,
  },
  {
    id: 2,
    title: 'E-commerce Application',
    description: 'A product catalog with search, cart management and a responsive checkout flow.',
    image: '/images/projects/ecommerce-app.png',
    technologies: ['React', 'React Router', 'useReducer'],
    category: 'E-commerce',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    sample: true,
  },
  {
    id: 3,
    title: 'Expense Management App',
    description: 'Track income and expenses with category filters and a clear monthly summary.',
    image: '/images/projects/expense-manager.png',
    technologies: ['React', 'Tailwind CSS', 'localStorage'],
    category: 'Web App',
    liveUrl: '',
    githubUrl: '',
    featured: false,
    sample: true,
  },
]
export default projects
