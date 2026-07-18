import { ReactNode } from "react";

export default function AppShell({
    sidebar,
    children,
}:{
    sidebar:ReactNode;
    children:ReactNode;
}){

    return(

        <div className="flex h-screen">

            {sidebar}

            <section className="flex flex-1 flex-col bg-[#efeae2]">

                {children}

            </section>

        </div>

    )

}