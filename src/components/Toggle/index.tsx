import { Text, Box } from "alisson-application";
import { ToggleProps } from "./types";
import { Container } from "./styles";

export interface ChangeYesOrNoProps {
    active: boolean;
}

export const ChangeYesOrNo = (props: ChangeYesOrNoProps) => {
    const { active } = props;
    return active ? (
        <Text pl="8px" bold={true}>
            Sim
        </Text>
    ) : (
        <Text pl="8px" bold={true}>
            Não
        </Text>
    );
};

export function Toggle(props: ToggleProps) {
    const { active, onClick, titulo } = props;

    return (
        <Container>
            <div
                className={`${active === true ? "active" : ""} toggle`}
                onClick={onClick}
            >
                <span></span>
            </div>

            {titulo ? (
                <Box ml="20px">
                    <Text fontWeight="600">{titulo}</Text>
                </Box>
            ) : (
                <ChangeYesOrNo active={active} />
            )}
        </Container>
    );
}
