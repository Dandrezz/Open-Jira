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

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type:'UI - Open Sidebar' })
    }

    const closeSideMenu = () => {
        dispatch({ type:'UI - Close Sidebar' })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}


