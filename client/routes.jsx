import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import MainWrapper from './main/MainWrapper.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: <MainWrapper />
        })
    }
});
