import Slider from 'react-slick';
import Box from '@mui/material/Box'

import ProjectGrid1 from '../../assets/project/project-grid-01.jpg';
import ProjectGrid2 from '../../assets/project/project-grid-02.jpg';
import ProjectGrid3 from '../../assets/project/project-grid-03.jpg';
import ProjectGrid4 from '../../assets/project/project-grid-04.jpg';
import ProjectGrid5 from '../../assets/project/project-grid-05.jpg';
import ProjectGrid6 from '../../assets/project/project-grid-06.jpg';

import SeedProjectCard from '../project-card'

var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
};

export default function SeedProjectCarousel() {
	return (
        <Box sx={{ backgroundColor: '#001d23', p: 5 }}>
            <Slider
                {...sliderSettings}
            >
                <SeedProjectCard
                    image={ProjectGrid1}
                    alt='Project Grid 1'
                    title='Яаралтай Тусламжийн Тасгийнхан МУОАК'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
                <SeedProjectCard
                    image={ProjectGrid2}
                    alt='Project Grid 2'
                    title='Big Life Lil Thug E ft (Desant, Fla, Ginjin ...)'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
                <SeedProjectCard
                    image={ProjectGrid3}
                    alt='Project Grid 3'
                    title='Халуун Маруужин цомог B Production'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
                <SeedProjectCard
                    image={ProjectGrid4}
                    alt='Project Grid 4'
                    title='LMAO'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
                <SeedProjectCard
                    image={ProjectGrid5}
                    alt='Project Grid 5'
                    title='Маш Нууц III: No Country For Old Men'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
                <SeedProjectCard
                    image={ProjectGrid6}
                    alt='Project Grid 6'
                    title='Ганц Бие Бүсгүйчүүд IV: Төгсгөл ба Эхлэл'
                    authorLink='http://seed.mn/'
                    author='EKU'
                    href='http://seed.mn/'
                />
            </Slider>
        </Box>
	)
}