import type { Project } from '../types';

export const projectsData: Project[] = [
    {
        slug: 'mi-proyecto-1',
        title: 'Sistema de Gestión',
        shortDescription: 'Una breve descripción para la tarjeta.',
        fullDescription: 'Aquí va todo el detalle técnico de lo que hiciste...',
        coverImage: '/path/to/image.jpg',
        images: ['/img1.jpg', '/img2.jpg'],
        techStack: ['React', 'TypeScript']
    }
];