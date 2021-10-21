import { ModalProps } from "./types";
import { Container } from "./styles";

export function Modal(props: ModalProps) {
    const { component: Component, active } = props;

    return (
        <Container active={active}>
            <div className="container-body">
                <Component />
            </div>
        </Container>
    );
}
