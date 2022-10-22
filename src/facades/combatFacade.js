import apiFacade from "./apiFacade";

const combatFacade = () => {
    const calculatePlayerDamage = async (dmgEvent) => {
        const response = await fetch
        (
            `${process.env.REACT_APP_API_URL}/api/combat`,
            apiFacade.makeOptions("POST", false, dmgEvent)
        );
        const result = apiFacade.handleHttpErrors(response);
        return result;
    }

    return {
        calculatePlayerDamage,
    }
}

const facade = combatFacade();
export default facade;