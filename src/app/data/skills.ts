import { SkillGroup } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'backend',
    skills: [
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'Kotlin', icon: '/icons/kotlin.svg' },
      { name: 'C#', icon: '/icons/cs.svg' },
      { name: 'Go', icon: '/icons/go.svg' },
      { name: 'Rust', icon: '/icons/rust.svg' },
      { name: 'Spring', icon: '/icons/spring.svg' },
      { name: '.NET', icon: '/icons/dotnet.svg' },
    ],
  },
  {
    id: 'frontend',
    skills: [
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Angular', icon: '/icons/angular.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'SCSS', icon: '/icons/scss.svg' },
    ],
  },
  {
    id: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: '/icons/postgres.svg' },
      { name: 'SQLite', icon: '/icons/sqlite.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    ],
  },
  {
    id: 'devops',
    skills: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      { name: 'AWS' },
      { name: 'Azure' },
    ],
  },
  {
    id: 'architecture',
    skills: [
      { name: 'Apache Kafka' },
      { name: 'Kafka Streams' },
      { name: 'RabbitMQ' },
      { name: 'OpenAPI / Swagger' },
      { name: 'Event-Driven Microservices' },
    ],
  },
];
