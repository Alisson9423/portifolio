import { ModalProps } from "./types";
import { Container } from "./styles";

export function Modal(props: ModalProps) {
    const { component: Component, active, ...rest } = props;

    return (
        <Container active={active}>
            <div className="container-body">
                <Component {...rest} />
            </div>
        </Container>
    );
}
