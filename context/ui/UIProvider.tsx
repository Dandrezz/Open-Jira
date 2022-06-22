import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

interface Props {
    children?: React.ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    return (
        <UIContext.Provider value={{
            sidemenuOpen: false
        }}>
            {children}
        </UIContext.Provider>
    )
}


