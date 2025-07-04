import z from 'zod';

const mailFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    subject: z.string().min(1, 'Subject is required'),  
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),  
});

export default mailFormSchema;