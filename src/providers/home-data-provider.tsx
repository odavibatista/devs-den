'use client'

import getHomeData, { IHomeData } from "@/api/routes/user/getHomeData";
import { ReactNode, createContext, useContext, useLayoutEffect, useState } from "react"


interface HomeContextData {
    homeData: IHomeData | null
    isHomeDataLoading: boolean
}

export const HomeContext = createContext<HomeContextData>({} as HomeContextData)

export const HomeProvider = ({ children }: { children: ReactNode }) => {
    const [homeData, setHomeData] = useState<IHomeData | null>(null)
    const [isHomeDataLoading, setIsHomeDataLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);

    useLayoutEffect(() => {
        (async () => {
            setToken(sessionStorage.getItem("session"))

            try {
                if (token) {
                    if (!token) return
                    const response = await getHomeData(token);
    
                    if ("statusCode" in response) {
                        return;
                    }   else    {
                        setHomeData(response);
                        setIsHomeDataLoading(false);
                        return
                    }
                    
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [token]);

    return (
        <HomeContext.Provider value={{
            homeData,
            isHomeDataLoading,
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHome = () => {
    const context = useContext(HomeContext)

    if (Object.keys(context).length <= 0) {
        throw new Error(
            'O hook useHome só pode ser usado em componentes abaixo do HomeProvider.'
        )
    }

    return context
}