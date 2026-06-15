import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { PROJECTS } from './data/projects';
import ProjectsScreen from './components/ProjectsScreen';
import ProjectView from './components/ProjectView';

function ProjectRoute() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return <Navigate to="/" replace />;
  return <ProjectView key={project.id} project={project} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectsScreen projects={PROJECTS} />} />
      <Route path="/project/:id" element={<ProjectRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
