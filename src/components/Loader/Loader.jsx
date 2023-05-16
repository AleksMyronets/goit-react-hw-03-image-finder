import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return (<ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
    />

    );
};