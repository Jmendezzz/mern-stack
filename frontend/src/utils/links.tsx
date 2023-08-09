
import {IoBarChartSharp} from 'react-icons/io5';
import {MdQueryStats} from 'react-icons/md';
import {FaWpforms} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
    {
        text:'add job',
        parh: '.',
        icon: <FaWpforms/>
    },
    {
        text:'all jobs',
        parh: 'all-jobs',
        icon: <MdQueryStats/>
    },
    {
        text:'stats',
        parh: 'stats',
        icon: <IoBarChartSharp/>
    },
    {
        text:'profile',
        parh: 'profile',
        icon: <ImProfile/>
    },
    {
        text:'admin',
        parh: 'admin',
        icon: <MdAdminPanelSettings/>
    }

]