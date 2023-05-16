import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return (<ThreeDots
        height="85"
        width="85"
        radius="8"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
    />

    );
};