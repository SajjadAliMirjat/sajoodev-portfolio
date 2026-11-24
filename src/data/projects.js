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
  title: 'Shopora - E-commerce Platform',
  description: 'A modern e-commerce application featuring product search, category filters, sorting, product details, wishlist, cart management and responsive design.',
  image: '/images/projects/Shopora.png',
  technologies: [
    'React',
    'React Router',
    'Context API',
    'useReducer',
    'Tailwind CSS',
    'DummyJSON API'
  ],
  category: 'E-commerce',
  liveUrl: 'https://shopora-gamma.vercel.app/shop',
  githubUrl: 'https://github.com/SajjadAliMirjat/shopora',
  featured: true,
  sample: false,
},
  
{
  id: 3,
  title: 'Expense Management App',
  description: 'A responsive expense management application to track income and expenses, manage transactions, filter records by category, and view monthly financial summaries.',
  image: '/images/projects/expense-manager.png',
  technologies: ['React', 'Tailwind CSS', 'Context API', 'localStorage'],
  category: 'Web App',
  liveUrl: 'https://expense-management-app-gray-omega.vercel.app',
  githubUrl: 'https://github.com/SajjadAliMirjat/expense-management-app',
  featured: true,
  sample: true,
},

]
export default projects
