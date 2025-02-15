import { object, string } from 'zod'

export const LoginSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const SignUpSchema = object({
  name: string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .max(32, 'Name must be less than 32 characters'),
  username: string({ required_error: 'Username is required' }),
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const NewPasswordSchema = object({
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
})

export const ResetSchema = object({
  email: string().min(1, 'Email is required').email('Invalid email address'),
})
