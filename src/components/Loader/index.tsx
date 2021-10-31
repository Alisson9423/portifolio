import Lottie from "react-lottie";
import { loadingAnimation } from "../../styles/plugins";

interface LoaderProps {
    item?: number;
    height?: number | string;
    width?: number | string;
}

export function Loader(props: LoaderProps) {
    const { item = 0, width, height } = props;

    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: loadingAnimation[item],
        rendererSettings: {},
    };

    return (
        <Lottie
            options={defaultOptions}
            speed={1}
            height={height}
            width={width}
        ></Lottie>
    );
}
