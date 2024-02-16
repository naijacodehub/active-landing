import { z } from 'zod';

export const outsourceProjectFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  telephoneNumber: z
    .string()
    .min(10, 'Telephone number must be at least 10 digits.'),
  email: z.string().email({ message: 'Invalid email address.' }),
  projectName: z.string().min(1, 'Company name is required.'),
  projectBudgetMin: z
    .string()
    .transform((val) => (!val ? 0 : parseFloat(val)))
    .refine(
      (val) => !isNaN(val) && val >= 0,
      'Minimum budget must be a positive number.'
    ),
  projectBudgetMax: z
    .string()
    .transform((val) => (!val ? 0 : parseFloat(val)))
    .refine(
      (val) => !isNaN(val) && val >= 0,
      'Maximum budget must be a positive number.'
    ),
  projectDescription: z.string().min(1, 'Project description is required.'),
  projectDate: z.string().min(1, 'Project date is required.'),
});

export type OutsourceProjectFormData = z.infer<
  typeof outsourceProjectFormSchema
>;

export const defaultOutsourceProjectForm = {
  name: '',
  telephoneNumber: '',
  email: '',
  projectName: '',
  projectBudgetMin: undefined,
  projectBudgetMax: undefined,
  projectDescription: '',
  projectDate: '',
};
