"use client";

import Link from "next/link";

import { Search } from "lucide-react";

import { MemoryPerson } from "@/lib/api";

import ConversationCard from "../conversationcard";

export default function Sidebar({
    people,
}:{
    people:MemoryPerson[]
}){

    return(

        <aside className="flex w-[360px] flex-col border-r border-stone-200 bg-white">

            <div className="border-b border-stone-200 p-6">

                <div className="flex items-center justify-between">

                    <div>

                        <h1 className="text-2xl font-bold">

                            EverAfter

                        </h1>

                        <p className="text-sm text-stone-500">

                            Memory Companions

                        </p>

                    </div>

                    <Link
                        href="/companions/new"
                        className="rounded-lg bg-black px-3 py-2 text-sm text-white"
                    >
                        New
                    </Link>

                </div>

            </div>

            <div className="p-4">

                <div className="flex items-center rounded-xl bg-stone-100 px-4 py-3">

                    <Search
                        size={18}
                        className="text-stone-500"
                    />

                    <input

                        placeholder="Search companions"

                        className="ml-3 w-full bg-transparent outline-none"

                    />

                </div>

            </div>

            <div className="flex-1 overflow-y-auto px-2">

                {people.map(person=>(

                    <ConversationCard

                        key={person.id}

                        person={person}

                    />

                ))}

            </div>

        </aside>

    )

}