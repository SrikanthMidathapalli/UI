import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'auth/register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    },
    {
        path: 'employees',
        loadComponent: () => import('./employees/employees.component').then(m => m.EmployeesComponent),
    },
    {
        path: 'payroll',
        loadComponent: () => import('./payroll/payroll.component').then(m => m.PayrollComponent),
    },
    {
        path: 'attendance',
        loadComponent: () => import('./attendance/attendance.component').then(m => m.AttendanceComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
];
