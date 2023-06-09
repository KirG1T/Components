import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
    const handleClick = () => {};
    return (
        <div>
            <div>
                <Button secondary outline rounded className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Click me!!!
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoCloudDownload />
                    But Now
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoDatabase />
                    See Deal
                </Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
};
export default ButtonPage;
