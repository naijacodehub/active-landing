export interface MemberProps {
  name: string;
  role: string;
  linkedin?: string;
  github?: string;
  email?: string;
  skills: string[];
}

export const membersList = [
  {
    name: 'Debasish Sarkar',
    role: 'DevOps engineer',
    skills: ['AWS', 'Docker', 'Terraform', 'Kubernetes', 'Jenkins'],
    linkedin: 'linkedin.com/in/debasish-sarkar-08465388',
    github: '',
    email: 'debasishrocks27@gmail.com',
  },
  {
    name: 'Antaro Hyedima Waha',
    role: 'Senior backend engineer',
    skills: [
      'Node JS',
      'Unit Testing',
      'Server administration',
      'Docker',
      'Redis',
    ],
    linkedin: '',
    github: 'hyedima',
    email: 'hyedimawaha@gmail.com',
  },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
];
