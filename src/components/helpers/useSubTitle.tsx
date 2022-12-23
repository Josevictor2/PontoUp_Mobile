import { Text } from "native-base"

export const useSubTitle = () => {

    const sub0 = () => {
        return (
            <Text textAlign="center" maxW="284px" color="secondary.50" fontFamily="body" fontSize="sm">
                Deseja <Text bold>registrar o ínicio</Text> do expediente?
            </Text>
        )
    }

    const sub1 = () => {
        return (
            <Text textAlign="center" maxW="284px" color="secondary.50" fontFamily="body" fontSize="sm">
                Deseja <Text bold>registrar o ínicio</Text> do intervalo?
            </Text>
        )
    }

    const sub2 = () => {
        return (
            <Text textAlign="center" maxW="284px" color="secondary.50" fontFamily="body" fontSize="sm">
                Deseja <Text bold>registrar o fim</Text> do intervalo?
            </Text>
        )
    }

    const sub3 = () => {
        return (
            <Text textAlign="center" maxW="274px" color="secondary.50" fontFamily="body" fontSize="sm">
                Deseja <Text bold>finalizar o expediente</Text>? Essa ação é irrevessível.
            </Text>
        )
    }
    return {
        sub0,
        sub1,
        sub2,
        sub3
    }
}