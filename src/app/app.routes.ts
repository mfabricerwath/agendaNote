import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { User } from './components/user/user';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';

export const routes: Routes = [
    {
        path:'',
        component:Admin
    },
    {
        path:'admin',
        component:Admin
    },
    {
        path:'control-flow-statement',
        component:ControlFlow
    },
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'signal-ex',
        component:SignalEx
    },
    {
        path:'user',
        component:User
    },
    {
        path:'att-directive',
        component:AttDirective
    },
    {
        path:'get-api',
        component:GetApi
    },
];
