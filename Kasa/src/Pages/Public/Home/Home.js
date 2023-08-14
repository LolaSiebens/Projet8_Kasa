import Banner from '@/Components/Banner/Banner';
import Gallery from '@/Components/Gallery/Gallery';

import bannerImage from "@/Assets/Images/Banneraccueil.png"

const Home = () => {
    return (
        <div className='Home'>
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    );
};

export default Home;